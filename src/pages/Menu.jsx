import React, { useState, useMemo } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import SearchBar from '../components/SearchBar';
import { coffeeData, categories } from '../data/coffeeData';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCoffees = useMemo(() => {
    return coffeeData.filter((coffee) => {
      const matchesSearch = coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           coffee.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || coffee.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Our Coffee Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully crafted selection of premium coffees, each made with passion and the finest ingredients
          </p>
        </div>

        {/* Search and Filter */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredCoffees.length === coffeeData.length 
              ? `Showing all ${filteredCoffees.length} coffees`
              : `Found ${filteredCoffees.length} ${filteredCoffees.length === 1 ? 'coffee' : 'coffees'}`
            }
          </p>
        </div>

        {/* Coffee Grid */}
        {filteredCoffees.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCoffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">No coffees found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-amber-800 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;