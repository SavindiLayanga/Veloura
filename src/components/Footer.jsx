import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-widest">VELOURA</h3>
            <p className="text-sm text-brand-gray/80 leading-relaxed max-w-xs">
              Premium fashion crafted for modern lifestyles. Experience luxury in every thread.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-brand-gray/80">
              <li><Link to="/shop?category=women" className="hover:text-brand-gold transition-colors">Women's Collection</Link></li>
              <li><Link to="/shop?category=men" className="hover:text-brand-gold transition-colors">Men's Collection</Link></li>
              <li><Link to="/shop?category=new" className="hover:text-brand-gold transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?category=streetwear" className="hover:text-brand-gold transition-colors">Streetwear</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Help</h4>
            <ul className="space-y-2 text-sm text-brand-gray/80">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Newsletter</h4>
            <p className="text-sm text-brand-gray/80">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex border-b border-brand-gray/40 pb-2 focus-within:border-brand-gold transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-sm w-full placeholder-brand-gray/50"
              />
              <button className="text-sm font-medium hover:text-brand-gold transition-colors whitespace-nowrap ml-4">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-gray/20 pt-8">
          <p className="text-xs text-brand-gray/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Veloura. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-brand-gray/80 hover:text-brand-gold transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-brand-gray/80 hover:text-brand-gold transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-brand-gray/80 hover:text-brand-gold transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-brand-gray/80 hover:text-brand-gold transition-colors"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
