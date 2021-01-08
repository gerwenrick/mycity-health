/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
import router from '../router/index';

Vue.use(Vuex);

// realtime firebase connection
// ziekenhuizen
fb.ziekenhuisCollection
	.orderBy('id', 'asc')
	.limit(25)
	.onSnapshot((snapshot) => {
		let ziekenhuisArray = [];
		let ziekenhuisTypeArray = [];
		let ziekenhuisSpecialArray = [];

		snapshot.forEach((doc) => {
			let ziekenhuis = doc.data();
			let zkhType = ziekenhuis.Type;
			let zkhSpecialiteiten = ziekenhuis.Specialiteiten.sort();

			ziekenhuis.id = doc.id;

			ziekenhuisArray.push(ziekenhuis);
			ziekenhuisTypeArray.sort().push(zkhType);
			ziekenhuisSpecialArray.push(zkhSpecialiteiten);
		});

		let zkhSpecialArray = [].concat.apply([], ziekenhuisSpecialArray).sort();

		let uniqueZkhType = [...new Set(ziekenhuisTypeArray)];
		let uniqueZkhSpecial = [...new Set(zkhSpecialArray)];

		store.commit('setZiekenhuizen', ziekenhuisArray);
		store.commit('setZiekenhuisType', uniqueZkhType);
		store.commit('setZiekenhuisSpecial', uniqueZkhSpecial);
	});

// ambulances
fb.ambulanceCollection
	.orderBy('id', 'asc')
	// .limit(3)
	.onSnapshot((snapshot) => {
		let ambulanceArray = [];

		snapshot.forEach((doc) => {
			let ambulance = doc.data();

			ambulance.id = doc.id;

			ambulanceArray.push(ambulance);
		});

		store.commit('setAmbulances', ambulanceArray);
	});

// posts
fb.postsCollection
	.orderBy('createdOn', 'desc')
	.limit(5)
	.onSnapshot((snapshot) => {
		let postsArray = [];

		snapshot.forEach((doc) => {
			let post = doc.data();
			post.id = doc.id;

			postsArray.push(post);
		});

		store.commit('setPosts', postsArray);
	});

// meldingen
fb.meldingenCollection.limit(3).onSnapshot((snapshot) => {
	let events = [];

	snapshot.forEach((doc) => {
		let eventData = doc.data();
		eventData.id = doc.id;

		events.push(eventData);
	});

	store.commit('setEvents', events);
});

// create store
const store = new Vuex.Store({
	state: {
		userProfile: {},
		posts: [],
		ziekenhuizen: [],
		ziekenhuisTypen: [],
		ziekenhuisSpecialiteiten: [],
		ambulances: [],
		events: [],
	},
	mutations: {
		setUserProfile(state, val) {
			state.userProfile = val;
		},
		setPosts(state, val) {
			state.posts = val;
		},
		setZiekenhuizen(state, val) {
			state.ziekenhuizen = val;
		},
		setZiekenhuisType(state, val) {
			state.ziekenhuisTypen = val;
		},
		setZiekenhuisSpecial(state, val) {
			state.ziekenhuisSpecialiteiten = val;
		},
		setAmbulances(state, val) {
			state.ambulances = val;
		},
		setEvents(state, val) {
			state.events = val;
		},
	},
	actions: {
		async createPost({ state }, post) {
			await fb.postsCollection.add({
				createdOn: new Date(),
				content: post.content,
				triage: post.triage,
				ongeval: post.ongeval,
				userId: fb.auth.currentUser.uid,
				userName: state.userProfile.name,
			});
		},
		async login({ dispatch }, form) {
			// sign in user
			const { user } = await fb.auth.signInWithEmailAndPassword(
				form.email,
				form.password
			);

			// fetch user profile and set in state
			dispatch('fetchUserProfile', user);
		},
		async fetchUserProfile({ commit }, user) {
			// fetch user profile
			const userProfile = await fb.usersCollection.doc(user.uid).get();

			// set user profile in state
			commit('setUserProfile', userProfile.data());

			// change route to dashboard
			router.push('/');
		},
		async signup({ dispatch }, form) {
			// sign up user
			const { user } = await fb.auth.createUserWithEmailAndPassword(
				form.email,
				form.password
			);

			// create user profile object in userCollections
			await fb.usersCollection.doc(user.uid).set({
				name: form.name,
				title: form.title,
			});

			// fetch user profile and set in state
			dispatch('fetchUserProfile', user);
		},
		async logout({ commit }) {
			await fb.auth.signOut();

			// clear userProfile and redirect to /login
			commit('setUserProfile', {});
			router.push('/login');
		},
	},
	getters: {
		getZiekenhuizen(state) {
			return state.ziekenhuizen;
		},
		getZiekenhuis(state) {
			return (ziekenhuisID) => {
				return state.ziekenhuizen.find((ziekenhuis) => {
					return ziekenhuis.id === ziekenhuisID;
				});
			};
		},
	},
});

export default store;
