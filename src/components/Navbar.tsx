
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Volunteer', id: 'volunteer' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg border-b border-bubble-pink/20 dark:border-purple-500/30 shadow-lg dark:shadow-purple-500/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bubblegum text-2xl font-bold bubble-text-gradient">
            Portfolio ✨
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="font-comic text-gray-700 dark:text-gray-200 hover:text-bubble-pink dark:hover:text-purple-300 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-400 dark:to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="bounce-button bg-gradient-to-r from-bubble-pink/10 to-aqua-blue/10 dark:from-purple-500/20 dark:to-pink-500/20 hover:from-bubble-pink/20 hover:to-aqua-blue/20 dark:hover:from-purple-500/30 dark:hover:to-pink-500/30 rounded-full border-2 border-transparent hover:border-bubble-pink dark:hover:border-purple-400 transition-all duration-300"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-lemon-yellow animate-pulse" />
              ) : (
                <Moon className="h-5 w-5 text-bubble-pink" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden bounce-button bg-gradient-to-r from-bubble-pink/10 to-aqua-blue/10 dark:from-purple-500/20 dark:to-pink-500/20 hover:from-bubble-pink/20 hover:to-aqua-blue/20 dark:hover:from-purple-500/30 dark:hover:to-pink-500/30 rounded-full border-2 border-transparent hover:border-bubble-pink dark:hover:border-purple-400 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-bubble-pink dark:text-purple-300" />
              ) : (
                <Menu className="h-5 w-5 text-bubble-pink dark:text-purple-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-bubble-pink/20 dark:border-purple-500/30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="font-comic text-left text-gray-700 dark:text-gray-200 hover:text-bubble-pink dark:hover:text-purple-300 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-bubble-pink/10 dark:hover:bg-purple-500/20"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
