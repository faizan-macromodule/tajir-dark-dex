
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, ArrowUpRight, Zap, Target, PieChart } from 'lucide-react';

const AssetsSection = () => {
  const cryptoAssets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$67,432', change: '+3.2%', positive: true, icon: '₿', color: 'from-orange-400 to-orange-600' },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,247', change: '+2.8%', positive: true, icon: 'Ξ', color: 'from-blue-400 to-blue-600' },
    { name: 'Solana', symbol: 'SOL', price: '$142.34', change: '+8.5%', positive: true, icon: '◎', color: 'from-purple-400 to-purple-600' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.68', change: '-1.2%', positive: false, icon: '₳', color: 'from-blue-500 to-indigo-600' },
    { name: 'Polygon', symbol: 'MATIC', price: '$1.24', change: '+5.7%', positive: true, icon: '⬟', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="assets" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-in-up text-white">
          <div className="inline-block glass px-6 py-3 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-200">
              💰 Asset Management
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              Everything
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Access 500+ cryptocurrencies across 100+ blockchains. From Bitcoin to the latest DeFi tokens, 
            everything you need is at your fingertips.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Portfolio Overview */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Portfolio</h3>
                  <p className="text-blue-200">Real-time market data</p>
                </div>
                <div className="flex space-x-3">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white rounded-xl">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Buy
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-purple-700 rounded-xl">
                    <Zap className="w-4 h-4 mr-2" />
                    Swap
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <div className="space-y-4">
                  {cryptoAssets.map((asset, index) => (
                    <div 
                      key={index} 
                      className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group interactive-element"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${asset.color} rounded-2xl flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform`}>
                            {asset.icon}
                          </div>
                          <div>
                            <div className="font-bold text-white text-lg group-hover:text-blue-200 transition-colors">
                              {asset.name}
                            </div>
                            <div className="text-blue-200 text-sm">{asset.symbol}</div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-bold text-white text-lg">{asset.price}</div>
                          <div className={`flex items-center text-sm font-medium ${
                            asset.positive ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {asset.positive ? (
                              <TrendingUp className="w-4 h-4 mr-1" />
                            ) : (
                              <TrendingDown className="w-4 h-4 mr-1" />
                            )}
                            {asset.change}
                          </div>
                        </div>
                        
                        <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">$127,439.82</h3>
              <p className="text-green-400 font-medium mb-4">+15.3% (24h)</p>
              <p className="text-blue-200 text-sm">Total Portfolio Value</p>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <PieChart className="w-5 h-5 mr-2" />
                Quick Stats
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Total Assets', value: '500+', color: 'text-blue-400' },
                  { label: 'NFT Collections', value: '1.2M+', color: 'text-purple-400' },
                  { label: 'Supported Chains', value: '100+', color: 'text-green-400' },
                  { label: 'Daily Volume', value: '$2.1B', color: 'text-yellow-400' },
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-blue-200 text-sm">{stat.label}</span>
                    <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 max-w-2xl mx-auto interactive-element">
            <h3 className="text-3xl font-bold text-white mb-4">Start Trading Today</h3>
            <p className="text-blue-200 text-lg mb-8">
              Join millions of traders and investors using Tajir Dex
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl px-8 py-4 interactive-element">
                Start Trading
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-purple-700 rounded-2xl px-8 py-4 interactive-element">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
