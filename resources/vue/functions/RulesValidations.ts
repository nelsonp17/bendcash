export default class RulesValidations {
	public validationErrors: object[] = []
	public validationErrorsCount: number = 0
	public min: number = 0
	public max: number = 0
	public input: string = 'input'
	public errors: string[] = []

	validate (id: string, value: string, rules: string): boolean {
		this.input = id
		const rulesArray: string[] = rules.split('|')
		for (const rule of rulesArray) {
			const ruleName: string = rule.split(':')[0]
			const ruleValue: string = (rule.split(':')[1] !== '') ? rule.split(':')[1] : ''
			if (ruleName === 'required') {
				if (!this.required(value)) {
					return false
				}
			}
			if (ruleName === 'min') {
				if (!this.minLength(value, Number(ruleValue))) {
					return false
				}
			}
			if (ruleName === 'max') {
				if (!this.maxLength(value, Number(ruleValue))) {
					return false
				}
			}
			if (ruleName === 'email') {
				if (!this.isEmail(value)) {
					return false
				}
			}
			if (ruleName === 'securePassword') {
				if (!this.securePassword(value)) {
					return false
				}
			}
		}

		// agregar errores si hay y limpiar
		return true
	}

	addError () {
		const panic: Record<string, string[]> = {}
		panic[this.input] = this.errors

		this.validationErrors.push(panic)
		this.errors = []
	}

	err (error: string) {
		this.errors.push(error)
		this.validationErrorsCount += 1
	}

	required (value: string): boolean {
		if (value.length > 0) {
			return true
		}
		this.err('Este campo es requerido')
		this.addError()
		return false
	}

	minLength (value: string, min: number): boolean {
		if (value.length >= min) {
			return true
		}
		this.err(`'Este campo debe tener mínimo ${min} caracteres'`)
		this.addError()
		return false
	}

	maxLength (value: string, max: number): boolean {
		if (value.length <= max) {
			return true
		}
		this.err(`'Este campo debe tener maximo ${max} caracteres'`)
		this.addError()
		this.validationErrorsCount += 1
		return false
	}

	isEmail (value: string): boolean {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (re.test(value)) {
			return true
		}
		this.err('El email no es válido')
		this.addError()
		return false
	}

	securePassword (value: string, min: number = this.min, max: number = this.max): boolean {
		// reglas de password segura
		const _min = this.minLength(value, min)
		const _max = this.maxLength(value, max)
		if (!_min) {
			this.err(`El password debe tener mínimo ${min} caracteres`)
		}
		if (!_max) {
			this.err(`El password debe tener maximo ${max} caracteres`)
		}
		if (!_min || !_max) {
			return false
		}
		this.addError()
		return true
	}

	isNumber (value: never): boolean {
		if (!isNaN(Number(value))) {
			return true
		}
		this.err('Este campo debe ser un número')
		this.addError()
		return false
	}
}
