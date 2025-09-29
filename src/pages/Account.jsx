import React from 'react';
import { User, Mail, Phone, MapPin, Clock, ShoppingBag, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { user, isAuthenticated } = useAuth();

  // Mock order history data
  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2025-01-15',
      items: [
        { name: 'Vanilla Latte', quantity: 2, price: 4.75 },
        { name: 'Classic Espresso', quantity: 1, price: 2.50 }
      ],
      total: 12.00,
      status: 'Delivered'
    },
    {
      id: 'ORD-002',
      date: '2025-01-12',
      items: [
        { name: 'Caramel Macchiato', quantity: 1, price: 5.25 },
        { name: 'Cold Brew Original', quantity: 1, price: 3.75 }
      ],
      total: 9.00,
      status: 'Delivered'
    },
    {
      id: 'ORD-003',
      date: '2025-01-10',
      items: [
        { name: 'Double Mocha', quantity: 1, price: 5.50 }
      ],
      total: 5.50,
      status: 'Delivered'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <User className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">Access Denied</h2>
          <p className="text-gray-500 mb-6">Please log in to view your account</p>
          <a
            href="/login"
            className="bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-200"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900">My Account</h1>
          <p className="text-gray-600">Manage your profile and view your order history</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-amber-900">{user?.name}</h2>
                  <p className="text-gray-600">Coffee Enthusiast</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">{user?.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">123 Coffee St, Brewtown, ST 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Member since January 2024</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-amber-100 text-amber-800 py-2 px-4 rounded-lg font-semibold hover:bg-amber-200 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Coffee Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Orders:</span>
                  <span className="font-semibold">{orderHistory.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Spent:</span>
                  <span className="font-semibold">
                    ${orderHistory.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Favorite Drink:</span>
                  <span className="font-semibold">Vanilla Latte</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loyalty Points:</span>
                  <span className="font-semibold">245 pts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-amber-900 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order History
                </h2>
                <span className="text-sm text-gray-500">{orderHistory.length} orders</span>
              </div>

              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-amber-900">Order {order.id}</h3>
                        <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-amber-800">${order.total.toFixed(2)}</p>
                        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-700">
                            {item.quantity}x {item.name}
                          </span>
                          <span className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex space-x-2">
                        <button className="text-amber-600 hover:text-amber-800 text-sm font-medium">
                          View Details
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-amber-600 hover:text-amber-800 text-sm font-medium">
                          Reorder
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {orderHistory.length === 0 && (
                <div className="text-center py-8">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No orders yet</h3>
                  <p className="text-gray-500 mb-4">Start your coffee journey by placing your first order!</p>
                  <a
                    href="/menu"
                    className="bg-amber-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-200"
                  >
                    Browse Menu
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;