import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    { path: '/cart', name: 'Cart' }
  ];

  return (
    <nav className="bg-amber-50 shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-amber-800" />
            <span className="text-xl font-bold text-amber-900">Brew Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-amber-900 bg-amber-100'
                    : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                }`}
              >
                {link.name}
                {link.path === '/cart' && getTotalItems() > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            ))}

            {/* Auth Links */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/account"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/account')
                      ? 'text-amber-900 bg-amber-100'
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <User className="w-4 h-4 inline mr-1" />
                  {user?.name || 'Account'}
                </Link>
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-amber-700 hover:text-amber-900 hover:bg-amber-100 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/login')
                      ? 'text-amber-900 bg-amber-100'
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-amber-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-900 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-amber-700 hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50 border-t border-amber-200">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-amber-900 bg-amber-100'
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  {link.name}
                  {link.path === '/cart' && getTotalItems() > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
              ))}

              {/* Mobile Auth Links */}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/account"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive('/account')
                        ? 'text-amber-900 bg-amber-100'
                        : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                    }`}
                  >
                    Account ({user?.name})
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-700 hover:text-amber-900 hover:bg-amber-100 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive('/login')
                        ? 'text-amber-900 bg-amber-100'
                        : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium bg-amber-800 text-white hover:bg-amber-900 transition-colors duration-200"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;