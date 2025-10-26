'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from('.kerala-element', {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timeline = [
    { year: '2020', event: 'Started AMV editing & coding journey (Age 13)' },
    { year: '2021', event: 'First anime music videos & web projects' },
    { year: '2022', event: 'Music remix & 2D animation skills' },
    { year: '2023', event: 'YouTube channel & 3D modeling exploration' },
    { year: '2024', event: 'Advanced development & visual effects mastery' },
    { year: '2025', event: 'Planning game development studies' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Kerala-inspired background elements */}
      <div className="absolute inset-0">
        <div className="kerala-element absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-400/10 to-yellow-400/10 rounded-full blur-xl"></div>
        <div className="kerala-element absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-green-400/10 rounded-full blur-xl"></div>
        <div className="kerala-element absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500/5 to-yellow-500/5 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-text text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="about-text w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <motion.div
              className="about-text space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-white/80 leading-relaxed">
                At just <span className="text-green-400 font-semibold">17 years old</span> and born in the beautiful state of <span className="text-green-400 font-semibold">Kerala</span>, 
                I&apos;m a passionate AMV (Anime Music Video) editor, music remix artist, and full-stack developer who believes in creating digital experiences that tell stories through both visual storytelling and innovative code.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                From the serene backwaters of Kerala to the digital worlds of anime editing and web development, I bring youthful energy and the same attention to detail that our state is known for. My work spans across <span className="text-yellow-400">AMV editing</span>, 
                <span className="text-blue-400">music remixes</span>, <span className="text-purple-400">web development</span>, <span className="text-pink-400">2D animations</span>, and <span className="text-cyan-400">3D modeling</span>.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                When I&apos;m not editing AMVs or coding, you&apos;ll find me exploring new anime series for inspiration, experimenting with music production, 
                creating 2D animations, diving into 3D modeling, or planning my next big adventure into <span className="text-orange-400">game development</span>. My goal is to bridge the gap between anime culture, modern development, and interactive gaming experiences.
              </p>
            </motion.div>

            {/* Kerala Pride Badge */}
            <motion.div
              className="about-text inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-xl px-6 py-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-2xl">🌴</div>
              <div>
                <p className="text-green-400 font-semibold">Proudly from Kerala</p>
                <p className="text-white/60 text-sm">God&apos;s Own Country</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Timeline & Stats */}
          <div className="space-y-12">
            {/* Journey Timeline */}
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="flex items-center gap-4 group cursor-hover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <p className="text-white group-hover:text-green-400 transition-colors">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="about-text grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Learning Mode' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/10 cursor-hover group"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <p className="text-2xl font-bold text-green-400 group-hover:text-yellow-400 transition-colors">
                    {stat.number}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Malayalam Typography Art (Placeholder) */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent opacity-20">
            നിശാൽ
          </div>
          <p className="text-white/40 text-sm mt-2">&quot;Nishal&quot; in Malayalam</p>
        </motion.div>
      </div>
    </section>
  );
}
