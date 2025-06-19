
import React from 'react';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { Car as CarIcon, Truck, Zap, Fuel, Filter } from 'lucide-react';
import { CarCondition, CarType, FuelType } from '../types/car';
import { cars } from '../data/cars';

interface HorizontalFiltersProps {
  selectedCondition: CarCondition | 'all';
  setSelectedCondition: (condition: CarCondition | 'all') => void;
  selectedType: CarType | 'all';
  setSelectedType: (type: CarType | 'all') => void;
  selectedFuelType: FuelType | 'all';
  setSelectedFuelType: (fuelType: FuelType | 'all') => void;
  selectedMake: string;
  setSelectedMake: (make: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  yearRange: [number, number];
  setYearRange: (range: [number, number]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const HorizontalFilters: React.FC<HorizontalFiltersProps> = ({
  selectedCondition,
  setSelectedCondition,
  selectedType,
  setSelectedType,
  selectedFuelType,
  setSelectedFuelType,
  selectedMake,
  setSelectedMake,
  selectedModel,
  setSelectedModel,
  yearRange,
  setYearRange,
  priceRange,
  setPriceRange
}) => {
  const uniqueMakes = Array.from(new Set(cars.map(car => car.make))).sort();
  const uniqueModels = Array.from(new Set(cars.map(car => car.model))).sort();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-orange" />
        <h3 className="text-lg font-semibold text-black">Filter Vehicles</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Condition */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Condition</h4>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedCondition === 'all' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedCondition === 'all' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedCondition('all')}
            >
              All
            </Badge>
            <Badge 
              variant={selectedCondition === 'new' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedCondition === 'new' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedCondition('new')}
            >
              New
            </Badge>
            <Badge 
              variant={selectedCondition === 'used' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedCondition === 'used' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedCondition('used')}
            >
              Used
            </Badge>
          </div>
        </div>

        {/* Vehicle Type */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Type</h4>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedType === 'all' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedType === 'all' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedType('all')}
            >
              All
            </Badge>
            <Badge 
              variant={selectedType === 'sedan' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedType === 'sedan' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedType('sedan')}
            >
              Sedan
            </Badge>
            <Badge 
              variant={selectedType === 'suv' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedType === 'suv' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedType('suv')}
            >
              SUV
            </Badge>
            <Badge 
              variant={selectedType === 'truck' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedType === 'truck' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedType('truck')}
            >
              Truck
            </Badge>
          </div>
        </div>

        {/* Fuel Type */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Fuel</h4>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedFuelType === 'all' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedFuelType === 'all' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedFuelType('all')}
            >
              All
            </Badge>
            <Badge 
              variant={selectedFuelType === 'gasoline' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedFuelType === 'gasoline' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedFuelType('gasoline')}
            >
              Gas
            </Badge>
            <Badge 
              variant={selectedFuelType === 'electric' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedFuelType === 'electric' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedFuelType('electric')}
            >
              Electric
            </Badge>
            <Badge 
              variant={selectedFuelType === 'hybrid' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedFuelType === 'hybrid' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedFuelType('hybrid')}
            >
              Hybrid
            </Badge>
          </div>
        </div>

        {/* Make */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Make</h4>
          <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
            <Badge 
              variant={selectedMake === 'all' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedMake === 'all' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedMake('all')}
            >
              All
            </Badge>
            {uniqueMakes.map(make => (
              <Badge 
                key={make}
                variant={selectedMake === make ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedMake === make ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
                onClick={() => setSelectedMake(make)}
              >
                {make}
              </Badge>
            ))}
          </div>
        </div>

        {/* Model */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Model</h4>
          <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
            <Badge 
              variant={selectedModel === 'all' ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedModel === 'all' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
              onClick={() => setSelectedModel('all')}
            >
              All
            </Badge>
            {uniqueModels.map(model => (
              <Badge 
                key={model}
                variant={selectedModel === model ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedModel === model ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
                onClick={() => setSelectedModel(model)}
              >
                {model}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Price: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
          </h4>
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange([value[0], value[1]])}
            max={100000}
            min={0}
            step={5000}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalFilters;
