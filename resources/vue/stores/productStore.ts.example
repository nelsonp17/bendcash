import { defineStore } from 'pinia'
import { type ProductType, type ProductImgInterface } from '../functions/interfaces'
import faker from 'faker'

export const useProductStore = defineStore('product', {
	state: () => {
		return {
			products: [] as ProductType[]
		}
	},
	actions: {
		add (prod: ProductType) {
			this.products.push(prod)
		},
		set (prods: ProductType[]) {
			this.products = prods
		},
		// Generar un producto aleatorio
		generarProducto (id: number) {
			const nombre: string = faker.commerce.productName()
			const categoria: string = faker.commerce.department()
			const sponsor: string = faker.company.companyName()
			const titulo: string = faker.lorem.sentence()
			const descripcion: string = faker.lorem.paragraph()
			// const id: number = faker.random.number()
			const precio: number = faker.commerce.price()
			const imagen: ProductImgInterface = {
				url: `https://picsum.photos/200/21${id}`,
				description: faker.lorem.words(),
				alt: faker.lorem.word(),
				title: faker.lorem.words(),
				class: ''
			}
			const imagenes: ProductImgInterface[] = []
			for (let i = 0; i < 3; i++) {
				imagenes.push({
					url: `https://picsum.photos/210/21${id}`,
					// url: faker.image.imageUrl(),
					description: faker.lorem.words(),
					alt: faker.lorem.word(),
					title: faker.lorem.words(),
					class: ''
				})
			}
			const producto: ProductType = {
				id,
				name: nombre,
				category: categoria,
				sponsor,
				title: titulo,
				description: descripcion,
				price: precio,
				image: imagen,
				images: imagenes
			}

			return producto
		},

		// Generar una lista de productos aleatorios
		generarListaProductos (cantidad: number): ProductType[] {
			const listaProductos = []
			for (let i = 0; i < cantidad; i++) {
				const producto = this.generarProducto(i + 1)
				listaProductos.push(producto)
			}
			return listaProductos
		}
	} // close
})
