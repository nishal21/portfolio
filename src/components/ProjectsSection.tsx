'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, X } from 'lucide-react';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Handle card hover animations with anime.js
  const handleCardHover = async (index: number, isHovering: boolean) => {
    try {
      const { animate } = await import('animejs');
      
      if (isHovering) {
        animate(`.project-card-${index}`, {
          scale: 1.05,
          rotateY: 5,
          duration: 300,
          easing: 'easeOutQuart',
        });
        // Animate other cards to fade slightly
        animate('.project-card:not(.project-card-' + index + ')', {
          opacity: 0.7,
          scale: 0.95,
          duration: 300,
          easing: 'easeOutQuart',
        });
      } else {
        animate(`.project-card-${index}`, {
          scale: 1,
          rotateY: 0,
          duration: 300,
          easing: 'easeOutQuart',
        });
        // Reset other cards
        animate('.project-card', {
          opacity: 1,
          scale: 1,
          duration: 300,
          easing: 'easeOutQuart',
        });
      }
    } catch (error) {
      console.error('Failed to load anime.js for hover effects:', error);
    }
  };

  useEffect(() => {
    // Only run animations when in view
    if (!isInView) return;

    const loadAnime = async () => {
      const { animate, stagger } = await import('animejs');

      // Anime.js staggered project card entrance with sophisticated effects
      animate('.project-card', {
        translateY: [100, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        rotate: [5, 0],
        delay: stagger(150, {grid: [2, 3], from: 'center'}),
        duration: 1200,
        easing: 'out-elastic(1, .8)',
      });

      // Animate section header elements
      animate('.section-header h2', {
        translateY: [50, 0],
        opacity: [0, 1],
        delay: 200,
        duration: 1000,
        easing: 'out-expo',
      });

      animate('.section-header p', {
        translateY: [30, 0],
        opacity: [0, 1],
        delay: 400,
        duration: 800,
        easing: 'out-expo',
      });

      animate('.section-header .divider', {
        scaleX: [0, 1],
        delay: 600,
        duration: 600,
        easing: 'out-expo',
      });

      // Floating animation for background elements
      animate('.floating-bg', {
        translateY: [0, -20, 0],
        scale: [1, 1.1, 1],
        duration: 4000,
        loop: true,
        easing: 'in-out-sine',
        delay: stagger(1000),
      });
    };

    loadAnime().catch(console.error);
  }, [isInView]);

  const projects = [
    {
      id: 1,
      title: 'OtakuPulse - Discord Anime Bot',
      category: 'Full-Stack Development',
      description: 'A comprehensive Discord bot that provides real-time anime and manga updates, daily quotes, trailers, and rankings with a beautiful web dashboard.',
      longDescription: 'OtakuPulse is an all-in-one anime & manga Discord bot with a web dashboard. It provides real-time notifications for new episodes, manga chapters, daily anime quotes, latest trailers, and top rankings. Features Discord OAuth2 authentication and customizable server settings.',
      tags: ['Node.js', 'Discord.js', 'MongoDB', 'Express.js', 'OAuth2', 'AniList API'],
      images: ['/projects/otakupulse-1.jpg', '/projects/otakupulse-2.jpg', '/projects/otakupulse-3.jpg'],
      mockup: '/projects/otakupulse-mockup.jpg',
      video: '/projects/otakupulse-demo.mp4',
      liveUrl: 'https://otakupulse.onrender.com/',
      githubUrl: 'https://github.com/nishal21/OtakuPulse',
      color: 'from-blue-400 to-purple-400',
      bgColor: 'from-blue-400/10 to-purple-400/10',
      challenges: [
        'Implementing real-time anime/manga API integrations',
        'Managing Discord OAuth2 authentication flow',
        'Handling multiple Discord servers with different settings'
      ],
      solutions: [
        'Built efficient API polling system with rate limiting',
        'Implemented secure Discord OAuth2 with session management',
        'Created flexible server configuration system with database storage'
      ],
      features: [
        'Real-time anime & manga notifications',
        'Daily anime quotes with automated posting',
        'Web dashboard with Discord OAuth2',
        'Comprehensive search functionality',
        'Server-specific customization settings'
      ],
      techStack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        backend: ['Node.js', 'Express.js', 'Discord.js'],
        database: ['MongoDB'],
        apis: ['AniList API', 'Discord API'],
        deployment: ['Render', 'MongoDB Atlas']
      }
    },
    {
      id: 2,
      title: 'ILLBOT - AI Writing Assistant',
      category: 'AI/Machine Learning',
      description: 'An advanced AI-powered writing assistant that rivals QuillBot, offering enhanced text improvement, paraphrasing, and content generation capabilities.',
      longDescription: 'ILLBOT is a sophisticated AI writing tool built with React and TypeScript, powered by Google Gemini API. It provides advanced text enhancement, paraphrasing, grammar checking, and content generation with more features than traditional tools like QuillBot.',
      tags: ['React', 'TypeScript', 'Gemini API', 'AI/ML', 'Vite', 'Tailwind CSS'],
      images: ['/projects/illbot-1.jpg', '/projects/illbot-2.jpg', '/projects/illbot-3.jpg'],
      mockup: '/projects/illbot-mockup.jpg',
      video: '/projects/illbot-demo.mp4',
      liveUrl: 'https://illbot.netlify.app/',
      githubUrl: 'https://github.com/nishal21/ILLBOT',
      color: 'from-green-400 to-cyan-400',
      bgColor: 'from-green-400/10 to-cyan-400/10',
      challenges: [
        'Integrating Google Gemini API for advanced text processing',
        'Creating intuitive UI for complex writing features',
        'Implementing real-time text analysis and suggestions'
      ],
      solutions: [
        'Built efficient API integration with error handling and rate limiting',
        'Designed clean, responsive interface with real-time feedback',
        'Implemented debounced text processing for optimal performance'
      ],
      features: [
        'Advanced text paraphrasing and rewriting',
        'Grammar and style checking',
        'Tone adjustment and writing enhancement',
        'Multiple output formats and styles',
        'Real-time text analysis and suggestions'
      ],
      techStack: {
        frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
        backend: ['Google Gemini API'],
        database: ['Local Storage'],
        apis: ['Google Gemini API'],
        deployment: ['Netlify']
      }
    },
    {
      id: 3,
      title: 'NMHelper - School Management System',
      category: 'Web Development',
      description: 'A specialized system for Kerala schools to streamline noon meal management by collecting class strength data, reducing manual work for teachers and clerks.',
      longDescription: 'NMHelper is a web-based solution designed specifically for Kerala schools to automate the collection of class strength data required for noon meal programs. The system eliminates the tedious manual process of going class-to-class to collect attendance information.',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'School Management', 'Kerala Education'],
      images: ['/projects/nmhelper-1.jpg', '/projects/nmhelper-2.jpg', '/projects/nmhelper-3.jpg'],
      mockup: '/projects/nmhelper-mockup.jpg',
      video: '/projects/nmhelper-demo.mp4',
      liveUrl: 'https://nmhelper.in/',
      githubUrl: null, // Private repository
      color: 'from-orange-400 to-red-400',
      bgColor: 'from-orange-400/10 to-red-400/10',
      challenges: [
        'Understanding Kerala education system requirements',
        'Creating user-friendly interface for teachers of all tech levels',
        'Implementing secure data collection and reporting system'
      ],
      solutions: [
        'Conducted extensive research on noon meal program requirements',
        'Designed intuitive forms with Malayalam language support',
        'Built robust reporting system with data validation and security'
      ],
      features: [
        'Malayalam language support for better accessibility',
        'Class strength data collection and management',
        'Automated noon meal calculations',
        'Teacher and administrative dashboards',
        'Secure data handling and reporting'
      ],
      techStack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        backend: ['PHP', 'MySQL'],
        database: ['MySQL'],
        features: ['Malayalam Support', 'Role-based Access'],
        deployment: ['Shared Hosting']
      }
    },
    {
      id: 4,
      title: 'Askira - Form Builder Platform',
      category: 'Full-Stack Development',
      description: 'A feature-rich form builder platform currently in development, offering advanced form creation, customization, and data collection capabilities.',
      longDescription: 'Askira is an ambitious form builder project that aims to provide comprehensive form creation tools with advanced features like conditional logic, custom styling, real-time collaboration, and powerful analytics. Currently in active development phase.',
      tags: ['React', 'Node.js', 'TypeScript', 'Form Builder', 'Real-time', 'In Development'],
      images: ['/projects/askira-1.jpg', '/projects/askira-2.jpg', '/projects/askira-3.jpg'],
      mockup: '/projects/askira-mockup.jpg',
      video: '/projects/askira-demo.mp4',
      liveUrl: null, // Still in development
      githubUrl: null, // Private during development
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-400/10 to-pink-400/10',
      challenges: [
        'Building complex drag-and-drop form builder interface',
        'Implementing conditional logic and form validation',
        'Creating scalable real-time collaboration features'
      ],
      solutions: [
        'Utilizing modern React patterns with custom hooks for complex state management',
        'Building flexible validation engine with custom rule definitions',
        'Implementing WebSocket-based real-time updates with conflict resolution'
      ],
      features: [
        'Drag-and-drop form builder interface',
        'Conditional logic and smart field dependencies',
        'Real-time collaboration and sharing',
        'Advanced analytics and response tracking',
        'Custom themes and styling options'
      ],
      techStack: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'DnD Kit'],
        backend: ['Node.js', 'Express.js', 'Socket.io'],
        database: ['PostgreSQL', 'Redis'],
        features: ['Real-time Collaboration', 'Advanced Analytics'],
        deployment: ['In Development']
      }
    },
    {
      id: 5,
      title: 'PromptCrafter AI - Prompt Engineering Tool',
      category: 'AI/Machine Learning',
      description: 'An advanced prompt engineering assistant that transforms raw ideas into powerful, contextual prompts for various AI tools and platforms.',
      longDescription: 'PromptCrafter AI is a sophisticated prompt engineering tool built with React and TypeScript, powered by Google Gemini API. It helps users create optimized prompts for different AI platforms with features like tone customization, expertise levels, and multi-language support.',
      tags: ['React', 'TypeScript', 'Gemini API', 'Prompt Engineering', 'AI Tools', 'Vite'],
      images: ['/projects/promptcrafter-1.jpg', '/projects/promptcrafter-2.jpg', '/projects/promptcrafter-3.jpg'],
      mockup: '/projects/promptcrafter-mockup.jpg',
      video: '/projects/promptcrafter-demo.mp4',
      liveUrl: 'https://crafterai.netlify.app/',
      githubUrl: 'https://github.com/nishal21/PromptCrafter',
      color: 'from-indigo-400 to-purple-400',
      bgColor: 'from-indigo-400/10 to-purple-400/10',
      challenges: [
        'Creating effective meta-prompts for prompt generation',
        'Building intuitive interface for complex prompt customization',
        'Implementing multi-platform prompt optimization'
      ],
      solutions: [
        'Developed sophisticated prompt engineering algorithms with Gemini API',
        'Created clean, responsive UI with dynamic form controls',
        'Built flexible prompt templates for different AI platforms'
      ],
      features: [
        'Smart prompt generation from simple ideas',
        'Multi-platform AI tool support',
        'Tone and expertise level customization',
        'Multi-language prompt generation',
        'Context enhancement and negative prompting'
      ],
      techStack: {
        frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
        backend: ['Google Gemini API'],
        features: ['Prompt Engineering', 'Multi-language Support'],
        apis: ['Google Gemini API'],
        deployment: ['Netlify']
      }
    },
    {
      id: 6,
      title: 'StudyForge - AI Study Companion',
      category: 'AI/Machine Learning',
      description: 'A next-gen AI-powered study platform offering smart note generation, flashcards, quizzes, and personalized learning tools for students.',
      longDescription: 'StudyForge is an advanced AI study companion that helps students learn smarter. It features AI-generated notes, flashcards, quizzes, and personalized study plans. Built with React, TypeScript, and Gemini API, it offers a modern, intuitive interface and supports PDF uploads, text extraction, and multi-format export. The platform is designed to boost productivity and retention for learners of all levels.',
      tags: ['React', 'TypeScript', 'Gemini API', 'AI/ML', 'Vite', 'Tailwind CSS', 'PDF Parsing', 'Flashcards', 'Quizzes'],
      images: ['/projects/studyforge-1.jpg', '/projects/studyforge-2.jpg', '/projects/studyforge-3.jpg'],
      mockup: '/projects/studyforge-mockup.jpg',
      video: '/projects/studyforge-demo.mp4',
      liveUrl: 'https://studyforgeai.netlify.app/',
      githubUrl: 'https://github.com/nishal21/StudyForge',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'from-yellow-400/10 to-orange-400/10',
      challenges: [
        'Building accurate AI note and flashcard generation',
        'Supporting PDF parsing and text extraction',
        'Designing an engaging, user-friendly study interface',
      ],
      solutions: [
        'Integrated Gemini API for high-quality content generation',
        'Used PDF.js and custom logic for robust PDF/text support',
        'Created a clean, responsive UI with Tailwind and React',
      ],
      features: [
        'AI-generated notes and summaries',
        'Smart flashcard and quiz creation',
        'PDF upload and text extraction',
        'Personalized study plans',
        'Multi-format export (PDF, text, markdown)',
      ],
      techStack: {
        frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
        backend: ['Gemini API', 'Node.js'],
        features: ['AI Note Generation', 'Flashcards', 'Quizzes', 'PDF Parsing'],
        apis: ['Gemini API'],
        deployment: ['Netlify']
      }
    },
    {
      id: 7,
      title: 'StepSolve - AI Math & Science Solver',
      category: 'AI/Machine Learning',
      description: 'An AI-powered platform for step-by-step solutions to math and science problems, featuring OCR, LaTeX, and natural language support.',
      longDescription: 'StepSolve is an advanced AI platform that helps students solve math and science problems with detailed, step-by-step explanations. It supports image uploads (OCR), LaTeX, and natural language input, and provides instant, accurate solutions powered by Gemini API. The platform is designed for students, teachers, and lifelong learners seeking clarity in problem-solving.',
      tags: ['React', 'TypeScript', 'Gemini API', 'AI/ML', 'OCR', 'LaTeX', 'Tailwind CSS', 'Vite'],
      images: ['/projects/stepsolve-1.jpg', '/projects/stepsolve-2.jpg', '/projects/stepsolve-3.jpg'],
      mockup: '/projects/stepsolve-mockup.jpg',
      video: '/projects/stepsolve-demo.mp4',
      liveUrl: 'https://stepsolve.netlify.app/',
      githubUrl: 'https://github.com/nishal21/stepsolve',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'from-cyan-400/10 to-blue-500/10',
      challenges: [
        'Implementing accurate OCR and LaTeX parsing',
        'Generating clear, step-by-step AI explanations',
        'Designing a user-friendly, responsive interface',
      ],
      solutions: [
        'Integrated Tesseract.js for OCR and KaTeX for LaTeX rendering',
        'Used Gemini API for detailed, multi-step solutions',
        'Built a clean, mobile-friendly UI with React and Tailwind',
      ],
      features: [
        'Step-by-step math & science solutions',
        'Image upload with OCR support',
        'LaTeX and natural language input',
        'Instant AI-powered explanations',
        'Export and share solutions',
      ],
      techStack: {
        frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
        backend: ['Gemini API', 'Node.js'],
        features: ['OCR', 'LaTeX Parsing', 'Step-by-step Explanations'],
        apis: ['Gemini API', 'Tesseract.js', 'KaTeX'],
        deployment: ['Netlify']
    }
    },
    {
      id: 8,
      title: 'Otazumi - Anime Streaming App',
      category: 'Full-Stack Development',
      description: 'A comprehensive anime streaming platform with modern UI, featuring extensive anime library, streaming capabilities, and user-friendly interface for anime enthusiasts.',
      longDescription: 'Otazumi is a full-featured anime streaming application that provides users with access to a vast library of anime content. Built with modern web technologies, it offers seamless streaming, detailed anime information, user favorites, and a responsive design that works across all devices.',
      tags: ['React', 'Node.js', 'Anime API', 'Streaming', 'MongoDB', 'Express.js'],
      images: ['/projects/otazumi-1.jpg', '/projects/otazumi-2.jpg', '/projects/otazumi-3.jpg'],
      mockup: '/projects/otazumi-mockup.jpg',
      video: '/projects/otazumi-demo.mp4',
      liveUrl: 'https://www.otazumi.page/',
      githubUrl: 'https://github.com/nishal21/otazumi',
      color: 'from-teal-400 to-emerald-400',
      bgColor: 'from-teal-400/10 to-emerald-400/10',
      challenges: [
        'Integrating multiple anime data sources and APIs',
        'Implementing efficient video streaming capabilities',
        'Creating intuitive navigation for large anime libraries'
      ],
      solutions: [
        'Built comprehensive API integration system with caching',
        'Implemented adaptive streaming with quality controls',
        'Designed clean, searchable interface with filtering options'
      ],
      features: [
        'Extensive anime library with search and filters',
        'High-quality video streaming',
        'User favorites and watchlists',
        'Detailed anime information and reviews',
        'Responsive design for all devices'
      ],
      techStack: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Video.js'],
        backend: ['Node.js', 'Express.js', 'Anime APIs'],
        database: ['Netlify'],
        features: ['Video Streaming', 'API Integration'],
        deployment: ['Vercel', 'Netlify']
      }
    },
    {
      id: 9,
      title: 'Veyra - Next-Gen Programming Language',
      category: 'Programming Languages',
      description: 'Veyra is a modern, open-source programming language designed for the future, featuring innovative syntax, powerful features, and extensive documentation.',
      longDescription: 'Veyra represents the next generation of programming languages, offering developers a fresh approach to software development. With its clean syntax, powerful type system, and modern features, Veyra aims to simplify complex programming tasks while maintaining high performance and expressiveness.',
      tags: ['Programming Language', 'Compiler', 'Open Source', 'TypeScript', 'Documentation', 'Syntax Design'],
      images: ['/projects/veyra-1.jpg', '/projects/veyra-2.jpg', '/projects/veyra-3.jpg'],
      mockup: '/projects/veyra-mockup.jpg',
      video: '/projects/veyra-demo.mp4',
      liveUrl: 'https://nishal21.github.io/veyraweb/',
      githubUrl: 'https://github.com/nishal21/veyra',
      color: 'from-violet-400 to-purple-500',
      bgColor: 'from-violet-400/10 to-purple-500/10',
      challenges: [
        'Designing intuitive and powerful language syntax',
        'Building efficient compiler and runtime system',
        'Creating comprehensive documentation and examples'
      ],
      solutions: [
        'Developed clean, readable syntax inspired by modern languages',
        'Implemented optimized compilation pipeline',
        'Built extensive documentation with interactive examples'
      ],
      features: [
        'Modern syntax with powerful abstractions',
        'Strong type system with inference',
        'High-performance compilation',
        'Rich standard library',
        'Comprehensive documentation and tutorials'
      ],
      techStack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'WebAssembly'],
        backend: ['Python', 'LLVM', 'Custom Compiler'],
        features: ['Language Design', 'Compiler Development'],
        deployment: ['GitHub Pages']
      }
    },
    {
      id: 10,
      title: 'Musico - Song Information Getter',
      category: 'Web Development',
      description: 'A powerful song information retrieval tool that fetches comprehensive music data, lyrics, artist details, and album information from various music APIs.',
      longDescription: 'Musico is a comprehensive song information application that allows users to search and retrieve detailed information about songs, artists, and albums. It integrates with multiple music APIs to provide album details, and related music recommendations in an elegant, user-friendly interface.',
      tags: ['React', 'Music API', 'Song Info', 'JavaScript', 'API Integration'],
      images: ['/projects/musico-1.jpg', '/projects/musico-2.jpg', '/projects/musico-3.jpg'],
      mockup: '/projects/musico-mockup.jpg',
      video: '/projects/musico-demo.mp4',
      liveUrl: 'https://musico21.netlify.app/',
      githubUrl: 'https://github.com/nishal21/musico',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-400/10 to-rose-400/10',
      challenges: [
        'Integrating multiple music data APIs',
        'Handling diverse music metadata formats',
        'Creating intuitive search and display interface'
      ],
      solutions: [
        'Built unified API abstraction layer for multiple services',
        'Implemented data normalization and caching system',
        'Designed clean, responsive interface with rich media display'
      ],
      features: [
        'Comprehensive song and artist search',
        'Album and artist information',
        'Music recommendations and related tracks'
        ],
      techStack: {
        frontend: ['React', 'JavaScript', 'CSS3', 'Music APIs'],
        backend: ['Node.js', 'Express.js', 'Redis'],
        database: ['MongoDB'],
        features: ['API Integration', 'Lyrics Display'],
        deployment: ['Netlify']
      }
    }
  ];

  const currentProject = selectedProject !== null ? projects[selectedProject] : null;

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-bg absolute top-40 left-40 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute bottom-40 right-40 w-96 h-96 bg-gradient-to-br from-pink-400/5 to-red-400/5 rounded-full blur-3xl"></div>
        <div className="floating-bg absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development, AI integration, and creative solutions from Kerala
          </p>
          <div className="divider w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card project-card-${index} group cursor-hover`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              onClick={() => setSelectedProject(index)}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.bgColor} border border-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm h-full overflow-hidden`}>
                {/* Project Thumbnail */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gray-800 border border-white/10">
                  {(project.id <= 3 || project.id === 5 || project.id === 6 || project.id === 7 || project.id === 8 || project.id === 9 || project.id === 10) ? (
                    <img
                      src={
                        project.id === 5
                          ? '/pro/4.png'
                          : project.id === 6
                          ? '/pro/5.png'
                          : project.id === 7
                          ? '/pro/6.png'
                          : `/pro/${project.id}.png`
                      }
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-12 h-12 text-white/40 mx-auto mb-2" />
                        <p className="text-white/60 text-sm">{project.liveUrl ? 'Live Project' : 'In Development'}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Preview Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <div className="text-center">
                      <ExternalLink className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-white text-sm font-medium">Click to View</p>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-black mb-4`}>
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/60">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/60">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 py-2 bg-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  
                  {project.githubUrl ? (
                    <motion.button
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl!, '_blank');
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <div className="p-2 bg-gray-600/50 rounded-lg">
                      <Github className="w-4 h-4 text-white/30" />
                    </div>
                  )}
                  
                  {project.liveUrl ? (
                    <motion.button
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl!, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <div className="p-2 bg-gray-600/50 rounded-lg">
                      <ExternalLink className="w-4 h-4 text-white/30" />
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && currentProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold text-white">{currentProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* Project Thumbnail in Modal */}
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-800 border border-white/10">
                    {(currentProject.id <= 3 || currentProject.id === 5 || currentProject.id === 6 || currentProject.id === 7 || currentProject.id === 8 || currentProject.id === 9 || currentProject.id === 10) ? (
                      <>
                        <img
                          src={
                            currentProject.id === 5
                              ? '/pro/4.png'
                              : currentProject.id === 6
                              ? '/pro/5.png'
                              : currentProject.id === 7
                              ? '/pro/6.png'
                              : `/pro/${currentProject.id}.png`
                          }
                          alt={`${currentProject.title} Preview`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-lg">
                          <span className="text-white text-sm font-medium">Project Preview</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                          <div className="text-center">
                            <Play className="w-16 h-16 text-white/40 mx-auto mb-4" />
                            <p className="text-white/60 text-lg">{currentProject.liveUrl ? 'Live Project' : 'Project In Development'}</p>
                            <p className="text-white/40 text-sm mt-2">Thumbnail coming soon</p>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-lg">
                          <span className="text-white text-sm font-medium">{currentProject.liveUrl ? 'Live Project' : 'In Development'}</span>
                        </div>
                      </>
                    )}
                    
                    {/* Live Site Link Overlay */}
                    {currentProject.liveUrl && (
                      <div className="absolute bottom-4 left-4">
                        <motion.button
                          className="px-4 py-2 bg-blue-500/90 hover:bg-blue-500 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-colors"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => window.open(currentProject.liveUrl!, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 inline mr-2" />
                          Visit Live Site
                        </motion.button>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                        <p className="text-white/70">{currentProject.longDescription}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {currentProject.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2 text-white/70">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Solutions</h4>
                        <ul className="space-y-2">
                          {currentProject.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start gap-2 text-white/70">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Features & Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <ul className="space-y-2">
                          {currentProject.features.slice(0, Math.ceil(currentProject.features.length / 2)).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-white/70">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2">
                          {currentProject.features.slice(Math.ceil(currentProject.features.length / 2)).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-white/70">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technology Stack</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(currentProject.techStack).map(([category, technologies]) => (
                        <div key={category} className="space-y-2">
                          <h5 className="text-sm font-medium text-white/80 capitalize">{category}</h5>
                          <div className="space-y-1">
                            {(technologies as string[]).map((tech, index) => (
                              <div key={index} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {currentProject.liveUrl ? (
                      <motion.button
                        className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => window.open(currentProject.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 inline mr-2" />
                        View Live Project
                      </motion.button>
                    ) : (
                      <div className="flex-1 py-3 bg-gray-600 text-white/50 font-semibold rounded-xl text-center">
                        <Play className="w-4 h-4 inline mr-2" />
                        In Development
                      </div>
                    )}
                    
                    {currentProject.githubUrl ? (
                      <motion.button
                        className="py-3 px-6 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => window.open(currentProject.githubUrl!, '_blank')}
                      >
                        <Github className="w-4 h-4 inline mr-2" />
                        View Code
                      </motion.button>
                    ) : (
                      <div className="py-3 px-6 border border-gray-600 text-white/50 font-semibold rounded-xl text-center">
                        <Github className="w-4 h-4 inline mr-2" />
                        Private Repo
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

