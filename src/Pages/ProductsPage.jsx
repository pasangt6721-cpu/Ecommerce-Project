import React, { useEffect, useState } from "react";
import { products } from "../assets/products";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
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
  return (
    <>
      {/* Header */}
      <header className="relative bg-gray-900 py-20 mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 relative text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 lg:w-1/2 mx-auto">
            Explore high-quality products curated just for you.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-5 border-b border-gray-100 bg-gray-50">
                <h5 className="font-bold text-lg text-text-dark">Filters</h5>
              </div>

              <div className="p-5">
                <div className="mb-6">
                  <h6 className="font-bold text-gray-700 mb-3">Search</h6>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <h6 className="font-bold text-gray-700 mb-3">Category</h6>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center cursor-pointer hover:text-primary transition-colors"
                      >
                        <input
                          type="radio"
                          name="category"
                          className="form-radio text-primary focus:ring-primary"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                        />
                        <span className="ml-3 text-gray-600">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group h-full flex flex-col"
                >
                  <div className="relative h-64 bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center space-x-3 bg-white/90 backdrop-blur-sm">
                      <button
                        className="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-secondary transition-colors text-sm flex items-center justify-center"
                        onClick={() => addToCart(product)}
                      >
                        <i className="fas fa-cart-plus mr-2"></i> Add
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="flex-1 border border-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:text-primary hover:border-primary transition-colors text-sm flex items-center justify-center bg-white"
                      >
                        <i className="far fa-eye mr-2"></i> View
                      </Link>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <div className="flex items-center text-accent text-sm">
                        <i className="fas fa-star mr-1"></i>
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-text-dark hover:text-primary transition-colors truncate">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {formatCurrency(product.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
