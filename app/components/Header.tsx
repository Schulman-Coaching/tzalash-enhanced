'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Programs',
    href: '/programs',
    submenu: [
      { name: 'Torah Study', href: '/programs#torah' },
      { name: 'Base Visits', href: '/programs#visits' },
      { name: 'Shabbat Programs', href: '/programs#shabbat' },
      { name: 'Support for Wives', href: '/programs#wives' },
      { name: 'Pre-Army Program', href: '/programs#pre-army' },
    ],
  },
  { name: 'Pray for a Soldier', href: '/pray' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-tzalash-olive sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-tzalash-gold to-tzalash-orange rounded-full flex items-center justify-center">
              <span className="text-tzalash-olive font-bold text-xl hebrew">צ</span>
            </div>
            <div>
              <span className="text-white font-bold text-xl">Tzalash</span>
              <span className="text-tzalash-gold font-hebrew text-lg ml-2">| צל״ש</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-tzalash-gold transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 animate-fade-in-up">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-tzalash-olive hover:bg-tzalash-gold/10 hover:text-tzalash-gold transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Donate Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/donate"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <Heart size={18} />
              Donate
            </Link>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 mobile-menu-enter">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-tzalash-gold transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-white/70 hover:text-tzalash-gold transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-tzalash-gold to-tzalash-orange text-tzalash-olive font-semibold px-6 py-3 rounded-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart size={18} />
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
