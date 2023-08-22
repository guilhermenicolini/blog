export const languages = {
  de: 'de',
  pt: 'pt',
  en: 'en'
}

export const environments = {
  development: 'development',
  production: 'production'
}

export const defaultLang = 'en'
export const defaultEnv = 'development'

export const ui = {
  de: {
    '404 - Not Found': '404 - Seite Nicht Gefunden',
    'Back To Home': 'Zurück Zur seite',
    'Read more': 'Mehr lesen',
    'We could not find the page you were looking for.': 'Die von Ihnen angeforderte Seite wurde nicht gefunden.'
  },
  pt: {
    '404 - Not Found': '404 - Não Encontrado',
    'Back To Home': 'Voltar Para Início',
    'Read more': 'Leia mais',
    'We could not find the page you were looking for.': 'Não conseguimos encontrar a página que você está procurando.'
  },
  en: {
    '404 - Not Found': '404 - Not Found',
    'Back To Home': 'Back To Home',
    'Read more': 'Read more',
    'We could not find the page you were looking for.': 'We could not find the page you were looking for.'
  }
} as const

export const urls = {
  development: {
    de: 'http://localhost:3000',
    pt: 'http://localhost:3000',
    en: 'http://localhost:3000'
  },
  production: {
    de: 'https://de.guilhermenicolini.com.br',
    pt: 'https://guilhermenicolini.com.br',
    en: 'https://en.guilhermenicolini.com.br'
  }
}
