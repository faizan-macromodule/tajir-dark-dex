
import { Button } from '@/components/ui/button';
import { Shield, Download, Smartphone, ArrowRight, Zap, TrendingUp, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-60"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-morphing-blob"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-rotate-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full interactive-element animate-scale-pulse">
                <Shield className="w-5 h-5 text-green-600 animate-wiggle" />
                <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Trusted by 70M+ users
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 text-yellow-400 fill-current animate-bounce-gentle stagger-${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 animate-slide-in-up stagger-1">Next-Gen</span>
                <span className="block text-shimmer animate-slide-in-up stagger-2">Web3 Wallet</span>
                <span className="block text-gray-700 text-4xl lg:text-5xl mt-2 animate-slide-in-up stagger-3">
                  Experience
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed animate-fade-in stagger-4">
                Unlock the future of DeFi with Tajir Dex - where cutting-edge security meets 
                intuitive design. Trade, stake, and manage your crypto portfolio like never before.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up stagger-5">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 group rounded-2xl px-8 py-4 text-lg font-semibold shadow-xl interactive-element animate-glow-pulse"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce-gentle" />
                Download Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#201743] text-[#201743] hover:bg-[#201743] hover:text-white rounded-2xl px-8 py-4 text-lg font-semibold interactive-element"
              >
                <Smartphone className="w-6 h-6 mr-3" />
                Mobile App
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { value: '70M+', label: 'Active Users', icon: TrendingUp },
                { value: '500+', label: 'Crypto Assets', icon: Zap },
                { value: '99.9%', label: 'Uptime', icon: Shield },
                { value: 'A+', label: 'Security Rating', icon: Star },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-4 rounded-2xl text-center group hover:bg-white/25 transition-all duration-300 interactive-element animate-card-hover animate-slide-in-up stagger-${index + 1}`}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#201743] group-hover:scale-110 group-hover:animate-wiggle transition-transform" />
                  <div className="text-2xl font-bold text-[#201743]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Phone */}
          <div className="relative lg:ml-16 animate-slide-in-right">
            <div className="relative animate-float-gentle">
              <div className="w-80 h-[500px] gradient-primary rounded-[3rem] p-2 shadow-2xl animate-glow-pulse mx-auto">
                <div className="w-full h-full bg-black/10 rounded-[2.5rem] p-6 backdrop-blur-sm relative overflow-hidden">
                  {/* Phone content */}
                  <div className="text-white space-y-6">
                    <div className="flex justify-between items-center animate-slide-in-up stagger-1">
                      <div className="text-sm opacity-75">Portfolio</div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-scale-pulse"></div>
                        <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce-gentle"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 animate-slide-in-up stagger-2">
                      <div className="text-sm opacity-75">Total Balance</div>
                      <div className="text-4xl font-bold">$84,247.82</div>
                      <div className="text-green-400 text-sm font-medium flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1 animate-bounce-gentle" />
                        +12.5% (24h)
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { name: 'Bitcoin', symbol: 'BTC', amount: '2.1547', value: '$47,832', change: '+2.4%', color: 'bg-orange-500' },
                        { name: 'Ethereum', symbol: 'ETH', amount: '12.847', value: '$28,490', change: '+1.8%', color: 'bg-blue-500' },
                        { name: 'Solana', symbol: 'SOL', amount: '89.23', value: '$7,925', change: '+5.2%', color: 'bg-purple-500' },
                      ].map((asset, index) => (
                        <div 
                          key={index} 
                          className={`glass p-4 rounded-2xl flex justify-between items-center group hover:bg-white/20 transition-all cursor-pointer animate-slide-in-up stagger-${index + 3}`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${asset.color} rounded-full flex items-center justify-center group-hover:animate-scale-pulse`}>
                              <span className="text-white text-xs font-bold">{asset.symbol[0]}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{asset.name}</div>
                              <div className="text-xs opacity-60">{asset.amount} {asset.symbol}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{asset.value}</div>
                            <div className="text-green-400 text-xs">{asset.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-scale-pulse"></div>
                  <div className="absolute bottom-20 left-4 w-8 h-8 bg-blue-400/30 rounded-full animate-bounce-gentle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
