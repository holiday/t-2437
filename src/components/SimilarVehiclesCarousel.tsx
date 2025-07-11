
import React from 'react';
import { cars } from '../data/cars';
import CarCard from './CarCard';
import { Car } from '../types/car';

interface SimilarVehiclesCarouselProps {
  currentCar: Car;
}

const SimilarVehiclesCarousel: React.FC<SimilarVehiclesCarouselProps> = ({ currentCar }) => {
  // Filter similar cars by make or type
  const similarCars = cars
    .filter(car => car.id !== currentCar.id && (car.make === currentCar.make || car.type === currentCar.type))
    .slice(0, 5);

  if (similarCars.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-black mb-6">Similar Vehicles</h3>
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {similarCars.map((car) => (
          <div key={car.id} className="flex-none w-80">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarVehiclesCarousel;
