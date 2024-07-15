import { defineStore } from 'pinia'
import { preloadImages } from '../functions/DOM'

export const usePreloadImagesStore = defineStore('preloadImages', {
	state () {
		return {
			images: []
		}
	},
	actions: {
		// Cargar imagenes, el parametro images es un array de imagenes y el parametro el es un elemento del DOM del tipo ref([]) a donde se cargarán las imagenes.
		load (images: string[], el: HTMLElement[]): void {
			// const images = this.products.map(product => product.image.url)
			preloadImages(images).then((images: HTMLImageElement[]) => {
				// const el = this.animation
				for (let i = 0; i < el.length; i++) {
					if (el !== null) {
						if (el[i] !== null) {
							const img = el[i].querySelector('img')
							if (img !== null) {
								img.src = images[i].src
							}
						}
					}
				}
			}).catch((err: Error) => {
				console.log('Fallo la precarga')
				console.log(err)
			})
		}
	}
})
