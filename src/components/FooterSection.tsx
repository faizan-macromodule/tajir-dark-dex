import { Twitter, Github, MessageCircle, Mail, ArrowUpRight, Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0B0A2F] to-purple-900"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-morphing-blob"></div>
      <div className="absolute bottom-40 left-40 w-20 h-20 bg-purple-400/10 rounded-full animate-bounce-gentle"></div>
      
      <div className="relative z-10 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2 animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-14 h-14 flex items-center justify-center group-hover:rotate-12 group-hover:animate-wiggle transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/630a4ad5-ae09-42c8-ae92-be4b1785c129.png" 
                    alt="Tajir Wallet Logo" 
                    className="w-12 h-12 animate-glow-pulse"
                  />
                </div>
                <div>
                  <span className="text-3xl font-bold text-shimmer">Tajir Wallet</span>
                  <div className="text-sm text-blue-200 -mt-1">Secure Crypto Wallet</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg animate-fade-in stagger-1">
                The most trusted multi-chain crypto wallet for millions of users worldwide. 
                Experience the future of decentralized finance with ultimate security.
              </p>
              
              <div className="flex space-x-4 animate-slide-in-up stagger-2">
                {[
                  { icon: Twitter, label: 'Twitter', href: '#' },
                  { icon: Github, label: 'GitHub', href: '#' },
                  { icon: MessageCircle, label: 'Discord', href: '#' },
                  { icon: Mail, label: 'Email', href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 interactive-element group animate-scale-pulse stagger-${index + 1}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 group-hover:animate-wiggle transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="animate-slide-in-up stagger-1">
              <h3 className="font-bold text-lg mb-6 text-blue-200">Products</h3>
              <ul className="space-y-4">
                {['Wallet App', 'Browser Extension', 'Mobile Trading', 'Desktop Suite', 'API Access'].map((item, index) => (
                  <li key={index} className={`animate-slide-in-up stagger-${index + 1}`}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors interactive-element flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:animate-bounce-gentle transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="animate-slide-in-up stagger-2">
              <h3 className="font-bold text-lg mb-6 text-blue-200">DeFi Features</h3>
              <ul className="space-y-4">
                {['Instant Swaps', 'Yield Farming', 'NFT Marketplace', 'Staking Rewards', 'Cross-Chain'].map((item, index) => (
                  <li key={index} className={`animate-slide-in-up stagger-${index + 1}`}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors interactive-element flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:animate-bounce-gentle transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="animate-slide-in-up stagger-3">
              <h3 className="font-bold text-lg mb-6 text-blue-200">Support</h3>
              <ul className="space-y-4">
                {['Help Center', '24/7 Support', 'Security Guide', 'Bug Bounty', 'Developer Docs'].map((item, index) => (
                  <li key={index} className={`animate-slide-in-up stagger-${index + 1}`}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors interactive-element flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:animate-bounce-gentle transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card rounded-3xl p-8 mb-12 text-center animate-slide-in-up stagger-4">
            <h3 className="text-2xl font-bold mb-4 animate-slide-in-up stagger-1">Stay Updated</h3>
            <p className="text-gray-300 mb-6 animate-fade-in stagger-2">Get the latest updates on new features, security improvements, and market insights.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-slide-in-up stagger-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <button className="gradient-primary px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity interactive-element group">
                <span className="group-hover:animate-wiggle">Subscribe</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 animate-fade-in stagger-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <p className="text-gray-300">
                  © 2024 Tajir Wallet. Made with
                </p>
                <Heart className="w-4 h-4 text-red-400 animate-scale-pulse" />
                <p className="text-gray-300">for the crypto community.</p>
              </div>
              <div className="flex space-x-8 text-gray-300">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`hover:text-white transition-colors interactive-element animate-slide-in-up stagger-${index + 1}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
