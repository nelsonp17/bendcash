// https://github.com/MeForma/vue-toaster

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const toash = ($toast, option = {
	text: '',
	type: 'error' // success, error, warning, info
}) => {
	$toast.show(option.text, {
		type: option.type
	})
}
