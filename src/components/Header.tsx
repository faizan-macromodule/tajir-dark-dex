
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 animate-glow-pulse">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-shimmer">Tajir Dex</span>
              <span className="text-xs text-gray-500 -mt-1">Crypto Wallet</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Features', 'Security', 'Assets', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-gray-700 hover:text-[#201743] rounded-xl transition-all duration-300 hover:bg-white/20 interactive-element relative group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#201743] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-[#201743] hover:bg-white/20 rounded-xl interactive-element"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="gradient-primary text-white hover:opacity-90 rounded-xl px-6 py-3 interactive-element shadow-lg">
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-white/20 transition-colors interactive-element"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass-card mx-4 rounded-2xl shadow-2xl animate-slide-in-up">
            <nav className="flex flex-col p-6 space-y-4">
              {['Features', 'Security', 'Assets', 'Community'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#201743] py-3 px-4 rounded-xl transition-all hover:bg-white/20 interactive-element"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                <Button variant="ghost" className="text-[#201743] rounded-xl justify-start">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button className="gradient-primary text-white rounded-xl">Download App</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
