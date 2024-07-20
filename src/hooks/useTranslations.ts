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

const translations: Record<'uz' | 'en' | 'ru' | 'uz-cyrillic', TranslationType> = {
  'uz': {
    title: "Nikoh to'yiga taklifnoma",
    couple: "Kelin va kuyov",
    brideName: "Madinaxon",
    groomName: "Fayyozjon",
    date: "2024 yil 15 oktyabr",
    time: "Shanba kuni soat 15:00 da",
    venue: "Go'zal Bog' To'yxonasi",
    address: "Muhabbat ko'chasi 123-uy, Romantik shahri",
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
    brideName: "Madinakhon",
    groomName: "Fayyozjon",
    date: "October 15, 2024",
    time: "Saturday at 3:00 PM",
    venue: "Beautiful Garden Wedding Hall",
    address: "123 Love Street, Romantic City",
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
    brideName: "Мадинахон",
    groomName: "Файёзджон",
    date: "15 октября 2024 года",
    time: "Суббота в 15:00",
    venue: "Красивый Сад Свадебный Зал",
    address: "Любовная улица, 123, Романтический город",
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
    brideName: "Мадинахон",
    groomName: "Файёзжон",
    date: "2024 йил 15 октябр",
    time: "Шанба куни соат 15:00 да",
    venue: "Гўзал Бог' Тўйхонаси",
    address: "Мухаббат кўчаси 123-уй, Романтик шаҳри",
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

export const useTranslations = (lang: 'uz' | 'en'): TranslationType => {
  const [t, setT] = useState<TranslationType>(translations[lang]);

  useEffect(() => {
    setT(translations[lang]);
  }, [lang]);

  return t;
};