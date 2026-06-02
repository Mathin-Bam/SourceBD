'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/stores/language-store';
import { LanguageToggle } from '@/components/shared/language-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Users,
  Package,
  LayoutDashboard,
  Home,
  Search,
} from 'lucide-react';

const navItems = [
  { key: 'home', href: '/', icon: Home },
  { key: 'suppliers', href: '/suppliers', icon: Building2 },
  { key: 'products', href: '/products', icon: Package },
  { key: 'categories', href: '/categories', icon: Users, isCategory: true },
];

export function Header() {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = pathname === '/';

  return (
    <header 
      className={cn(
        "z-50 w-full transition-all duration-300", 
        isHome 
          ? "absolute top-0 left-0 right-0 bg-transparent border-none shadow-none" 
          : "sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 40 40" className="h-full w-full">
                <circle cx="20" cy="20" r="18" fill="#0f2417" />
                <path
                  d="M12 28 L20 12 L28 28 L20 22 Z"
                  fill="#f5c842"
                  stroke="#1a7a4a"
                  strokeWidth="1"
                />
                <circle cx="20" cy="18" r="3" fill="#0f2417" />
              </svg>
            </div>
            <span className={cn("text-xl font-bold transition-colors", isHome ? "text-white" : "text-bengal-forest")}>
              Source<span className="text-padma-green">BD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.key} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'gap-2 text-sm font-medium transition-all duration-200',
                      isActive
                        ? (isHome ? 'text-white bg-white/20' : 'text-padma-green bg-mint-mist')
                        : (isHome ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-bengal-forest')
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {t(`nav.${item.key}`)}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <Link href="/dashboard/buyer">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={cn("text-sm", isHome ? "text-white/80 hover:text-white hover:bg-white/10" : "")}
                >
                  {t('nav.dashboard')}
                </Button>
              </Link>
              <LanguageToggle className={isHome ? "bg-white/10 hover:bg-white/20 text-white border border-white/10" : ""} />
            </div>

            {isHome ? (
              <>
                <button 
                  className="text-white/80 hover:text-white p-2 transition-colors cursor-pointer hidden md:block"
                  aria-label="Search"
                  onClick={() => {
                    const heroSearch = document.getElementById('hero-search');
                    if (heroSearch) {
                      heroSearch.focus();
                      heroSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <Search className="h-5 w-5" />
                </button>
                <Link href="/suppliers?become=supplier">
                  <Button
                    size="sm"
                    className="bg-padma-green hover:bg-padma-green/90 text-white font-medium px-5 rounded-md border-0"
                  >
                    {language === 'bn' ? 'সাইন আপ' : 'Sign Up'}
                  </Button>
                </Link>
              </>
            ) : (
              <Link href="/suppliers?become=supplier">
                <Button
                  size="sm"
                  className="hidden md:flex bg-loom-gold text-bengal-forest hover:bg-loom-gold/90 font-medium"
                >
                  {t('nav.becomeSupplier')}
                </Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                render={
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Open menu" 
                    className={cn("md:hidden", isHome ? "text-white hover:bg-white/10" : "")} 
                  />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <h2 className="text-2xl font-bold text-bengal-forest">
                      Source<span className="text-padma-green">BD</span>
                    </h2>
                  </Link>

                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.key}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-3"
                          >
                            <Icon className="h-5 w-5" />
                            {t(`nav.${item.key}`)}
                          </Button>
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="border-t pt-4">
                    <Link href="/dashboard/buyer" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full justify-start gap-3">
                        <LayoutDashboard className="h-5 w-5" />
                        {t('nav.dashboard')}
                      </Button>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-muted-foreground">Language</span>
                    <LanguageToggle />
                  </div>

                  <Link href="/suppliers?become=supplier" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-loom-gold text-bengal-forest hover:bg-loom-gold/90 font-medium">
                      {t('nav.becomeSupplier')}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}