import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-websites.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern website designs showcasing Four Sight's professional web development services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Your Business,
            <br />
            <span className="text-secondary">Your Website,</span>
            <br />
            Your Success
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            We bring your business online with beautiful, responsive websites that convert visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in mobile-stack">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-smooth shadow-glow hover:shadow-glow hover:scale-105"
            >
              Get Started Today
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-secondary/20 border-2 border-secondary text-white hover:bg-secondary hover:border-secondary px-8 py-4 text-lg rounded-full transition-smooth backdrop-blur-sm"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 animate-slide-in-right">
            <p className="text-white/70 text-sm mb-4">Trusted by 100+ businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/90 text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/90 text-sm font-medium">Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/90 text-sm font-medium">Mobile Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;