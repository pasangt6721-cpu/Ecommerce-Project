import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    // Mock Data
    const stats = [
        { title: 'Total Sales', value: '$124,592', change: '+12%', icon: <i className="fas fa-dollar-sign"></i>, color: 'bg-indigo-500' },
        { title: 'New Orders', value: '1,240', change: '+5%', icon: <i className="fas fa-shopping-bag"></i>, color: 'bg-blue-500' },
        { title: 'Total Users', value: '8,350', change: '+18%', icon: <i className="fas fa-users"></i>, color: 'bg-emerald-500' },
        { title: 'Pending Issues', value: '12', change: '-2%', icon: <i className="fas fa-exclamation-triangle"></i>, color: 'bg-rose-500' },
    ];

    const recentOrders = [
        { id: '#ORD-5521', customer: 'Alex Johnson', date: 'Oct 24, 2025', amount: '$120.50', status: 'Completed' },
        { id: '#ORD-5522', customer: 'Maria Garcia', date: 'Oct 24, 2025', amount: '$75.00', status: 'Pending' },
        { id: '#ORD-5523', customer: 'David Smith', date: 'Oct 23, 2025', amount: '$340.00', status: 'Processing' },
        { id: '#ORD-5524', customer: 'Sarah Wilson', date: 'Oct 23, 2025', amount: '$50.25', status: 'Completed' },
        { id: '#ORD-5525', customer: 'James Brown', date: 'Oct 22, 2025', amount: '$99.99', status: 'Cancelled' },
    ];

    const MenuItem = ({ id, label, icon, onClick }) => (
        <button
            onClick={onClick || (() => setActiveTab(id))}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group font-medium ${activeTab === id
                ? 'bg-primary/10 text-primary border-r-4 border-primary'
                : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                }`}
        >
            <span className={`text-xl transition-transform group-hover:scale-110 ${activeTab === id ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>{icon}</span>
            {isSidebarOpen && <span>{label}</span>}
        </button>
    );

    return (
        <div className="flex h-screen bg-gray-50 text-text-dark overflow-hidden font-sans">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'w-64' : 'w-20'
                    } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col relative z-20 shadow-sm`}
            >
                <div className="h-16 flex items-center justify-center border-b border-gray-100">
                    {isSidebarOpen ? (
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            AdminPanel
                        </h1>
                    ) : (
                        <span className="text-2xl font-bold text-primary">AP</span>
                    )}
                </div>

                <div className="flex-1 py-6 px-3 space-y-2 overflow-y-auto custom-scrollbar">
                    <MenuItem id="dashboard" label="Dashboard" icon={<i className="fas fa-tachometer-alt"></i>} />
                    <MenuItem id="products" label="Products" icon={<i className="fas fa-box-open"></i>} />
                    <MenuItem id="orders" label="Orders" icon={<i className="fas fa-clipboard-list"></i>} />
                    <MenuItem id="customers" label="Customers" icon={<i className="fas fa-users"></i>} />
                    <MenuItem id="analytics" label="Analytics" icon={<i className="fas fa-chart-bar"></i>} />
                    <div className="pt-8 pb-2">
                        {isSidebarOpen && <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Settings</p>}
                        <MenuItem id="settings" label="Settings" icon={<i className="fas fa-cog"></i>} />
                        <MenuItem id="logout" label="Logout" icon={<i className="fas fa-sign-out-alt"></i>} onClick={handleLogout} />
                    </div>
                </div>

                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute -right-3 top-20 bg-white text-primary border border-gray-100 p-1 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                    {isSidebarOpen ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    )}
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                {/* Top Navbar */}
                <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 z-10 sticky top-0">
                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-primary/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none focus:ring-0 text-sm ml-2 text-text-dark placeholder-gray-500 w-full outline-none"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-gray-500 hover:text-primary transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </button>
                        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-xs font-bold ring-2 ring-gray-100 text-white">
                                AD
                            </div>
                            <span className="text-sm font-medium hidden md:block text-text-dark">Admin User</span>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-text-dark mb-2">Dashboard Overview</h2>
                            <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${stat.color} bg-opacity-10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                            {stat.icon}
                                        </div>
                                        <span className={`text-sm font-semibold px-2.5 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                                    <p className="text-2xl font-bold text-text-dark mt-1">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Recent Orders Section */}
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-text-dark">Recent Orders</h3>
                                <button className="text-primary text-sm hover:text-secondary font-medium transition-colors">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">Order ID</th>
                                            <th className="px-6 py-4 font-semibold">Customer</th>
                                            <th className="px-6 py-4 font-semibold">Date</th>
                                            <th className="px-6 py-4 font-semibold">Amount</th>
                                            <th className="px-6 py-4 font-semibold">Status</th>
                                            <th className="px-6 py-4 font-semibold text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                                                <td className="px-6 py-4 text-sm font-medium text-text-dark">{order.id}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600 flex items-center space-x-3">
                                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600 font-bold border border-gray-200">
                                                        {order.customer.charAt(0)}
                                                    </div>
                                                    <span className="font-medium text-text-dark">{order.customer}</span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                                                <td className="px-6 py-4 text-sm font-semibold text-text-dark">{order.amount}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${order.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' :
                                                        order.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                            order.status === 'Processing' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                                'bg-red-50 text-red-600 border-red-100'
                                                        }`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${order.status === 'Completed' ? 'bg-green-500' :
                                                            order.status === 'Pending' ? 'bg-amber-500' :
                                                                order.status === 'Processing' ? 'bg-blue-500' :
                                                                    'bg-red-500'
                                                            }`}></span>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-gray-400 hover:text-primary transition-colors">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPage;
