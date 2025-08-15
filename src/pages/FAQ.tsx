import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQ = () => {
  const faqSections = [
    {
      title: "General Questions",
      badge: "Getting Started",
      questions: [
        {
          question: "What is Tajir DEX?",
          answer: "Tajir DEX is a decentralized exchange that allows you to create, import, and manage cryptocurrency wallets, buy and sell assets, and swap tokens securely without relying on a central authority. All transactions happen directly on the blockchain."
        },
        {
          question: "How is Tajir DEX different from centralized exchanges?",
          answer: "Unlike centralized exchanges, Tajir DEX does not hold your funds. You have full control over your private keys, and trades happen directly between users via smart contracts."
        }
      ]
    },
    {
      title: "Wallet Management",
      badge: "Wallets",
      questions: [
        {
          question: "How do I create a new wallet on Tajir DEX?",
          answer: "You can create a new wallet by selecting \"Create Wallet\" in the app. You'll receive a recovery phrase (seed phrase) – store it securely as it is the only way to restore your wallet if you lose access."
        },
        {
          question: "Can I import an existing wallet?",
          answer: "Yes. Use the \"Import Wallet\" option and enter your existing recovery phrase or private key to access your current wallet and funds."
        },
        {
          question: "How can I view my wallet assets?",
          answer: "After creating or importing a wallet, you can see all your token balances and asset details in the \"Wallet Assets\" section."
        }
      ]
    },
    {
      title: "Buying and Selling Assets",
      badge: "Trading",
      questions: [
        {
          question: "How do I buy assets on Tajir DEX?",
          answer: "Choose the asset you want to purchase, specify the amount, and follow the on-screen instructions. You'll need a sufficient balance of supported tokens or stablecoins to complete the transaction."
        },
        {
          question: "How do I sell assets?",
          answer: "Select the token you want to sell, enter the amount, and confirm the trade. The proceeds will be credited to your wallet instantly after the transaction is confirmed on the blockchain."
        }
      ]
    },
    {
      title: "Swapping Assets (ChangeNOW Integration)",
      badge: "Swaps",
      questions: [
        {
          question: "What is the Swap feature?",
          answer: "The Swap feature allows you to instantly exchange one cryptocurrency for another without going through a traditional buy/sell process. Tajir DEX uses ChangeNOW to provide fast, secure swaps at competitive rates."
        },
        {
          question: "How do I swap assets?",
          answer: "Go to Swap, select the token you want to exchange and the token you want to receive, enter the amount, and confirm. Your assets will be swapped directly into your wallet after blockchain confirmation."
        },
        {
          question: "Are there any fees for swapping?",
          answer: "Tajir DEX does not charge extra fees for swaps, but blockchain network fees and ChangeNOW service fees may apply."
        }
      ]
    },
    {
      title: "Security and Privacy",
      badge: "Security",
      questions: [
        {
          question: "Does Tajir DEX store my private keys?",
          answer: "No. Your private keys and recovery phrases are stored only on your device. We never have access to them."
        },
        {
          question: "What happens if I lose my recovery phrase?",
          answer: "If you lose your recovery phrase, there is no way to restore your wallet or access your funds. Always store it in a safe, offline location."
        },
        {
          question: "Is KYC required to use Tajir DEX?",
          answer: "No, Tajir DEX is fully decentralized and does not require KYC (Know Your Customer) verification."
        }
      ]
    },
    {
      title: "Troubleshooting",
      badge: "Support",
      questions: [
        {
          question: "My transaction is stuck. What should I do?",
          answer: "Sometimes blockchain congestion can delay transactions. You can check the transaction status on a blockchain explorer. If it's pending for too long, you may need to adjust gas fees and try again."
        },
        {
          question: "Why can't I see a newly bought token in my wallet?",
          answer: "You may need to manually add the token contract address in your wallet to see it. This is common with new or less-known tokens."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked <span className="text-shimmer">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Tajir Wallet. Can't find the answer you're looking for? 
            Please chat with our friendly team.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  {section.badge}
                </Badge>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`section-${sectionIndex}-item-${index}`}
                    className="border border-white/20 rounded-xl px-6 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center glass-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Can't find the answer you're looking for? Please get in touch with our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;