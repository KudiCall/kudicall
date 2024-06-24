<template>
	<v-container class="text-center" fluid>
		<v-row>
			<v-col>
				<h1>Discover a new way to Shop, Connect, and Experience!</h1>
				<p>Shop via live product demos, interact with experts, and buy in real-time.</p>
				<v-btn color="primary" large>Download the App</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-img width="100" height="100" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719231252/OnCall/Screen_eeb2hn.png"></v-img>
			</v-col>
			<!-- <v-col>
				<v-img src="/path/to/second-image.jpg"></v-img>
			</v-col> -->
		</v-row>
		<v-chip closable prepend-icon="$vuetify" append-icon="$vuetify"> Chip </v-chip>
	</v-container>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
h1 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
}
p {
	font-size: 1.25rem;
	margin-bottom: 2rem;
}
</style>
