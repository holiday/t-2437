
import React from 'react';

interface AdBannerProps {
  className?: string;
  title: string;
  subtitle: string;
  bgColor?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  className = "", 
  title, 
  subtitle, 
  bgColor = "bg-gradient-to-r from-orange-400 to-orange-600" 
}) => {
  return (
    <div className={`${bgColor} rounded-lg p-8 text-white text-center ${className}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg opacity-90">{subtitle}</p>
      <div className="mt-4 text-sm opacity-75">Advertisement</div>
    </div>
  );
};

export default AdBanner;
