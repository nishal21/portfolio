'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  Code2, 
  Palette, 
  Video, 
  Smartphone, 
  Camera,
  Zap,
  Heart
} from 'lucide-react';

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Floating animation for skill icons
      gsap.to('.skill-icon', {
        y: '10px',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'AMV Editing',
      icon: <Video className="w-8 h-8" />,
      skills: ['Premiere Pro', 'After Effects', 'Sony Vegas', 'DaVinci Resolve', 'Final Cut Pro'],
      color: 'from-red-400 to-orange-400',
      bgColor: 'from-red-400/10 to-orange-400/10',
    },
    {
      title: 'Music Production',
      icon: <Zap className="w-8 h-8" />,
      skills: ['FL Studio', 'Ableton Live', 'Logic Pro', 'Audacity', 'Reaper'],
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-400/10 to-pink-400/10',
    },
    {
      title: '2D & 3D Animation',
      icon: <Palette className="w-8 h-8" />,
      skills: ['2D Animation', '3D Modeling', 'Character Design', 'Motion Graphics', 'Rigging'],
      color: 'from-cyan-400 to-blue-400',
      bgColor: 'from-cyan-400/10 to-blue-400/10',
    },
    {
      title: 'Visual Effects',
      icon: <Camera className="w-8 h-8" />,
      skills: ['Motion Graphics', 'Color Grading', 'Transitions', 'Anime Effects', 'Compositing'],
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-400/10 to-rose-400/10',
    },
    {
      title: 'Web Development',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      color: 'from-indigo-400 to-blue-400',
      bgColor: 'from-indigo-400/10 to-blue-400/10',
    },
    {
      title: 'Game Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['Unity (Learning)', 'Game Design', 'C# (Planned)', 'Level Design', 'Game Mechanics'],
      color: 'from-green-400 to-emerald-400',
      bgColor: 'from-green-400/10 to-emerald-400/10',
    },
  ];

  const badges = [
    { label: 'AMV Editor', icon: <Video className="w-4 h-4" />, color: 'bg-red-500' },
    { label: 'Music Remix', icon: <Zap className="w-4 h-4" />, color: 'bg-purple-500' },
    { label: '2D/3D Animator', icon: <Palette className="w-4 h-4" />, color: 'bg-cyan-500' },
    { label: 'Full-Stack Dev', icon: <Code2 className="w-4 h-4" />, color: 'bg-blue-500' },
    { label: 'Game Dev Aspirant', icon: <Smartphone className="w-4 h-4" />, color: 'bg-green-500' },
    { label: '17 Years Old', icon: <Heart className="w-4 h-4" />, color: 'bg-pink-500' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Skills &amp; <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A diverse toolkit spanning development, design, and digital storytelling
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full cursor-hover group"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className={`${badge.color} p-1 rounded-full group-hover:scale-110 transition-transform`}>
                {badge.icon}
              </div>
              <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card group cursor-hover"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${category.bgColor} border border-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm h-full`}>
                {/* Icon */}
                <div className={`skill-icon w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 text-white/70 group-hover:text-white/90 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-white/60 mb-6">Ready to bring your ideas to life?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full cursor-hover hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
