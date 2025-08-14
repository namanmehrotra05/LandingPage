import { Clock, DollarSign, Bot } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Get your professional website up and running in just 7-14 days. No long waits, no endless revisions."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "High-quality websites at prices that won't break the bank. Professional results without the premium cost."
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Future-ready websites with AI-powered features to help your business stay ahead of the competition."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            About Four Sight
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
            At Four Sight, we believe every business deserves a stunning online presence. 
            Our mission is to bridge the gap between traditional businesses and the digital world 
            with beautiful, functional websites that drive real results. With years of experience 
            and a passion for innovation, we're here to help your business thrive online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-elegant hover:shadow-glow transition-smooth animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100+</div>
            <div className="text-muted-foreground">Websites Created</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">7-14</div>
            <div className="text-muted-foreground">Days Average Delivery</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;