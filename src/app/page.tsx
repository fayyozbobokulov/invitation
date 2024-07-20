'use client'
import { useState } from 'react';
import { CalendarDays, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RSVPForm from '@/components/RSVPForm';
import { Language, useTranslations } from '@/hooks/useTranslations';

const WeddingInvitation: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const t = useTranslations(lang);

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-green-600 p-4">
          <div className="flex justify-center space-x-2">
            <Button 
              variant={lang === 'uz' ? 'secondary' : 'ghost'} 
              onClick={() => setLang('uz')}
            >
              O'zbekcha
            </Button>
            <Button 
              variant={lang === 'uz-cyrillic' ? 'secondary' : 'ghost'} 
              onClick={() => setLang('uz-cyrillic')}
            >
              Ўзбекча
            </Button>
            <Button 
              variant={lang === 'en' ? 'secondary' : 'ghost'} 
              onClick={() => setLang('en')}
            >
              English
            </Button>
            <Button 
              variant={lang === 'ru' ? 'secondary' : 'ghost'} 
              onClick={() => setLang('ru')}
            >
              Русский
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-4">{t.title}</h1>
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">{t.couple}</h2>
            <p className="text-2xl font-bold text-green-800">{t.brideName} & {t.groomName}</p>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <CalendarDays className="text-green-600 mr-2" />
            <div>
              <p>{t.date}</p>
              <p>{t.time}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <MapPin className="text-green-600 mr-2" />
            <div>
              <p>{t.venue}</p>
              <p>{t.address}</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => setIsRSVPOpen(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              <Heart className="mr-2" size={18} />
              {t.rsvp}
            </Button>
          </div>
        </div>
      </div>
      <RSVPForm 
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
        t={t}
      />
    </div>
  );
};

export default WeddingInvitation;