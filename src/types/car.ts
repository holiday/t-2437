
export type CarCondition = 'new' | 'used';
export type CarType = 'sedan' | 'suv' | 'hatchback' | 'coupe' | 'truck' | 'convertible';
export type FuelType = 'gasoline' | 'diesel' | 'hybrid' | 'electric';

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  condition: CarCondition;
  type: CarType;
  fuelType: FuelType;
  mileage: number;
  location: string;
  dealerName: string;
  dealerLogo: string;
  whatsappNumber: string;
  imageUrl: string;
  images: string[];
  description: string;
  features: string[];
  transmission: 'manual' | 'automatic';
  engine: string;
  color: string;
}
