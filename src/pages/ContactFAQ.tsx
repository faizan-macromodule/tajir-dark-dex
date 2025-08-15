import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactFAQ = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqSections = [
    {
      title: "General Questions",
      badge: "Getting Started",
      questions: [
        {
          question: "What is Tajir Wallet?",
          answer: "Tajir Wallet is a decentralized exchange that allows you to create, import, and manage cryptocurrency wallets, buy and sell assets, and swap tokens securely without relying on a central authority. All transactions happen directly on the blockchain."
        },
        {
          question: "How is Tajir Wallet different from centralized exchanges?",
          answer: "Unlike centralized exchanges, Tajir Wallet does not hold your funds. You have full control over your private keys, and trades happen directly between users via smart contracts."
        }
      ]
    },
    {
      title: "Wallet Management",
      badge: "Wallets",
      questions: [
        {
          question: "How do I create a new wallet on Tajir Wallet?",
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
          question: "How do I buy assets on Tajir Wallet?",
          answer: "Choose the asset you want to purchase, specify the amount, and follow the on-screen instructions. You'll need a sufficient balance of supported tokens or stablecoins to complete the transaction."
        },
        {
          question: "How do I sell assets?",
          answer: "Select the token you want to sell, enter the amount, and confirm the trade. The proceeds will be credited to your wallet instantly after the transaction is confirmed on the blockchain."
        }
      ]
    },
    {
      title: "Buying Crypto with MoonPay",
      badge: "Fiat Purchase",
      questions: [
        {
          question: "What is MoonPay integration?",
          answer: "Tajir Wallet integrates with MoonPay to allow you to purchase cryptocurrencies directly with your credit card, debit card, or bank transfer. This makes it easy to get started with crypto without needing to use external exchanges."
        },
        {
          question: "How do I buy crypto with fiat currency?",
          answer: "Go to the \"Buy Crypto\" section in Tajir Wallet, select MoonPay as your payment provider, choose the cryptocurrency you want to buy, enter the amount, and follow the payment instructions. The crypto will be deposited directly into your wallet."
        },
        {
          question: "What payment methods does MoonPay support?",
          answer: "MoonPay supports various payment methods including credit cards (Visa, Mastercard), debit cards, bank transfers, and other local payment methods depending on your region."
        },
        {
          question: "Are there fees for buying crypto through MoonPay?",
          answer: "Yes, MoonPay charges processing fees for fiat-to-crypto purchases. These fees vary depending on the payment method and amount. You'll see the exact fees before confirming your purchase."
        },
        {
          question: "What cryptocurrencies can I buy through MoonPay?",
          answer: "You can purchase popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), USDC, USDT, and many other supported tokens. The available cryptocurrencies may vary based on your location."
        }
      ]
    },
    {
      title: "Swapping Assets (ChangeNOW Integration)",
      badge: "Swaps",
      questions: [
        {
          question: "What is the Swap feature?",
          answer: "The Swap feature allows you to instantly exchange one cryptocurrency for another without going through a traditional buy/sell process. Tajir Wallet uses ChangeNOW to provide fast, secure swaps at competitive rates."
        },
        {
          question: "How do I swap assets?",
          answer: "Go to Swap, select the token you want to exchange and the token you want to receive, enter the amount, and confirm. Your assets will be swapped directly into your wallet after blockchain confirmation."
        },
        {
          question: "Are there any fees for swapping?",
          answer: "Tajir Wallet does not charge extra fees for swaps, but blockchain network fees and ChangeNOW service fees may apply."
        }
      ]
    },
    {
      title: "Security and Privacy",
      badge: "Security",
      questions: [
        {
          question: "Does Tajir Wallet store my private keys?",
          answer: "No. Your private keys and recovery phrases are stored only on your device. We never have access to them."
        },
        {
          question: "What happens if I lose my recovery phrase?",
          answer: "If you lose your recovery phrase, there is no way to restore your wallet or access your funds. Always store it in a safe, offline location."
        },
        {
          question: "Is KYC required to use Tajir Wallet?",
          answer: "Tajir Wallet itself is fully decentralized and does not require KYC. However, when using MoonPay for fiat purchases, KYC verification may be required depending on your location and purchase amount."
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
        },
        {
          question: "My MoonPay purchase failed. What should I do?",
          answer: "If your MoonPay purchase fails, check your payment method details and ensure you have sufficient funds. You can also contact MoonPay support directly through their platform for payment-related issues."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Help & <span className="text-shimmer">Support</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-shimmer">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Tajir Wallet
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="glass-card rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-bold">{section.title}</h3>
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
        </div>

        {/* Contact Section */}
        <div id="contact" className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3 text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get in <span className="text-shimmer">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Still have questions? We're here to help.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Headquarters</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Office A, Ground Floor, Al Rifaa<br />
                      Sheikh Mohammed Bin Zayed Road<br />
                      Ras Al Khaimah, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">support@tajirwallet.com</p>
                    <p className="text-gray-600">business@tajirwallet.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-gray-600">+971 7 XXX XXXX</p>
                    <p className="text-sm text-gray-500">Business hours: 9 AM - 6 PM (GST)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary text-white rounded-xl group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;