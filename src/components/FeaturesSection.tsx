
import { Shield, Lock, Globe, Smartphone, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Mystery Boxes',
    description: 'Earn Your Quest Points and discover exclusive rewards in our gamified ecosystem.',
    color: 'bg-blue-500'
  },
  {
    icon: Lock,
    title: 'Building on Trust',
    description: 'Your assets are secured with military-grade encryption and advanced security protocols.',
    color: 'bg-green-500'
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description: 'Access millions of assets across 100+ blockchains with seamless cross-chain swaps.',
    color: 'bg-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Trade, stake, and manage your portfolio on-the-go with our intuitive mobile app.',
    color: 'bg-orange-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute trades and swaps in seconds with our optimized trading engine.',
    color: 'bg-yellow-500'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join millions of users in the most trusted Web3 wallet community.',
    color: 'bg-pink-500'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful features for <span className="text-gradient">crypto enthusiasts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage, trade, and grow your crypto portfolio in one secure platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#201743]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
