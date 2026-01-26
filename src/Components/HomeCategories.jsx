import React from 'react'
import catElectronics from '../assets/images/category-electronics.jpg';
import catFashion from '../assets/images/category-fashion.jpg';
import catFurniture from '../assets/images/category-furniture.jpg';
import catAccessories from '../assets/images/category-accessories.jpg';

const HomeCategories = () => {
  return (
    <>
     <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
                        <p className="text-gray-500">Browse our wide range of products</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Electronics', img: catElectronics },
                            { name: 'Fashion', img: catFashion },
                            { name: 'Furniture', img: catFurniture },
                            { name: 'Accessories', img: catAccessories }
                        ].map((cat) => (
                            <div key={cat.name} className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all h-64">
                                <img src={cat.img} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt={cat.name} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <h4 className="text-white text-xl font-bold tracking-wide uppercase group-hover:tracking-wider transition-all">{cat.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
      
    </>
  )
}

export default HomeCategories
