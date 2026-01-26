import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Info */}
                    <div>
                        <h5 className="text-white font-bold text-lg mb-6">pasa-ecommerce</h5>
                        <p className="text-gray-400 mb-6">Your one-stop destination for all things fashion, tech, and home.
                            Quality products at the best prices.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-white font-bold text-lg mb-6">Quick Links</h5>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h5 className="text-white font-bold text-lg mb-6">Customer Care</h5>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h5 className="text-white font-bold text-lg mb-6">Newsletter</h5>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter to get special offers and updates.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-white placeholder-gray-500"
                                type="email" placeholder="Enter your email" />
                            <button
                                className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 rounded-lg transition-colors"
                                type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <hr className="my-8 border-gray-800" />
                <div className="text-center text-gray-500">
                    <p className="mb-0">&copy; 2026 pasa-ecommerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


