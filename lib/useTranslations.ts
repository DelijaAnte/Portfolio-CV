import { useLanguageStore } from "./store";
import hrTranslations from "../locales/hr.json";
import enTranslations from "../locales/en.json";

type Translations = Record<string, unknown>;

export const useTranslations = () => {
  const { language } = useLanguageStore();
  const translations: Translations =
    language === "hr" ? hrTranslations : enTranslations;

  const t = (key: string): string => {
    return (
      (key
        .split(".")
        .reduce(
          (obj: unknown, k) =>
            typeof obj === "object" && obj
              ? (obj as Record<string, unknown>)[k]
              : undefined,
          translations
        ) as string) || key
    );
  };

  return { t, language };
};
