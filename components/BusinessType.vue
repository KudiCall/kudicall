<template>
	<v-container id="businessType" style="max-width: 1400px; width: 100%">
		<v-img width="192" height="44" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719284706/OnCall/Frame_1171275577_aarbs8.svg" />

		<v-row dense class="businesstype-header">
			<v-col cols="12" md="4">
				<h1>Ready to showcase your business?</h1>
			</v-col>
			<v-col cols="12" md="5">
				<p class="">
					Explore a curated collection of products and services from passionate vendors. From fashion to electronics, find what you love with just a
					click.
				</p>
			</v-col>
		</v-row>

		<div class="rower my-8 d-none d-md-block" style="width: 100%">
			<div class="d-inline-block mr-4" style="width: 616.08px" v-for="(n, i) in 10" :key="i">
				<div
					class="text-black pa-5"
					style="
						background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f1ae7c 0%, #8f441d 100%);
						height: 377px;
						border-radius: 20px;
						position: relative;
						overflow: hidden;
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
						style="position: absolute; top: 0; right: -155px"
					/>
				</div>
			</div>
		</div>
		<!-- For mobile View -->
		<div class="d-flex flex-column d-md-none my-8">
			<v-row>
				<v-col cols="12" v-for="(item, i) in 2" :key="i">
					<div
						class="text-black pa-3"
						style="
							background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f1ae7c 0%, #8f441d 100%);
							height: 292px;
							border-radius: 20px;
							position: relative;
							width: 100%;
							overflow: hidden;
							display: flex;
							flex-direction: column;
							justify-content: center;
						"
					>
						<h1 class="text-white uppercase" style="font-size: 7.6px; font-weight: 400; line-height: 10.6px">FOOD & DRINT</h1>
						<div class="text-white mt-auto" style="font-size: 14px; font-weight: 700; line-height: 18px; z-index: 1">
							<p>If you're in the business of tantalizing</p>
							<p>taste buds, offering delightful cuisines,</p>
							<p>or crafting refreshing beverages,</p>
							<p>this category is for you.</p>
						</div>
						<v-img
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719288590/OnCall/chef.png"
							width="80%"
							height="100%"
							style="position: absolute; top: 0; right: -60px"
						/>
					</div>
				</v-col>
			</v-row>
		</div>
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

<style scoped>
.businesstype-header {
	margin-top: 10px;
	gap: 50px;
}
.businesstype-header h1 {
	font-size: 48px;
	line-height: 57.6px;
	letter-spacing: -2%;
	font-weight: 700;
}
.businesstype-header p {
	font-size: 24px;
	line-height: 32px;
	font-weight: 400;
	color: #c8c8c8;
}

@media (max-width: 768px) {
	.businesstype-header {
		gap: 10px;
	}
	.businesstype-header h1 {
		font-size: 32px;
		line-height: 38px;
	}
	.businesstype-header p {
		font-size: 16px;
		line-height: 22px;
	}
}
</style>
