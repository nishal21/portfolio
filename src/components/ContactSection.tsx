'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Send,
  CheckCircle,
  Heart,
  Globe,
  AlertCircle
} from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isInView) return;

    // Advanced anime.js animations inspired by animejs.com
    const loadAnime = async () => {
      try {
        const { animate, stagger } = await import('animejs');

        // Section title with liquid morphing effect
        animate('.contact-title', {
          scale: [0, 1.2, 1],
          opacity: [0, 1],
          rotate: [180, 0],
          translateY: [100, 0],
          duration: 1500,
          easing: 'easeOutElastic(1, .8)'
        });

        // Contact cards with 3D flip entrance
        setTimeout(() => {
          animate('.contact-card', {
            rotateX: [90, 0],
            opacity: [0, 1],
            translateY: [80, 0],
            scale: [0.8, 1],
            delay: stagger(200, {from: 'center'}),
            duration: 1000,
            easing: 'easeOutBack'
          });
        }, 1000);

        // Form fields with wave entrance
        setTimeout(() => {
          animate('.form-field', {
            translateX: [-100, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            delay: stagger(100),
            duration: 800,
            easing: 'easeOutExpo'
          });
        }, 600);

        // Social links with orbital entrance
        setTimeout(() => {
          animate('.social-link', {
            scale: [0, 1],
            rotate: [360, 0],
            opacity: [0, 1],
            delay: stagger(150, {from: 'center'}),
            duration: 800,
            easing: 'easeOutElastic(1, .6)'
          });
        }, 400);

        // Morphing background elements
        animate('.contact-bg-morph', {
          scale: [1, 1.3, 0.7, 1.1, 1],
          rotate: [0, 120, 240, 360],
          borderRadius: ['50%', '25%', '75%', '35%', '50%'],
          duration: 18000,
          loop: true,
          ease: 'in-out-sine',
          delay: stagger(2500),
        });

        // Floating contact icons
        animate('.contact-icon-float', {
          translateY: [0, -25, 0],
          translateX: [0, 10, -10, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 0.8, 1],
          duration: 6000,
          loop: true,
          ease: 'in-out-quad',
          delay: stagger(800),
        });

        // Contact form hover and focus animations
        const setupContactInteractions = () => {
          // Form field focus effects
          document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('focus', () => {
              const label = input.previousElementSibling;
              animate(input, {
                scale: 1.02,
                borderColor: '#3b82f6',
                duration: 300,
                ease: 'out-quad',
              });
              if (label) {
                animate(label, {
                  translateY: -5,
                  scale: 0.9,
                  color: '#3b82f6',
                  duration: 300,
                  ease: 'out-quad',
                });
              }
            });

            input.addEventListener('blur', () => {
              const label = input.previousElementSibling;
              animate(input, {
                scale: 1,
                duration: 300,
                ease: 'out-quad',
              });
              if (label && !(input as HTMLInputElement).value) {
                animate(label, {
                  translateY: 0,
                  scale: 1,
                  duration: 300,
                  ease: 'out-quad',
                });
              }
            });
          });

          // Social link hover effects
          document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', () => {
              animate(link, {
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                duration: 400,
                ease: 'out-elastic(1, 0.6)',
              });
            });
            link.addEventListener('mouseleave', () => {
              animate(link, {
                scale: 1,
                rotate: 0,
                duration: 300,
                ease: 'out-quad',
              });
            });
          });

          // Contact card hover effects
          document.querySelectorAll('.contact-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
              animate(card, {
                scale: 1.05,
                rotateY: 5,
                translateZ: 20,
                duration: 400,
                ease: 'out-quad',
              });
            });
            card.addEventListener('mouseleave', () => {
              animate(card, {
                scale: 1,
                rotateY: 0,
                translateZ: 0,
                duration: 400,
                ease: 'out-quad',
              });
            });
          });

          // Send button magnetic effect
          const sendButton = document.querySelector('.send-button');
          if (sendButton) {
            sendButton.addEventListener('mouseenter', () => {
              animate(sendButton, {
                scale: 1.1,
                translateY: -3,
                rotate: [0, 2, -2, 0],
                duration: 400,
                ease: 'out-elastic(1, 0.6)',
              });
            });
            sendButton.addEventListener('mouseleave', () => {
              animate(sendButton, {
                scale: 1,
                translateY: 0,
                rotate: 0,
                duration: 300,
                ease: 'out-quad',
              });
            });
          }
        };

        // Setup interactions after timeline completes
        setTimeout(setupContactInteractions, 2000);

        // Particle system for contact section
        animate('.contact-particle', {
          translateX: () => [
            Math.random() * 150 - 75,
            Math.random() * 200 - 100,
            Math.random() * 150 - 75
          ],
          translateY: () => [
            Math.random() * 150 - 75,
            Math.random() * 200 - 100,
            Math.random() * 150 - 75
          ],
          scale: [0.3, 1.2, 0.6, 1],
          opacity: [0.2, 0.8, 0.4, 0.6],
          duration: () => Math.random() * 2500 + 3500,
          delay: stagger(250),
          loop: true,
          ease: 'in-out-sine',
        });

        // Pulse animation for active elements
        animate('.contact-pulse', {
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
          duration: 2000,
          loop: true,
          ease: 'in-out-sine',
          delay: stagger(500),
        });

      } catch (error) {
        console.error('Anime.js failed to load for ContactSection:', error);
      }
    };

    loadAnime().catch(console.error);
  }, [isInView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Create form data for FormSubmit
      const formElement = e.target as HTMLFormElement;
      const submitData = new FormData(formElement);
      
      // FormSubmit endpoint - replace with your email
      const formSubmitUrl = 'https://formsubmit.co/nishalamv@gmail.com';
      
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error('Failed to send message:', error);
      setError('Failed to send message. Please try again or contact directly via email.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'nishalamv@gmail.com',
      href: 'mailto:nishalamv@gmail.com',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 xxxxxxxxxx',
      href: 'tel:+91xxxxxxxxxxx',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Malappuram, Kerala, India',
      href: 'https://maps.google.com/?q=Malappuram,Kerala,India',
      color: 'from-red-400 to-orange-400',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/nishal21',
      color: 'hover:text-gray-300',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nishal-k-167b1a328',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: 'YouTube',
      href: 'https://youtube.com/@DemonKing0.___',
      color: 'hover:text-red-400',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      href: 'https://twitter.com/Etainment2',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: 'https://instagram.com/demonking.___',
      color: 'hover:text-pink-400',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-contact absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/5 to-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="floating-contact absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="floating-contact absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-400/5 to-red-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="contact-element text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss how we can work together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            {/* Contact Information */}
            <motion.div
              className="contact-element space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-hover group"
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-black group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="contact-element"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 cursor-hover`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Kerala Pride Section */}
            <motion.div
              className="contact-element p-6 bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/20 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl">🌴</div>
                <div>
                  <h4 className="text-lg font-bold text-green-400">Made in Malappuram</h4>
                  <p className="text-white/60 text-sm">Kerala, India</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Proudly creating digital experiences from God&apos;s Own Country, bringing Kerala&apos;s warmth and creativity to projects worldwide.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="contact-element"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/60">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  {error && (
                    <motion.div
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}
                  
                  <form 
                    onSubmit={handleSubmit} 
                    action="https://formsubmit.co/nishalamv@gmail.com" 
                    method="POST"
                    className="space-y-6"
                  >
                    {/* FormSubmit Configuration Fields */}
                    <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you within 24 hours. Best regards, Nishal K" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{display: 'none'}} />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                        placeholder="Project discussion"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-hover"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="contact-element text-center mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-2 text-white/60 mb-4">
            <Heart className="w-4 h-4 text-red-400" />
            <span>Made with love in Kerala</span>
            <div className="text-lg">🌴</div>
          </div>
          
          <p className="text-white/40 text-sm">
            © 2025 Nishal. All rights reserved. | Crafting digital experiences from Malappuram to the world.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-4 text-white/40 text-sm">
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>Available worldwide</span>
            </div>
            <span>•</span>
            <span>Open to remote work</span>
            <span>•</span>
            <span>Response within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

