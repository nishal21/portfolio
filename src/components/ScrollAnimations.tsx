"use client";

import { useEffect } from 'react';

// --- Minimal type shims (avoid heavy dependency on full gsap/anime types) ---
interface Killable { kill(): void }
interface ScrollTriggerGlobal { getAll(): Killable[] }
type GSAPStatic = {
	registerPlugin: (...plugins: unknown[]) => void;
	config: (opts: Record<string, unknown>) => void;
	to: (targets: unknown, vars: Record<string, unknown>) => unknown;
	fromTo: (targets: unknown, fromVars: Record<string, unknown>, toVars: Record<string, unknown>) => unknown;
	set: (targets: unknown, vars: Record<string, unknown>) => unknown;
};
type ScrollTriggerType = Record<string, unknown> & {
	refresh: () => void;
	config: (opts: Record<string, unknown>) => void;
	getAll: () => Killable[];
};
interface AnimeAnimateFn {
	(targets: unknown, params: Record<string, unknown>): unknown;
}
interface AnimeStaggerFn {
	(value: number, opts?: Record<string, unknown>): (el: Element, i: number) => number;
}

/**
 * Enhanced ScrollAnimations
 * Visually richer GSAP ScrollTrigger + Anime.js integration.
 * Features: character splitting, layered reveals, parallax, 3D depth, hover micro‑interactions.
 * Performance: lazy init, minimal DOM writes, cleanup of listeners & ScrollTriggers.
 */
