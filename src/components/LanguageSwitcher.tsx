
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Download, Map, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const LanguageSwitcher = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    navigate(`/${newLanguage}`, { replace: true });
  };

  return (
    <div className="fixed top-4 w-full flex justify-between px-4 z-50">
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant="outline"
          className="text-sm font-bold text-black"
          onClick={() => window.open('https://maps.me/', '_blank', 'noopener,noreferrer')}
        >
          <Download size={16} />
          <Map size={16} />
          {isMobile ? '' : t('mapApp')}
        </Button>
        
        <a 
          href="https://www.linkedin.com/in/alan-chismechian/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-lg sm:text-xl font-bold text-black hover:text-black transition-colors"
        >
          <span className="hidden sm:inline font-roobert">Design by Alan</span>
          <Linkedin size={20} className="text-blue-600" />
        </a>
      </div>
      
      <div className="flex gap-2">
        <Button
          variant={language === 'es' ? 'default' : 'outline'}
          onClick={() => handleLanguageChange('es')}
          className="text-sm"
        >
          ES
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          onClick={() => handleLanguageChange('en')}
          className="text-sm"
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
