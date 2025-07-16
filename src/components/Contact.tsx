
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Github, Linkedin, Youtube, Heart, Pen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    { icon: Github, label: 'GitHub', color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-100 dark:bg-gray-700' },
    { icon: Linkedin, label: 'LinkedIn', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: Youtube, label: 'Youtube', color: 'text-sky-500 dark:text-sky-400', bg: 'bg-sky-100 dark:bg-sky-900/30' },
    { icon: Pen, label: 'Behance', color: 'text-bubble-pink dark:text-purple-400', bg: 'bg-pink-100 dark:bg-purple-900/30' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-bubble-pink/10 via-white to-aqua-blue/10 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bubblegum text-5xl md:text-6xl font-bold bubble-text-gradient mb-6">
            Let's Chat! 💬
          </h2>
          <p className="font-comic text-xl text-gray-700 dark:text-gray-300">
            Got a cool project idea? Want to collaborate? Just want to say hi? 
            <br />
            I'd love to hear from you! ✨
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-400 dark:to-blue-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h3 className="font-comic text-2xl font-bold bubble-text-gradient mb-6 text-center">
              Send me a message! 📨
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-comic font-bold text-gray-700 dark:text-gray-300 block mb-2">
                  Your Name ✨
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="What should I call you?"
                  disabled={isSubmitting}
                  className="rounded-2xl border-2 border-dashed border-bubble-pink/50 dark:border-purple-400/50 focus:border-solid focus:border-bubble-pink dark:focus:border-purple-400 font-comic dark:bg-gray-700/50 dark:text-white"
                />
              </div>
              
              <div>
                <label className="font-comic font-bold text-gray-700 dark:text-gray-300 block mb-2">
                  Email Address 💌
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@awesome.com"
                  disabled={isSubmitting}
                  className="rounded-2xl border-2 border-dashed border-aqua-blue/50 dark:border-blue-400/50 focus:border-solid focus:border-aqua-blue dark:focus:border-blue-400 font-comic dark:bg-gray-700/50 dark:text-white"
                />
              </div>
              
              <div>
                <label className="font-comic font-bold text-gray-700 dark:text-gray-300 block mb-2">
                  Your Message 💭
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project, ideas, or just say hello! 🚀"
                  rows={5}
                  disabled={isSubmitting}
                  className="rounded-2xl border-2 border-dashed border-lemon-yellow/50 dark:border-yellow-400/50 focus:border-solid focus:border-lemon-yellow dark:focus:border-yellow-400 font-comic resize-none dark:bg-gray-700/50 dark:text-white"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bounce-button w-full bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-600 dark:to-blue-600 hover:from-hot-pink hover:to-neon-green dark:hover:from-purple-700 dark:hover:to-blue-700 text-white font-comic text-lg py-3 rounded-2xl border-4 border-black dark:border-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending... 🚀' : 'Send Message! 🚀'}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Fun Contact Card */}
            <div className="card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">
                🌟
              </div>
              <h3 className="font-comic text-2xl font-bold bubble-text-gradient mb-4">
                Let's create something amazing together!
              </h3>
              <p className="font-comic text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always excited to work on new projects, especially ones that involve 
                creative design and cutting-edge technology! Whether it's building a 
                stunning frontend or training the next AI model, let's make it happen! 💪
              </p>
            </div>

            {/* Social Links */}
            <div className="card-hover bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="font-comic text-xl font-bold text-center mb-6 bubble-text-gradient">
                Find me around the web! 🌐
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    onClick={() => handleSocialClick(social.label)}
                    className={`bounce-button ${social.bg} hover:${social.bg} ${social.color} font-comic rounded-2xl border-2 border-dashed hover:border-solid border-gray-300 dark:border-gray-600 p-4 h-auto flex flex-col items-center gap-2`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-sm font-bold">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
