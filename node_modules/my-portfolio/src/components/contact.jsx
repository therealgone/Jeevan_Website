// src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Option 1: use Formspree or similar service to send data to email
    // Option 2: you can hook this to your own backend/API or use something like EmailJS

    const res = await fetch("https://formspree.io/f/xeokobav", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white p-4 md:p-6">
      <motion.form 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onSubmit={handleSubmit} 
        className="bg-gradient-to-br from-white/10 to-white/10 dark:from-gray-800/0 dark:to-gray-900/50 border border-white/50 dark:border-gray-700/10 shadow-2xl font-mono tracking-wide p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-[800px] min-h-[700px]"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 mb-4 h-72 rounded bg-gray-800 text-white placeholder-gray-400"
          />
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          type="submit" 
          className="w-full bg-animated-gradient hover:scale-[1.04] transition rounded p-3 font-semibold transition-all duration-900 ease-in-out"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
