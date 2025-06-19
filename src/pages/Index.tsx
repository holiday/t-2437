
import React, { useState, useMemo } from 'react';
import { cars } from '../data/cars';
import { CarCondition, CarType, FuelType } from '../types/car';
import CarCard from '../components/CarCard';
import CarFilters from '../components/CarFilters';

const Index = () => {
  const [selectedCondition, setSelectedCondition] = useState<CarCondition | 'all'>('all');
  const [selectedType, setSelectedType] = useState<CarType | 'all'>('all');
  const [selectedFuelType, setSelectedFuelType] = useState<FuelType | 'all'>('all');

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (selectedCondition !== 'all' && car.condition !== selectedCondition) return false;
      if (selectedType !== 'all' && car.type !== selectedType) return false;
      if (selectedFuelType !== 'all' && car.fuelType !== selectedFuelType) return false;
      return true;
    });
  }, [selectedCondition, selectedType, selectedFuelType]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-black mb-4">
            Car<span className="text-orange">Hub</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find Your Perfect Vehicle Today
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CarFilters
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedFuelType={selectedFuelType}
              setSelectedFuelType={setSelectedFuelType}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-black">
                {filteredCars.length} Vehicles Available
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No vehicles found matching your criteria</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
