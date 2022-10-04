<template>
	<div>
		<h2>NOTICES</h2>
	</div>
	<div v-if="!loading">
		<ul>
			<base-card v-for="notice in notices" :key="notice.id">
				<div v-if="notice.via === 'form'">
					<div class="content-type">
						<div></div>
						<div id="content-type">
							<p>{{ notice.sector }}</p>
						</div>
					</div>
					<div class="content-head">
						<h3>{{ notice.title }}</h3>
					</div>
					<div class="content-meta">
						<div>
							<p><span id="p1"> Published By:</span> {{ notice.issuedBy }}</p>
						</div>
						<div>
							<p><span id="p2">Contact No:</span> {{ notice.phone }}</p>
						</div>
					</div>
					<div>
						<p><span id="desc">Description:</span> {{ notice.description }}</p>
					</div>
				</div>
				<div v-else>
					<div class="content-type">
						<div></div>
						<div id="content-type">
							<p>{{ notice.sector }}</p>
						</div>
					</div>
					<div>
						<img v-lazy="notice.pic" />
					</div>
				</div>
			</base-card>
		</ul>
	</div>
	<div v-else>
		<!-- <cube-spin></cube-spin> -->
	</div>
</template>

<script>

	export default {
		data(){
			return {
				loading : false,
			};
		},
		computed: {
			notices() {
				return this.$store.getters.notices;
			},
		},
		created(){
			this.$store.dispatch('fetchNotice');
		},
		methods:{
			reload(){
				this.loading = true;
				setTimeout(()=>{
					this.loading = false;
				},2000);
				this.$store.dispatch("fetchNotice");
			}
		},
	};
</script>
<style scoped>
	img {
		width: 640px;
		height: 500px;
	}
	h2,
	h3 {
		font-weight: 600;
		text-align: center;
		margin-top: 2px;
		margin-bottom: 8px;
	}

	#desc {
		font-size: 18px;
		color: rgb(52, 52, 175);
	}
	#p1,
	#p2 {
		color: rgb(60, 13, 94);
		font-size: 18px;
	}
	.refresh {
		float: right;
		margin-bottom: 0.8rem;
		margin-right: 20%;
	}
	#content-type {
		font-size: 16px;
		color: blueviolet;
	}
	.content-type {
		display: flex;
		justify-content: space-between;
		margin: 0;
	}
	.content-meta {
		display: flex;
		justify-content: space-between;
	}
	.content-head {
		padding: 0px auto;
		font-weight: 500;
		text-align: center;
		margin: 0;
	}
</style>
