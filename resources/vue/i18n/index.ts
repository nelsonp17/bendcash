import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'

const messages = {
	es,
	en
}

export const i18n = createI18n({
	locale: 'es', // set locale
	fallbackLocale: 'es', // set fallback locale
	globalInjection: true, // inject $t and $tc to all components
	defaultBrowserLanguage: false,
	legacy: false,
	messages // set locale messages
	// If you need to specify other options, you can set other options
})

export const t = i18n.global.t.bind(i18n.global)
