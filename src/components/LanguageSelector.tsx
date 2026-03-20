"use client";
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
}

export function LanguageSelector({
  variant = "desktop",
}: LanguageSelectorProps) {
  const pathname = usePathname();
  const [language, setLanguage] = useState(pathname.split("/")[1]);
  
  const router = useRouter();
  const languages = [
    { value: "uz", label: "O'zbek", flag: "🇺🇿" },
    { value: "ru", label: "Русский", flag: "🇷🇺" },
    { value: "en", label: "English", flag: "🇬🇧" },
  ];

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
   const segments = pathname.split("/");
    segments[1] = value;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  if (variant === "mobile") {
    return (
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-full bg-white/50 border-2 border-[#00004d]/10 text-[#00004d] font-semibold rounded-xl h-12 focus:ring-0 focus:ring-offset-0">
          <div className="flex items-center gap-2">
            <Languages className="size-5" />
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-[#fdfd96] border-2 border-[#00004d]/10 rounded-xl">
          {languages.map((lang) => (
            <SelectItem
              key={lang.value}
              value={lang.value}
              className="text-[#00004d] font-semibold cursor-pointer focus:bg-[#00004d]/10 focus:text-[#00004d]"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] bg-transparent border border-[#00004d]/20 text-[#00004d] font-semibold rounded-lg h-9 focus:ring-0 focus:ring-offset-0 hover:border-[#00004d]/40 transition-colors">
        <div className="flex items-center gap-2">
          <Languages className="size-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-[#fdfd96] border-2 border-[#00004d]/10 rounded-xl">
        {languages.map((lang) => (
          <SelectItem
            key={lang.value}
            value={lang.value}
            className="text-[#00004d] font-semibold cursor-pointer focus:bg-[#00004d]/10 focus:text-[#00004d]"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
