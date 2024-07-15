import PromisePrompt from "./PromisePrompt";
class Auth extends PromisePrompt{
	constructor() {
		super();
	}
	async login(form?: { remember: boolean; password: string; email: string }) {
		const url = getRoute('login.post').uri_full
		return await this.promisePost(url, form)
	}

	async register (form?: {username: string, email: string, password: string, gender: string}) {
		const url = getRoute('register.post').uri_full
		return await this.promisePost(url, form)
	}

	async logout () {
		const url = getRoute('logout.post').uri_full
		return await this.promisePost(url, null)
	}

}

export default Auth
