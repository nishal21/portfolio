'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Split text into individual characters for animation
  useEffect(() => {
    // Ensure text is visible first, then apply animations
    const textElements = document.querySelectorAll('.split-text');
    
    // Make text visible immediately as fallback
    textElements.forEach(el => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '1';
    });

    // Load anime.js dynamically to avoid SSR issues
    const loadAnime = async () => {
      try {
        const { animate, stagger } = await import('animejs');
        
        // Split text into characters for advanced animation
        textElements.forEach(el => {
          const text = el.textContent || '';
          const isNishal = el.textContent?.includes('Nishal');
          const color = isNishal ? '#facc15' : 'currentColor';
          el.innerHTML = text.split('').map(char => 
            `<span class="char" style="display: inline-block; opacity: 1; transform: translateY(0px); color: ${color};">${char === ' ' ? '&nbsp;' : char}</span>`
          ).join('');
        });

        // Advanced morphing background shapes
        animate('.floating-element', {
          scale: [1, 1.4, 0.8, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ['50%', '20%', '80%', '30%', '50%'],
          duration: 15000,
          loop: true,
          ease: 'in-out-quad',
          delay: stagger(2000),
        });

        // Particle system with complex movements
        animate('.particle', {
          translateX: function() { 
            return [
              Math.random() * 400 - 200, 
              Math.random() * 600 - 300,
              Math.random() * 400 - 200
            ];
          },
          translateY: function() {
            return [
              Math.random() * 400 - 200,
              Math.random() * 600 - 300, 
              Math.random() * 400 - 200
            ];
          },
          scale: [0.5, 2, 1.5, 0.8, 1.2],
          opacity: [0.2, 1, 0.5, 0.8, 0.3],
          rotate: [0, 180, 90, 270, 360],
          duration: function() { return Math.random() * 4000 + 6000; },
          delay: stagger(200),
          loop: true,
          ease: 'in-out-sine',
        });

        // Grid pattern morphing animation
        animate('.grid-overlay', {
          opacity: [0.1, 0.3, 0.15, 0.25],
          scale: [1, 1.02, 0.98, 1.01, 1],
          duration: 8000,
          loop: true,
          ease: 'in-out-quad',
        });

        // Create sequential entrance animations
        
        // Character entrance with wave effect
        animate('.hero-text .char', {
          translateY: [100, 0],
          opacity: [0, 1],
          scale: [0.3, 1],
          rotate: function() { return Math.random() * 30 - 15; },
          delay: stagger(80, {from: 'center', grid: [1, 10]}),
          duration: 1200,
          easing: 'easeOutElastic(1, .6)'
        });

        // Kerala badge entrance
        setTimeout(() => {
          animate('.kerala-badge', {
            scale: [0, 1],
            opacity: [0, 1],
            rotate: [180, 0],
            duration: 800,
            easing: 'easeOutBack'
          });
        }, 1000);

        // Tagline reveal with typewriter effect
        setTimeout(() => {
          animate('.hero-subtitle', {
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: 'easeOutExpo'
          });
        }, 600);

        // Role tags staggered entrance
        setTimeout(() => {
          animate('.role-tag', {
            scale: [0, 1],
            opacity: [0, 1],
            translateY: [30, 0],
            rotate: [15, 0],
            delay: stagger(150, {from: 'center'}),
            duration: 600,
            easing: 'easeOutBack'
          });
        }, 400);

        // CTA buttons with bounce
        setTimeout(() => {
          animate('.hero-cta button', {
            scale: [0, 1],
            opacity: [0, 1],
            translateY: [40, 0],
            delay: stagger(200),
            duration: 800,
            easing: 'easeOutElastic(1, .8)'
          });
        }, 200);

        // Side decorative elements
        setTimeout(() => {
          animate('.side-decoration', {
            scaleY: [0, 1],
            opacity: [0, 1],
            delay: stagger(300),
            duration: 1000,
            easing: 'easeOutExpo'
          });
        }, 600);

        // Scroll indicator with breathing effect
        animate('.scroll-indicator', {
          translateY: [0, 15, 0],
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
          duration: 3000,
          loop: true,
          ease: 'in-out-sine',
        });

        // Advanced hover animations for interactive elements
        const setupHoverAnimations = () => {
          // Kerala badge hover
          const keralaBadge = document.querySelector('.kerala-badge');
          if (keralaBadge) {
            keralaBadge.addEventListener('mouseenter', () => {
              animate(keralaBadge, {
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                duration: 300,
                ease: 'out-quad',
              });
            });
            keralaBadge.addEventListener('mouseleave', () => {
              animate(keralaBadge, {
                scale: 1,
                rotate: 0,
                duration: 300,
                ease: 'out-quad',
              });
            });
          }

          // Role tags hover with ripple effect
          document.querySelectorAll('.role-tag').forEach(tag => {
            tag.addEventListener('mouseenter', () => {
              animate(tag, {
                scale: 1.15,
                rotate: [0, 3, -3, 0],
                duration: 400,
                ease: 'out-elastic(1, 0.6)',
              });
            });
            tag.addEventListener('mouseleave', () => {
              animate(tag, {
                scale: 1,
                rotate: 0,
                duration: 300,
                ease: 'out-quad',
              });
            });
          });

          // CTA buttons with magnetic effect
          document.querySelectorAll('.cta-button').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
              animate(btn, {
                scale: 1.08,
                translateY: -5,
                duration: 300,
                ease: 'out-quad',
              });
            });
            btn.addEventListener('mouseleave', () => {
              animate(btn, {
                scale: 1,
                translateY: 0,
                duration: 300,
                ease: 'out-quad',
              });
            });
          });
        };

        // Setup hover animations after DOM is ready
        setTimeout(setupHoverAnimations, 100);

        // Continuous ambient animations
        setInterval(() => {
          // Random particle burst
          const randomParticles = document.querySelectorAll('.particle');
          const randomSelection = Array.from(randomParticles).slice(0, Math.random() * 5 + 2);
          
          animate(randomSelection, {
            scale: [1, 3, 1],
            opacity: [0.3, 1, 0.3],
            duration: 1000,
            ease: 'out-quad',
          });
        }, 3000);

      } catch (error) {
        console.error('Anime.js failed to load, showing text without animation:', error);
        // Fallback: ensure text is visible if anime.js fails
        textElements.forEach(el => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.opacity = '1';
        });
      }
    };

    loadAnime().catch(console.error);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="hero-section relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 parallax-bg">
        <div className="hero-bg absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-green-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="hero-bg absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="hero-bg absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl floating-element"></div>
        
        {/* Additional morphing shapes */}
        <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full blur-2xl floating-element"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl floating-element"></div>
        
        {/* Animated Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Additional glowing orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="particle absolute w-4 h-4 bg-yellow-400/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-overlay absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      {/* Main Content */}
      <div ref={textRef} className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Kerala Badge */}
        <motion.div
          className="kerala-badge hero-text inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-400 text-sm font-medium">Made in Malappuram, Kerala</span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white split-text opacity-100">I&apos;m</span>
          <span className="block text-yellow-400 split-text opacity-100" style={{color: '#facc15'}}>
            Nishal
          </span>
        </h1>

        {/* Tagline */}
        <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          <span className="text-green-400 font-semibold">17-year-old</span> creator from Kerala crafting <span className="text-yellow-400">AMVs</span>, 
          <span className="text-green-400"> music remixes</span>, 
          <span className="text-cyan-400"> 2D/3D animations</span>, 
          <span className="text-blue-400"> code</span> & planning <span className="text-orange-400">game development</span>
        </p>

        {/* Role Tags */}
        <div className="hero-subtitle flex flex-wrap justify-center gap-4 mb-12">
          {['AMV Editor', 'Music Remix Artist', '2D/3D Animator', 'Full-Stack Developer', 'Future Game Developer'].map((role, index) => (
            <motion.span
              key={role}
              className="role-tag px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm cursor-pointer transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {role}
            </motion.span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            className="cta-button group px-8 py-4 bg-gradient-to-r from-yellow-400 to-green-400 text-black font-semibold rounded-full cursor-hover relative overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            className="cta-button px-8 py-4 border border-white/30 text-white font-semibold rounded-full cursor-hover hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let&apos;s Connect
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-hover"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>

      {/* Side Elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
            <motion.div
              key={social}
              className="side-decoration w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2 + index * 0.2 }}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="side-decoration w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2.5 + index * 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
