
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { Filter, X } from 'lucide-react';
import { CarCondition, CarType, FuelType } from '../types/car';
import { cars } from '../data/cars';

interface FilterBottomSheetProps {
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
  onClearAll: () => void;
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
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
  setPriceRange,
  onClearAll
}) => {
  const uniqueMakes = Array.from(new Set(cars.map(car => car.make))).sort();
  const uniqueModels = Array.from(new Set(cars.map(car => car.model))).sort();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="border-black text-black hover:bg-gray-50">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Filter Vehicles</DrawerTitle>
          <DrawerDescription>
            Refine your search to find the perfect vehicle
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 pb-4 space-y-6 overflow-y-auto">
          {/* Condition */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Condition</h4>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedCondition === 'all' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedCondition === 'all' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedCondition('all')}
              >
                All
              </Badge>
              <Badge 
                variant={selectedCondition === 'new' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedCondition === 'new' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedCondition('new')}
              >
                New
              </Badge>
              <Badge 
                variant={selectedCondition === 'used' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedCondition === 'used' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedCondition('used')}
              >
                Used
              </Badge>
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Type</h4>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedType === 'all' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedType === 'all' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedType('all')}
              >
                All
              </Badge>
              <Badge 
                variant={selectedType === 'sedan' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedType === 'sedan' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedType('sedan')}
              >
                Sedan
              </Badge>
              <Badge 
                variant={selectedType === 'suv' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedType === 'suv' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedType('suv')}
              >
                SUV
              </Badge>
              <Badge 
                variant={selectedType === 'truck' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedType === 'truck' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedType('truck')}
              >
                Truck
              </Badge>
            </div>
          </div>

          {/* Fuel Type */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Fuel</h4>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedFuelType === 'all' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedFuelType === 'all' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedFuelType('all')}
              >
                All
              </Badge>
              <Badge 
                variant={selectedFuelType === 'gasoline' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedFuelType === 'gasoline' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedFuelType('gasoline')}
              >
                Gas
              </Badge>
              <Badge 
                variant={selectedFuelType === 'electric' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedFuelType === 'electric' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedFuelType('electric')}
              >
                Electric
              </Badge>
              <Badge 
                variant={selectedFuelType === 'hybrid' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedFuelType === 'hybrid' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedFuelType('hybrid')}
              >
                Hybrid
              </Badge>
            </div>
          </div>

          {/* Make */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Make</h4>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              <Badge 
                variant={selectedMake === 'all' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedMake === 'all' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedMake('all')}
              >
                All
              </Badge>
              {uniqueMakes.map(make => (
                <Badge 
                  key={make}
                  variant={selectedMake === make ? 'default' : 'outline'}
                  className={`cursor-pointer ${selectedMake === make ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                  onClick={() => setSelectedMake(make)}
                >
                  {make}
                </Badge>
              ))}
            </div>
          </div>

          {/* Model */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Model</h4>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              <Badge 
                variant={selectedModel === 'all' ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedModel === 'all' ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                onClick={() => setSelectedModel('all')}
              >
                All
              </Badge>
              {uniqueModels.map(model => (
                <Badge 
                  key={model}
                  variant={selectedModel === model ? 'default' : 'outline'}
                  className={`cursor-pointer ${selectedModel === model ? 'bg-black text-white' : 'hover:bg-gray-50 border-gray-300'}`}
                  onClick={() => setSelectedModel(model)}
                >
                  {model}
                </Badge>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">
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

          {/* Year Range */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">
              Year: {yearRange[0]} - {yearRange[1]}
            </h4>
            <Slider
              value={yearRange}
              onValueChange={(value) => setYearRange([value[0], value[1]])}
              max={2024}
              min={2015}
              step={1}
              className="mt-2"
            />
          </div>
        </div>

        <DrawerFooter>
          <div className="flex gap-2">
            <Button onClick={onClearAll} variant="outline" className="flex-1 border-black text-black hover:bg-gray-50">
              Clear All
            </Button>
            <DrawerClose asChild>
              <Button className="flex-1 bg-black text-white hover:bg-gray-800">
                Apply Filters
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterBottomSheet;
