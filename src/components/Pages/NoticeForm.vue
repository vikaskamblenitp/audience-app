<template>
	<div class="form-option">
			<div class="list">
				<p @click="noticeOption('form')">Add Notice via Form</p>
				<p @click="noticeOption('picture')">Add Notice via Picture</p>
			</div>
	</div>
	<div>
		<div v-if="optionSelected === 'picture'">
			<form @submit.prevent="saveImageNotice">
				<div class="form-control">
					<label for="name">Type</label>
					<input type="text" name="Type" id="Type" v-model="id" />
				</div>
				<div class="form-control">
					<label for="title">Upload Image</label>
					<input
						type="file"
						id="img"
						name="img"
						@change="saveImage"
					/>
				</div>
				<base-button>Submit</base-button>
			</form>
		</div>
		<div v-else>
			<form @submit.prevent="submitData">
				<div class="form-control">
					<label for="name">Type</label>
					<input type="text" name="Type" id="Type" v-model="sector" />
				</div>
				<div class="form-control">
					<label for="title">Title</label>
					<input type="text" name="Title" id="Title" v-model="title" />
				</div>
				<div class="form-control">
					<label for="description">Description</label>
					<textarea
						type="textarea"
						cols="85"
						rows="5"
						v-model="description"
						id="description"
					/>
				</div>
				<div>
					<label for="issuedBy">Published By</label>
					<input type="text" name="publisher" v-model="issuedBy" />
				</div>
				<div class="form-control">
					<label for="Contact">Contact No</label>
					<input type="text" name="phone" v-model="phone" />
				</div>
				<base-button>Submit</base-button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sector: null,
				title: null,
				description: null,
				issuedBy: null,
				phone: null,
				formOption: "form",
				imageList: null,
			};
		},
		created() {
			if(!this.$store.state.isLoggedIn){
				this.$router.push('/notices')
			}
		},
		computed: {
			optionSelected() {
				return this.formOption;
			},
		},
		methods: {
			submitData() {
				this.$store.dispatch("addNotice", {
					via: "form",
					sector: this.sector,
					title: this.title,
					description: this.description,
					issuedBy: this.issuedBy,
					phone: this.phone,
				});
				this.$router.push("/notices");
			},
			saveImage(e) {
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length) return;
				this.imageList= URL.createObjectURL(files[0]);
				console.log('image')
				console.log(this.imageList);
			},
			saveImageNotice() {
				this.$store.dispatch("addNotice", {
					via: "picture",
					sector: this.sector,
					pic : this.imageList,
				});
				this.$router.push("/notices");
			},
			noticeOption(val) {
				this.formOption = val;
			},
		},
	};
</script>
<style scoped>
	form {
		margin: 2rem auto;
		max-width: 40rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 2rem;
		background-color: #ffffff;
	}

	.error p {
		color: red;
	}

	.form-control {
		margin: 0.5rem 0;
	}

	label {
		font-weight: bold;
	}

	h2 {
		font-size: 1rem;
		margin: 0.5rem 0;
	}

	input,
	select {
		display: block;
		width: 100%;
		font: inherit;
		margin-top: 0.5rem;
	}

	select {
		width: auto;
	}
	.form-option {
		margin: 0 auto;
		max-width: 40rem;
	}
	#description {
		display: block;
		width: 100%;
	}
	.list {
		display: flex;
		justify-content: space-around;
	}
	.list p {
		cursor: pointer;
		border: 2px solid #9c36b5;
		padding: 0.5%;
		border-radius: 10px;
	}
	.list p:hover{
		background-color: #9c36b5;
		color: #ffffff;
	}
</style>
