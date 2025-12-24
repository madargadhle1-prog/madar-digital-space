import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import heroBg from "@/assets/hero-bg.jpg";

interface Content {
  title: string;
  description: string;
  placeholder: string;
}

const translations: Record<string, Content> = {
  so: {
    title: "Ku soo dhawoow",
    description: "Khibradahayga waxaa ka mid ah technology, digitalization, management, iyo asset management.",
    placeholder: "Geli magacaaga halkan...",
  },
  en: {
    title: "Welcome",
    description: "My expertise includes technology, digitalization, management, and asset management.",
    placeholder: "Enter your name here...",
  },
  ar: {
    title: "مرحبًا بكم",
    description: "خبرتي تشمل التكنولوجيا، الرقمنة، الإدارة، وإدارة الأصول",
    placeholder: "أدخل اسمك هنا...",
  },
};

const HeroSection = () => {
  const [lang, setLang] = useState("so");
  const content = translations[lang];
  const isRTL = lang === "ar";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-golden/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-somali-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name Badge */}
          <div className="inline-block mb-8 animate-fade-in">
            <span className="px-4 py-2 text-sm font-medium bg-golden/10 border border-golden/30 rounded-full text-golden">
              C Eng Madar
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Madar</span>{" "}
            <span className="text-gradient-golden">Mahamud</span>
          </h1>

          {/* Welcome Text */}
          <p className="text-2xl md:text-3xl font-display text-golden mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {content.title}
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {["Technology", "Management", "Asset Management", "Digitalization", "Modern Solutions"].map((tag, i) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm bg-card/50 backdrop-blur-sm border border-border rounded-full text-muted-foreground hover:border-golden/50 hover:text-golden transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {content.description}
          </p>

          {/* Contact Input */}
          <div className="max-w-md mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <input
              type="text"
              placeholder={content.placeholder}
              className="w-full px-6 py-4 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-golden focus:golden-glow transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-golden/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-golden rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
