'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to send message');
        return;
      }

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('[v0] Form submission error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Name Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 text-white placeholder-gray-400 transition-all duration-300"
        />
      </motion.div>

      {/* Email Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 text-white placeholder-gray-400 transition-all duration-300"
        />
      </motion.div>

      {/* Message Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your message here..."
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 text-white placeholder-gray-400 transition-all duration-300 resize-none"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  );
}
