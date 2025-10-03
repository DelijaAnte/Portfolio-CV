// Custom hook za dohvaćanje prijevoda na temelju trenutnog jezika
import { useLanguageStore } from "./store";
import hrTranslations from "../locales/hr.json";
import enTranslations from "../locales/en.json";

export const useTranslations = () => {
  // Dohvaća trenutni jezik iz Zustand store-a
  const { language } = useLanguageStore();

  // Odabire odgovarajuću JSON datoteku s prijevodima na temelju jezika
  const translations = language === "hr" ? hrTranslations : enTranslations;

  // Funkcija za dohvaćanje prijevoda po ključu (npr. "home.title")
  const t = (key: string) => {
    return (
      // Dijeli ključ po točkama i traži vrijednost u objektu prijevoda
      // Ako ne pronađe prijevod, vraća originalni ključ
      key.split(".").reduce((obj: any, k) => obj?.[k], translations) || key
    );
  };

  // Vraća funkciju t() za prijevode i trenutni jezik
  return { t, language };
};
