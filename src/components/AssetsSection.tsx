
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, ArrowUpRight, Zap, Target, PieChart } from 'lucide-react';

const AssetsSection = () => {
  const cryptoAssets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$116,247', change: '-3.6%', positive: false, icon: '₿', color: 'from-orange-400 to-orange-600' },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,994.19', change: '-1.0%', positive: false, icon: 'Ξ', color: 'from-blue-400 to-blue-600' },
    { name: 'Solana', symbol: 'SOL', price: '$158.51', change: '-4.1%', positive: false, icon: '◎', color: 'from-purple-400 to-purple-600' },
    { name: 'Tajir', symbol: 'TJRM', price: '$0.0065', change: '-11.1%', positive: false, icon: "lovable-uploads/tajirTechHub.svg", color: 'from-blue-500 to-indigo-600' },
    { name: 'Polygon', symbol: 'MATIC', price: '$0.2238', change: '-5.7%', positive: false, icon: '⬟', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="assets" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-28 h-28 bg-white/5 rounded-full animate-morphing-blob"></div>
      <div className="absolute bottom-30 left-30 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-rotate-slow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-in-up text-white">
          <div className="inline-block glass px-6 py-3 rounded-full mb-6 animate-scale-pulse">
            <span className="text-sm font-semibold text-blue-200">
              💰 Asset Management
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-up stagger-1">
            Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-gradient-shift">
              Everything
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-2">
            Access 500+ cryptocurrencies across 100+ blockchains. From Bitcoin to the latest DeFi tokens,
            everything you need is at your fingertips.
          </p>
        </div>

        {/* Portfolio Section Centered */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl animate-slide-in-left">
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 animate-slide-in-up stagger-1">Your Portfolio</h3>
                  <p className="text-blue-200 animate-fade-in stagger-2">Real-time market data</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className="space-y-4">
                  {cryptoAssets.map((asset, index) => (
                    <div
                      key={index}
                      className={`glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group interactive-element animate-slide-in-up stagger-${index + 1}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 w-[150px]">
                          {asset.symbol === "TJRM" ? (
                            <div className="w-12 h-12 bg-gradient-to-r rounded-2xl flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 group-hover:animate-wiggle transition-transform">
                              <img src={asset.icon} className="w-full h-full p-1" />
                            </div>
                          ) : (
                            <div className={`w-12 h-12 bg-gradient-to-r ${asset.color} rounded-2xl flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 group-hover:animate-wiggle transition-transform`}>
                              {asset.icon}
                            </div>
                          )}
                          <div>
                            <div className="font-bold text-white text-lg group-hover:text-blue-200 transition-colors">
                              {asset.name}
                            </div>
                            <div className="text-blue-200 text-sm">{asset.symbol}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white text-lg">{asset.price}</div>
                          <div className={`flex justify-end items-center text-sm font-medium ${asset.positive ? 'text-green-400' : 'text-red-400'}`}>
                            {asset.positive ? (
                              <TrendingUp className="w-4 h-4 mr-1 animate-bounce-gentle" />
                            ) : (
                              <TrendingDown className="w-4 h-4 mr-1 animate-bounce-gentle" />
                            )}
                            {asset.change}
                          </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:animate-bounce-gentle transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-in-up stagger-6" id="community">
          <div className="glass-card rounded-3xl p-12 max-w-2xl mx-auto interactive-element animate-glow-pulse">
            <h3 className="text-3xl font-bold text-white mb-4">Start Trading Today</h3>
            <p className="text-blue-200 text-lg mb-8">
              Join millions of traders and investors using Tajir Dex
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl px-8 py-4 interactive-element group">
                <span className="group-hover:animate-wiggle">Start Trading</span>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white hover:text-purple-700 rounded-2xl px-8 py-4 interactive-element">
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
