'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  Shield,
  BookOpen,
  Users,
  Star,
  CheckCircle,
  CreditCard,
  Building2,
  Gift,
  ArrowRight,
} from 'lucide-react';

const donationAmounts = [18, 36, 72, 180, 360, 1000];

const impactItems = [
  {
    amount: '$18',
    impact: 'Provides a pocket Gemara for one soldier',
    icon: BookOpen,
  },
  {
    amount: '$72',
    impact: 'Sponsors refreshments for a base visit',
    icon: Users,
  },
  {
    amount: '$180',
    impact: 'Funds a Shabbat kiddush program',
    icon: Star,
  },
  {
    amount: '$360',
    impact: 'Sponsors a complete Torah study kit',
    icon: Gift,
  },
];

const dedications = [
  'In memory of a loved one',
  'In honor of a soldier',
  'In celebration of a simcha',
  'General support',
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(72);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [dedication, setDedication] = useState('');

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-tzalash-olive py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Support Our Mission</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Your generous donation directly supports IDF soldiers, providing them with
              Torah study materials, spiritual guidance, and emotional support during their service.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-tzalash-cream rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-tzalash-olive mb-6">Choose Your Gift</h2>

                {/* Frequency Toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setFrequency('one-time')}
                    className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                      frequency === 'one-time'
                        ? 'bg-tzalash-olive text-white'
                        : 'bg-white text-tzalash-olive border-2 border-tzalash-olive/20 hover:border-tzalash-olive'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                      frequency === 'monthly'
                        ? 'bg-tzalash-olive text-white'
                        : 'bg-white text-tzalash-olive border-2 border-tzalash-olive/20 hover:border-tzalash-olive'
                    }`}
                  >
                    Monthly Support
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-4 px-4 rounded-xl font-bold text-lg transition-all ${
                        selectedAmount === amount
                          ? 'bg-tzalash-gold text-tzalash-olive scale-105 shadow-lg'
                          : 'bg-white text-tzalash-olive border-2 border-tzalash-olive/10 hover:border-tzalash-gold'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="block text-tzalash-olive font-medium mb-2">
                    Or enter a custom amount:
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none text-lg"
                    />
                  </div>
                </div>

                {/* Dedication */}
                <div className="mb-8">
                  <label className="block text-tzalash-olive font-medium mb-2">
                    Dedicate your gift (optional):
                  </label>
                  <select
                    value={dedication}
                    onChange={(e) => setDedication(e.target.value)}
                    className="w-full px-4 py-4 rounded-xl border-2 border-tzalash-olive/10 focus:border-tzalash-gold focus:outline-none text-lg bg-white"
                  >
                    <option value="">Select a dedication type...</option>
                    {dedications.map((ded) => (
                      <option key={ded} value={ded}>{ded}</option>
                    ))}
                  </select>
                </div>

                {/* Donate Button */}
                <button
                  className="w-full bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-bold text-xl py-5 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                  disabled={!currentAmount}
                >
                  <Heart size={24} />
                  Donate {currentAmount ? `$${currentAmount}` : ''} {frequency === 'monthly' ? '/month' : ''}
                </button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 mt-6 text-gray-500">
                  <Shield size={18} />
                  <span className="text-sm">Secure, encrypted donation</span>
                </div>
              </div>

              {/* Other Ways to Give */}
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-tzalash-olive/10 rounded-xl p-6">
                  <div className="w-12 h-12 bg-tzalash-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="text-tzalash-gold" size={24} />
                  </div>
                  <h3 className="font-bold text-tzalash-olive mb-2">Bank Transfer</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Make a direct bank transfer or wire for larger donations.
                  </p>
                  <Link href="/contact" className="text-tzalash-gold font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Contact Us <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-white border-2 border-tzalash-olive/10 rounded-xl p-6">
                  <div className="w-12 h-12 bg-tzalash-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="text-tzalash-gold" size={24} />
                  </div>
                  <h3 className="font-bold text-tzalash-olive mb-2">Check by Mail</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Send a check payable to American Friends of Tzalash.
                  </p>
                  <Link href="/contact" className="text-tzalash-gold font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Get Address <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Impact Sidebar */}
            <div>
              <div className="bg-tzalash-olive rounded-2xl p-8 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-6">Your Impact</h3>

                <div className="space-y-6">
                  {impactItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-tzalash-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-tzalash-gold" size={20} />
                      </div>
                      <div>
                        <div className="text-tzalash-gold font-bold">{item.amount}</div>
                        <p className="text-white/80 text-sm">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-tzalash-gold flex-shrink-0" size={20} />
                    <p className="text-white/80 text-sm">
                      American Friends of Tzalash is a 501(c)(3) non-profit organization.
                      Your donation is tax-deductible to the full extent of the law.
                    </p>
                  </div>
                  <p className="text-white/60 text-sm mt-4">
                    EIN: 88-4411623
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-tzalash-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-tzalash-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-tzalash-gold" size={32} />
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-tzalash-olive mb-6 leading-relaxed">
              &quot;Knowing that supporters around the world are thinking of us and praying for us
              gives me strength during the most difficult moments of my service.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-tzalash-gold/20 rounded-full flex items-center justify-center">
                <Shield className="text-tzalash-gold" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold text-tzalash-olive">Sgt. Yosef M.</div>
                <div className="text-gray-500 text-sm">Combat Soldier, Northern Command</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-tzalash-olive text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Is my donation tax-deductible?',
                  answer: 'Yes! American Friends of Tzalash is a registered 501(c)(3) non-profit organization. Your donation is tax-deductible to the full extent allowed by law.',
                },
                {
                  question: 'How will my donation be used?',
                  answer: 'Your donation directly supports our programs: distributing Torah study materials, organizing base visits, running Shabbat programs, and providing support for soldiers\' families.',
                },
                {
                  question: 'Can I sponsor a specific program?',
                  answer: 'Absolutely! Contact us to discuss sponsoring a specific program or initiative. We can also arrange naming opportunities for significant contributions.',
                },
                {
                  question: 'Can I donate from outside the US?',
                  answer: 'Yes, we accept donations from around the world. Please contact us for information about international donations and tax-deductibility in your country.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-tzalash-cream rounded-xl p-6">
                  <h3 className="font-bold text-tzalash-olive mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
