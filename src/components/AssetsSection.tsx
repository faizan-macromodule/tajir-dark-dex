
import { Button } from '@/components/ui/button';

const AssetsSection = () => {
  const cryptoAssets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$43,256', change: '+2.4%', positive: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,847', change: '+1.8%', positive: true },
    { name: 'Solana', symbol: 'SOL', price: '$98.34', change: '-0.5%', positive: false },
    { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '+3.2%', positive: true },
    { name: 'Polygon', symbol: 'MATIC', price: '$0.84', change: '+5.1%', positive: true },
  ];

  return (
    <section id="assets" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">One Platform, Millions of Assets</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Buy, store, send and swap tokens. Available as a browser extension 
            and as a mobile app. Trade 300+ assets across 100+ blockchains.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Your Portfolio</h3>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-purple-700">
              View All Assets
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 text-blue-100">Asset</th>
                  <th className="text-right py-3 text-blue-100">Price</th>
                  <th className="text-right py-3 text-blue-100">24h Change</th>
                  <th className="text-right py-3 text-blue-100">Holdings</th>
                </tr>
              </thead>
              <tbody>
                {cryptoAssets.map((asset, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">{asset.symbol[0]}</span>
                        </div>
                        <div>
                          <div className="font-medium">{asset.name}</div>
                          <div className="text-sm text-blue-100">{asset.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4 font-medium">{asset.price}</td>
                    <td className="text-right py-4">
                      <span className={`font-medium ${asset.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {asset.change}
                      </span>
                    </td>
                    <td className="text-right py-4">
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-purple-700">
                          Buy
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-purple-700">
                          Swap
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">100M+</div>
              <div className="text-blue-100">Assets</div>
            </div>
            <div>
              <div className="text-2xl font-bold">600M+</div>
              <div className="text-blue-100">NFTs</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-blue-100">Blockchains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