export default function ScrollAnimations() {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const cleanupFns: Array<() => void> = [];

		const init = async () => {
			try {
			const [gsapMod, stMod, animeMod] = await Promise.all([
					import('gsap'),
					import('gsap/ScrollTrigger'),
					import('animejs')
				]);
			const { gsap } = gsapMod as { gsap: GSAPStatic };
		const { ScrollTrigger } = (stMod as unknown as { ScrollTrigger: ScrollTriggerType });
			const { animate, stagger } = animeMod as { animate: AnimeAnimateFn; stagger: AnimeStaggerFn };

				gsap.registerPlugin(ScrollTrigger);
				gsap.config({ autoSleep: 80 });
				ScrollTrigger.config({ limitCallbacks: true });

				const $ = (sel: string) => document.querySelector(sel) as HTMLElement | null;
				const $$ = (sel: string) => Array.from(document.querySelectorAll(sel)) as HTMLElement[];

				// Utility: split text into spans (.char) only once
				const splitText = (el: HTMLElement, charClass = 'char') => {
					if (!el || el.dataset.split === '1') return;
					const text = el.textContent || '';
						const frag = document.createDocumentFragment();
					[...text].forEach((ch) => {
						const span = document.createElement('span');
						span.textContent = ch;
						span.className = charClass;
						frag.appendChild(span);
					});
					el.textContent = '';
					el.appendChild(frag);
					el.dataset.split = '1';
				};

				// 1. HERO: layered entrance (title + subtitle) with character pop
				const heroTitle = $('.hero-title');
				if (heroTitle) {
					splitText(heroTitle);
					const chars = heroTitle.querySelectorAll('.char');
					animate(chars, {
						translateY: [40, 0],
						opacity: [0, 1],
						scale: [0.8, 1],
						rotate: [-8, 0],
						delay: stagger(40),
						duration: 850,
						easing: 'easeOutExpo'
					});
				}
				const heroSubtitle = $('.hero-subtitle');
				if (heroSubtitle) {
					splitText(heroSubtitle, 'char sub');
					const chars = heroSubtitle.querySelectorAll('.char');
					animate(chars, {
						translateY: [25, 0],
						opacity: [0, 1],
						delay: stagger(15, { start: 400 }),
						duration: 600,
						easing: 'easeOutQuad'
					});
				}

				// Parallax layers (add data-parallax-depth="value")
				$$('[data-parallax-depth]').forEach(layer => {
					const depth = parseFloat(layer.dataset.parallaxDepth || '0.2');
					gsap.to(layer, {
						yPercent: depth * -30,
						ease: 'none',
						scrollTrigger: {
							trigger: layer,
							start: 'top bottom',
							end: 'bottom top',
							scrub: true
						}
					});
				});

				// 2. Section titles fancy mask reveal (.section-title)
				$$('.section-title').forEach(title => {
					splitText(title);
					const chars = title.querySelectorAll('.char');
					gsap.set(chars, { opacity: 0, yPercent: 120 });
					gsap.to(chars, {
						opacity: 1,
						yPercent: 0,
						stagger: 0.035,
						duration: 0.6,
						ease: 'back.out(1.6)',
						scrollTrigger: {
							trigger: title,
							start: 'top 80%'
						},
						onStart: () => {
							// Accent underline grow (optional .title-underline sibling)
							const underline = title.nextElementSibling as HTMLElement | null;
							if (underline && underline.classList.contains('title-underline')) {
								gsap.fromTo(underline, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 0.5, ease: 'power2.out' });
							}
						}
					});
				});

				// 3. Projects: depth + hover micro‑interaction
				const projectCards = $$('.project-card');
				if (projectCards.length) {
					gsap.fromTo(projectCards,
						{ opacity: 0, y: 70, rotateX: 15, scale: 0.9 },
						{
							opacity: 1,
							y: 0,
							rotateX: 0,
							scale: 1,
							duration: 0.9,
							ease: 'power3.out',
							stagger: 0.1,
							scrollTrigger: { trigger: '.projects-section', start: 'top 75%' },
							onComplete: () => {
								projectCards.forEach(card => {
									const enter = () => animate(card, { scale: 1.03, translateY: -6, duration: 350, easing: 'easeOutQuad' });
									const leave = () => animate(card, { scale: 1, translateY: 0, duration: 350, easing: 'easeOutQuad' });
									card.addEventListener('mouseenter', enter);
									card.addEventListener('mouseleave', leave);
									cleanupFns.push(() => {
										card.removeEventListener('mouseenter', enter);
										card.removeEventListener('mouseleave', leave);
									});
								});
							}
						}
					);
				}

				// 4. Video cards pop-in (+ subtle scale scrub effect)
				const videoCards = $$('.video-card');
				if (videoCards.length) {
					gsap.fromTo(videoCards,
						{ opacity: 0, y: 60, scale: 0.85 },
						{
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 0.7,
							stagger: 0.12,
							ease: 'power2.out',
							scrollTrigger: { trigger: '.video-gallery', start: 'top 78%' }
						}
					);
					// Scroll scrub scale pulse (minimal cost)
					gsap.to(videoCards, {
						scale: 1.015,
						ease: 'none',
						scrollTrigger: {
							trigger: '.video-gallery',
							start: 'top bottom',
							end: 'bottom top',
							scrub: 1
						}
					});
				}

				// 5. Contact section progressive reveal
				const contactEls = $$('.contact-element');
				if (contactEls.length) {
					contactEls.forEach((el, i) => {
						gsap.fromTo(el, { opacity: 0, x: i % 2 ? 80 : -80, rotateY: i % 2 ? 8 : -8 }, {
							opacity: 1,
							x: 0,
							rotateY: 0,
							duration: 0.8,
							ease: 'power3.out',
							scrollTrigger: { trigger: el, start: 'top 85%' }
						});
					});
				}

				// 6. Scroll progress bar (.scroll-progress)
				if ($('.scroll-progress')) {
					gsap.fromTo('.scroll-progress', { scaleX: 0 }, {
						scaleX: 1,
						ease: 'none',
						transformOrigin: 'left center',
						scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
					});
				}

				// 7. Dynamic background hue shift via CSS variable (--scrollHue)
				const updateHue = () => {
					const sc = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
					document.documentElement.style.setProperty('--scrollHue', (sc * 360).toFixed(0));
				};
				updateHue();
				window.addEventListener('scroll', updateHue, { passive: true });
				cleanupFns.push(() => window.removeEventListener('scroll', updateHue));

				// 8. Light parallax for any element with data-float
				const floaters = $$('[data-float]');
				if (floaters.length) {
					floaters.forEach(f => {
						animate(f, {
							translateY: [0, -12, 0],
							duration: 6000,
							loop: true,
							easing: 'easeInOutSine'
						});
					});
				}

				ScrollTrigger.refresh();
				console.log('[ScrollAnimations] Enhanced effects loaded');
			} catch (e) {
				console.error('[ScrollAnimations] Init failed', e);
			}
		};

		const t = window.setTimeout(init, 50);
		cleanupFns.push(() => window.clearTimeout(t));

		return () => {
			cleanupFns.forEach(fn => fn());
					try {
						const st = (window as unknown as { ScrollTrigger?: ScrollTriggerGlobal }).ScrollTrigger;
						if (st) st.getAll().forEach(tr => tr.kill());
			} catch { /* noop */ }
		};
	}, []);

	return null;
}

