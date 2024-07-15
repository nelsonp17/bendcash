// Formatea un string de reglas como 'min:8|max:30'
// También procesa reglas como 'unique:users.email'
export const formattedRule = (rules: string) => {
	const rulesArray = rules.split('|')

	return rulesArray.map(rule => {
		const [name, isValue] = rule.split(':')
		let value, value2
		if (isValue == null) {
			[value, value2] = [null, null]
		} else {
			[value, value2] = isValue.split('.')
		}

		return name || value || value2
	})
}

// Formatea un objeto de reglas como { type:'min:8|max:30', model: 'email', name: ' } para se usado en el componente JsonToInput
export const objectInput = (object: { type: string; model: string; placeholder: string; name: string; label: string; options: any; options_lang: any }) => {
	const dataInput = {
		form: '',
		type: '',
		label: '',
		name: '',
		className: '',
		placeholder: '',
		model: '',
		isParse: false,
		isValidate: false,
		validation: [],
		options: []
	}

	const formatted = formattedRule(object.type)
	// console.log(formatted)
	const from = formatted[0]
	const type = formatted[1]
	dataInput.isParse = true
	dataInput.model = object.model || ''
	dataInput.placeholder = object.placeholder
	dataInput.name = object.name
	dataInput.label = object.label
	dataInput.className = ''
	// @ts-ignore
	dataInput.form = from
	dataInput.type = type || 'text'

	if (from === 'select' || from === 'checkbox' || from === 'radio') {
		dataInput.options = object.options || object.options_lang
	}

	return dataInput
}
