import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CoffeeCard = ({ coffee }) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(coffee);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ₹ {coffee.price.toFixed(2)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{coffee.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{coffee.description}</p>
        
        <div className="flex items-center justify-left">
          {/* <span className="text-lg font-bold text-amber-800">₹ {coffee.price.toFixed(2)}</span> */}
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-amber-800 text-white hover:bg-amber-900 hover:shadow-lg'
            }`}
            disabled={isAdded}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;