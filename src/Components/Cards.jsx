import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
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
      <div
        key={props.data.id}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group h-full flex flex-col"
      >
        <div className="relative h-64 bg-gray-50 overflow-hidden">
          <img
            src={props.data.image}
            alt={props.data.name}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay Actions */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center space-x-3 bg-white/90 backdrop-blur-sm">
            <button
              className="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-secondary transition-colors text-sm flex items-center justify-center"
              onClick={() => addToCart(props.data)}
            >
              <i className="fas fa-cart-plus mr-2"></i> Add
            </button>
            <Link
              to={`/product/${props.data.id}`}
              className="flex-1 border border-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:text-primary hover:border-primary transition-colors text-sm flex items-center justify-center bg-white"
            >
              <i className="far fa-eye mr-2"></i> View
            </Link>
          </div>

          {/* Badges */}
          {/* Mock discount logic since not in original data explicitly but used in template */}
          {props.data.id === 2 && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -20%
            </span>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {props.data.category}
            </span>
            <div className="flex items-center text-accent text-sm">
              <i className="fas fa-star mr-1"></i>
              <span>{props.data.rating}</span>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2 text-text-dark hover:text-primary transition-colors truncate">
            <Link to={`/product/${props.data.id}`}>{props.data.name}</Link>
          </h3>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              {formatCurrency(props.data.price)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
