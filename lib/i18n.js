import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
        nav:{
          home: "Home",
          eslResources: "ESL resources",
          shortStory: "Short Story",
          blog: "Blog",
          video: "Video",
          authenticMaterial: "Authentic material",
          courses: "Courses",
          generalEnglish: "General English",
          academicEnglish: "Academic English",
          languagePreparationTest: "Language Preparation Test",
          esp: "ESP",
          businessEnglish: "Business English",
          entrepreneurship: "Entrepreneurship",
          services: "Services",
          groupVipClasses: "Group VIP Classes",
          privateTutoring: "Private Tutoring",
          virtualClasses: "Virtual Classes",
          physicalClasses: "Physical Classes",
          corporateTraining: "Corporate Training",
          tutelageTests: "Tutelage Tests",
          practiceTests: "Practice Tests",
          ieltsPreparation: "IELTS Preparation",
          mockExams: "Mock exams",
          contact: "Contact",
          tutelage: "Tutelage",
          tutelageAi: "Tutelage AI"
        }
    }
  },
  ku: {
    translation: {
        nav:{
          home: "سەرەتا",
          eslResources: "سەرچاوەکانی ESL",
          shortStory: "چیرۆکی کورت",
          blog: "بلۆگ",
          video: "ڤیدیۆ",
          authenticMaterial: "مادەی ڕاستەقینە",
          courses: "کۆرسەکان",
          generalEnglish: "ئینگلیزی گشتی",
          academicEnglish: "ئینگلیزی ئەکادیمی",
          languagePreparationTest: "تاقیکردنەوەی ئامادەکردنی زمان",
          esp: "ESP",
          businessEnglish: "ئینگلیزی بازرگانی",
          entrepreneurship: "کارەکتێریت",
          services: "خزمەتگوزارییەکان",
          groupVipClasses: "پۆلە VIP گرووپییەکان",
          privateTutoring: "وانەی تایبەت",
          virtualClasses: "پۆلە مەجازییەکان",
          physicalClasses: "پۆلە فیزیکییەکان",
          corporateTraining: "ڕاهێنانی کۆمپانیا",
          tutelageTests: "تاقیکردنەوەکانی Tutelage",
          practiceTests: "تاقیکردنەوەی پراکتیک",
          ieltsPreparation: "ئامادەکردنی IELTS",
          mockExams: "تاقیکردنەوەی نموونە",
          contact: "پەیوەندی",
          tutelage: "Tutelage",
          tutelageAi: "Tutelage AI"
        }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
