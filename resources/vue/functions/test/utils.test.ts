import { formattedRule } from '../utils'

test('formattedRule should return a formatted rule', () => {
	const rule = 'input|unique:users.email'
	const formatted = formattedRule(rule)
	expect(formatted).toEqual([['input', null, null], ['unique', 'users', 'email']])
})
