import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div>
              <h3 className="text-xl font-bold mb-4">Go Auctions</h3>
              <p className="text-sm text-gray-400">Your trusted online auction platform.</p>
            </div>
            <div>
              <div className="my-5">
                <Image className="h-20 w-auto" height={80} width={160} src="/logo_full.png" alt="Go Auctions logo" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Browse Auctions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sell an Item</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">How It Works</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter for the latest auctions and deals.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="py-2 px-3 w-full text-gray-800 rounded-l-md focus:outline-none" 
              />
              <button 
                type="submit" 
                className="bg-main-500 text-white py-2 px-4 rounded-r-md hover:bg-main-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-400">&copy; {currentYear} Go Auctions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
