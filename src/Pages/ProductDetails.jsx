import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../assets/products';


const ProductDetails = () => {
    const { id } = useParams();
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("pasa-cart");
        return savedCart ? JSON.parse(savedCart) : [];
      });
    
      useEffect(() => {
        localStorage.setItem("pasa-cart", JSON.stringify(cart));
      }, [cart]);
    
   const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };
  const formatCurrency = (amount) => {
    return "$" + amount.toFixed(2);
  };
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div>
                <div className="container mx-auto px-4 py-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
                    <Link to="/products" className="btn-outline-custom">Back to Shop</Link>
                </div>
            </div>
        );
    }

    return (
        <div>


            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <Link to="/products" className="text-gray-500 hover:text-primary mb-8 inline-block">
                        <i className="fas fa-arrow-left mr-2"></i> Back to Products
                    </Link>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Product Image */}
                            <div className="bg-gray-50 p-10 flex items-center justify-center min-h-[400px]">
                                <img src={product.image} alt={product.name} className="max-w-full max-h-[400px] object-contain drop-shadow-lg" />
                            </div>

                            {/* Product Info */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{product.category}</span>
                                    <div className="flex items-center text-accent mt-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex items-end mb-8">
                                    <span className="text-4xl font-bold text-primary">{formatCurrency(product.price)}</span>
                                    {product.discount && <span className="ml-4 text-xl text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>}
                                </div>

                                <div className="flex space-x-4">
                                    <button
                                        className="flex-1 bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg"
                                        onClick={() => addToCart(product)}
                                    >
                                        <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
                                    </button>
                                    <button className="w-16 h-16 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors">
                                        <i className="far fa-heart text-xl"></i>
                                    </button>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <i className="fas fa-truck text-primary mb-2 text-xl"></i>
                                        <p className="text-xs font-bold text-gray-600">Free Ship</p>
                                    </div>
                                    <div>
                                        <i className="fas fa-shield-alt text-primary mb-2 text-xl"></i>
                                        <p className="text-xs font-bold text-gray-600">1 Year Warranty</p>
                                    </div>
                                    <div>
                                        <i className="fas fa-undo text-primary mb-2 text-xl"></i>
                                        <p className="text-xs font-bold text-gray-600">30 Days Return</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
