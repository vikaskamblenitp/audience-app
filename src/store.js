import { createStore } from "vuex";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const store = createStore({
	state() {
		return {
			isLoggedIn: false,
			allNotices: [
				{
					id: "Shopping",
					via: "form",
					title: "Patil & Compony",
					description: "50% Off in Patil & Compony, HURRY UP!!",
					issuedBy: "Avgan Patil",
					phone: "9011809016",
				},
				{
					id: "Government",
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
		login(state, payload) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, payload.email, payload.password)
				.then((userCredential)=>{
					console.log(userCredential.user);
					console.log('user logged in successfully');
					state.isLoggedIn = true;
				})
				.catch((error)=>{
					alert(error.message);
					this.$router.push('/login');
					console.log(error.message);
				})
		},
		logout(state) {
			state.isLoggedIn = false;
		},
		signup(state, payload) {
			console.log("In Signup");
			const auth = getAuth();

			createUserWithEmailAndPassword(auth, payload.email, payload.password)
				.then((userCredential) => {
					// Signed in

					const user = userCredential.user;
					console.log(user);
					console.log("SignUp completed");
					state.isLoggedIn = true;
					// ...
				})
				.catch((error) => {
					//const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorMessage)
					console.log(errorMessage);
					this.$router.push('/login');
					console.log('vikas');

					// ..
				});
		},
		addNotice(state, payload) {
			if(payload.via === 'form'){
			const notice = {
				via : payload.via,
				id: payload.id,
				title: payload.title,
				description: payload.description,
				issuedBy: payload.issuedBy,
				phone: payload.phone,
			};
			state.allNotices.unshift(notice);
		}else{
			const picNotice ={
				id : payload.id,
				pic : payload.pic,
				via : payload.via,
			}
			state.allNotices.unshift(picNotice);
		}
			
			console.log("total notices :", state.allNotices.length);
		},
	},
	actions: {
		login(context, payload) {
			context.commit("login", payload);
		},
		logout(context) {
			context.commit("logout");
		},
		addNotice(context, payload) {
			context.commit("addNotice", payload);
		},
		signup(context, payload) {
			context.commit("signup", payload);
		},
	},
	getters: {
		notices(state) {
			console.log(state.allNotices.length);
			return state.allNotices;
		},
	},
});

export default store;
