'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  Shield,
  Star,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Mail,
  Users,
  Sparkles,
} from 'lucide-react';

const prayerCommitments = [
  'Include the soldier in my daily prayers',
  'Say tehillim for their safety',
  'Study Torah in their merit',
  'Perform acts of kindness in their name',
];

const testimonials = [
  {
    quote: "Knowing someone across the world is praying for me personally gives me incredible strength.",
    name: "Cpl. Avi S.",
    unit: "Combat Engineering",
  },
  {
    quote: "The connection between the Jewish people through prayer is what keeps us strong.",
    name: "Sgt. Miriam K.",
    unit: "Intelligence Corps",
  },
];

export default function PrayPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
    commitments: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCommitmentChange = (commitment: string) => {
    setFormData((prev) => ({
      ...prev,
      commitments: prev.commitments.includes(commitment)
        ? prev.commitments.filter((c) => c !== commitment)
        : [...prev.commitments, commitment],
    }));
  };

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
          <h1 className="text-3xl font-bold text-tzalash-olive mb-4">Thank You!</h1>
          <p className="text-gray-600 text-lg mb-8">
            You will receive an email shortly with the name of your soldier and their unit.
            Your prayers mean the world to our defenders.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-tzalash-olive text-white font-semibold px-8 py-3 rounded-full hover:bg-tzalash-olive-light transition-all"
          >
            Return Home
            <ArrowRight size={18} />
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
            backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Pray for a Soldier</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
              Connect Through Prayer
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Create a personal spiritual connection with an IDF soldier. Receive their name
              and commit to including them in your daily prayers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-tzalash-olive mb-6">Sign Up to Pray</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll send you the name of a soldier to include
                in your prayers. You&apos;ll receive periodic updates about their service.
              </p>

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
                      className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none"
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
                      className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-tzalash-olive font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-tzalash-olive font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-tzalash-olive font-medium mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-tzalash-olive font-medium mb-4">
                    I commit to: (select all that apply)
                  </label>
                  <div className="space-y-3">
                    {prayerCommitments.map((commitment) => (
                      <label key={commitment} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.commitments.includes(commitment)}
                          onChange={() => handleCommitmentChange(commitment)}
                          className="w-5 h-5 rounded border-2 border-tzalash-olive/20 text-tzalash-gold focus:ring-tzalash-gold mt-0.5"
                        />
                        <span className="text-gray-700">{commitment}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-tzalash-olive font-medium mb-2">
                    Personal Message (optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Share a message of support for your soldier..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-bold text-lg py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Heart size={20} />
                  Sign Up to Pray
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* How It Works */}
              <div className="bg-tzalash-cream rounded-2xl p-8">
                <h3 className="text-xl font-bold text-tzalash-olive mb-6">How It Works</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Receive a Soldier\'s Name',
                      description: 'After signing up, you\'ll receive an email with the Hebrew name of an IDF soldier and their unit.',
                    },
                    {
                      icon: BookOpen,
                      title: 'Include Them in Prayer',
                      description: 'Add them to your daily prayers, say tehillim for their safety, and study Torah in their merit.',
                    },
                    {
                      icon: Users,
                      title: 'Stay Connected',
                      description: 'Receive periodic updates about the soldier and the impact of our collective prayers.',
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-tzalash-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-tzalash-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-tzalash-olive mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-tzalash-olive rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <Sparkles className="text-tzalash-gold" size={32} />
                  <h3 className="text-xl font-bold">Join Thousands Praying</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-tzalash-gold">10,000+</div>
                    <div className="text-white/70 text-sm">Prayer Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-tzalash-gold">50+</div>
                    <div className="text-white/70 text-sm">Countries</div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white border-2 border-tzalash-olive/10 rounded-xl p-6">
                    <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-tzalash-gold/10 rounded-full flex items-center justify-center">
                        <Shield className="text-tzalash-gold" size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-tzalash-olive">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.unit}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-tzalash-gold to-tzalash-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mb-6">
            Want to Do More?
          </h2>
          <p className="text-tzalash-olive/80 text-xl max-w-2xl mx-auto mb-10">
            Combine your spiritual support with financial support to help us provide
            tangible assistance to IDF soldiers.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 bg-tzalash-olive text-white font-semibold px-10 py-4 rounded-full hover:bg-tzalash-olive-light transition-all"
          >
            <Heart size={20} />
            Support Our Mission
          </Link>
        </div>
      </section>
    </div>
  );
}
