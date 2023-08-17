import { ui, defaultLang, urls, environments, languages, defaultEnv } from './ui'

export function getLanguage (locale: string): keyof typeof ui {
  if (locale in ui) return locale as keyof typeof ui
  return defaultLang
}

export function useTranslations (lang: keyof typeof ui) {
  return function t (key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

export function getUrl (mode: string, locale: string): string {
  const m = mode in environments ? mode : defaultEnv
  const l = locale in languages ? locale : defaultLang
  return urls[m as keyof typeof environments][l as keyof typeof languages]
}
