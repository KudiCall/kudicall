<template>
	<v-container style="max-width: 1400px; width: 100%" class="d-flex flex-column justify-center">
		<div class="testimony-header text-center">
			<v-img
				eager
				width="181"
				height="44"
				class="mx-auto my-5"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F518def6e-6a17-45a6-90ec-88e67d5a9e01.png?alt=media&token="
			/>
			<h1 class="header-title" style="font-weight: 700">Positive feedback from users</h1>
			<p>Explore a curated collection of products and services from passionate vendors. From fashion to electronics.</p>
		</div>
		<v-row class="mt-16">
			<v-col v-for="(testimony, index) in testimonies" :key="index" cols="12" md="4">
				<v-card class="testimony-card pa-4 pa-md-8">
					<div class="d-flex mb-2">
						<v-rating
							:model-value="testimony.rating"
							active-color="orange"
							color="orange"
							background-color="orange"
							dense
							readonly
							width="20"
							height="20"
						/>
					</div>
					<v-card-text style="font-size: 20px; font-weight: 400; line-height: 28px">
						{{ testimony.text }}
					</v-card-text>
					<v-card-actions class="d-flex mt-4">
						<v-avatar size="40">
							<img eager :src="testimony.avatar" alt="Avatar" width="40" height="40" />
						</v-avatar>
						<div class="ml-3">
							<div class="font-weight-normal manrope" style="font-size: 14px">{{ testimony.name }}</div>
							<div class="font-weight-normal manrope" style="color: #939393; font-size: 14px">{{ testimony.title }}</div>
						</div>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "Testimonials",

	data() {
		return {
			testimonies: [
				{
					rating: 4,
					text: "Lorem ipsum dolor sit amet consectetur. Magna eleifend facilisis enim scelerisque. Nisi auctor in orci venenatis. Enim nibh et quisque aenean quam.",
					name: "Stephen Eyeson",
					title: "Founder Kelly's Fashion",
					avatar: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc327c863-7185-45b0-b960-fc9061d5ab56.png?alt=media&token=",
				},
				{
					rating: 5,
					text: "Lorem ipsum dolor sit amet consectetur. Tincidunt maecenas suspendisse facilisis amet quis. Cursus ultricies duis non lacinia faucibus eros.",
					name: "Stephen Eyeson",
					title: "Founder Kelly's Fashion",
					avatar: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F837722a2-775a-4c5b-9ee1-13cdf160d2ac.png?alt=media&token=",
				},
				{
					rating: 3,
					text: "Lorem ipsum dolor sit amet consectetur. Magna eleifend facilisis enim scelerisque. Nisi auctor in orci venenatis. Enim nibh et quisque aenean quam.",
					name: "Stephen Eyeson",
					title: "Founder Kelly's Fashion",
					avatar: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fde8d421f-73ed-47c5-8127-06bae3287495.png?alt=media&token=",
				},
			],
		};
	},
};
</script>

<style scoped>
.testimony-header {
	width: 687px;
	margin: auto;
}
.testimony-header h1 {
	font-size: 48px;
	line-height: 57.6px;
	letter-spacing: -2%;
	font-weight: 700;
}
.testimony-header p {
	font-size: 24px;
	line-height: 33px;
	font-weight: 400;
	color: #c8c8c8;
	margin-top: 10px;
}

.testimony-card {
	background-color: #1c1c1c;
	border-radius: 20px;
	color: #fff;
}

@media (max-width: 768px) {
	.testimony-header {
		width: 90%;
	}
	.testimony-header h1 {
		font-size: 32px;
		line-height: 38px;
	}
	.testimony-header p {
		font-size: 16px;
		line-height: 22px;
	}
}
</style>
