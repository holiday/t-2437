
import React from 'react';
import { Badge } from './ui/badge';
import { Car as CarIcon, Truck, Zap, Fuel } from 'lucide-react';
import { CarCondition, CarType, FuelType } from '../types/car';

interface CarFiltersProps {
  selectedCondition: CarCondition | 'all';
  setSelectedCondition: (condition: CarCondition | 'all') => void;
  selectedType: CarType | 'all';
  setSelectedType: (type: CarType | 'all') => void;
  selectedFuelType: FuelType | 'all';
  setSelectedFuelType: (fuelType: FuelType | 'all') => void;
}

const CarFilters: React.FC<CarFiltersProps> = ({
  selectedCondition,
  setSelectedCondition,
  selectedType,
  setSelectedType,
  selectedFuelType,
  setSelectedFuelType
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-black mb-3">Condition</h3>
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

      <div>
        <h3 className="text-lg font-semibold text-black mb-3">Vehicle Type</h3>
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant={selectedType === 'all' ? 'default' : 'outline'}
            className={`cursor-pointer ${selectedType === 'all' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
            onClick={() => setSelectedType('all')}
          >
            <CarIcon className="w-4 h-4 mr-1" />
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
            variant={selectedType === 'hatchback' ? 'default' : 'outline'}
            className={`cursor-pointer ${selectedType === 'hatchback' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
            onClick={() => setSelectedType('hatchback')}
          >
            Hatchback
          </Badge>
          <Badge 
            variant={selectedType === 'truck' ? 'default' : 'outline'}
            className={`cursor-pointer ${selectedType === 'truck' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
            onClick={() => setSelectedType('truck')}
          >
            <Truck className="w-4 h-4 mr-1" />
            Truck
          </Badge>
          <Badge 
            variant={selectedType === 'coupe' ? 'default' : 'outline'}
            className={`cursor-pointer ${selectedType === 'coupe' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
            onClick={() => setSelectedType('coupe')}
          >
            Coupe
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-black mb-3">Fuel Type</h3>
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
            <Fuel className="w-4 h-4 mr-1" />
            Gasoline
          </Badge>
          <Badge 
            variant={selectedFuelType === 'electric' ? 'default' : 'outline'}
            className={`cursor-pointer ${selectedFuelType === 'electric' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
            onClick={() => setSelectedFuelType('electric')}
          >
            <Zap className="w-4 h-4 mr-1" />
            Electric
          </Badge>
          <Badge 
            variant={selectedFuelType === 'hybrid' ? 'default' : 'outline'}
            className={`cursor-pointer ${selectedFuelType === 'hybrid' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
            onClick={() => setSelectedFuelType('hybrid')}
          >
            Hybrid
          </Badge>
          <Badge 
            variant={selectedFuelType === 'diesel' ? 'default' : 'outline'}
            className={`cursor-pointer ${selectedFuelType === 'diesel' ? 'bg-orange text-white' : 'hover:bg-orange-50'}`}
            onClick={() => setSelectedFuelType('diesel')}
          >
            Diesel
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;
