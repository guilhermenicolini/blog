import { getLanguage } from '@/i18n/utils'

export const slugfy = (value: string): string => {
  return (value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export const formatDate = (language: string = 'en-US'): Intl.DateTimeFormat => {
  const lang = getLanguage(language)
  return new Intl.DateTimeFormat(lang, {
    timeZone: 'UTC',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  })
}

// export const getLanguage = (language: string = 'en-US'): string => language === 'pt-BR' ? 'pt-BR' : 'en-US'
