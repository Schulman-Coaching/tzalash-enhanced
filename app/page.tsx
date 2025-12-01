import Link from 'next/link';
import {
  Heart,
  BookOpen,
  Users,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  Play,
  Quote,
  CheckCircle,
  HeartHandshake,
  Sparkles
} from 'lucide-react';

const stats = [
  { value: '5,000+', label: 'Soldiers Supported' },
  { value: '500+', label: 'Siyum Ceremonies/Year' },
  { value: '250', label: 'Field Coordinators' },
  { value: '10+', label: 'Years of Service' },
];

const programs = [
  {
    icon: BookOpen,
    title: 'Torah Study Materials',
    description: 'Pocket-size Gemaras and holy books distributed free to soldiers throughout the IDF.',
    link: '/programs#torah',
  },
  {
    icon: Users,
    title: 'Base Visits',
    description: 'Personal visits to soldiers with snacks, drinks, inspiration, and Torah study.',
    link: '/programs#visits',
  },
  {
    icon: Calendar,
    title: 'Shabbat Programs',
    description: 'Kiddush gatherings, festive events, and tish celebrations at IDF bases.',
    link: '/programs#shabbat',
  },
  {
    icon: HeartHandshake,
    title: "Support for Soldiers' Wives",
    description: 'Emotional support and assistance for the dedicated women behind our soldiers.',
    link: '/programs#wives',
  },
  {
    icon: Shield,
    title: 'Pre-Army Program',
    description: 'Education and inspiration for 11th-12th graders preparing for IDF service.',
    link: '/programs#pre-army',
  },
  {
    icon: Sparkles,
    title: 'Female Soldier Support',
    description: 'Dedicated programs supporting religious young women serving in the IDF.',
    link: '/programs#female',
  },
];

const testimonials = [
  {
    quote: "Tzalash has been a lifeline during my service. The pocket Gemara they gave me goes everywhere with me.",
    name: "Sgt. David K.",
    unit: "Golani Brigade",
  },
  {
    quote: "The Shabbat programs on base transform our entire atmosphere. It's the highlight of our week.",
    name: "Cpl. Yonatan M.",
    unit: "Paratroopers",
  },
  {
    quote: "When Tzalash staff visit our base, they bring more than just snacks - they bring home to us.",
    name: "Pvt. Moshe R.",
    unit: "Armored Corps",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-tzalash-olive">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578639834122-dbfc54ebb6c0?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tzalash-olive via-tzalash-olive/95 to-tzalash-olive/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-tzalash-gold/20 text-tzalash-gold px-4 py-2 rounded-full mb-6">
              <Shield size={18} />
              <span className="text-sm font-medium">Supporting Israel's Defenders</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Strengthening <span className="gradient-text">Soldiers' Souls</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Tzalash provides comprehensive spiritual support for IDF soldiers,
              helping them maintain their religious commitment and emotional well-being
              throughout their military service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all animate-pulse-glow"
              >
                <Heart size={20} />
                Support Our Soldiers
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all"
              >
                Learn More
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-tzalash-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-tzalash-gold to-tzalash-orange py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-tzalash-olive mb-2">
                  {stat.value}
                </div>
                <div className="text-tzalash-olive/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-tzalash-gold font-semibold uppercase tracking-wider">About Tzalash</span>
              <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mt-2 mb-6">
                The Army for the Sake of Heaven
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2012 by Rabbi Peretz Einhorn, Tzalash was born from the belief that
                defending the Jewish people and the Land of Israel is both a right and a mitzvah.
                The name &quot;Tzalash&quot; is an acronym for the Hebrew words meaning &quot;the army for
                the sake of Heaven&quot; - and also stands for Tziun L&apos;Shvach, a &quot;citation for
                excellence&quot; awarded to IDF soldiers for acts of heroism.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We are dedicated to strengthening Jewish identity among all IDF soldiers -
                both religious and secular - ensuring they have the spiritual tools and
                support they need during their service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-tzalash-gold font-semibold hover:gap-3 transition-all"
                >
                  Read Our Story
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/pray"
                  className="inline-flex items-center gap-2 text-tzalash-olive font-semibold hover:text-tzalash-gold transition-colors"
                >
                  Pray for a Soldier
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070')",
                  }}
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-tzalash-gold/10 rounded-full flex items-center justify-center">
                    <Star className="text-tzalash-gold" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-tzalash-olive">500+</div>
                    <div className="text-sm text-gray-500">Siyum Ceremonies</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Annual celebrations of Torah learning completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-tzalash-cream">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mt-2 mb-4">
              Our Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive support programs designed to strengthen the spiritual lives
              and emotional well-being of IDF soldiers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Link
                key={index}
                href={program.link}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover group"
              >
                <div className="w-14 h-14 bg-tzalash-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tzalash-gold group-hover:text-white transition-colors">
                  <program.icon size={28} className="text-tzalash-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-tzalash-olive mb-3 group-hover:text-tzalash-gold transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <span className="inline-flex items-center gap-2 text-tzalash-gold font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-tzalash-olive text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Voices from the Field
            </h2>
            <p className="text-white/70 text-lg">
              Hear from the soldiers whose lives have been touched by Tzalash.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <Quote className="text-tzalash-gold mb-4" size={32} />
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tzalash-gold/20 rounded-full flex items-center justify-center">
                    <Shield className="text-tzalash-gold" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.unit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pray for a Soldier Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-tzalash-olive to-tzalash-olive-light rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 md:p-12 lg:p-16">
                <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Make a Difference</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                  Pray for a Soldier
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Connect with a specific soldier through prayer. Receive a soldier&apos;s name
                  and unit, and commit to including them in your daily prayers. Your spiritual
                  support can make a profound difference in their service.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Receive a soldier\'s name and unit',
                    'Daily prayer commitment',
                    'Personal connection to Israel\'s defense',
                    'Updates on your soldier\'s service',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-tzalash-gold flex-shrink-0" size={20} />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/pray"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all"
                >
                  Sign Up to Pray
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div
                className="h-64 lg:h-full min-h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-tzalash-gold to-tzalash-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-tzalash-olive mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-tzalash-olive/80 text-xl max-w-2xl mx-auto mb-10">
            Your support helps us provide spiritual guidance, Torah study materials,
            and emotional support to thousands of IDF soldiers.
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-tzalash-olive font-semibold px-10 py-4 rounded-full hover:bg-white/90 transition-all"
            >
              Get Involved
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
