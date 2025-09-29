import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Star, Clock, Award } from 'lucide-react';
import { coffeeData } from '../data/coffeeData';
import CoffeeCard from '../components/CoffeeCard';

const Home = () => {
  const featuredCoffees = coffeeData.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-cream-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Welcome to <span className="text-amber-700">Brew Haven</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto">
              Where every cup tells a story of passion, quality, and community. 
              Discover your perfect brew in our cozy neighborhood café.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Menu
              </Link>
              <Link
                to="/cart"
                className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-800 hover:text-white transition-all duration-200"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Why Choose Brew Haven?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about delivering exceptional coffee experiences that bring people together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                <Coffee className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Ethically sourced beans from the world's finest coffee regions, roasted to perfection daily</p>
            </div>

            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                <Clock className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick and efficient service without compromising on quality or taste</p>
            </div>

            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                <Award className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized by coffee enthusiasts and critics for our exceptional blends and service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coffees Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Featured Favorites</h2>
            <p className="text-lg text-gray-600">Discover our most popular coffee selections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredCoffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-flex items-center bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Brew Haven?</h2>
          <p className="text-xl mb-8 text-amber-200">
            Join thousands of coffee lovers who start their day with us. Order online for pickup or delivery!
          </p>
          <Link
            to="/signup"
            className="bg-white text-amber-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
          >
            Join Brew Haven Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;