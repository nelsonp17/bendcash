// @/lang/i18n-validators
import * as validators from '@vuelidate/validators'
import { i18n, t } from './index'

// const isEmailTaken = (value) => fetch(`/api/unique/${value}`).then(r => r.json()) // check the email in the server

export const email = validators.helpers.withMessage(
	({ $pending, $invalid, $params }) => `${t('validations.email')}`,
	validators.email
)
export const required = validators.helpers.withMessage(
	({ $pending, $invalid, $params }) => `${t('validations.required')}`,
	validators.required
)

export function minLength (min: number) {
	return validators.helpers.withMessage(
		({ $pending, $invalid, $params }) => t('validations.minLength', [$params.min]),
		validators.minLength(min)
	)
}
export function maxLength (max: number) {
	return validators.helpers.withMessage(
		({ $pending, $invalid, $params }) => t('validations.maxLength', [$params.max]),
		validators.maxLength(max)
	)
}

export function sameAs (password: string) {
	return validators.helpers.withMessage(
		({ $pending, $invalid, $params }) => t('validations.confirm_password'),
		validators.sameAs(password)
	)
}

export const i18nValidators = {
	email,
	required,
	minLength,
	maxLength
}
