<template>
	<header>
		<div>
			<h1>KANZARA</h1>
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
				<li v-if="$store.getters.loginStatus" @click="logout"><router-link to="/login">LOGOUT</router-link></li>
				<li v-else @click="login"><router-link to="/login">LOGIN</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		methods:{
			logout(){
				this.$store.dispatch('logout');
			},
			login(){
				this.$router.push('/login');
			}
		}
	};
</script>

<style scoped>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;	
	}
	h1 {
		font-weight: 700px;
		font-size: 36px;
		color: #f08c00;
		margin-left: 10px;
	}
	ul{
		list-style: none;
		display: flex;
		gap: 20px;
	}
	a:link {
		text-decoration: none;
	}
</style>
