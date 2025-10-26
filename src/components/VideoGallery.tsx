'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Calendar, Eye } from 'lucide-react';
import Image from 'next/image';

export default function VideoGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!isInView) return;

    // Advanced anime.js animations inspired by animejs.com
    const loadAnime = async () => {
      try {
        const { animate, stagger } = await import('animejs');

        // Section title with morphing reveal
        animate('.video-gallery-title', {
          translateY: [100, 0],
          opacity: [0, 1],
          scale: [0.8, 1],
          rotate: [5, 0],
          duration: 1200,
          easing: 'easeOutElastic(1, .8)'
        });

        // Filter buttons with wave entrance
        setTimeout(() => {
          animate('.filter-btn', {
            scale: [0, 1],
            opacity: [0, 1],
            translateY: [50, 0],
            rotate: [15, 0],
            delay: stagger(100),
            duration: 800,
            easing: 'easeOutBack'
          });
        }, 800);

        // Video cards with staggered 3D flip entrance
        setTimeout(() => {
          animate('.video-card', {
            rotateY: [90, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            translateZ: [200, 0],
            delay: stagger(150, {grid: [3, 2], from: 'center'}),
            duration: 1000,
            easing: 'easeOutExpo'
          });
        }, 600);

        // Continuous morphing background elements
        animate('.video-bg-morph', {
          scale: [1, 1.5, 0.7, 1.2, 1],
          rotate: [0, 180, 90, 270, 360],
          borderRadius: ['50%', '30%', '70%', '40%', '50%'],
          duration: 20000,
          loop: true,
          ease: 'in-out-sine',
          delay: stagger(3000),
        });

        // Floating video icons
        animate('.video-icon-float', {
          translateY: [0, -30, 0],
          translateX: [0, 15, -15, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 0.9, 1],
          duration: 8000,
          loop: true,
          ease: 'in-out-quad',
          delay: stagger(1000),
        });

        // Video card hover effects setup
        const setupVideoHoverAnimations = () => {
          document.querySelectorAll('.video-card').forEach((card) => {
            const playButton = card.querySelector('.play-button');
            const thumbnail = card.querySelector('.video-thumbnail');
            const overlay = card.querySelector('.video-overlay');

            card.addEventListener('mouseenter', () => {
              // Card lift with 3D rotation
              animate(card, {
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                translateZ: 50,
                duration: 400,
                ease: 'out-quad',
              });

              // Play button bounce
              if (playButton) {
                animate(playButton, {
                  scale: [1, 1.3, 1.1],
                  rotate: [0, 360],
                  duration: 600,
                  ease: 'out-elastic(1, 0.6)',
                });
              }

              // Thumbnail zoom with particle burst effect
              if (thumbnail) {
                animate(thumbnail, {
                  scale: 1.1,
                  duration: 400,
                  ease: 'out-quad',
                });
              }

              // Overlay reveal with ripple
              if (overlay) {
                animate(overlay, {
                  opacity: [0, 1],
                  scale: [0.8, 1],
                  duration: 300,
                  ease: 'out-quad',
                });
              }
            });

            card.addEventListener('mouseleave', () => {
              // Reset all transforms
              animate(card, {
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                translateZ: 0,
                duration: 400,
                ease: 'out-quad',
              });

              if (playButton) {
                animate(playButton, {
                  scale: 1,
                  rotate: 0,
                  duration: 300,
                  ease: 'out-quad',
                });
              }

              if (thumbnail) {
                animate(thumbnail, {
                  scale: 1,
                  duration: 400,
                  ease: 'out-quad',
                });
              }

              if (overlay) {
                animate(overlay, {
                  opacity: 0,
                  duration: 300,
                  ease: 'out-quad',
                });
              }
            });
          });

          // Filter button hover effects
          document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
              animate(btn, {
                scale: 1.1,
                rotate: [0, 3, -3, 0],
                duration: 300,
                ease: 'out-elastic(1, 0.6)',
              });
            });
            btn.addEventListener('mouseleave', () => {
              animate(btn, {
                scale: 1,
                rotate: 0,
                duration: 300,
                ease: 'out-quad',
              });
            });
          });
        };

        // Setup hover animations after timeline completes
        setTimeout(setupVideoHoverAnimations, 2000);

        // Particle system for video gallery
        animate('.video-particle', {
          translateX: () => [
            Math.random() * 200 - 100,
            Math.random() * 300 - 150,
            Math.random() * 200 - 100
          ],
          translateY: () => [
            Math.random() * 200 - 100,
            Math.random() * 300 - 150,
            Math.random() * 200 - 100
          ],
          scale: [0.5, 1.5, 0.8, 1.2],
          opacity: [0.3, 1, 0.2, 0.8],
          duration: () => Math.random() * 3000 + 4000,
          delay: stagger(300),
          loop: true,
          ease: 'in-out-sine',
        });

      } catch (error) {
        console.error('Anime.js failed to load for VideoGallery:', error);
      }
    };

    loadAnime().catch(console.error);
  }, [isInView]);

  const videos = [
    {
      id: 1,
      title: 'Maand x Jhol Music Fusion',
      category: 'music-remix',
      thumbnail: '/thumbnails/9.jpg',
      duration: '7:09',
      views: '83K',
      date: 'Nov 4, 2024',
      description: 'A soulful fusion blending traditional and modern South Asian sounds, featuring Bayaan, Rovalio, Hasan Raheem, Annural Khalid, and Maanu.',
      youtubeId: 'vW6OfawpNdQ',
      tags: ['Music Fusion', 'South Asian', 'Reverb'],
      client: 'DemonKing0.___',
      role: 'Music Producer, Audio Engineer',
      equipment: ['FL Studio'],
    },
    {
      id: 2,
      title: 'The JDM Legend Returns: Nissan GTR R33 Godzilla on the Streets!',
      category: 'automotive',
      thumbnail: '/thumbnails/1.jpg',
      duration: '0:34',
      views: '17',
      date: 'Nov 4, 2024',
      description: 'They called it Godzilla. But it wasn\'t just a monster… It was a revolution. Epic JDM content featuring the legendary Nissan GTR R33.',
      youtubeId: 'm2M1j7NnwXo',
      tags: ['JDM', 'GTR R33', 'Automotive'],
      client: 'DemonKing0.___',
      role: 'Video Editor, Automotive Content Creator',
      equipment: ['DaVinci Resolve', 'Blurrr'],
    },
    {
      id: 3,
      title: 'RDR 2 (2018) Cinematic Video Edit',
      category: 'gaming',
      thumbnail: '/thumbnails/2.jpg',
      duration: '0:43',
      views: '40',
      date: 'Feb 4, 2024',
      description: 'Cinematic video edit showcasing the beauty and storytelling of Red Dead Redemption 2 with stunning visuals and atmospheric editing.',
      youtubeId: 'QNRf5U2ltD0',
      tags: ['Gaming', 'RDR2', 'Cinematic'],
      client: 'DemonKing0.___',
      role: 'Video Editor, Gaming Content Creator',
      equipment: ['DaVinci Resolve', 'Blurrr'],
    },
    {
      id: 4,
      title: 'Another Time × Kaattu | Krishnahazar x Aromal Chekaver',
      category: 'music-remix',
      thumbnail: '/thumbnails/5.jpg',
      duration: '5:29',
      views: '5',
      date: 'Jan 26, 2025',
      description: 'A powerful fusion of "Another Time" by Krishnahazar and "Kaattu" (Aromal Chekaver theme). This track blends epic cinematic tension with tribal Malayalam energy.',
      youtubeId: 'QoPm9jL4Yf8',
      tags: ['Malayalam', 'Fusion', 'Cinematic'],
      client: 'DemonKing0.___',
      role: 'Music Producer, Sound Designer',
      equipment: ['FL Studio'],
    },
    {
      id: 5,
      title: 'Cherrapunji x Jupiter Mazha (Reverb) – Rainy Vibes',
      category: 'music-remix',
      thumbnail: '/thumbnails/4.jpg',
      duration: '7:02',
      views: '114',
      date: 'Dec 4, 2024',
      description: 'Atmospheric reverb remix featuring Hanan Shah × Dhanwin K B, creating the perfect rainy day vibes with Kerala-inspired sounds.',
      youtubeId: 'mrHBzkdLtWQ',
      tags: ['Malayalam', 'Reverb', 'Atmospheric'],
      client: 'DemonKing0.___',
      role: 'Audio Engineer, Remix Artist',
      equipment: ['FL Studio'],
    },
    {
      id: 6,
      title: 'Chandni Raat x Jhol – Reverb Edition',
      category: 'music-remix',
      thumbnail: '/thumbnails/6.jpg',
      duration: '7:58',
      views: '1.2K',
      date: 'Oct 4, 2024',
      description: 'Soulful reverb edition featuring Annural Khalid, Maanu & Ali Sethi. A perfect blend of romantic melodies with modern production.',
      youtubeId: 'ZOo-fNhd5Kg',
      tags: ['Romantic', 'Reverb', 'Fusion'],
      client: 'DemonKing0.___',
      role: 'Music Producer, Audio Engineer',
      equipment: ['FL Studio'],
    },
    {
      id: 7,
      title: 'Mixed Manga Panels EDIT [AMV] - WASTE by Kxllswxtch',
      category: 'amv',
      thumbnail: '/thumbnails/3.jpg',
      duration: '5:33',
      views: '7',
      date: 'Jan 26, 2025',
      description: 'Intense warrior-themed edit of MIXED MANGA PANELS.',
      youtubeId: '5ucLremIVWE',
      tags: ['Epic', 'Warrior', 'Anime', 'Manga'],
      client: 'DemonKing0.___',
      role: 'AMV Editor, Anime Content Creator',
      equipment: ['Davinci Resolve', 'Blurrr'],
    },
    {
      id: 8,
      title: 'One Piece AMV - Garp VS BB Pirates Incoming',
      category: 'amv',
      thumbnail: '/thumbnails/8.jpg',
      duration: '0:12',
      views: '81',
      date: 'Feb 4, 2024',
      description: 'Epic One Piece AMV featuring the legendary Marine Hero Garp in an intense battle preview against the Blackbeard Pirates.',
      youtubeId: 'bjfcxX8k1hw',
      tags: ['One Piece', 'AMV', 'Garp', 'Action'],
      client: 'DemonKing0.___',
      role: 'AMV Editor, Anime Content Creator',
      equipment: ['Davinci Resolve', 'Blurrr'],
    },
    {
      id: 9,
      title: 'One Piece Live Action - Chanel (Frank Ocean)',
      category: 'anime-content',
      thumbnail: '/thumbnails/7.jpg',
      duration: '0:15',
      views: '10',
      date: 'Mar 4, 2024',
      description: 'Stylish edit of One Piece Live Action series set to Frank Ocean\'s "Chanel" - showcasing the amazing cinematography and characters.',
      youtubeId: 'KHY4zo-JEik',
      tags: ['One Piece', 'Live Action', 'Frank Ocean', 'Cinematic'],
      client: 'DemonKing0.___',
      role: 'Video Editor, Content Creator',
      equipment: ['DaVinci Resolve', 'Blurrr'],
    }
  ];

  const categories = [
    { id: 'all', label: 'All Videos', count: videos.length },
    { id: 'music-remix', label: 'Music Remixes', count: videos.filter(v => v.category === 'music-remix').length },
    { id: 'amv', label: 'AMV', count: videos.filter(v => v.category === 'amv').length },
    { id: 'gaming', label: 'Gaming Edits', count: videos.filter(v => v.category === 'gaming').length },
    { id: 'automotive', label: 'Automotive', count: videos.filter(v => v.category === 'automotive').length },
    { id: 'anime-content', label: 'Anime Content', count: videos.filter(v => v.category === 'anime-content').length },
  ];

  const filteredVideos = filter === 'all' ? videos : videos.filter(video => video.category === filter);
  const selectedVideoData = selectedVideo !== null ? videos[selectedVideo] : null;

  return (
    <section id="videos" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="video-bg-morph absolute top-32 right-32 w-64 h-64 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="video-bg-morph absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="video-bg-morph absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-2xl"></div>
        <div className="video-bg-morph absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/8 to-green-400/8 rounded-full blur-xl"></div>
        
        {/* Floating Video Icons */}
        <div className="video-icon-float absolute top-40 right-1/4">
          <div className="w-8 h-8 bg-red-400/20 rounded-lg blur-sm"></div>
        </div>
        <div className="video-icon-float absolute bottom-40 left-1/4">
          <div className="w-6 h-6 bg-orange-400/20 rounded-full blur-sm"></div>
        </div>
        <div className="video-icon-float absolute top-1/3 right-1/3">
          <div className="w-10 h-10 bg-purple-400/20 rounded-lg blur-sm"></div>
        </div>
        
        {/* Video Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`video-particle-${i}`}
            className="video-particle absolute w-2 h-2 bg-red-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="video-gallery-title text-4xl md:text-6xl font-bold text-white mb-6">
            Video <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Music remixes, gaming edits, and automotive content from @DemonKing0.___ YouTube channel
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn px-6 py-3 rounded-full font-medium transition-all cursor-hover ${
                filter === category.id
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                className="video-card group cursor-hover"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedVideo(videos.findIndex(v => v.id === video.id))}
              >
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-red-500/10 transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-orange-400/20"></div>
                    
                    {/* Play Button */}
                    <motion.div
                      className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </motion.div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-xs font-medium">
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 px-2 py-1 rounded text-white text-xs font-medium capitalize">
                      {video.category.replace('-', ' ')}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                      {video.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-white/50 text-xs">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views} views
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {video.date}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {video.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-xs text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo !== null && selectedVideoData && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold text-white">{selectedVideoData.title}</h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Video Player */}
                <div className="p-6">
                  <div className="aspect-video bg-black rounded-xl mb-6 relative overflow-hidden group cursor-pointer">
                    <Image
                      src={selectedVideoData.thumbnail}
                      alt={selectedVideoData.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                      <motion.div
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => window.open(`https://youtube.com/watch?v=${selectedVideoData.youtubeId}`, '_blank')}
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-lg text-white text-sm font-medium">
                      {selectedVideoData.duration}
                    </div>
                  </div>

                  {/* Video Details */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                        <p className="text-white/70">{selectedVideoData.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedVideoData.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                        <div className="space-y-2 text-white/70">
                          <p><span className="text-white font-medium">Client:</span> {selectedVideoData.client}</p>
                          <p><span className="text-white font-medium">Role:</span> {selectedVideoData.role}</p>
                          <p><span className="text-white font-medium">Duration:</span> {selectedVideoData.duration}</p>
                          <p><span className="text-white font-medium">Views:</span> {selectedVideoData.views}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Equipment Used</h4>
                        <ul className="space-y-1">
                          {selectedVideoData.equipment.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-white/70">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-8 text-center">
                    <motion.button
                      className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-red-500/25 transition-all"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => window.open(`https://youtube.com/watch?v=${selectedVideoData.youtubeId}`, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Watch on YouTube
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/60 mb-6">Have a video project in mind?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full cursor-hover hover:shadow-2xl hover:shadow-red-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let&apos;s Create Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
