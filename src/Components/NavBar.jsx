import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cart] = useState(() => {
        const savedCart = localStorage.getItem('pasa-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const getCartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    const cartCount = getCartCount();
    const badgeStyle = cartCount === 0 ? { display: 'none' } : {};

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <Link className="flex items-center text-2xl font-bold text-primary group" to="/">
                        <i className="fas fa-shopping-bag mr-2 group-hover:scale-110 transition-transform"></i>pasa-ecommerce
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        id="mobile-menu-btn"
                        className="lg:hidden text-text-dark hover:text-primary focus:outline-none transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className="fas fa-bars text-xl"></i>
                    </button>

                    {/* Search Form (Desktop) */}
                    <div className="hidden lg:flex flex-1 mx-12 max-w-xl">
                        <form className="w-full flex shadow-sm">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search for products..."
                                className="w-full px-5 py-2.5 bg-gray-50 border border-gray-200 border-r-0 rounded-l-full
                                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                                    focus:bg-white transition-all"
                            />

                            <button
                                type="search"
                                className="px-6 flex items-center justify-center bg-primary text-white
                                    border border-primary border-l-0 rounded-r-full
                                    hover:bg-secondary transition-colors"
                                aria-label="Search"
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link className="font-medium text-primary hover:text-secondary transition-colors" to="/">Home</Link>
                        <Link className="font-medium text-text-dark hover:text-primary transition-colors" to="/products">Shop</Link>

                        <div className="flex items-center space-x-5">
                            <Link to="/login" className="text-xl text-text-dark hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100">
                                <i className="far fa-user"></i>
                            </Link>
                            <Link to="/cart" className="relative text-xl text-text-dark hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="badge-count absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ring-2 ring-white" style={badgeStyle}>{cartCount}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (Hidden by default) */}
                <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-gray-100 animate-fade-in-down`}>
                    <form className="mt-4 mb-4 flex shadow-sm">
                        <input
                            className="w-full border border-gray-200 border-r-0 rounded-l-lg px-4 py-2 focus:outline-none focus:border-primary bg-gray-50"
                            type="search" placeholder="Search..."
                        />
                        <button className="bg-primary text-white border border-primary rounded-r-lg px-4" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <div className="flex flex-col space-y-3">
                        <Link className="font-medium text-primary block py-2 border-b border-gray-50" to="/">Home</Link>
                        <Link className="font-medium text-text-dark hover:text-primary transition-colors block py-2 border-b border-gray-50" to="/products">Shop</Link>
                        <div className="flex items-center space-x-6 pt-2">
                            <Link to="/login" className="flex items-center space-x-2 text-text-dark hover:text-primary transition-colors">
                                <i className="far fa-user text-xl"></i>
                                <span>Login</span>
                            </Link>
                            <Link to="/cart" className="flex items-center space-x-2 text-text-dark hover:text-primary transition-colors">
                                <div className="relative">
                                    <i className="fas fa-shopping-cart text-xl"></i>
                                    <span className="badge-count absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" style={badgeStyle}> {cartCount}</span>
                                </div>
                                <span>Cart</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar
