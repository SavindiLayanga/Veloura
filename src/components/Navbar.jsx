import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-black">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Links Left */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop?category=women" className="text-sm font-medium hover:text-brand-gold transition-colors">WOMEN</Link>
            <Link to="/shop?category=men" className="text-sm font-medium hover:text-brand-gold transition-colors">MEN</Link>
            <Link to="/shop?category=new" className="text-sm font-medium hover:text-brand-gold transition-colors">NEW ARRIVALS</Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="font-serif text-3xl font-bold tracking-widest text-brand-black">
              VELOURA
            </Link>
          </div>

          {/* Icons Right */}
          <div className="flex items-center space-x-6">
            <button className="text-brand-black hover:text-brand-gold transition-colors">
              <Search size={20} />
            </button>
            <button className="text-brand-black hover:text-brand-gold transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="text-brand-black hover:text-brand-gold transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-ivory border-b border-brand-gray/20 py-4 px-4 flex flex-col space-y-4"
          >
            <Link to="/shop?category=women" className="text-lg font-serif">Women</Link>
            <Link to="/shop?category=men" className="text-lg font-serif">Men</Link>
            <Link to="/shop?category=new" className="text-lg font-serif">New Arrivals</Link>
            <Link to="/account" className="text-lg font-serif">Account</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
