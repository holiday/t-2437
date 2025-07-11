import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  // Dummy partner logos - repeated for continuous scroll effect
  const partnerLogos = [
    { name: "Toyota", logo: "/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png" },
    { name: "Honda", logo: "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png" },
    { name: "BMW", logo: "/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png" },
    { name: "Ford", logo: "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png" },
    { name: "Audi", logo: "/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png" },
    { name: "Mercedes", logo: "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png" },
    { name: "Nissan", logo: "/lovable-uploads/b0b87b4b-57b0-4a6e-8314-b8c65cfded98.png" },
    { name: "Hyundai", logo: "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png" },
  ];

  // Double the array for seamless infinite scroll
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Car<span className="text-orange">Hub</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect vehicle. Browse thousands of cars from verified dealers nationwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Browse Cars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Your Car</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Car Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>1-800-CARHUB-1</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@carhub.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Auto Plaza, Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Moving Trusted Partners Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Trusted Partners</h4>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {duplicatedLogos.map((partner, index) => (
                <img 
                  key={index}
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CarHub. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
