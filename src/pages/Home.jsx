import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Truck, RefreshCw, ShieldCheck, CreditCard } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Fashion Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center px-4 flex flex-col items-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-7xl font-serif text-white font-medium mb-4 tracking-wide"
          >
            Wear Confidence.<br/>Define Elegance.
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 font-light tracking-wider max-w-lg"
          >
            Premium fashion crafted for modern lifestyles.
          </motion.p>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/shop?category=women" className="bg-white text-brand-black px-8 py-3 font-medium tracking-widest text-sm hover:bg-brand-gold hover:text-white transition-colors">
              SHOP WOMEN
            </Link>
            <Link to="/shop?category=men" className="bg-transparent border border-white text-white px-8 py-3 font-medium tracking-widest text-sm hover:bg-white hover:text-brand-black transition-colors">
              SHOP MEN
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Truck, title: "Free Worldwide Shipping", desc: "On orders over $150" },
              { icon: RefreshCw, title: "30-Day Returns", desc: "No questions asked" },
              { icon: ShieldCheck, title: "Premium Quality", desc: "Ethically sourced materials" },
              { icon: CreditCard, title: "Secure Payments", desc: "100% safe checkout" }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3">
                <feature.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
                <h3 className="font-serif font-medium text-lg">{feature.title}</h3>
                <p className="text-sm text-brand-gray/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-2 text-brand-black">Trending Now</h2>
              <p className="text-brand-gray text-sm">Discover our most loved pieces this season.</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center text-sm font-medium hover:text-brand-gold transition-colors pb-1 border-b border-brand-black hover:border-brand-gold">
              VIEW ALL <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: "Silk Crepe Blouse", price: "$145", img: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { id: 2, name: "Tailored Wool Coat", price: "$320", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { id: 3, name: "Cashmere Turtleneck", price: "$185", img: "https://images.unsplash.com/photo-1614252339460-e1cb07e5b22b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { id: 4, name: "Linen Wide-Leg Pants", price: "$120", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map(product => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img src={product.img} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={18} className="text-brand-black hover:text-red-500 transition-colors" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-brand-black text-white py-3 text-sm tracking-widest hover:bg-brand-gold transition-colors">
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                    <div className="flex text-brand-gold mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                  <span className="font-medium">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Promotional Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center px-4">
          <p className="text-brand-gold font-medium tracking-widest text-sm mb-4">SUMMER COLLECTION 2026</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white font-medium mb-8">The Resort Edit</h2>
          <Link to="/shop?collection=resort" className="bg-white text-brand-black px-10 py-4 font-medium tracking-widest text-sm hover:bg-brand-gold hover:text-white transition-colors">
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">@VelouraFashion</h2>
          <p className="text-brand-gray text-sm">Follow us on Instagram for daily inspiration</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1485230895905-ef40ba366905?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          ].map((img, idx) => (
            <div key={idx} className="relative aspect-square group overflow-hidden">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
