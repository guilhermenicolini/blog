export const languages = {
  pt: 'pt',
  en: 'en'
}

export const defaultLang = 'en'

export const ui = {
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
    pt: 'http://localhost:3000',
    en: 'http://localhost:3000'
  },
  production: {
    pt: 'https://guilhermenicolini.com.br',
    en: 'http://en.guilhermenicolini.com.br'
  }
}
