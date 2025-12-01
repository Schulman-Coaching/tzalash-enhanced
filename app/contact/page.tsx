'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  MessageSquare,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ["Ra'anana, Israel"],
    link: null,
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+972-9-123-4567'],
    link: 'tel:+972-9-123-4567',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@tzalash.org'],
    link: 'mailto:info@tzalash.org',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Sun-Thu: 9AM - 5PM (Israel)', 'Fri: 9AM - 1PM'],
    link: null,
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Donation Questions',
  'Partnership Opportunities',
  'Volunteer',
  'Media/Press',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-tzalash-cream flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-tzalash-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-tzalash-olive" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-tzalash-olive mb-4">Message Sent!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for reaching out. We&apos;ll get back to you within 2 business days.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-tzalash-olive text-white font-semibold px-8 py-3 rounded-full hover:bg-tzalash-olive-light transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-tzalash-olive py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about our programs? Want to partner with us? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-tzalash-cream rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="text-tzalash-gold" size={28} />
                  <h2 className="text-2xl font-bold text-tzalash-olive">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-tzalash-olive font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-tzalash-olive font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-tzalash-olive font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-tzalash-olive font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-tzalash-olive font-medium mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      required
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none bg-white"
                    >
                      <option value="">Select an option...</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-tzalash-olive font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none resize-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-bold text-lg py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-tzalash-cream rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-tzalash-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-tzalash-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-tzalash-olive mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        info.link ? (
                          <a
                            key={idx}
                            href={info.link}
                            className="block text-gray-600 hover:text-tzalash-gold transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div className="bg-tzalash-olive rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-tzalash-gold hover:text-tzalash-olive transition-colors"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-tzalash-gold hover:text-tzalash-olive transition-colors"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-tzalash-gold hover:text-tzalash-olive transition-colors"
                  >
                    <Youtube size={22} />
                  </a>
                </div>
              </div>

              {/* US Office */}
              <div className="bg-white border-2 border-tzalash-olive/10 rounded-xl p-6">
                <h3 className="font-bold text-tzalash-olive mb-3">US Office</h3>
                <p className="text-gray-600 text-sm mb-4">
                  American Friends of Tzalash<br />
                  501(c)(3) Non-Profit Organization<br />
                  EIN: 88-4411623
                </p>
                <p className="text-gray-500 text-sm">
                  All donations are tax-deductible to the full extent of the law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-tzalash-gold to-tzalash-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-tzalash-olive/80 text-xl max-w-2xl mx-auto mb-10">
            Join thousands of supporters helping us strengthen the spiritual lives of IDF soldiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-tzalash-olive text-white font-semibold px-10 py-4 rounded-full hover:bg-tzalash-olive-light transition-all"
            >
              <Heart size={20} />
              Donate Now
            </Link>
            <Link
              href="/pray"
              className="inline-flex items-center justify-center gap-2 bg-white text-tzalash-olive font-semibold px-10 py-4 rounded-full hover:bg-white/90 transition-all"
            >
              Pray for a Soldier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
