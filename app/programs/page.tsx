import Link from 'next/link';
import {
  BookOpen,
  Users,
  Calendar,
  HandHeart,
  Shield,
  Sparkles,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
} from 'lucide-react';

const programs = [
  {
    id: 'torah',
    icon: BookOpen,
    title: 'Torah Study Materials',
    subtitle: 'Spreading Torah Throughout the IDF',
    description: 'We distribute thousands of pocket-size Gemaras, siddurim, and other holy books to soldiers throughout the IDF. These materials are given free of charge, ensuring every soldier who wants to study Torah has access to the materials they need.',
    features: [
      'Pocket-size Gemaras for easy carrying',
      'Siddurim and tehillim for daily prayer',
      'Holiday-specific materials',
      'Study guides and learning resources',
    ],
    stats: { value: '10,000+', label: 'Books Distributed Annually' },
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2070',
  },
  {
    id: 'visits',
    icon: Users,
    title: 'Base Visits',
    subtitle: 'Bringing Warmth to Every Base',
    description: 'Our dedicated field coordinators make regular visits to IDF bases throughout Israel. These visits include distributing snacks, drinks, and inspiration while creating meaningful connections with soldiers. We bring a piece of home to those serving far from their families.',
    features: [
      'Regular visits to bases nationwide',
      'Snacks, drinks, and refreshments',
      'Torah study and inspiration',
      'Personal connection and support',
    ],
    stats: { value: '250', label: 'Field Coordinators' },
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070',
  },
  {
    id: 'shabbat',
    icon: Calendar,
    title: 'Shabbat Programs',
    subtitle: 'Making Shabbat Special on Base',
    description: 'We organize kiddush gatherings, festive events, and tish celebrations at IDF bases across the country. These programs transform the Shabbat experience for soldiers, creating an atmosphere of kedusha and community even in a military setting.',
    features: [
      'Kiddush and Shabbat meals',
      'Festive tish gatherings',
      'Torah learning sessions',
      'Singing and inspiration',
    ],
    stats: { value: '500+', label: 'Programs Per Year' },
    image: 'https://images.unsplash.com/photo-1510914828947-36f754990aa5?q=80&w=2070',
  },
  {
    id: 'wives',
    icon: HandHeart,
    title: 'Support for Soldiers\' Wives',
    subtitle: 'Honoring the Women Behind Our Soldiers',
    description: 'We recognize that behind every soldier stands a devoted wife managing home and family. Our support programs provide emotional backing, community connections, and practical assistance for the dedicated women whose sacrifices make their husbands\' service possible.',
    features: [
      'Emotional support networks',
      'Community building events',
      'Practical assistance programs',
      'Holiday packages and gifts',
    ],
    stats: { value: '1,000+', label: 'Families Supported' },
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070',
  },
  {
    id: 'pre-army',
    icon: Shield,
    title: 'Pre-Army Program',
    subtitle: 'Preparing the Next Generation',
    description: 'Our pre-army program works with 11th and 12th graders preparing for IDF service. We provide education, inspiration, and practical preparation to help young people approach their service with confidence and a strong Jewish identity.',
    features: [
      'Educational seminars',
      'Spiritual preparation',
      'Mentorship from former soldiers',
      'Leadership development',
    ],
    stats: { value: '2,000+', label: 'Students Per Year' },
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
  },
  {
    id: 'female',
    icon: Sparkles,
    title: 'Female Soldier Support',
    subtitle: 'Supporting Religious Women in Service',
    description: 'Dedicated programs supporting religious young women serving in the IDF. We provide tailored resources, community support, and guidance to help female soldiers maintain their religious commitment throughout their service.',
    features: [
      'Women-focused study materials',
      'Support groups and networks',
      'Modesty-aware programming',
      'Female mentors and coordinators',
    ],
    stats: { value: '500+', label: 'Female Soldiers Supported' },
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2070',
  },
];

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-tzalash-olive py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Our Programs</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
              Comprehensive Support for IDF Soldiers
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From Torah study materials to family support, our programs touch every aspect
              of a soldier&apos;s spiritual and emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mt-2 mb-4">
              Six Pillars of Support
            </h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive approach ensures that every soldier receives the spiritual
              support they need, regardless of their background or location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="bg-tzalash-cream rounded-xl p-6 hover:bg-tzalash-gold/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-tzalash-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tzalash-gold group-hover:text-white transition-colors">
                  <program.icon className="text-tzalash-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-lg font-bold text-tzalash-olive mb-2 group-hover:text-tzalash-gold transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm">{program.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Program Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-tzalash-cream' : 'bg-white'}`}
        >
          <div className="container mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-tzalash-gold/10 rounded-lg flex items-center justify-center">
                    <program.icon className="text-tzalash-gold" size={24} />
                  </div>
                  <span className="text-tzalash-gold font-semibold uppercase tracking-wider text-sm">
                    {program.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mb-6">
                  {program.title}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {program.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-tzalash-gold flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-4 bg-tzalash-gold/10 rounded-xl p-4">
                  <Star className="text-tzalash-gold" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-tzalash-olive">{program.stats.value}</div>
                    <div className="text-gray-600 text-sm">{program.stats.label}</div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${program.image}')` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-tzalash-olive text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Programs
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Your donation helps us expand our programs and reach more soldiers across the IDF.
            Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-semibold px-10 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all"
            >
              <Heart size={20} />
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/20 transition-all"
            >
              Partner With Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
