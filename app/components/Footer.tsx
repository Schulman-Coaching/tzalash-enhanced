import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-tzalash-olive text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tzalash-gold to-tzalash-orange rounded-full flex items-center justify-center">
                <span className="text-tzalash-olive font-bold text-xl hebrew">צ</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">Tzalash</span>
                <span className="text-tzalash-gold font-hebrew text-lg ml-2">| צל״ש</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Strengthening the spiritual lives of IDF soldiers through Torah study,
              personal support, and meaningful programs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tzalash-gold hover:text-tzalash-olive transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tzalash-gold hover:text-tzalash-olive transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tzalash-gold hover:text-tzalash-olive transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-tzalash-gold font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/pray" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Pray for a Soldier
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-tzalash-gold font-semibold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs#torah" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Torah Study Materials
                </Link>
              </li>
              <li>
                <Link href="/programs#visits" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Base Visits
                </Link>
              </li>
              <li>
                <Link href="/programs#shabbat" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Shabbat Programs
                </Link>
              </li>
              <li>
                <Link href="/programs#wives" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Support for Wives
                </Link>
              </li>
              <li>
                <Link href="/programs#pre-army" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  Pre-Army Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-tzalash-gold font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-tzalash-gold flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  Ra'anana, Israel
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-tzalash-gold flex-shrink-0" />
                <a href="tel:+972-9-123-4567" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  +972-9-123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-tzalash-gold flex-shrink-0" />
                <a href="mailto:info@tzalash.org" className="text-white/70 hover:text-tzalash-gold transition-colors">
                  info@tzalash.org
                </a>
              </li>
            </ul>

            {/* Tax Info */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-white/60">
                American Friends of Tzalash is a 501(c)(3) non-profit organization.
                <br />
                EIN: 88-4411623
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Tzalash. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
