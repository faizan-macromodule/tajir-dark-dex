import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-shimmer">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
                <p className="mb-4">
                  At Tajir Wallet, we are committed to protecting your privacy. We collect information you provide directly to us, 
                  such as when you create an account, use our services, or contact us for support.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (email, username)</li>
                  <li>Transaction data (for security and compliance purposes)</li>
                  <li>Device information and usage analytics</li>
                  <li>Support communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our wallet services</li>
                  <li>Process transactions and ensure security</li>
                  <li>Communicate with you about updates and security issues</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and enhance security measures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, rent, or share your personal information with third parties except as described in this policy. 
                  We may share information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist our operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Security</h2>
                <p className="mb-4">
                  We implement industry-standard security measures to protect your information. This includes encryption, 
                  secure servers, and regular security audits. However, no method of transmission over the internet is 
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at privacy@tajirwallet.com or 
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

export default PrivacyPolicy;