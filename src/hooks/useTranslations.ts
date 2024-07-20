import { useState, useEffect } from 'react';

export interface TranslationType {
  title: string;
  couple: string;
  brideName: string;
  groomName: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  rsvp: string;
  formTitle: string;
  nameLabel: string;
  phoneLabel: string;
  phoneFormat: string;
  submit: string;
  thankYou: string;
  phoneError: string;
}
export type Language = 'uz' | 'en' | 'ru' | 'uz-cyrillic';

const translations: Record<Language, TranslationType> = {
  'uz': {
    title: "Nikoh to'yiga taklifnoma",
    couple: "Kelin va kuyov",
    brideName: "Madinabonu",
    groomName: "Fayyozjon",
    date: "2024 yil 7 avgust",
    time: "Chorshanba kuni soat 19:00 da",
    venue: "Osiyo Grand To'yxonasi",
    address: "Yangirabod shahri, Xatirchi tumani, Navoiy Viloyati",
    rsvp: "Tasdiqlash",
    formTitle: "Ishtirokingizni tasdiqlang",
    nameLabel: "Ismingiz",
    phoneLabel: "Telefon raqamingiz",
    phoneFormat: "+998 XX XXXXXXX formatida",
    submit: "Yuborish",
    thankYou: "Rahmat! Sizning javobingiz qabul qilindi.",
    phoneError: "Iltimos, to'g'ri telefon raqamini kiriting"
  },
  'en': {
    title: "Wedding Invitation",
    couple: "Bride and Groom",
    brideName: "Madinabonu",
    groomName: "Fayyozjon",
    date: "August 7, 2024",
    time: "Wednesday at 7:00 PM",
    venue: "Osiyo Grand Wedding Hall",
    address: "Yangirabod City, Xatirchi District, Navoiy Region",
    rsvp: "RSVP",
    formTitle: "Confirm Your Attendance",
    nameLabel: "Your Name",
    phoneLabel: "Your Phone Number",
    phoneFormat: "In the format +998 XX XXXXXXX",
    submit: "Submit",
    thankYou: "Thank you! Your response has been recorded.",
    phoneError: "Please enter a valid phone number"
  },
  'ru': {
    title: "Приглашение на свадьбу",
    couple: "Невеста и жених",
    brideName: "Мадинабону",
    groomName: "Файёзжон",
    date: "7 августа 2024 года",
    time: "Среда в 19:00",
    venue: "Осийо Гранд Свадебный Зал",
    address: "город Янгирабад, Хатирчинский район, Навоийская область",
    rsvp: "Подтвердить",
    formTitle: "Подтвердите ваше участие",
    nameLabel: "Ваше имя",
    phoneLabel: "Ваш номер телефона",
    phoneFormat: "В формате +998 XX XXXXXXX",
    submit: "Отправить",
    thankYou: "Спасибо! Ваш ответ был принят.",
    phoneError: "Пожалуйста, введите правильный номер телефона"
  },
  'uz-cyrillic': {
    title: "Никоҳ тўйига таклифнома",
    couple: "Келин ва куёв",
    brideName: "Мадинабону",
    groomName: "Файёзжон",
    date: "2024 йил 7 август",
    time: "Чоршанба куни соат 19:00 да",
    venue: "Осиё Гранд Тўйхонаси",
    address: "Янгирабод шаҳри, Хатирчи тумани, Навоий вилояти",
    rsvp: "Тасдиқлаш",
    formTitle: "Иштирокингизни тасдиқланг",
    nameLabel: "Исмигизни",
    phoneLabel: "Телефон рақамингизни",
    phoneFormat: "+998 XX XXXXXXX форматида",
    submit: "Юбориш",
    thankYou: "Раҳмат! Сизнинг жавобингиз қабул қилинди.",
    phoneError: "Илтимос, тўғри телефон рақамини киритинг"
  }
};

export const useTranslations = (lang: Language): TranslationType => {
  const [t, setT] = useState<TranslationType>(translations[lang]);

  useEffect(() => {
    setT(translations[lang]);
  }, [lang]);

  return t;
};