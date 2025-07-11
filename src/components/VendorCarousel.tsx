
import React from 'react';
import { Car } from '../types/car';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { useNavigate } from 'react-router-dom';

interface VendorCarouselProps {
  title: string;
  vendorName: string;
  cars: Car[];
}

const VendorCarousel: React.FC<VendorCarouselProps> = ({ title, vendorName, cars }) => {
  const navigate = useNavigate();

  if (cars.length === 0) return null;

  const handleWhatsAppClick = (e: React.MouseEvent, car: Car) => {
    e.stopPropagation();
    window.open(`https://wa.me/${car.whatsappNumber.replace('+', '')}?text=Hi, I'm interested in the ${car.year} ${car.make} ${car.model}`, '_blank');
  };

  const handleCardClick = (carId: string) => {
    navigate(`/car/${carId}`);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-gray-600">{cars.length} vehicles available</p>
        </div>
        <Button variant="outline" className="text-orange border-orange hover:bg-orange-50">
          View All
        </Button>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {cars.map((car) => (
            <CarouselItem key={car.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-200 overflow-hidden"
                onClick={() => handleCardClick(car.id)}
              >
                <div className="relative">
                  <img
                    src={car.imageUrl}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={car.condition === 'new' ? 'default' : 'secondary'} className="bg-orange text-white text-xs">
                      {car.condition.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-bold text-black">
                        {car.year} {car.make} {car.model}
                      </h4>
                      <p className="text-xl font-bold text-orange">
                        ${car.price.toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>
                        <span className="font-medium">Mileage:</span> {car.mileage.toLocaleString()} mi
                      </div>
                      <div>
                        <span className="font-medium">Fuel:</span> {car.fuelType}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {car.location}
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <span className="text-xs font-medium text-gray-700">{car.dealerName}</span>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white text-xs h-8"
                        onClick={(e) => handleWhatsAppClick(e, car)}
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default VendorCarousel;
