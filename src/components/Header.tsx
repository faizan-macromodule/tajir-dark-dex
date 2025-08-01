
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { FaApple } from 'react-icons/fa';
import { BsAndroid2 } from 'react-icons/bs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group animate-slide-in-left">
            <div className="w-12 h-12 flex items-center justify-center transform group-hover:rotate-12 group-hover:animate-wiggle transition-transform duration-300">
              <img
                src="/lovable-uploads/Tajir wallet.png"
                alt="Tajir Wallet Logo"
                className="w-10 h-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-shimmer">Tajir Wallet</span>
              <span className="text-xs text-black -mt-1">Secure Crypto Wallet</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 animate-fade-in stagger-2">
            {['Features', 'Security', 'Assets', 'Community'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 text-black hover:text-[#1B60E7] rounded-xl transition-all duration-300 hover:bg-white/20 interactive-element relative group animate-slide-in-up stagger-${index + 1}`}
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#1B60E7] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3 animate-slide-in-right">
            <Button
              variant="ghost"
              className="text-[#1B60E7] bg-white/50 rounded-xl interactive-element group"
            >

              <BsAndroid2 className="w-6 h-6 mr-3" />
              Download Android
            </Button>
            <Button className="gradient-primary text-white hover:opacity-90 rounded-xl px-6 py-3 interactive-element shadow-lg animate-glow-pulse group">
              <FaApple className="w-6 h-6 mr-3" />
              <span className="group-hover:animate-scale-pulse">Download iOS</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-white/20 transition-colors interactive-element group animate-slide-in-right"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ?
              <X className="w-6 h-6 group-hover:animate-wiggle" /> :
              <Menu className="w-6 h-6 group-hover:animate-wiggle" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass-card mx-4 rounded-2xl shadow-2xl animate-slide-in-up">
            <nav className="flex flex-col p-6 space-y-4">
              {['Features', 'Security', 'Assets', 'Community'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-700 hover:text-[#1B60E7] py-3 px-4 rounded-xl transition-all hover:bg-white/20 interactive-element animate-slide-in-left stagger-${index + 1}`}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                <Button variant="ghost" className="text-[#1B60E7] rounded-xl justify-start group">
                  <Sparkles className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
                  Download Android
                </Button>
                <Button className="gradient-primary text-white rounded-xl group">
                  <span className="group-hover:animate-scale-pulse">Download iOS</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
