
import { Button } from '@/components/ui/button';
import { Shield, Download, Smartphone, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>Trusted by 70M+ users</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              True crypto ownership.
              <br />
              <span className="text-gradient">Powerful Web3</span>
              <br />
              experiences
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Store, send, and swap crypto safely with Tajir Dex - the most trusted multi-chain Web3 wallet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 group">
                <Download className="w-5 h-5 mr-2" />
                Download Tajir Dex
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#201743] text-[#201743] hover:bg-[#201743] hover:text-white">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile App
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-[#201743]">70M+</div>
                <div className="text-sm text-gray-500">People</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#201743]">300+</div>
                <div className="text-sm text-gray-500">Assets</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#201743]">99.9%</div>
                <div className="text-sm text-gray-500">Up-time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#201743]">A+</div>
                <div className="text-sm text-gray-500">Security</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mock Phone */}
          <div className="relative lg:ml-12">
            <div className="relative animate-float">
              <div className="w-80 h-96 gradient-primary rounded-3xl p-6 shadow-2xl animate-pulse-glow">
                <div className="bg-white/10 rounded-2xl h-full p-4 backdrop-blur-sm">
                  <div className="text-white mb-4">
                    <div className="text-sm opacity-75">Total Balance</div>
                    <div className="text-2xl font-bold">$47,832.61</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Bitcoin', symbol: 'BTC', amount: '1.5432', value: '$32,486' },
                      { name: 'Ethereum', symbol: 'ETH', amount: '8.2134', value: '$12,847' },
                      { name: 'Solana', symbol: 'SOL', amount: '45.23', value: '$2,499' },
                    ].map((asset, index) => (
                      <div key={index} className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                          <div>
                            <div className="text-white font-medium text-sm">{asset.name}</div>
                            <div className="text-white/60 text-xs">{asset.amount} {asset.symbol}</div>
                          </div>
                        </div>
                        <div className="text-white font-medium">{asset.value}</div>
                      </div>
                    ))}
                  </div>
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
