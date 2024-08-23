<template>
	<div class="pa-10">
		<h2 class="logo pacifico" color="primary">OnCall</h2>

		<div class="d-flex justify-center py-12">
			<v-card flat class="pa-md-12" width="100%" max-width="562px" style="background-color: transparent">
				<h1 style="font-style: normal; font-weight: 800; font-size: 28px; line-height: 39.2px; color: #ececec">Login,</h1>
				<p class="font-weight-medium mb-10 mt-5">Please enter your email and password</p>
				<v-img width="125" height="44" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724177714/OnCall/tag_mc6ere.png" class="mb-5">
				</v-img>
				<v-form>
					<v-text-field
						prepend-inner-icon="mdi mdi-email-outline"
						type="text"
						variant="solo"
						placeholder="Enter email address"
						autocomplete="off"
					></v-text-field>

					<v-text-field
						:append-inner-icon="visible ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
						:type="visible ? 'text' : 'password'"
						placeholder="Enter Password"
						@click:append-inner="visible = !visible"
						variant="solo"
						autocomplete="new-password"
						prepend-inner-icon="mdi mdi-lock-outline"
					></v-text-field>
					<v-btn @click="$router.push('/admin/dashboard/Dashboard')" rounded class="btn px-6 mt-10" size="x-large"> Login </v-btn>
				</v-form>
			</v-card>
		</div>
	</div>
</template>

<script setup>
const visible = ref(false);
</script>

<style scoped>
.btn {
	width: 100%;
	font-size: 16px;
	padding: 10px;
	line-height: 22px;
	font-weight: 600;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.active-chip {
	background: #007e7033;
	border: 1px solid #007e70;
}
</style>
