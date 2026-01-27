import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("pasa-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("pasa-cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + amount;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
    });
  };
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => setCart([]);

  const formatCurrency = (amount) => {
    return "$" + amount.toFixed(2);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;
  return (
    <>
      <div className="bg-primary py-8 mb-8 shadow-md">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold mb-0">Your Shopping Cart</h2>
        </div>
      </div>

      <div className="container mx-auto p-5 mb-20">
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mb-6 text-gray-300">
              <i className="fas fa-shopping-cart text-6xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-bold shadow-lg hover:shadow-primary/40"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                  <h5 className="font-bold text-lg text-gray-800">
                    Cart Items ({cart.length})
                  </h5>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm font-bold transition-colors"
                  >
                    <i className="fas fa-trash-alt mr-2"></i> Clear Cart
                  </button>
                </div>

                <div className="divide-y divide-gray-100">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 flex flex-col md:flex-row items-center gap-6"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-contain bg-gray-50 rounded-lg p-2"
                      />

                      <div className="flex-1 text-center md:text-left">
                        <h4 className="font-bold text-gray-800 hover:text-primary transition-colors">
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">
                          {item.category}
                        </p>
                        <p className="text-primary font-bold mt-2 md:hidden">
                          {formatCurrency(item.price)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <i className="fas fa-minus text-xs"></i>
                        </button>
                        <span className="font-bold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <i className="fas fa-plus text-xs"></i>
                        </button>
                      </div>

                      <div className="font-bold text-lg text-gray-800 hidden md:block w-24 text-right">
                        {formatCurrency(item.price * item.quantity)}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <div className="p-6 border-b border-gray-100 bg-gray-50">
                  <h5 className="font-bold text-lg text-gray-800">
                    Order Summary
                  </h5>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-bold">
                      {shipping === 0 ? "Free" : formatCurrency(shipping)}
                    </span>
                  </div>
                  <div className="border-t border-dashed border-gray-200 pt-4 mt-4 flex justify-between items-end">
                    <span className="font-bold text-lg text-gray-800">
                      Total
                    </span>
                    <span className="font-bold text-2xl text-primary">
                      {formatCurrency(total)}
                    </span>
                  </div>

                  <button
                    onClick={() => alert("Checkout functionality coming soon!")}
                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1 mt-4"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
