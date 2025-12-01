import Link from 'next/link';
import {
  Shield,
  Heart,
  Users,
  Target,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Defending with Faith',
    description: 'We believe that defending the Jewish people and the Land of Israel is both a right and a sacred mitzvah.',
  },
  {
    icon: Heart,
    title: 'Spiritual Support',
    description: 'Every soldier deserves the spiritual tools and emotional support to maintain their Jewish identity during service.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build bridges between soldiers of all backgrounds, fostering unity and shared purpose.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Just as our soldiers strive for excellence in their service, we strive for excellence in our support.',
  },
];

const milestones = [
  { year: '2012', title: 'Foundation', description: 'Tzalash founded by Rabbi Peretz Einhorn in Ra\'anana, Israel' },
  { year: '2014', title: 'First 1,000', description: 'Distributed pocket Gemaras to over 1,000 IDF soldiers' },
  { year: '2016', title: 'Base Programs', description: 'Launched regular Shabbat programs at multiple IDF bases' },
  { year: '2018', title: 'Wives Support', description: 'Initiated support programs for soldiers\' wives' },
  { year: '2020', title: 'Pre-Army Program', description: 'Expanded to include high school preparation programs' },
  { year: '2023', title: 'Wartime Response', description: 'Massive mobilization to support soldiers during wartime' },
];

const leadership = [
  {
    name: 'Rabbi Peretz Einhorn',
    role: 'Founder & Director',
    bio: 'Rabbi Einhorn founded Tzalash with a vision of strengthening Jewish identity among IDF soldiers. His dedication to Israel\'s defenders has made Tzalash a household name on military bases throughout the country.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-tzalash-olive py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">About Tzalash</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
              The Army for the Sake of Heaven
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Tzalash &mdash; &quot;Tziun L&apos;Shvach&quot; &mdash; is both an acronym meaning &quot;the army for
              the sake of Heaven&quot; and the IDF&apos;s citation for excellence awarded to soldiers
              for acts of heroism.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mt-2 mb-6">
                Strengthening Soldiers&apos; Souls
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2012 by Rabbi Peretz Einhorn, Tzalash was born from the belief that
                defending the Jewish people and the Land of Israel is both a right and a mitzvah.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are dedicated to strengthening Jewish identity among all IDF soldiers &mdash;
                both religious and secular &mdash; ensuring they have the spiritual tools and
                support they need during their service.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From distributing pocket-size Gemaras and holy books to organizing base visits,
                Shabbat programs, and support for soldiers&apos; families, Tzalash touches every
                aspect of a soldier&apos;s spiritual life.
              </p>
              <div className="space-y-3">
                {[
                  'Free Torah study materials for all soldiers',
                  'Regular visits to IDF bases nationwide',
                  'Emotional and spiritual support programs',
                  'Support for soldiers\' families',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-tzalash-gold flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070')",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-tzalash-gold rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-tzalash-olive">10+</div>
                <div className="text-tzalash-olive/70">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-tzalash-cream">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mt-2 mb-4">
              What Guides Us
            </h2>
            <p className="text-gray-600 text-lg">
              Our work is guided by deeply held values that inform everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-tzalash-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-tzalash-gold" size={32} />
                </div>
                <h3 className="text-xl font-bold text-tzalash-olive mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mt-2 mb-4">
              Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-tzalash-gold/30" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <div className="bg-tzalash-cream rounded-xl p-6">
                      <div className="text-tzalash-gold font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-tzalash-olive mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-tzalash-gold rounded-full border-4 border-white shadow" />

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-tzalash-olive text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tzalash-gold font-semibold uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Meet Our Team
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-32 h-32 bg-tzalash-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-tzalash-gold" size={48} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <div className="text-tzalash-gold mb-4">{leader.role}</div>
                    <p className="text-white/80 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-tzalash-gold to-tzalash-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tzalash-olive mb-6">
            Join Our Mission
          </h2>
          <p className="text-tzalash-olive/80 text-xl max-w-2xl mx-auto mb-10">
            Your support helps us strengthen the spiritual lives of thousands of IDF soldiers.
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
