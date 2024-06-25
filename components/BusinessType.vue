<template>
	<v-container style="max-width: 1400px; width: 100%">
		<v-img width="192" height="44" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719284706/OnCall/Frame_1171275577_aarbs8.svg" />
		<div class="d-flex align-center ga-10 d-none d-md-block" style="width: 900px">
			<h1>Ready to showcase your business?</h1>
			<p class="">
				Explore a curated collection of products and services from passionate vendors. From fashion to electronics, find what you love with just a
				click.
			</p>
		</div>

		<div class="rower my-8 d-none d-md-block" style="width: 100%">
			<div class="d-inline-block mr-4" style="width: 616.08px" v-for="(n, i) in 10" :key="i">
				<div
					class="text-black pa-5"
					style="
						background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f1ae7c 0%, #8f441d 100%);
						height: 377px;
						border-radius: 20px;
						position: relative;
					"
				>
					<div style="width: 100px; display: flex; flex-direction: column; justify-content: center">
						<h1 class="text-white uppercase" style="font-size: 12px; font-weight: 400; line-height: 16.6px">FOOD & DRINT</h1>
						<div class="text-white" style="font-size: 18px; font-weight: 700; line-height: 1; margin-top: 220px; z-index: 1">
							<p>If you're in the business of tantalizing</p>
							<p>taste buds, offering delightful cuisines,</p>
							<p>or crafting refreshing beverages,</p>
							<p>this category is for you.</p>
						</div>
					</div>
					<v-img
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719288590/OnCall/chef.png"
						width="100%"
						height="100%"
						style="position: absolute; top: 0; right: -150px"
					/>
				</div>
			</div>
		</div>
		<!-- For mobile View -->
		<!-- <div class="d-block d-md-none">
			<v-row dense>
				<v-col v-for="(n, i) in items" :key="i" cols="12" :md="6" :lg="3" class="mb-3">
					<populartwoComponent :showBid="showBid" :index="i" :item="n" />
				</v-col>
			</v-row>

			<v-btn
				block
				class="d-flex d-md-none mt-8"
				color="#333"
				size="large"
				style="border: 1px solid #333; font-weight: 500; color: #333"
				variant="outlined"
				rounded="xl"
			>
				<span style="font-size: 14px">See All</span> <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
			</v-btn>
		</div> -->
	</v-container>
</template>
<style></style>
<script>
export default {
	data() {
		return {
			items: [
				{
					title: "Food & Drink",
					subTitle:
						"If you're in the business of tantalizing taste buds, offering delightful cuisines, or crafting refreshing beverages, this category is for you.",
					img: "",
				},
				{
					title: "Clothing",
					subTitle: "Fashion is your passion? Whether it's trendy apparel, custom designs, or unique accessories, this category is your runway.",
					img: "",
				},
				{
					title: "Transport",
					subTitle:
						"If you're in the business of getting people or goods from one place to another, whether it's a ride service or delivery, this is your category.",
					img: "",
				},
				{
					title: "Accommodation",
					subTitle:
						"Open your doors to travelers and those seeking a comfortable stay. Whether it's a cozy B&B or a luxurious hotel, this category is for accommodation providers.",
					img: "",
				},
				{
					title: "Electrician",
					subTitle:
						"Spark up connections! If you're an electrician offering services for electrical installations, repairs, or consultations, this category is your platform.",
					img: "",
				},
				{
					title: "Pharmacy",
					subTitle:
						"If you're in the business of health and wellness, providing pharmaceutical products or consultation services, this category is dedicated to you.",
					img: "",
				},
			],
		};
	},
};
</script>
