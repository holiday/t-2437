
import { Car } from '../types/car';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 28500,
    condition: 'new',
    type: 'sedan',
    fuelType: 'gasoline',
    mileage: 0,
    location: 'Los Angeles, CA',
    dealerName: 'Toyota Downtown',
    dealerLogo: '/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png',
    whatsappNumber: '+1234567890',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
    ],
    description: 'Brand new Toyota Camry with all the latest features and safety technology.',
    features: ['Backup Camera', 'Bluetooth', 'Cruise Control', 'Apple CarPlay'],
    transmission: 'automatic',
    engine: '2.5L 4-Cylinder',
    color: 'Silver'
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2022,
    price: 22000,
    condition: 'used',
    type: 'sedan',
    fuelType: 'gasoline',
    mileage: 15000,
    location: 'Miami, FL',
    dealerName: 'Honda Center',
    dealerLogo: '/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png',
    whatsappNumber: '+1234567891',
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    description: 'Well-maintained Honda Civic with low mileage and excellent fuel economy.',
    features: ['Navigation System', 'Sunroof', 'Heated Seats', 'Lane Assist'],
    transmission: 'manual',
    engine: '2.0L 4-Cylinder',
    color: 'Blue'
  },
  {
    id: '3',
    make: 'BMW',
    model: 'X5',
    year: 2023,
    price: 65000,
    condition: 'new',
    type: 'suv',
    fuelType: 'hybrid',
    mileage: 0,
    location: 'New York, NY',
    dealerName: 'BMW Manhattan',
    dealerLogo: '/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png',
    whatsappNumber: '+1234567892',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
    ],
    description: 'Luxury SUV with hybrid technology and premium features.',
    features: ['Panoramic Roof', 'Premium Audio', 'Adaptive Suspension', 'Wireless Charging'],
    transmission: 'automatic',
    engine: '3.0L Hybrid',
    color: 'Black'
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    price: 45000,
    condition: 'used',
    type: 'sedan',
    fuelType: 'electric',
    mileage: 8000,
    location: 'San Francisco, CA',
    dealerName: 'Tesla Bay Area',
    dealerLogo: '/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png',
    whatsappNumber: '+1234567893',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop'
    ],
    description: 'Electric vehicle with autopilot and supercharging capability.',
    features: ['Autopilot', 'Supercharging', 'Glass Roof', 'Premium Interior'],
    transmission: 'automatic',
    engine: 'Electric Motor',
    color: 'White'
  },
  {
    id: '5',
    make: 'Ford',
    model: 'F-150',
    year: 2023,
    price: 52000,
    condition: 'new',
    type: 'truck',
    fuelType: 'gasoline',
    mileage: 0,
    location: 'Dallas, TX',
    dealerName: 'Ford Texas',
    dealerLogo: '/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png',
    whatsappNumber: '+1234567894',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop'
    ],
    description: 'America\'s best-selling truck with powerful performance and capability.',
    features: ['Towing Package', '4WD', 'Bed Liner', 'Crew Cab'],
    transmission: 'automatic',
    engine: '5.0L V8',
    color: 'Red'
  },
  {
    id: '6',
    make: 'Audi',
    model: 'Q7',
    year: 2021,
    price: 48000,
    condition: 'used',
    type: 'suv',
    fuelType: 'gasoline',
    mileage: 25000,
    location: 'Chicago, IL',
    dealerName: 'Audi Chicago',
    dealerLogo: '/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png',
    whatsappNumber: '+1234567895',
    imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop'
    ],
    description: 'Luxury SUV with three rows of seating and advanced technology.',
    features: ['3rd Row Seating', 'Virtual Cockpit', 'Quattro AWD', 'Bang & Olufsen Audio'],
    transmission: 'automatic',
    engine: '3.0L V6',
    color: 'Gray'
  }
];
