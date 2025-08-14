import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, businessName, message } = formData;
    
    if (!name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return false;
    }
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return false;
    }
    
    if (!businessName.trim()) {
      toast({ title: "Please enter your business name", variant: "destructive" });
      return false;
    }
    
    if (!message.trim()) {
      toast({ title: "Please enter a message", variant: "destructive" });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your message!",
        description: "We'll get back to you within 24 hours to discuss your project.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Let's Build Your Website
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up">
              Ready to take your business online? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                      Business Name *
                    </label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Your Business LLC"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business and what kind of website you need..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 text-lg font-semibold transition-smooth"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Timeline</h4>
                    <p className="text-muted-foreground">Most websites are completed in 7-14 days</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Free Consultation</h4>
                    <p className="text-muted-foreground">Every project starts with a free consultation call</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-3">What happens next?</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. We'll review your project details</li>
                    <li>2. Schedule a free consultation call</li>
                    <li>3. Provide a detailed proposal</li>
                    <li>4. Start building your amazing website!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;