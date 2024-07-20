import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TranslationType } from '@/hooks/useTranslations';

interface RSVPFormProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationType;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ isOpen, onClose, t }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formatPhoneNumber = (input: string): string => {
    const numbers = input.replace(/\D/g, '');
    let formatted = '+998 ';
    if (numbers.length > 3) {
      formatted += numbers.substring(3, 5);
    }
    if (numbers.length > 5) {
      formatted += ' ' + numbers.substring(5, 12);
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    if (!input.startsWith('+998 ')) {
      input = '+998 ' + input.replace('+998 ', '');
    }
    const formattedNumber = formatPhoneNumber(input);
    setPhone(formattedNumber);
    setPhoneError('');
  };

  const validatePhone = (): boolean => {
    const phoneRegex = /^\+998 \d{2} \d{7}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError(t.phoneError);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePhone()) {
      console.log('Submitted:', { name, phone });
      setSubmitted(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className='text-green-800'>{t.formTitle}</DialogTitle>
        </DialogHeader>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 ">
              <div>
                <Label htmlFor="name" className='text-green-800'>{t.nameLabel}</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className='text-green-800'>
                  {t.phoneLabel}
                  <span className="text-xs text-gray-500 ml-1">({t.phoneFormat})</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+998 XX XXXXXXX"
                  required
                />
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>
              <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
                {t.submit}
              </Button>
            </div>
          </form>
        ) : (
          <p className="text-center text-green-600">{t.thankYou}</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RSVPForm;
