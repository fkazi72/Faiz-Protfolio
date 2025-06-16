
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import MouseGradientCard from './MouseGradientCard';

const ContactSection: React.FC = () => {
  const { effectiveTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className={`py-20 relative ${
      effectiveTheme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-blue-900/50' 
        : 'bg-gradient-to-br from-purple-50/80 to-blue-50/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${
              effectiveTheme === 'dark' 
                ? 'from-purple-400 to-blue-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              Get In Touch
            </span>
          </h2>
          <p className={`text-xl ${
            effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <MouseGradientCard className={`p-8 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800/50 border-purple-700/30' 
                : 'bg-white/70 border-purple-100'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    effectiveTheme === 'dark' 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>Email</p>
                    <a 
                      href="mailto:faizkazi12326@gmail.com"
                      className={`${
                        effectiveTheme === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                      } transition-colors`}
                    >
                      faizkazi12326@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    effectiveTheme === 'dark' 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>Phone</p>
                    <a 
                      href="tel:+917039017027"
                      className={`${
                        effectiveTheme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                      } transition-colors`}
                    >
                      +91 7039017027
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    effectiveTheme === 'dark' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>Location</p>
                    <p className={`${
                      effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Andheri (W), Maharashtra, Mumbai
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200/20">
                  <p className={`font-semibold mb-4 ${
                    effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>Connect with me</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: Github, href: 'https://github.com/fkazi72', color: effectiveTheme === 'dark' ? 'hover:text-purple-400' : 'hover:text-purple-600' },
                      { icon: Linkedin, href: 'https://linkedin.com/in/faizkazioies', color: effectiveTheme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600' },
                      { icon: Twitter, href: '#', color: effectiveTheme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target={social.href !== '#' ? '_blank' : undefined}
                        rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                        className={`group relative ${
                          effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        } ${social.color} transition-all duration-300 hover:scale-110 transform p-2 rounded-lg ${
                          effectiveTheme === 'dark' ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'
                        }`}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </MouseGradientCard>
          </div>

          {/* Contact Form */}
          <MouseGradientCard className={`p-8 rounded-xl ${
            effectiveTheme === 'dark' 
              ? 'bg-gray-800/50 border-purple-700/30' 
              : 'bg-white/70 border-purple-100'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}>Send Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className={`mx-auto mb-4 ${
                  effectiveTheme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`} size={48} />
                <h4 className={`text-xl font-semibold mb-2 ${
                  effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>Message Sent!</h4>
                <p className={`${
                  effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      effectiveTheme === 'dark' 
                        ? 'bg-gray-900/50 border-gray-600 text-gray-200 focus:border-purple-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 ${
                      effectiveTheme === 'dark' ? 'focus:ring-purple-400/20' : 'focus:ring-purple-500/20'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      effectiveTheme === 'dark' 
                        ? 'bg-gray-900/50 border-gray-600 text-gray-200 focus:border-purple-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 ${
                      effectiveTheme === 'dark' ? 'focus:ring-purple-400/20' : 'focus:ring-purple-500/20'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                      effectiveTheme === 'dark' 
                        ? 'bg-gray-900/50 border-gray-600 text-gray-200 focus:border-purple-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 ${
                      effectiveTheme === 'dark' ? 'focus:ring-purple-400/20' : 'focus:ring-purple-500/20'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                  }`}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </MouseGradientCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
