import { useState } from "react";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const languages = [
  { code: "so", name: "Af-Soomaali", flag: "🇸🇴" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-golden/30 text-foreground hover:border-golden transition-all duration-300 golden-glow"
      >
        <Globe className="w-4 h-4 text-golden" />
        <span className="text-sm font-medium">{current.flag} {current.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 glass-card rounded-xl overflow-hidden min-w-[160px] z-50 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-golden/10 transition-colors flex items-center gap-2 ${
                currentLang === lang.code ? "text-golden bg-golden/5" : "text-foreground"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
