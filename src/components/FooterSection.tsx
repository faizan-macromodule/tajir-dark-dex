
import { Shield, Twitter, Github, MessageCircle, Mail, ArrowUpRight, Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#201743] to-purple-900"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 animate-glow-pulse">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-shimmer">Tajir Dex</span>
                  <div className="text-sm text-blue-200 -mt-1">Next-Gen Crypto Wallet</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                The most trusted multi-chain Web3 wallet for millions of users worldwide. 
                Experience the future of decentralized finance today.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, label: 'Twitter', href: '#' },
                  { icon: Github, label: 'GitHub', href: '#' },
                  { icon: MessageCircle, label: 'Discord', href: '#' },
                  { icon: Mail, label: 'Email', href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 interactive-element group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-200">Products</h3>
              <ul className="space-y-4">
                {['Wallet App', 'Browser Extension', 'Mobile Trading', 'Desktop Suite', 'API Access'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors interactive-element flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-200">DeFi Features</h3>
              <ul className="space-y-4">
                {['Instant Swaps', 'Yield Farming', 'NFT Marketplace', 'Staking Rewards', 'Cross-Chain'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors interactive-element flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-200">Support</h3>
              <ul className="space-y-4">
                {['Help Center', '24/7 Support', 'Security Guide', 'Bug Bounty', 'Developer Docs'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors interactive-element flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card rounded-3xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest updates on new features, security improvements, and market insights.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="gradient-primary px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity interactive-element">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <p className="text-gray-300">
                  © 2024 Tajir Dex. Made with
                </p>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <p className="text-gray-300">for the crypto community.</p>
              </div>
              <div className="flex space-x-8 text-gray-300">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="hover:text-white transition-colors interactive-element"
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
