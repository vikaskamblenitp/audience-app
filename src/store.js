import { createStore } from "vuex";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const store = createStore({
	state() {
		return {
			currentUser: null,
			isLoggedIn: localStorage.getItem('userData') ? true : false,
			allNotices: [
				{
					id: 1,
					sector: "Shopping",
					via: "form",
					title: "Patil & Compony",
					description: "50% Off in Patil & Compony, HURRY UP!!",
					issuedBy: "Avgan Patil",
					phone: "9011809016",
				},
				{
					id: 2,
					sector: "Government",
					via: "form",
					title: "Government Scheme",
					description: "Shahu Maharaj Education Scheme",
					issuedBy: "Collector",
					phone: "9046879006",
				},
			],
		};
	},
	mutations: {
		loginUser(state, payload) {
			state.currentUser = payload;
			localStorage.setItem('userData', payload);
			state.isLoggedIn = true;
		},
		logout(state) {
			localStorage.removeItem('userData');
			state.isLoggedIn = false;
		},
		addNotice(state, notice) {
			state.allNotices.unshift(notice);
		},
		fetchNotice(state, payload) {
			state.allNotices = payload;
		},
	},
	actions: {
		login(context, payload) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, payload.email, payload.password)
				.then((userCredential) => {
					console.log("user logged in successfully");
					//localStorage.setItem('token',userCredential)
					context.commit("loginUser", userCredential.user);
				})
				.catch((error) => {
					alert(error.message);
					console.log(error.message);
				});
		},
		logout(context) {
			context.commit("logout");
		},
		async addNotice(context, payload) {
			let notice;
			if (payload.via === "form") {
				notice = {
					via: payload.via,
					sector: payload.sector,
					title: payload.title,
					description: payload.description,
					issuedBy: payload.issuedBy,
					phone: payload.phone,
				};
				//state.allNotices.unshift(notice);
			} else {
				notice = {
					id: payload.id,
					pic: payload.pic,
					via: payload.via,
				};
				//state.allNotices.unshift(picNotice);
			}
			try {
				const response = await fetch(
					"https://audience-app-dc736-default-rtdb.firebaseio.com/notice.json",
					{
						method: "POST",
						header: { "Content-Type": "application/json" },
						body: JSON.stringify(notice),
					}
				);
				if (response.ok) {
					context.commit("addNotice", notice);
					console.log(response);
				} else {
					console.log(response);
				}
			} catch (err) {
				console.log(err);
			}
		},
		async fetchNotice(context) {
			const response = await fetch(
				"https://audience-app-dc736-default-rtdb.firebaseio.com/notice.json"
			);
			const fetchedNotices = await response.json();

			const noticeArray = [];
			for (const id in fetchedNotices) {
				noticeArray.push({ ...fetchedNotices[id], id: id });
			}
			context.commit("fetchNotice", noticeArray);
		},
		signup(context, payload) {
			const auth = getAuth();

			createUserWithEmailAndPassword(auth, payload.email, payload.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					context.commit("loginUser");
					console.log(user);
					// ...
				})
				.catch((error) => {
					const errorMessage = error.message;
					alert(errorMessage);
					// ..
				});
		},
	},
	getters: {
		notices(state) {
			return state.allNotices;
		},
		loginStatus(state) {
			return state.isLoggedIn;
		},
	},
});

export default store;
