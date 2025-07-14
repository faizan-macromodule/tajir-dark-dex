
import { Shield, Lock, Eye, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecuritySection = () => {
  return (
    <section id="security" className="py-20 gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Building on Trust</h2>
            <p className="text-xl mb-8 text-blue-100">
              Your crypto assets are protected by industry-leading security measures, 
              giving you complete control and peace of mind.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bank-Grade Security</h3>
                  <p className="text-blue-100">Your private keys are encrypted and stored securely on your device.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Open Source Audited</h3>
                  <p className="text-blue-100">Our code is transparently audited by leading security firms.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Fingerprint className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Biometric Protection</h3>
                  <p className="text-blue-100">Secure your wallet with fingerprint and face recognition.</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#201743]">
              Learn About Security
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Secure by Design</h3>
                  <p className="text-blue-100">Zero personal tracking. Your privacy is guaranteed.</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Added security with encryption',
                    'Zero personal tracking',
                    'Private alerts for risky transactions'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
