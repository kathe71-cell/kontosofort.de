import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: 'Highlights', href: '#features' },
  { label: 'Specs', href: '#specs' },
  { label: 'Vorteile & Zinsen', href: '#vorteile' },
  { label: 'Konto ohne Gehalt', href: '/kostenloses-girokonto-ohne-gehaltseingang', isRoute: true },
  { label: 'Tagesgeld-Check', href: '/tagesgeld-zinsen-vergleich', isRoute: true },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-slate-50/90 backdrop-blur-md border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            aria-label="kontosofort.de Girokonto Information"
          >
            <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center shadow-md group-hover:border-amber-500 transition-colors">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                kontosofort<span className="text-emerald-600 font-extrabold">.de</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Informationsportal C24 Smart
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navItems.map((item) => item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="px-4 py-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="outline" 
                size="icon"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="Menü öffnen"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white border-l border-slate-200 p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 pb-6 border-b border-slate-200">
                  <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-lg font-black text-slate-900">C24 Smart Info</span>
                </div>

                <nav className="flex flex-col gap-2 py-6">
                  {navItems.map((item) => item.isRoute ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <hr className="my-2 border-slate-200" />
                  <Link
                    to="/tarifrechner"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg"
                  >
                    Ersparnisrechner
                  </Link>
                  <Link
                    to={createPageUrl('Impressum')}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-lg"
                  >
                    Impressum
                  </Link>
                  <Link
                    to={createPageUrl('Datenschutz')}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-lg"
                  >
                    Datenschutz
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}