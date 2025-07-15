import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Github, Linkedin, Youtube, Heart, Pen, Star, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import animeContact from '../assets/anime-contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Oops! 😅",
        description: "Please tell me your name!",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email needed! 📧",
        description: "I need your email to get back to you!",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email! 🤔",
        description: "Please enter a valid email address!",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Message required! 💬",
        description: "Don't be shy, tell me what's on your mind!",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    console.log('Form submitted:', formData);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you soon! ✨",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Oops! Something went wrong 😅",
        description: "Please try again or reach out via social media!",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (platform: string) => {
    const links = {
      GitHub: 'https://github.com/Sumairahafeez',
      LinkedIn: 'https://www.linkedin.com/in/sumaira-hafeez-9974a6290/',
      Youtube: 'https://www.youtube.com/@SumairaHafeez-FPDEV',
      Behance: 'https://www.behance.net/sumairahafeez/projects'
    };
    
    const url = links[platform as keyof typeof links];
    if (url) {
      window.open(url, '_blank');
    }
    
    toast({
      title: `Opening ${platform}! 🌟`,
      description: `Let's connect on ${platform}!`,
    });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', color: 'text-foreground', bg: 'bg-muted/50' },
    { icon: Linkedin, label: 'LinkedIn', color: 'text-accent', bg: 'bg-accent/10' },
    { icon: Youtube, label: 'Youtube', color: 'text-destructive', bg: 'bg-destructive/10' },
    { icon: Pen, label: 'Behance', color: 'text-primary', bg: 'bg-primary/10' }
  ];

  return (
    <section id="contact" className="py-20 anime-bg relative">
      {/* Floating sakura petals */}
      <div className="sakura-container">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="sakura-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold kawaii-text mb-6">
            Let's Chat! 💬
          </h2>
          <div className="flex justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-destructive animate-bounce-kawaii" />
            <Star className="w-6 h-6 text-primary animate-pulse-glow" />
            <Sparkles className="w-6 h-6 text-secondary animate-float" />
          </div>
          <p className="text-xl text-muted-foreground">
            Got a cool project idea? Want to collaborate? Just want to say hi? 
            <br />
            I'd love to hear from you! ✨
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4 animate-gradient-x"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="kawaii-card p-8">
              <h3 className="text-2xl font-bold kawaii-text mb-6 text-center flex items-center justify-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                Send me a message! 📨
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-semibold text-foreground block mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Your Name ✨
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="What should I call you?"
                    disabled={isSubmitting}
                    className="rounded-2xl border-2 border-primary/30 focus:border-primary bg-background/50 backdrop-blur-sm"
                  />
                </div>
                
                <div>
                  <label className="font-semibold text-foreground block mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    Email Address 💌
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@awesome.com"
                    disabled={isSubmitting}
                    className="rounded-2xl border-2 border-secondary/30 focus:border-secondary bg-background/50 backdrop-blur-sm"
                  />
                </div>
                
                <div>
                  <label className="font-semibold text-foreground block mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    Your Message 💭
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project, ideas, or just say hello! 🚀"
                    rows={5}
                    disabled={isSubmitting}
                    className="rounded-2xl border-2 border-accent/30 focus:border-accent bg-background/50 backdrop-blur-sm resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="anime-button w-full text-lg py-6 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending... 🚀' : 'Send Message! 🚀'}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="kawaii-card p-8">
              <h3 className="text-xl font-bold text-center mb-6 kawaii-text flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Find me around the web! 🌐
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    onClick={() => handleSocialClick(social.label)}
                    className={`kawaii-card hover:scale-105 ${social.bg} ${social.color} font-semibold rounded-xl border-2 border-transparent hover:border-current p-4 h-auto flex flex-col items-center gap-2 transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-sm font-bold">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info & Anime Illustration */}
          <div className="space-y-8">
            {/* Anime Contact Illustration */}
            <div className="kawaii-card p-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative group">
                <img
                  src={animeContact}
                  alt="Anime style contact illustration"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 animate-float">
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                  <div className="w-10 h-10 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-secondary/30">
                    <Heart className="w-5 h-5 text-secondary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Contact Card */}
            <div className="kawaii-card p-8 text-center">
              <div className="text-6xl mb-4 animate-bounce-kawaii">
                🌟
              </div>
              <h3 className="text-2xl font-bold kawaii-text mb-4">
                Let's create something amazing together!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects, especially ones that involve 
                creative design and cutting-edge technology! Whether it's building a 
                stunning frontend or training the next AI model, let's make it happen! 💪
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;