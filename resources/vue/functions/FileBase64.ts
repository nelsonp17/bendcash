export let imageBase64: string | ArrayBuffer | null = ''
export function fileBase64 (event: Event) {
	if (event.target != null) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		const file = event.target.files[0]
		const reader = new FileReader()

		reader.onload = e => {
			if (e.target != null) {
				// hacer algo con el base64
				imageBase64 = e.target.result
			}
		}

		reader.readAsDataURL(file)
	}
}
