import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">4S</span>
            </div>
            <span className="text-xl font-bold text-primary">Four Sight</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-secondary transition-colors link-underline"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-secondary transition-colors link-underline"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-secondary transition-colors link-underline"
            >
              Contact Us
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            variant="default"
            className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-white transition-smooth"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => scrollToSection('contact')}
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;