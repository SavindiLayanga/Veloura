import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    { id: 1, name: "Silk Crepe Blouse", price: "$145", category: "Women", img: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Tailored Wool Coat", price: "$320", category: "Men", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Cashmere Turtleneck", price: "$185", category: "Women", img: "https://images.unsplash.com/photo-1614252339460-e1cb07e5b22b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Linen Wide-Leg Pants", price: "$120", category: "Women", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Classic Cotton Tee", price: "$45", category: "Men", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Pleated Midi Skirt", price: "$110", category: "Women", img: "https://images.unsplash.com/photo-1583496661160-c58cb2223683?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "Double-Breasted Blazer", price: "$240", category: "Men", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Leather Loafers", price: "$195", category: "Men", img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-4">Shop the Collection</h1>
        <p className="text-brand-gray">Explore our premium selection of timeless fashion.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-brand-gray/20 gap-4">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 text-sm font-medium hover:text-brand-gold transition-colors"
        >
          <Filter size={18} />
          <span>FILTERS</span>
        </button>

        <div className="flex items-center space-x-2 text-sm">
          <span className="text-brand-gray">Sort by:</span>
          <button className="flex items-center font-medium hover:text-brand-gold transition-colors">
            Featured <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="flex gap-8">
        {/* Sidebar Filter (Desktop) */}
        {isFilterOpen && (
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif font-semibold mb-4 border-b border-brand-gray/20 pb-2">Category</h3>
                <ul className="space-y-2 text-sm text-brand-gray">
                  <li><button className="hover:text-brand-gold">All Clothing</button></li>
                  <li><button className="hover:text-brand-gold">Dresses</button></li>
                  <li><button className="hover:text-brand-gold">Tops & Blouses</button></li>
                  <li><button className="hover:text-brand-gold">Pants</button></li>
                  <li><button className="hover:text-brand-gold">Outerwear</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif font-semibold mb-4 border-b border-brand-gray/20 pb-2">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} className="border border-brand-gray/30 py-1 text-sm hover:border-brand-black transition-colors">{size}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFilterOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-8 w-full transition-all duration-300`}>
          {products.map(product => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img src={product.img} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10" onClick={(e) => e.preventDefault()}>
                    <Heart size={18} className="text-brand-black hover:text-red-500 transition-colors" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-brand-black text-white py-3 text-sm tracking-widest hover:bg-brand-gold transition-colors">
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-brand-gray">{product.category}</p>
                  </div>
                  <span className="font-medium">{product.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
