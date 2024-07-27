/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react';
import { CalendarDays, MapPin, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RSVPForm from '@/components/RSVPForm';
import { Language, useTranslations } from '@/hooks/useTranslations';
import Image from 'next/image';

const WeddingInvitation: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const t = useTranslations(lang);
  const googleMapsUrl = `https://maps.app.goo.gl/xYw5ez592iEe84YG6`;

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

        <div className="p-6 relative">
          {/* <div className='relative text-center pt-9'>
            <Image 
              src="/floral-wreath.png" 
              alt="Floral Wreath" 
              className="mx-auto"
              width={250}
              height={250}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-2xl font-bold text-green-800">F | M</h1>
            </div>
          </div> */}

          <h1 className="text-3xl font-bold text-center text-green-800 mb-4">{t.title}</h1>
          
          <div className="text-center mb-6">
            <p className="text-2xl font-bold text-green-800">{t.groomName} & {t.brideName}</p>
          </div>
          
          <div className="flex items-center justify-left mb-4">
            <CalendarDays className="text-green-600 mr-2" />
            <div className="text-left">
              <p>{t.date}</p>
              <p>{t.time}</p>
            </div>
          </div>
          
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-left mb-6 no-underline hover:underline text-inherit bg-green-100 p-3 rounded-lg transition-all duration-300 hover:bg-green-200"
          >
            <MapPin className="text-green-600 mr-2" />
            <div className="text-left flex-grow">
              <p className="font-semibold">{t.venue}</p>
              <p>{t.address}</p>
            </div>
            <ExternalLink className="text-green-600 ml-2" size={20} />
          </a>

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