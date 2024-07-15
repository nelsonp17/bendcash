// Hacer que varios elementos tengan la misma altura
export const equalHeight = (elements: HTMLElement[] | null): void => {
	if (elements === null) { return }
	// Obtener la altura más alta
	let maxHeight = 0
	elements.forEach(element => {
		// console.log('clientHeight: ' + element.clientHeight)
		// console.log('maxHeight 1: ' + maxHeight)
		maxHeight = Math.max(maxHeight, element.clientHeight)
		// console.log('maxHeight 2: ' + maxHeight)
		// console.log('----------------------------------------')
	})
	// Establecer la altura en todos los elementos
	elements.forEach(element => {
		element.style.height = `${maxHeight}px`
	})
}

// Preload images: Precargar imagenes
export async function preloadImages (imageUrls: string[]): Promise<HTMLImageElement[]> {
	return await new Promise((resolve) => {
		const images: HTMLImageElement[] = []
		let loadedImages = 0
		const totalImages = imageUrls.length
		imageUrls.forEach((url) => {
			const img = new Image()
			img.src = url
			img.onload = () => {
				loadedImages++
				images.push(img)
				if (loadedImages === totalImages) {
					resolve(images)
				}
			}
		})
	})
}

//  Recortar un texto y agregar puntos suspensivos al final. Esta función toma dos parámetros:  texto , que es la cadena de caracteres que deseas recortar, y  longitudMaxima
export function cropText (texto: string, longitudMaxima: number): string {
	if (texto.length <= longitudMaxima) {
		return texto
	} else {
		return texto.slice(0, longitudMaxima) + '...'
	}
}
