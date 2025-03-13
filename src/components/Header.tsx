
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-subtle' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-display font-bold text-xl tracking-tight text-primary transition-opacity hover:opacity-80"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2 rounded-md"
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-px bg-primary transition-transform duration-300",
              mobileMenuOpen && "translate-y-2.5 rotate-45"
            )}
          />
          <span 
            className={cn(
              "w-6 h-px bg-primary transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span 
            className={cn(
              "w-6 h-px bg-primary transition-transform duration-300",
              mobileMenuOpen && "-translate-y-2.5 -rotate-45"
            )}
          />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200",
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="flex flex-col py-4 px-6 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-primary/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
