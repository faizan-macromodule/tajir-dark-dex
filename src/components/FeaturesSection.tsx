
import { Shield, Lock, Globe, Smartphone, Zap, Users, Gift, Coins, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Gift,
    title: 'Mystery Boxes & Rewards',
    description: 'Earn exclusive NFTs, tokens, and rewards through our gamified quest system. Unlock rare collectibles as you trade.',
    color: 'from-pink-500 to-rose-500',
    interactive: true
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Advanced encryption, biometric authentication, and multi-signature protection keep your assets ultra-secure.',
    color: 'from-green-500 to-emerald-500',
    interactive: true
  },
  {
    icon: Globe,
    title: 'Cross-Chain DeFi Hub',
    description: 'Seamless access to 100+ blockchains with instant swaps, yield farming, and liquidity provision.',
    color: 'from-blue-500 to-cyan-500',
    interactive: true
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Trading',
    description: 'Execute trades in milliseconds with our AI-powered routing engine and MEV protection.',
    color: 'from-yellow-500 to-orange-500',
    interactive: true
  },
  {
    icon: TrendingUp,
    title: 'Smart Portfolio Analytics',
    description: 'AI-driven insights, risk assessment tools, and automated rebalancing for optimal portfolio performance.',
    color: 'from-purple-500 to-violet-500',
    interactive: true
  },
  {
    icon: Coins,
    title: 'Yield Optimization',
    description: 'Maximize returns with automated yield farming, staking rewards, and DeFi strategy recommendations.',
    color: 'from-indigo-500 to-purple-500',
    interactive: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-in-up">
          <div className="inline-block glass-card px-6 py-3 rounded-full mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ✨ Cutting-Edge Features
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Built for the <span className="text-shimmer">Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation DeFi tools designed for both beginners and professionals. 
            Every feature is crafted to make crypto trading intuitive and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group glass-card rounded-3xl p-8 hover:bg-white/25 transition-all duration-500 animate-card-hover interactive-element cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs">✨</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#201743] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-[#201743] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive CTA */}
        <div className="text-center mt-20">
          <div className="glass-card rounded-3xl p-12 max-w-2xl mx-auto interactive-element">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to explore?</h3>
            <p className="text-lg text-gray-600 mb-8">Join millions of users already using Tajir Dex</p>
            <button className="gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 interactive-element">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
