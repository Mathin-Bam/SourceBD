'use client';

import Link from 'next/link';
import { useLanguage } from '@/stores/language-store';
import { CATEGORIES } from '@/data/mock-categories';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A3622] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img 
                src="/icon.png" 
                alt="SourceBD Emblem" 
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-white/10 shadow-sm"
              />
              <span className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                Source<span className="text-loom-gold">BD</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Social Media">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642c.358 0 .686-.045.986-.126.281-.081.486-.22.614-.44a2.16 2.16 0 0 0-.113-.788c-.038-.138-.055-.273-.055-.417a2.08 2.08 0 0 0-.056-.57 1.38 1.38 0 0 0-.15-.47v-3.851c0-.491-.04-.95-.116-1.366l.004-.009c-.09-.33-.27-.586-.533-.766a2.14 2.14 0 0 0-.77-.26V8.5H15v4H9V8zm1.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-loom-gold transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/suppliers" className="text-gray-300 hover:text-loom-gold transition-colors text-sm">
                  {t('nav.suppliers')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-loom-gold transition-colors text-sm">
                  {t('nav.categories')}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/buyer" className="text-gray-300 hover:text-loom-gold transition-colors text-sm">
                  {t('nav.dashboard')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.categories')}</h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="text-gray-300 hover:text-loom-gold transition-colors text-sm"
                  >
                    {category.name.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-loom-gold" />
                <span>Banani, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-loom-gold" />
                <span className="font-mono">+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-loom-gold" />
                <span className="font-mono">hello@sourcebd.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-loom-gold transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-loom-gold transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}