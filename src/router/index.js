import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { auth } from '../firebase';
// import Ziekenhuizen from '../views/Ziekenhuizen.vue'
// import ZiekenhuisDetail from '../components/ZiekenhuisDetail.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "login" */ '../views/Login.vue'),
	},
	{
		path: '/ziekenhuizen',
		name: 'Ziekenhuizen',
		props: true,
		// component: Ziekenhuizen
		component: () =>
			import(
				/* webpackChunkName: "ziekenhuizen" */ '../views/Ziekenhuizen.vue'
			),
	},
	{
		path: '/ziekenhuizen/:id',
		name: 'ZiekenhuisDetail',
		props: true,
		// component: ZiekenhuisDetail
		component: () =>
			import(
				/* webpackChunkName: "ziekenhuisDetail" */ '../components/ZiekenhuisDetail.vue'
			),
		meta: {
			requiresAuth: true,
		},
	},
	// {
	//   path: "/ambulances",
	//   name: "Ambulances",
	//   props: true,
	//   // component: Ambulances
	//   component: () =>
	//     import(/* webpackChunkName: "ambulances" */ "../views/Ambulances.vue")
	// },
	{
		path: '/situatie',
		name: 'Situatie',
		component: () =>
			import(/* webpackChunkName: "situatie" */ '../views/Situatie.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/inbox',
		name: 'Inbox',
		component: () =>
			import(/* webpackChunkName: "inbox" */ '../views/Inbox.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/kalender',
		name: 'Kalender',
		component: () =>
			import(/* webpackChunkName: "kalender" */ '../views/Kalender.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/settings',
		name: 'settings',
		component: () =>
			import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
		meta: {
			requiresAuth: true,
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

	if (requiresAuth && !auth.currentUser) {
		next('/login');
	} else {
		next();
	}
});

export default router;
