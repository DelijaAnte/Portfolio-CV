"use client";

import { useLanguageStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={() => setLanguage(language === "hr" ? "en" : "hr")}
      className="
        rounded-full
        px-5 py-3
        text-lg
        transition-colors
        duration-300
        hover:bg-black/50
        hover:text-white
        shadow-md
        active:scale-95
      "
    >
      {language === "hr" ? "EN" : "HR"}
    </Button>
  );
};
