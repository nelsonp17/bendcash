const ucfirst = (str) => {
	return str.chartAt(0).toUpperCase() + str.slice(1)
}
const assets = (resource) => {
	return `${url_base}${resource}`
};
const url = (path) => {
	return `${url_base}${path}`
};

const getRoute = (routeName) => {
	for (let i = 0; i < routes.length; i++) {
		if(routes[i].name === routeName){
			return routes[i];
		}
	}
	return false
}

const cleanedList = (list) => list.reduce((acc, item) => {
	let key = Object.keys(item)[0];
	acc[key] = item[key];
	return acc
}, {})


LIST_ROUTE = cleanedList(LIST_ROUTE)
//const components = ['../pages/Home.vue', '../pages/Login.vue']
// let rout = components.map(componente => {
// 	return {
// 		path: '/',
// 		component: () => import(`${componente}`)
// 	}
// });
