import React, { useState, useMemo } from 'react';
import { cars } from '../data/cars';
import { CarCondition, CarType, FuelType } from '../types/car';
import CarCard from '../components/CarCard';
import HorizontalFilters from '../components/HorizontalFilters';
import VendorCarousel from '../components/VendorCarousel';
import { Input } from '../components/ui/input';
import { Search, User } from 'lucide-react';
import { Button } from '../components/ui/button';

const Index = () => {
  const [selectedCondition, setSelectedCondition] = useState<CarCondition | 'all'>('all');
  const [selectedType, setSelectedType] = useState<CarType | 'all'>('all');
  const [selectedFuelType, setSelectedFuelType] = useState<FuelType | 'all'>('all');
  const [selectedMake, setSelectedMake] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [yearRange, setYearRange] = useState<[number, number]>([2015, 2024]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (selectedCondition !== 'all' && car.condition !== selectedCondition) return false;
      if (selectedType !== 'all' && car.type !== selectedType) return false;
      if (selectedFuelType !== 'all' && car.fuelType !== selectedFuelType) return false;
      if (selectedMake !== 'all' && car.make !== selectedMake) return false;
      if (selectedModel !== 'all' && car.model !== selectedModel) return false;
      if (car.year < yearRange[0] || car.year > yearRange[1]) return false;
      if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchText = `${car.make} ${car.model} ${car.year} ${car.dealerName} ${car.location}`.toLowerCase();
        if (!searchText.includes(query)) return false;
      }
      return true;
    });
  }, [selectedCondition, selectedType, selectedFuelType, selectedMake, selectedModel, yearRange, priceRange, searchQuery]);

  // Split cars into sponsored and regular
  const sponsoredCars = filteredCars.slice(0, 2);
  const regularCars = filteredCars.slice(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-bold text-black">
              Car<span className="text-orange">Hub</span>
            </h1>
            <Button variant="outline" size="icon" className="border-black text-black hover:bg-gray-50">
              <User className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xl text-gray-600 mt-2">
            Find Your Perfect Vehicle Today
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search cars, makes, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <HorizontalFilters
        selectedCondition={selectedCondition}
        setSelectedCondition={setSelectedCondition}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedFuelType={selectedFuelType}
        setSelectedFuelType={setSelectedFuelType}
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        yearRange={yearRange}
        setYearRange={setYearRange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-black">
            {filteredCars.length} Vehicles Available
          </h2>
        </div>

        {/* Sponsored Listings */}
        {sponsoredCars.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Featured Listings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sponsoredCars.map((car) => (
                <CarCard key={car.id} car={car} isSponsored={true} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Listings */}
        {regularCars.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {regularCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        )}

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No vehicles found matching your criteria</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Vendor Carousels */}
        <div className="mt-16 space-y-12">
          <VendorCarousel 
            title="Toyota Downtown - Premium Selection"
            vendorName="Toyota Downtown"
            cars={cars.filter(car => car.dealerName === "Toyota Downtown")}
          />
          <VendorCarousel 
            title="Honda Center - Best Deals"
            vendorName="Honda Center"
            cars={cars.filter(car => car.dealerName === "Honda Center")}
          />
          <VendorCarousel 
            title="BMW Manhattan - Luxury Collection"
            vendorName="BMW Manhattan"
            cars={cars.filter(car => car.dealerName === "BMW Manhattan")}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
