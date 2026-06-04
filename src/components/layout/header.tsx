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
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img 
              src="/icon.png" 
              alt="SourceBD Emblem" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-gray-100 shadow-sm"
            />
            <span className="text-xl md:text-2xl font-bold font-display text-bengal-forest tracking-tight">
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
                      'gap-2 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      isActive
                        ? 'text-padma-green bg-mint-mist'
                        : 'text-gray-600 hover:text-bengal-forest'
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
          <div className="flex items-center gap-2 md:gap-3">
            {/* Expandable Search */}
            <div className="hidden md:flex items-center">
              <AnimatePresence initial={false}>
                {searchExpanded ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden flex items-center mr-2"
                  >
                    <div className="flex items-center w-full bg-mint-mist border border-padma-green/20 rounded-full px-3 py-1.5 shadow-inner">
                      <Search className="h-4 w-4 text-padma-green shrink-0" />
                      <input 
                        type="text" 
                        autoFocus
                        placeholder="Search products or suppliers..." 
                        className="bg-transparent border-none outline-none text-sm px-2 w-full text-bengal-forest placeholder:text-padma-green/60"
                        onBlur={() => setSearchExpanded(false)}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-500 hover:text-padma-green transition-colors mr-1"
                    onClick={() => setSearchExpanded(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/dashboard/buyer">
                <Button variant="ghost" size="sm" className="text-sm">
                  {t('nav.dashboard')}
                </Button>
              </Link>
              <LanguageToggle />
            </div>

            <Link href="/suppliers?become=supplier">
              <Button
                size="sm"
                className="hidden md:flex bg-loom-gold text-bengal-forest hover:bg-loom-gold/90 font-medium"
              >
                {t('nav.becomeSupplier')}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden" />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                    <img src="/icon.png" alt="SourceBD Emblem" className="h-10 w-10 rounded-full object-cover border border-gray-100 shadow-sm" />
                    <span className="text-2xl font-bold font-display text-bengal-forest tracking-tight">
                      Source<span className="text-padma-green">BD</span>
                    </span>
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