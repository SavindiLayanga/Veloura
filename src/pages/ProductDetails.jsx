import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, RefreshCw, Heart, ChevronRight, Share2 } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    name: "Silk Crepe Blouse",
    price: "$145.00",
    description: "An elegant essential. Crafted from premium pure silk crepe de chine, this minimalist blouse features a relaxed fit, a classic collar, and concealed button fastenings for a seamless look. Perfect for both office elegance and evening sophistication.",
    images: [
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Ivory', 'Navy']
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-brand-gray mb-8">
        <span>Home</span> <ChevronRight size={14} className="mx-2" />
        <span>Women</span> <ChevronRight size={14} className="mx-2" />
        <span className="text-brand-black">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative cursor-zoom-in">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src={product.images[1]} alt={`${product.name} detail`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-brand-black">{product.name}</h1>
            <button className="text-brand-gray hover:text-red-500 transition-colors">
              <Heart size={24} />
            </button>
          </div>
          
          <p className="text-xl font-medium mb-4">{product.price}</p>
          
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-sm text-brand-gray underline cursor-pointer">128 Reviews</span>
          </div>

          <p className="text-brand-gray mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Color: {selectedColor}</span>
            </div>
            <div className="flex space-x-3">
              {product.colors.map(color => (
                <button 
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-brand-black' : 'border-transparent'} flex items-center justify-center`}
                >
                  <span className={`w-6 h-6 rounded-full block ${color === 'Black' ? 'bg-black' : color === 'Ivory' ? 'bg-[#F5F1EB]' : 'bg-[#000080]'}`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Size</span>
              <button className="underline text-brand-gray">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 border ${selectedSize === size ? 'border-brand-black bg-brand-black text-white' : 'border-brand-gray/30 hover:border-brand-black'} transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 mb-8">
            <div className="flex border border-brand-gray/30 items-center w-32">
              <button className="px-4 py-3 hover:text-brand-gold" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="flex-1 text-center font-medium">{quantity}</span>
              <button className="px-4 py-3 hover:text-brand-gold" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="flex-1 bg-brand-black text-white tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors">
              ADD TO CART
            </button>
          </div>

          {/* Details & Shipping */}
          <div className="space-y-4 border-t border-brand-gray/20 pt-6">
            <div className="flex items-center space-x-3 text-sm text-brand-gray">
              <Truck size={18} />
              <span>Free standard shipping on orders over $150</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-brand-gray">
              <RefreshCw size={18} />
              <span>Free 30-day returns policy</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-brand-gray">
              <Share2 size={18} />
              <button className="underline hover:text-brand-gold">Share this product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
