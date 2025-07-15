import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-shimmer">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using Tajir Wallet, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Description of Service</h2>
                <p className="mb-4">
                  Tajir Wallet is a digital cryptocurrency wallet that allows users to store, manage, and transact with various 
                  digital assets. Our service includes wallet functionality, DeFi features, and blockchain interaction capabilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. User Responsibilities</h2>
                <p className="mb-4">As a user of Tajir Wallet, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when required</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Security and Private Keys</h2>
                <p className="mb-4">
                  You are solely responsible for maintaining the confidentiality of your private keys and seed phrases. 
                  Tajir Wallet does not store your private keys and cannot recover them if lost. Loss of private keys 
                  may result in permanent loss of access to your digital assets.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Risks and Disclaimers</h2>
                <p className="mb-4">
                  Cryptocurrency transactions involve significant risks, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Market volatility and potential financial loss</li>
                  <li>Irreversible nature of blockchain transactions</li>
                  <li>Regulatory changes affecting digital assets</li>
                  <li>Technical risks related to blockchain technology</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Limitation of Liability</h2>
                <p className="mb-4">
                  Tajir Holding LTD shall not be liable for any direct, indirect, incidental, special, or consequential 
                  damages resulting from the use or inability to use our service, even if we have been advised of the 
                  possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Modifications</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. Users will be notified of significant changes, 
                  and continued use of the service constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Governing Law</h2>
                <p className="mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. 
                  Any disputes arising from these terms shall be subject to the jurisdiction of the courts in Ras Al Khaimah, UAE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contact Information</h2>
                <p>
                  For questions regarding these Terms & Conditions, please contact us at legal@tajirwallet.com or 
                  write to us at our headquarters address listed in the footer.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default TermsConditions;