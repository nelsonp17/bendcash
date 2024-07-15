import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// @ts-ignore
for (let key in LIST_ROUTE){
	// @ts-ignore
	const tmp = LIST_ROUTE[key].component
	// @ts-ignore
	LIST_ROUTE[key].component = () => import(tmp)
}

// @ts-ignore
const {	home, login, register, forgot, dashboard, bet, blackjack } = LIST_ROUTE;

// home.component = () => import('@/pages/' + "Home" + '.vue')
// login.component = () => import('@/pages/Login.vue')
// import Home from '../pages/Home.vue'
// import Login from '../pages/Login.vue'
// import Register from '../pages/Register.vue'

const routes: RouteRecordRaw[] = [
	home, login, register, forgot, dashboard, bet, blackjack

	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home
	// },
	// {
	// 	path: '/login',
	// 	name: 'Login',
	// 	component: Login
	// },
	// {
	// 	path: '/register',
	// 	name: 'Register',
	// 	component: Register
	// },
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: () => import('@/pages/Home.vue')
	// },
	// {
	// 	path: '*',
	// 	name: 'Page 404',
	// 	component: { template: `<div>Error 404</div>` }
	// }
]
// console.log(routes)
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
