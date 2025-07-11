
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, MapPin, MessageCircle, Phone, Fuel, Gauge, Calendar, Palette } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import RecentlyViewedCarousel from '../components/RecentlyViewedCarousel';
import SimilarVehiclesCarousel from '../components/SimilarVehiclesCarousel';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Car not found</h1>
          <Button onClick={() => navigate('/')} className="bg-orange hover:bg-orange-dark text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${car.whatsappNumber.replace('+', '')}?text=Hi, I'm interested in the ${car.year} ${car.make} ${car.model}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-6 hover:bg-orange hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Listings
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative">
                <ImageCarousel 
                  images={car.images.length > 0 ? car.images : [car.imageUrl]}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="h-96 rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-orange text-white">
                    {car.condition.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">
                  {car.year} {car.make} {car.model}
                </h1>
                <p className="text-4xl font-bold text-orange">
                  ${car.price.toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Gauge className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Mileage</p>
                    <p className="font-semibold">{car.mileage.toLocaleString()} miles</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Fuel className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Fuel Type</p>
                    <p className="font-semibold capitalize">{car.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Transmission</p>
                    <p className="font-semibold capitalize">{car.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Color</p>
                    <p className="font-semibold">{car.color}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{car.location}</span>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={car.dealerLogo} 
                      alt={car.dealerName}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-black">{car.dealerName}</p>
                      <p className="text-sm text-gray-500">Authorized Dealer</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6 border-t bg-gray-50">
            <h2 className="text-2xl font-bold text-black mb-4">Description</h2>
            <p className="text-gray-700 mb-6">{car.description}</p>
            
            <h3 className="text-xl font-semibold text-black mb-3">Key Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {car.features.map((feature, index) => (
                <div key={index} className="bg-white p-3 rounded border">
                  <p className="text-sm font-medium text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Vehicle Specifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium">Engine:</span> {car.engine}
                </div>
                <div>
                  <span className="font-medium">Year:</span> {car.year}
                </div>
                <div>
                  <span className="font-medium">Condition:</span> {car.condition}
                </div>
                <div>
                  <span className="font-medium">VIN:</span> {car.vin}
                </div>
                <div>
                  <span className="font-medium">Steering:</span> {car.steeringPosition}
                </div>
                <div>
                  <span className="font-medium">Transmission:</span> {car.transmission}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-12">
          <RecentlyViewedCarousel />
        </div>

        {/* Similar Vehicles Section */}
        <div className="mt-8">
          <SimilarVehiclesCarousel currentCar={car} />
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
