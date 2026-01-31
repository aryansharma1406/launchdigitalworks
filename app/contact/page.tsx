'use client';

import React from "react"

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, Instagram } from 'lucide-react';
import { COUNTRY_CALLING_CODES } from '@/lib/country-calling-codes';
import Antigravity from '@/components/antigravity';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
      });

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again or contact us directly at launchdigitalworks@gmail.com');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Antigravity
            count={260}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.2}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Start <span className="text-primary">Something Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h2>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:launchdigitalworks@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    launchdigitalworks@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <a href="tel:+91 9879619815" className="text-primary hover:text-primary/80 transition-colors">
                    +91 9879619815
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/launchdigitalworks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    @launchdigitalworks
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Follow us for updates</p>
                </div>
              </div>

              {/* Lead Magnet */}
              <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-foreground mb-2">Free Resource</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download our Digital Growth Guide and get actionable strategies to accelerate your business.
                </p>
                <Link
                  href="#"
                  className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold text-sm w-full text-center"
                >
                  Download Free Guide
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-background border-2 border-accent rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <CheckCircle className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-2">We've received your message and will get back to you shortly.</p>
                  <p className="text-sm text-muted-foreground">Check your email for next steps and a link to our Digital Growth Guide.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Tell Us About Your Project</h3>

                  <div className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                          Phone Number (Optional)
                        </label>
                        <div className="grid grid-cols-[90px_1fr] gap-3">
                          <select
                            id="countryCode"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            aria-label="Country code"
                            className="h-14 w-full px-2 bg-input border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            {COUNTRY_CALLING_CODES.map((c) => {
                              const value = `+${c.callingCode}`
                              return (
                                <option key={`${c.code}-${c.callingCode}`} value={value}>
                                  {value}
                                </option>
                              )
                            })}
                          </select>
                          <input
                            type="tel"
                            inputMode="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your number"
                            className="h-14 w-full px-4 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your company"
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Project Type & Budget Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-bold text-foreground mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a project type</option>
                          <option value="web-design">Web Design & Development</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="branding">Branding & Design</option>
                          <option value="seo">SEO & Content Strategy</option>
                          <option value="ecommerce">E-Commerce Solutions</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-bold text-foreground mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a budget</option>
                          <option value="under-2500">Under ₹2,500</option>
                          <option value="2500-5000">₹2,500 - ₹5,000</option>
                          <option value="5000-10000">₹5,000 - ₹10,000</option>
                          <option value="10000-25000">₹10,000 - ₹25,000</option>
                          <option value="25000-plus">₹25,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="What are your goals? What challenges are you facing? Any specific ideas?"
                        rows={5}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to receive communications from Launch Digital Works. We'll never share your information.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer:
                  'Project timelines vary based on scope and complexity. Most web design projects take 6-12 weeks, while marketing campaigns can start showing results within 4-8 weeks. We\'ll provide a detailed timeline during our discovery call.',
              },
              {
                question: 'What if I have a limited budget?',
                answer:
                  'We work with businesses of all sizes and budgets. We\'re flexible and can help you prioritize what\'s most important. Let\'s discuss your budget during our consultation and find solutions that work for you.',
              },
              {
                question: 'Do you offer ongoing support?',
                answer:
                  'Absolutely! Many of our clients work with us on an ongoing basis for maintenance, optimization, and new initiatives. We offer flexible support packages tailored to your needs.',
              },
              {
                question: 'How do you measure success?',
                answer:
                  'Success is defined by your goals. Whether it\'s increased leads, sales, traffic, or brand awareness, we establish clear metrics upfront and track progress regularly.',
              },
              {
                question: 'What if I don\'t have a clear project brief?',
                answer:
                  'That\'s completely normal! Our discovery process helps define your goals and strategy. We\'ll ask the right questions to get clarity on what you want to achieve.',
              },
              {
                question: 'How do I get started?',
                answer:
                  'Simply fill out the contact form above or call us. We\'ll schedule a free 30-minute consultation to discuss your project, goals, and how we can help.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait. Get started today with a free consultation and digital growth guide.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold"
          >
            Scroll Back to Form
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
