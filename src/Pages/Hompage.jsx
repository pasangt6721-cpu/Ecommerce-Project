import React from 'react'
import Banners from '../Components/Banners'
import HomeCategories from '../Components/HomeCategories'
import { Link } from 'react-router-dom'
import { products } from '../assets/products'
import Cards from '../Components/Cards'

const Hompage = () => {
  const product = products.slice(0,4); // Get first 4 products for featured section
  return (
    <>
      <Banners />

      <HomeCategories />

      {/* Featured Products */}
            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
                            <p className="text-gray-500">Check out what's trending</p>
                        </div>
                        <Link to="/products" className="btn-outline-custom">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {
                          product.map((items,i)=>(
                          <Cards data = {items} keys ={i} />
                        ))
                      }
                        
                    </div>
                </div>
            </section>

        {/* Services / Trust Badges */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full">
                            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-shipping-fast text-2xl"></i>
                            </div>
                            <h5 className="font-bold text-lg mb-2">Free Shipping</h5>
                            <p className="text-gray-500 text-sm">On all orders over $50</p>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full">
                            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-headset text-2xl"></i>
                            </div>
                            <h5 className="font-bold text-lg mb-2">24/7 Support</h5>
                            <p className="text-gray-500 text-sm">We are here to help</p>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full">
                            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-undo text-2xl"></i>
                            </div>
                            <h5 className="font-bold text-lg mb-2">30 Days Return</h5>
                            <p className="text-gray-500 text-sm">Easy return policy</p>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full">
                            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-lock text-2xl"></i>
                            </div>
                            <h5 className="font-bold text-lg mb-2">Secure Payment</h5>
                            <p className="text-gray-500 text-sm">100% secure checkout</p>
                        </div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Hompage
