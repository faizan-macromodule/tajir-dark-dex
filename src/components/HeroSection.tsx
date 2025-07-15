
import { Button } from '@/components/ui/button';
import { Shield, Download, Smartphone, ArrowRight, Zap, TrendingUp, Star } from 'lucide-react';
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";

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
                Tajir Dex is your gateway to the future of trading — a cutting-edge decentralized exchange with a powerful multi-chain wallet, full NFT support, seamless Web3 & DApp integration, and advanced swap, market & limit order capabilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up stagger-5">
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 group rounded-2xl px-8 py-4 text-lg font-semibold shadow-xl interactive-element animate-glow-pulse"
              >
                <BsAndroid2 className="w-6 h-6 mr-3" />
                Download Android
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#201743] text-[#201743] hover:bg-[#201743] hover:text-white rounded-2xl px-8 py-4 text-lg font-semibold interactive-element"
              >
                <FaApple className="w-6 h-6 mr-3" />
                Download IOS
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { value: '100+', label: 'Active Users', icon: TrendingUp },
                { value: '100+', label: 'Crypto Assets', icon: Zap },
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

          {/* Right Content - App Preview Image */}
          <div className="relative lg:ml-16 animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1B60E7]/20 to-[#0B0A2F]/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-700 animate-float">
                <img
                  src="/lovable-uploads/acf24b47-ff98-452e-8541-94faf009fc88.png"
                  alt="Tajir Wallet App Interface"
                  className="w-full max-w-sm h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
