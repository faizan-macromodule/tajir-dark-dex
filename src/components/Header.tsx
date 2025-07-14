
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Tajir Dex</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#201743] transition-colors">Features</a>
            <a href="#security" className="text-gray-600 hover:text-[#201743] transition-colors">Security</a>
            <a href="#assets" className="text-gray-600 hover:text-[#201743] transition-colors">Assets</a>
            <a href="#community" className="text-gray-600 hover:text-[#201743] transition-colors">Community</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-[#201743] text-[#201743] hover:bg-[#201743] hover:text-white">
              Login
            </Button>
            <Button className="gradient-primary text-white hover:opacity-90">
              Download
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#features" className="text-gray-600 hover:text-[#201743] transition-colors">Features</a>
              <a href="#security" className="text-gray-600 hover:text-[#201743] transition-colors">Security</a>
              <a href="#assets" className="text-gray-600 hover:text-[#201743] transition-colors">Assets</a>
              <a href="#community" className="text-gray-600 hover:text-[#201743] transition-colors">Community</a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" className="border-[#201743] text-[#201743]">Login</Button>
                <Button className="gradient-primary text-white">Download</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
