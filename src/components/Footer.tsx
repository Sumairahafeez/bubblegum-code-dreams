
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-bubble-pink/20 to-aqua-blue/20 py-12 relative">
      <div className="container mx-auto px-6">
        {/* Back to Top Button */}
        <div className="text-center mb-8">
          <Button
            onClick={scrollToTop}
            className="bounce-button bg-white hover:bg-gray-50 text-bubble-pink border-4 border-bubble-pink rounded-full p-4 shadow-lg"
          >
            <ArrowUp className="w-6 h-6" />
          </Button>
        </div>

        {/* Footer Content */}
        <div className="text-center space-y-4">
          <div className="font-bubblegum text-3xl font-bold bubble-text-gradient">
            Sumaira Hafeez
          </div>
          
          <p className="font-comic text-gray-700 flex items-center justify-center gap-2">
            Made with <Heart className="w-5 h-5 text-bubble-pink animate-pulse" fill="currentColor" /> 
            and lots of bubble tea! 🧋
          </p>
          
          <div className="font-comic text-sm text-gray-500">
            © 2025 Sumaira Hafeez. All rights reserved. ✨
          </div>
          
          <div className="font-comic text-xs text-gray-400">
            Powered by creativity, caffeine, and code! 💫
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-10 animate-bounce-slow">
          <div className="w-4 h-4 bg-bubble-pink rounded-full opacity-50"></div>
        </div>
        <div className="absolute top-8 right-20 animate-bounce-slow delay-100">
          <div className="w-3 h-3 bg-aqua-blue rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-4 left-1/4 animate-bounce-slow delay-200">
          <div className="w-2 h-2 bg-lemon-yellow rounded-full opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
