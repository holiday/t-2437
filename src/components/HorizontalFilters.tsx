
import React from 'react';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';
import { CarCondition, CarType, FuelType } from '../types/car';
import FilterBottomSheet from './FilterBottomSheet';

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
  const handleClearAll = () => {
    setSelectedCondition('all');
    setSelectedType('all');
    setSelectedFuelType('all');
    setSelectedMake('all');
    setSelectedModel('all');
    setYearRange([2015, 2024]);
    setPriceRange([0, 100000]);
  };

  const activeFilters = [];

  if (selectedCondition !== 'all') {
    activeFilters.push({
      label: selectedCondition.charAt(0).toUpperCase() + selectedCondition.slice(1),
      onRemove: () => setSelectedCondition('all')
    });
  }

  if (selectedType !== 'all') {
    activeFilters.push({
      label: selectedType.toUpperCase(),
      onRemove: () => setSelectedType('all')
    });
  }

  if (selectedFuelType !== 'all') {
    activeFilters.push({
      label: selectedFuelType.charAt(0).toUpperCase() + selectedFuelType.slice(1),
      onRemove: () => setSelectedFuelType('all')
    });
  }

  if (selectedMake !== 'all') {
    activeFilters.push({
      label: selectedMake,
      onRemove: () => setSelectedMake('all')
    });
  }

  if (selectedModel !== 'all') {
    activeFilters.push({
      label: selectedModel,
      onRemove: () => setSelectedModel('all')
    });
  }

  if (yearRange[0] !== 2015 || yearRange[1] !== 2024) {
    activeFilters.push({
      label: `${yearRange[0]}-${yearRange[1]}`,
      onRemove: () => setYearRange([2015, 2024])
    });
  }

  if (priceRange[0] !== 0 || priceRange[1] !== 100000) {
    activeFilters.push({
      label: `$${priceRange[0].toLocaleString()}-$${priceRange[1].toLocaleString()}`,
      onRemove: () => setPriceRange([0, 100000])
    });
  }

  return (
    <div className="bg-white border-b border-gray-200 py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 overflow-x-auto">
          <FilterBottomSheet
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
            onClearAll={handleClearAll}
          />
          
          {activeFilters.map((filter, index) => (
            <Badge
              key={index}
              variant="outline"
              className="flex items-center gap-1 bg-black text-white border-black hover:bg-gray-800 cursor-pointer whitespace-nowrap"
              onClick={filter.onRemove}
            >
              {filter.label}
              <X className="w-3 h-3" />
            </Badge>
          ))}
          
          {activeFilters.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalFilters;
