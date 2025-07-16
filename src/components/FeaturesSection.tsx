
import { Shield, Lock, Globe, Smartphone, Zap, Users, Gift, Coins, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Gift,
    title: 'Universal Multi-Chain Wallet',
    description: 'One interface, limitless possibilities. Seamlessly manage assets across Bitcoin, Ethereum, Solana, BNB Chain, TRON, TON, and SUI. Full support for stablecoins and custom tokens—your crypto, your control.',
    color: 'from-pink-500 to-rose-500',
    interactive: true
  },
  {
    icon: Shield,
    title: 'Integrated Decentralized Exchange (DEX)',
    description: 'Execute secure, on-chain token swaps using leading aggregators like Uniswap, 1inch, and Jupiter. Access liquidity from multiple sources, with real-time pricing, slippage protection, and advanced gas controls.',
    color: 'from-green-500 to-emerald-500',
    interactive: true
  },
  {
    icon: Globe,
    title: 'NFT Support Across Chains',
    description: 'Collect, view, and manage NFTs easily. Support for ERC-721, ERC-1155, and Solana NFTs. Visualize and organize your collection in a dynamic, metadata-rich NFT gallery with portfolio insights.',
    color: 'from-blue-500 to-cyan-500',
    interactive: true
  },
  {
    icon: Zap,
    title: 'Web3 and DApp Connectivity',
    description: 'Seamless DApp interaction. Connect directly to decentralized apps using WalletConnect and secure in-app sessions. Experience smooth integration with Web3 services from your wallet.',
    color: 'from-yellow-500 to-orange-500',
    interactive: true
  },
  {
    icon: TrendingUp,
    title: 'Cross-Platform by Design',
    description: 'Built for web and mobile—without compromise. Developed with React, Next.js, and Flutter for optimal performance across platforms. Whether on iOS, Android, or desktop, Tajir Dex ensures a consistent, responsive user experience.',
    color: 'from-purple-500 to-violet-500',
    interactive: true
  },
  {
    icon: Coins,
    title: 'Smart Third-Party Integrations',
    description: 'Integrated with the tools that matter. Connect with Apple Pay, Google Pay, Telegram, and more. Enable effortless onboarding, user engagement, and broader Web3 accessibility.',
    color: 'from-indigo-500 to-purple-500',
    interactive: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>

      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-morphing-blob"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-bounce-gentle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-in-up">
          <div className="inline-block glass-card px-6 py-3 rounded-full mb-6 animate-scale-pulse">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ✨ Cutting-Edge Features
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6 animate-slide-in-up stagger-1">
            Purpose-Built for the Evolving World of <span className="text-shimmer">Decentralized Trading</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-2">
            A powerful decentralized exchange and asset management platform built for performance, security, and adaptability. Whether you're new to crypto or a seasoned trader, Tajir Dex empowers every step of your Web3 journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group glass-card rounded-3xl p-8 hover:bg-white/25 transition-all duration-500 animate-card-hover interactive-element cursor-pointer animate-slide-in-up stagger-${(index % 6) + 1}`}
              >
                <div className="relative mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:animate-wiggle transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-gentle transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs">✨</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#201743] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* Interactive CTA */}
        <div className="text-center mt-20 animate-slide-in-up stagger-6">
          <div className="glass-card rounded-3xl p-12 max-w-2xl mx-auto interactive-element animate-glow-pulse">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to explore?</h3>
            <p className="text-lg text-gray-600 mb-8">Join millions of users already using Tajir Wallet</p>
            <button className="gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 interactive-element group">
              <span className="group-hover:animate-wiggle">Start Your Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
