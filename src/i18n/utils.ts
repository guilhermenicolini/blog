import { ui, defaultLang } from './ui'

export function getLanguage (locale: string): keyof typeof ui {
  if (locale in ui) return locale as keyof typeof ui
  return defaultLang
}

export function useTranslations (lang: keyof typeof ui) {
  return function t (key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}
