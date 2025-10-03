// Zustand store za upravljanje globalnim stanjem jezika
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Interface koji definira strukturu store-a za jezik
interface LanguageStore {
  language: "hr" | "en"; // Trenutni jezik - može biti hrvatski ili engleski
  setLanguage: (lang: "hr" | "en") => void; // Funkcija za promjenu jezika
}

// Kreiranje Zustand store-a s persist middleware-om
export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "hr", // Default jezik je hrvatski
      setLanguage: (lang) => set({ language: lang }), // Postavlja novi jezik u store
    }),
    { name: "language-storage" } // Ključ pod kojim se čuva u localStorage
  )
);
