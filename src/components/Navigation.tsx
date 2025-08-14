import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-elegant transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none">
                FourSight
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Web Solutions
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-secondary transition-colors link-underline"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-secondary transition-colors link-underline"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-secondary transition-colors link-underline"
            >
              Contact Us
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-white transition-smooth"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-white text-sm px-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
