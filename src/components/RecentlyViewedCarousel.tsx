
import React from 'react';
import { cars } from '../data/cars';
import CarCard from './CarCard';

const RecentlyViewedCarousel = () => {
  // For demo purposes, showing first 5 cars as recently viewed
  const recentlyViewedCars = cars.slice(0, 5);

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-black mb-6">Recently Viewed</h3>
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {recentlyViewedCars.map((car) => (
          <div key={car.id} className="flex-none w-80">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewedCarousel;
