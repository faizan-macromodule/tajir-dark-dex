import { Twitter, Github, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0B0A2F] to-purple-900"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full animate-morphing-blob"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-400/10 rounded-full animate-bounce-gentle"></div>

      <div className="relative z-10 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          
            <div className="mb-8 md:mb-0 animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 flex items-center  justify-center group-hover:rotate-12 group-hover:animate-wiggle transition-transform duration-300">
                  <img
                    src="/lovable-uploads/Tajir wallet.png"
                    alt="Tajir Wallet Logo"
                    className="w-10 h-10 "
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-shimmer">Tajir Wallet</span>
                  <div className="text-sm text-blue-200 -mt-1">Secure Crypto Wallet</div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md animate-fade-in stagger-1">
                The most trusted multi-chain crypto wallet for secure digital asset management.
              </p>
            </div>

            
            <div className="animate-slide-in-right">
              <h3 className="font-bold text-lg mb-4 text-blue-200">Connect With Us</h3>
              <div className="flex space-x-3">
                {[
                  { icon: Twitter, label: 'Twitter', href: 'https://x.com/tajirwallet?s=21' }
                  // { icon: Github, label: 'GitHub', href: '#' },
                  // { icon: MessageCircle, label: 'Discord', href: '#' },
                  // { icon: Mail, label: 'Email', href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target='_blank'
                    className={`w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 interactive-element group animate-scale-pulse stagger-${index + 1}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 group-hover:animate-wiggle transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-b-gray-500 pt-8 animate-fade-in stagger-2">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-sm mb-2">
                  © 2025 Tajir Holding LTD. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs">
                  Office A, Ground Floor, Al Rifaa, Sheikh Mohammed Bin Zayed Road,<br />
                  Ras Al Khaimah, United Arab Emirates
                </p>
              </div>
              <div className="flex space-x-6 text-gray-300 text-sm">
                <Link
                  to="/faq"
                  className="hover:text-white transition-colors interactive-element"
                >
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors interactive-element"
                >
                  Contact
                </Link>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors interactive-element"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="hover:text-white transition-colors interactive-element"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
