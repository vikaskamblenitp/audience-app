<template>
	<header>
		<div class="header-panel">
			<img
				class="main-logo"
				src="../../assets/logo.png"
				alt="Digital Kanzara"
			/>
		</div>
		<nav>
			<ul>
				<li>
					<router-link to="/notices">NOTICES</router-link>
				</li>
				<li v-if="$store.state.isLoggedIn">
					<router-link to="/addNotice">ADD NOTICE</router-link>
				</li>
				<li>
					<router-link to="/info">INFORMATION</router-link>
				</li>
				<li v-if="$store.getters.loginStatus" @click="logout">
					<router-link to="/login">LOGOUT</router-link>
				</li>
				<li v-else @click="login">
					<router-link to="/login">LOGIN</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		methods: {
			logout() {
				this.$store.dispatch("logout");
			},
			login() {
				this.$router.push("/login");
			},
		},
	};
</script>

<style scoped>
	header {
		background-color: white;
		margin: 0 10%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.main-logo {
		height: 5rem;
		width: 5rem;
	}
	ul {
		list-style: none;
		display: flex;
		justify-content: space-around;
		gap: 2rem;
	}
	a:link {
		text-decoration: none;
	}
</style>
