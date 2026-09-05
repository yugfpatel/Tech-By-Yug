import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
    budget: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid format';
    }
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.description.trim()) newErrors.description = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data ready for submission:', formData);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Have a Problem <br/>
              <span className="text-muted">Worth Solving?</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-md">
              Tell us what you're trying to build, automate or improve. Let's turn the idea into technology that works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:col-start-7"
          >
            {submitted ? (
              <div className="p-8 border border-border bg-background">
                <h3 className="text-2xl font-semibold mb-4">Request Received</h3>
                <p className="text-muted">Thank you for reaching out. A member of our team will review your project details and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-background border-b ${errors.name ? 'border-red-500' : 'border-border'} px-0 py-3 text-text focus:outline-none focus:border-text transition-colors`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-background border-b ${errors.email ? 'border-red-500' : 'border-border'} px-0 py-3 text-text focus:outline-none focus:border-text transition-colors`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border-b border-border px-0 py-3 text-text focus:outline-none focus:border-text transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-muted mb-2">Company (optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-background border-b border-border px-0 py-3 text-text focus:outline-none focus:border-text transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-muted mb-2">Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full bg-background border-b ${errors.service ? 'border-red-500' : 'border-border'} px-0 py-3 text-text focus:outline-none focus:border-text transition-colors appearance-none rounded-none`}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="IT Solutions">IT Solutions</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-muted mb-2">Project Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-background border-b ${errors.description ? 'border-red-500' : 'border-border'} px-0 py-3 text-text focus:outline-none focus:border-text transition-colors resize-none`}
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-muted mb-2">Budget Range (optional)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-background border-b border-border px-0 py-3 text-text focus:outline-none focus:border-text transition-colors appearance-none rounded-none"
                  >
                    <option value="" disabled>Select a budget range</option>
                    <option value="< $5k">Less than $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="group flex items-center gap-3 text-lg font-medium text-text hover:text-muted transition-colors mb-4"
                  >
                    Send Project Inquiry
                    <span className="p-3 rounded-full bg-primary text-black group-hover:scale-105 transition-transform">
                      <ArrowRight size={18} />
                    </span>
                  </button>
                  <p className="text-xs text-muted/70">
                    By submitting this form, you acknowledge that the information you provide will be processed to respond to your inquiry in accordance with our <a href="/privacy" className="text-muted hover:text-text underline transition-colors">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
