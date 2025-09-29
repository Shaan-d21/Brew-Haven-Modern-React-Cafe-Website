import React from 'react';
import { Coffee, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold text-amber-100">Brew Haven</span>
            </div>
            <p className="text-amber-200 mb-6 max-w-md">
              Your neighborhood coffee sanctuary where every cup tells a story. 
              We source the finest beans and craft them with passion to create 
              the perfect coffee experience for our community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com"
                target='_blank' 
                className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.x.com"
                target='_blank'
                className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com"
                target='_blank'
                className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-amber-100 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200">123 Coffee Street<br />Brewtown, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200">+91 123 2314567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200">hello@brewhaven.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-amber-100 mb-4">Hours</h3>
            <div className="space-y-2 text-amber-200">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-300">
            &copy; 2025 Brew Haven. All rights reserved. Made with ❤️ and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;