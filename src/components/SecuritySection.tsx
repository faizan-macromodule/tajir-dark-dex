
import { Shield, Lock, Eye, Fingerprint, KeyRound, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-up text-white">
            <div className="inline-block glass px-6 py-3 rounded-full mb-8">
              <span className="text-sm font-semibold text-blue-100">
                🔒 Bank-Level Security
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Your Assets, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Absolutely Secure
              </span>
            </h2>
            
            <p className="text-xl mb-12 text-blue-100 leading-relaxed">
              Built with military-grade encryption and cutting-edge security protocols. 
              Your crypto is protected by the same technology used by major financial institutions.
            </p>
            
            <div className="space-y-8 mb-12">
              {[
                {
                  icon: Lock,
                  title: 'End-to-End Encryption',
                  description: 'AES-256 encryption ensures your private keys never leave your device unprotected.'
                },
                {
                  icon: Eye,
                  title: 'Open Source & Audited',
                  description: 'Transparent code audited by leading security firms including CertiK and Quantstamp.'
                },
                {
                  icon: Fingerprint,
                  title: 'Biometric Authentication',
                  description: 'Face ID, Touch ID, and voice recognition for seamless yet secure access.'
                },
                {
                  icon: KeyRound,
                  title: 'Multi-Signature Wallets',
                  description: 'Enterprise-grade multi-sig protection for high-value transactions.'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-6 group interactive-element"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-blue-200 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-blue-100/80 leading-relaxed group-hover:text-blue-100 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-[#201743] rounded-2xl px-8 py-4 text-lg font-semibold interactive-element"
            >
              <ShieldCheck className="w-6 h-6 mr-3" />
              View Security Audit
            </Button>
          </div>

          <div className="relative lg:ml-12">
            <div className="relative animate-float-gentle">
              {/* Main security card */}
              <div className="glass rounded-3xl p-8 max-w-md mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-16 -mt-16"></div>
                
                <div className="text-center mb-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Security Score</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">98.7%</div>
                  <p className="text-blue-100 text-sm">Industry Leading</p>
                </div>
                
                <div className="space-y-4 relative z-10">
                  {[
                    { label: 'Encryption Strength', value: '100%', color: 'bg-green-400' },
                    { label: 'Audit Coverage', value: '95%', color: 'bg-blue-400' },
                    { label: 'Uptime Guarantee', value: '99.9%', color: 'bg-purple-400' }
                  ].map((metric, index) => (
                    <div key={index} className="glass rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">{metric.label}</span>
                        <span className="text-white font-bold">{metric.value}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className={`h-full ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: metric.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating security badges */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl p-4 animate-bounce" style={{ animationDelay: '1s' }}>
                <Lock className="w-6 h-6 text-blue-200" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 animate-bounce" style={{ animationDelay: '2s' }}>
                <Fingerprint className="w-6 h-6 text-purple-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
