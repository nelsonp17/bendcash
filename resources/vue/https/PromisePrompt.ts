import axios from "axios";
class PromisePrompt {
	async promisePost(url:string, data: any) {
		return await new Promise((resolve, reject) => {
			axios.post(url, data)
				.then(async response => {
					resolve(response)
				})
				.catch(error => {
					reject(error)
				})
		})
	}
	async promiseGet(url:string, data: any) {
		return await new Promise((resolve, reject) => {
			axios.get(url, data)
				.then(async response => {
					resolve(response)
				})
				.catch(error => {
					reject(error)
				})
		})
	}
}
export default PromisePrompt
