
import React from 'react';
import { Car } from '../types/car';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const navigate = useNavigate();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`https://wa.me/${car.whatsappNumber.replace('+', '')}?text=Hi, I'm interested in the ${car.year} ${car.make} ${car.model}`, '_blank');
  };

  const handleCardClick = () => {
    navigate(`/car/${car.id}`);
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-gray-200 overflow-hidden"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={car.imageUrl}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={car.condition === 'new' ? 'default' : 'secondary'} className="bg-orange text-white">
            {car.condition.toUpperCase()}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <img 
            src={car.dealerLogo} 
            alt={car.dealerName}
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-black">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-2xl font-bold text-orange mt-1">
              ${car.price.toLocaleString()}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Mileage:</span> {car.mileage.toLocaleString()} mi
            </div>
            <div>
              <span className="font-medium">Fuel:</span> {car.fuelType}
            </div>
            <div>
              <span className="font-medium">Transmission:</span> {car.transmission}
            </div>
            <div>
              <span className="font-medium">Color:</span> {car.color}
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {car.location}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-700">{car.dealerName}</span>
            <Button
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
