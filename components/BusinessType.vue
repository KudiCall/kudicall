<!-- <template>
	<v-container id="businessType" style="max-width: 1400px; width: 100%; padding-top: 100px">
		<v-img eager width="192" height="44" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719284706/OnCall/Frame_1171275577_aarbs8.svg" />

		<v-row dense class="businesstype-header">
			<v-col cols="12" md="4">
				<h1>Ready to showcase your business?</h1>
			</v-col>
			<v-col cols="12" md="5">
				<p>
					Explore a curated collection of products and services from passionate vendors. From fashion to electronics, find what you love with just a
					click.
				</p>
			</v-col>
		</v-row>

		<div class="rower my-8 d-none d-md-flex">
			<div v-for="(card, index) in cards" :key="index" class="business-card" :style="cardGradient(card.start, card.end)">
				<div class="card-text pa-5">
					<h1 class="category-label">{{ card.title }}</h1>
					<div class="category-desc" v-html="card.description"></div>
				</div>
				<div class="card-image">
					<v-img :src="card.image" />
				</div>
			</div>
		</div>

		<div class="d-flex flex-column d-md-none my-8 ga-4">
			<v-row dense>
				<v-col v-for="(card, index) in cards" :key="index" cols="12" class="px-0 mx-0 py-0 mb-5">
					<div class="mobile-card pa-4 pb-8" :style="cardGradient(card.start, card.end)">
						<h1 class="mobile-category-label">{{ card.title }}</h1>
						<div class="mt-auto mobile-category-desc" v-html="card.description"></div>
						<v-img eager :src="card.image" width="95%" height="100%" style="position: absolute; bottom: 0; right: -90px" />
					</div>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template> -->

<!-- <script>
export default {
	methods: {
		cardGradient(start, end) {
			return {
				background: `radial-gradient(102.69% 273.45% at 102.69% 100%, ${start} 0%, ${end} 100%)`,
			};
		},
	},
	data() {
		return {
			cards: [
				{
					title: "FOOD & DRINK",
					description: `<p>If you're in the business of tantalizing</p><p>taste buds, offering delightful cuisines,</p><p>or crafting refreshing beverages,</p><p>this category is for you.</p>`,
					start: "#f1ae7c",
					end: "#8f441d",
					image: "/images/woman.png",
				},
				{
					title: "CLOTHING",
					description: `<p>Fashion is your passion? Whether it's</p><p>trendy apparel, custom designs, or</p><p>unique accessories, this category is your</p><p>runway.</p>`,
					start: "#f9df42",
					end: "#d42e21",
					image: "/images/clothing.png",
				},
				{
					title: "TRANSPORT",
					description: `<p>If you're in the business of getting</p><p>people or goods from one place to</p><p>another, whether it's a ride service or</p><p>delivery, this is your category.</p>`,
					start: "#575e67",
					end: "#575e67",
					image: "/images/driver.png",
				},
				{
					title: "ACCOMMODATION",
					description: `<p>Open your doors to travelers and those</p><p>seeking a comfortable stay. Whether it's</p><p>a cozy B&B or a luxurious hotel, this</p><p>category is for accommodation</p><p>providers</p>`,
					start: "#ccc",
					end: "#ccc",
					image: "/images/house.png",
				},
				{
					title: "ELECTRICIAN",
					description: `<p>Spark up connections! If you're an</p><p>electrician offering services for electrical</p><p>installations, repairs, or consultations,</p><p>this category is your platform.</p>`,
					start: "#f1ae7c",
					end: "#47afb8",
					image: "/images/man.png",
				},
				{
					title: "PHARMACY",
					description: `<p>If you're in the business of health and</p><p>wellness, providing pharmaceutical</p><p>products or consultation services, this</p><p>category is dedicated to you.</p>`,
					start: "#091114",
					end: "#83c6fc",
					image: "/images/pham.png",
				},
			],
		};
	},
};
</script> -->

<!-- <style scoped>
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
	color: #555;
}

.business-card {
	width: 616.08px;
	height: 377px;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	display: inline-block;
	vertical-align: top;
}

.card-text {
	width: 50%;
	position: relative;
	z-index: 2;
	color: #fff;
}

.category-label {
	font-size: 12px;
	font-weight: 400;
	line-height: 16.6px;
}

.category-desc {
	font-size: 18px;
	font-weight: 700;
	line-height: 1.2;
	margin-top: 220px;
}

.card-image {
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100%;
	object-fit: cover;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	overflow: hidden;
}
.card-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.mobile-card {
	background: #000;
	height: 252px;
	border-radius: 8px;
	position: relative;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.mobile-category-label {
	font-size: 7.6px;
	font-weight: 400;
	line-height: 10.6px;
	color: #fff;
}

.mobile-category-desc {
	font-size: 14px;
	font-weight: 700;
	line-height: 18px;
	color: #fff;
	z-index: 1;
	margin-top: auto;
}
</style> -->

<template>
	<v-container id="businessType" style="max-width: 1400px; width: 100%; padding-top: 100px">
		<v-img eager width="192" height="44" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719284706/OnCall/Frame_1171275577_aarbs8.svg" />

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

		<div class="rower my-8 d-none d-sm-block" style="width: 100%">
			<div class="d-inline-block mr-4" style="width: 616.08px">
				<div
					class="pa-5"
					style="
						background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f1ae7c 0%, #8f441d 100%);
						height: 377px;
						border-radius: 20px;
						position: relative;
						overflow: hidden;
					"
				>
					<div style="width: 100px; display: flex; flex-direction: column; justify-content: center">
						<h1 style="font-size: 12px; font-weight: 400; line-height: 16.6px; color: #fff">FOOD & DRINT</h1>
						<div style="font-size: 18px; font-weight: 700; line-height: 1.2; margin-top: 220px; z-index: 1; color: #fff">
							<p>If you're in the business of tantalizing</p>
							<p>taste buds, offering delightful cuisines,</p>
							<p>or crafting refreshing beverages,</p>
							<p>this category is for you.</p>
						</div>
					</div>
					<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719288590/OnCall/chef.png" width="100%" height="100%" class="img1" />
				</div>
			</div>
			<div class="d-inline-block mr-4" style="width: 616.08px">
				<div
					class="pa-5"
					style="
						background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f9df42 0%, #d42e21 100%);
						height: 377px;
						border-radius: 20px;
						position: relative;
						overflow: hidden;
					"
				>
					<div style="width: 100px; display: flex; flex-direction: column; justify-content: center">
						<h1 style="font-size: 12px; font-weight: 400; line-height: 16.6px; color: #fff">CLOTHING</h1>
						<div style="font-size: 18px; font-weight: 700; line-height: 1.2; margin-top: 220px; z-index: 1; color: #fff">
							<p>Fashion is your passion? Whether it's</p>
							<p>trendy apparel, custom designs, or</p>
							<p>unique accessories, this category is your</p>
							<p>runway.</p>
						</div>
					</div>

					<v-img
						eager
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719797591/OnCall/Clothing-line-PhotoRoom_1_cwfwoj.png"
						width="90%"
						height="100%"
						class="img2"
					/>
				</div>
			</div>

			<div class="d-inline-block mr-4" style="width: 616.08px">
				<div class="pa-5" style="background-color: #575e67; height: 377px; border-radius: 20px; position: relative; overflow: hidden">
					<div style="width: 100px; display: flex; flex-direction: column; justify-content: center">
						<h1 style="font-size: 12px; font-weight: 400; line-height: 16.6px; color: #fff">TRANSPORT</h1>
						<div style="font-size: 18px; font-weight: 700; line-height: 1.2; margin-top: 220px; z-index: 1; color: #fff">
							<p>If you're in the business of getting</p>
							<p>people or goods from one place to</p>
							<p>another, whether it's a ride service or</p>
							<p>delivery, this is your category.</p>
						</div>
					</div>

					<v-img
						eager
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719798751/OnCall/Rectangle_13_yflzbd.png"
						width="100%"
						height="100%"
						class="img3"
					/>
				</div>
			</div>

			<div class="d-inline-block mr-4" style="width: 616.08px">
				<div class="pa-5 cardDesktop">
					<div style="width: 100px; display: flex; flex-direction: column; justify-content: center">
						<h1 class="text-black" style="font-size: 12px; font-weight: 400; line-height: 16.6px; z-index: 20">ACCOMMODATION</h1>
						<div style="font-size: 18px; font-weight: 700; line-height: 1.2; margin-top: 220px; z-index: 1; color: #fff">
							<p>Open your doors to travelers and those</p>
							<p>seeking a comfortable stay. Whether it's</p>
							<p>a cozy B&B or a luxurious hotel, this</p>
							<p>category is for accommodation</p>
							<p>providers</p>
						</div>
					</div>

					<v-img
						eager
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719842333/OnCall/Ellipse_10_ushxyh.svg"
						width="100%"
						height="100%"
						style="position: absolute; top: 0; left: -19%"
					/>
					<v-img
						eager
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719842334/OnCall/Ellipse_11_id8rr8.svg"
						width="100%"
						height="100%"
						class="img4"
					/>
				</div>
			</div>

			<div class="d-inline-block mr-4" style="width: 616.08px">
				<div
					class="pa-5"
					style="
						background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f1ae7c 0%, #47afb8 100%);
						height: 377px;
						border-radius: 20px;
						position: relative;
						overflow: hidden;
					"
				>
					<div style="width: 100px; display: flex; flex-direction: column; justify-content: center">
						<h1 style="font-size: 12px; font-weight: 400; line-height: 16.6px; color: #fff">ELECTRICIAN</h1>
						<div style="font-size: 18px; font-weight: 700; line-height: 1.2; margin-top: 220px; z-index: 1; color: #fff">
							<p>Spark up connections! If you're an</p>
							<p>electrician offering services for electrical</p>
							<p>installations, repairs, or consultations,</p>
							<p>this category is your platform.</p>
						</div>
					</div>
					<v-img
						eager
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719843057/OnCall/I-need-an-image-of-a-beautiful-African-woman-as-a-chef-in-a-restaurant--PhotoRoom_1_uzrykr.png"
						width="100%"
						height="100%"
						class="img5"
					/>
				</div>
			</div>

			<div class="d-inline-block mr-4" style="width: 616.08px">
				<div
					class="text-black pa-5 pb-8"
					style="
						background: radial-gradient(102.69% 273.45% at 102.69% 100%, #091114 0%, #83c6fc 100%);
						height: 377px;
						border-radius: 20px;
						position: relative;
						overflow: hidden;
					"
				>
					<div style="width: 100px; display: flex; flex-direction: column; justify-content: center">
						<h1 style="font-size: 12px; font-weight: 400; line-height: 16.6px; color: #fff">PHARMACY</h1>
						<div style="font-size: 18px; font-weight: 700; line-height: 1; margin-top: 220px; z-index: 1; color: #fff">
							<p>If you're in the business of health and</p>
							<p>wellness, providing pharmaceutical</p>
							<p>products or consultation services, this</p>
							<p>category is dedicated to you.</p>
						</div>
					</div>
					<v-img
						eager
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719844190/OnCall/I-need-an-image-of-a-beautiful-African-woman-as-a-chef-in-a-restaurant--PhotoRoom_1_1_scbwkp.png"
						width="100%"
						height="100%"
						class="img6"
					/>
				</div>
			</div>
		</div>
		<!-- For mobile View -->
		<div class="d-flex flex-column d-sm-none my-8 ga-4">
			<v-row dense>
				<v-col cols="12" class="px-0 mx-0 py-0 mb-5">
					<div
						class="pa-4 pb-8"
						style="
							background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f1ae7c 0%, #8f441d 100%);
							height: 252px;
							border-radius: 8px;
							position: relative;
							width: 100%;
							overflow: hidden;
							display: flex;
							flex-direction: column;
							justify-content: center;
						"
					>
						<h1 style="font-size: 7.6px; font-weight: 400; line-height: 10.6px; color: #fff">FOOD & DRINT</h1>
						<div class="mt-auto" style="font-size: 14px; font-weight: 700; line-height: 18px; z-index: 1; color: #fff">
							<p>If you're in the business of tantalizing</p>
							<p>taste buds, offering delightful cuisines,</p>
							<p>or crafting refreshing beverages,</p>
							<p>this category is for you.</p>
						</div>
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719288590/OnCall/chef.png"
							width="95%"
							height="100%"
							style="position: absolute; bottom: 0; right: -90px"
						/>
					</div>
				</v-col>
				<v-col cols="12" class="px-0 mx-0 py-0 mb-5">
					<div
						class="pa-4 pb-8"
						style="
							background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f9df42 0%, #d42e21 100%);
							height: 252px;
							border-radius: 8px;
							position: relative;
							width: 100%;
							overflow: hidden;
							display: flex;
							flex-direction: column;
							justify-content: center;
						"
					>
						<h1 style="font-size: 7.6px; font-weight: 400; line-height: 10.6px; color: #fff">CLOTHING</h1>
						<div class="mt-auto" style="font-size: 14px; font-weight: 700; line-height: 18px; z-index: 1; color: #fff">
							<p>Fashion is your passion? Whether it's</p>
							<p>trendy apparel, custom designs, or</p>
							<p>unique accessories, this category is your</p>
							<p>runway.</p>
						</div>
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719797591/OnCall/Clothing-line-PhotoRoom_1_cwfwoj.png"
							width="90%"
							height="100%"
							style="position: absolute; bottom: 0; right: -45px"
						/>
					</div>
				</v-col>
				<v-col cols="12" class="px-0 mx-0 py-0 mb-5">
					<div
						class="pa-4 pb-8"
						style="
							background-color: #575e67;
							height: 252px;
							border-radius: 8px;
							position: relative;
							width: 100%;
							overflow: hidden;
							display: flex;
							flex-direction: column;
							justify-content: center;
						"
					>
						<h1 style="font-size: 7.6px; font-weight: 400; line-height: 10.6px; z-index: 20; color: #fff">TRANSPORT</h1>
						<div class="mt-auto" style="font-size: 14px; font-weight: 700; line-height: 18px; z-index: 1; color: #fff">
							<p>If you're in the business of getting</p>
							<p>people or goods from one place to</p>
							<p>another, whether it's a ride service or</p>
							<p>delivery, this is your category.</p>
						</div>
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719798751/OnCall/Rectangle_13_yflzbd.png"
							width="100%"
							height="100%"
							style="position: absolute; bottom: 0; right: -30px"
						/>
					</div>
				</v-col>
				<v-col cols="12" class="px-0 mx-0 py-0 mb-5">
					<div class="pa-4 pb-8 card" style="">
						<h1 style="font-size: 7.6px; font-weight: 400; line-height: 10.6px; z-index: 20; color: #fff">ACCOMMODATION</h1>
						<div class="mt-auto" style="font-size: 14px; font-weight: 700; line-height: 18px; z-index: 1; color: #fff">
							<p>Open your doors to travelers and those</p>
							<p>seeking a comfortable stay. Whether it's</p>
							<p>a cozy B&B or a luxurious hotel, this</p>
							<p>category is for accommodation</p>
							<p>providers</p>
						</div>
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719842333/OnCall/Ellipse_10_ushxyh.svg"
							width="100%"
							height="100%"
							style="position: absolute; top: 0; left: -19%"
						/>
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719842334/OnCall/Ellipse_11_id8rr8.svg"
							width="100%"
							height="100%"
							style="position: absolute; bottom: -30%; left: -20%"
						/>
					</div>
				</v-col>
				<v-col cols="12" class="px-0 mx-0 py-0 mb-5">
					<div
						class="pa-4 pb-8"
						style="
							background: radial-gradient(102.69% 273.45% at 102.69% 100%, #f1ae7c 0%, #47afb8 100%);
							height: 252px;
							border-radius: 8px;
							position: relative;
							width: 100%;
							overflow: hidden;
							display: flex;
							flex-direction: column;
							justify-content: center;
						"
					>
						<h1 style="font-size: 7.6px; font-weight: 400; line-height: 10.6px; color: #fff">ELECTRICIAN</h1>
						<div class="mt-auto" style="font-size: 14px; font-weight: 700; line-height: 18px; z-index: 1; color: #fff">
							<p>Spark up connections! If you're an</p>
							<p>electrician offering services for electrical</p>
							<p>installations, repairs, or consultations,</p>
							<p>this category is your platform.</p>
						</div>
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719843057/OnCall/I-need-an-image-of-a-beautiful-African-woman-as-a-chef-in-a-restaurant--PhotoRoom_1_uzrykr.png"
							width="100%"
							height="100%"
							style="position: absolute; bottom: 0; right: -15%"
						/>
					</div>
				</v-col>
				<v-col cols="12" class="px-0 mx-0 py-0 mb-5">
					<div
						class="pa-4 pb-8"
						style="
							background: radial-gradient(102.69% 273.45% at 102.69% 100%, #091114 0%, #83c6fc 100%);
							height: 252px;
							border-radius: 8px;
							position: relative;
							width: 100%;
							overflow: hidden;
							display: flex;
							flex-direction: column;
							justify-content: center;
						"
					>
						<h1 style="font-size: 7.6px; font-weight: 400; line-height: 10.6px; color: #fff">FOOD & DRINK</h1>
						<div class="mt-auto" style="font-size: 14px; font-weight: 700; line-height: 18px; z-index: 1; color: #fff">
							<p>If you're in the business of health and</p>
							<p>wellness, providing pharmaceutical</p>
							<p>products or consultation services, this</p>
							<p>category is dedicated to you.</p>
						</div>
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719844190/OnCall/I-need-an-image-of-a-beautiful-African-woman-as-a-chef-in-a-restaurant--PhotoRoom_1_1_scbwkp.png"
							width="100%"
							height="100%"
							style="position: absolute; bottom: 0; right: -25%"
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
			// items: [
			// 	{
			// 		title: "Food & Drink",
			// 		subTitle:
			// 			"If you're in the business of tantalizing taste buds, offering delightful cuisines, or crafting refreshing beverages, this category is for you.",
			// 		img: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719288590/OnCall/chef.png",
			// 	},
			// 	{
			// 		title: "Clothing",
			// 		subTitle: "Fashion is your passion? Whether it's trendy apparel, custom designs, or unique accessories, this category is your runway.",
			// 		img: "",
			// 	},
			// 	{
			// 		title: "Transport",
			// 		subTitle:
			// 			"If you're in the business of getting people or goods from one place to another, whether it's a ride service or delivery, this is your category.",
			// 		img: "",
			// 	},
			// 	{
			// 		title: "Accommodation",
			// 		subTitle:
			// 			"Open your doors to travelers and those seeking a comfortable stay. Whether it's a cozy B&B or a luxurious hotel, this category is for accommodation providers.",
			// 		img: "",
			// 	},
			// 	{
			// 		title: "Electrician",
			// 		subTitle:
			// 			"Spark up connections! If you're an electrician offering services for electrical installations, repairs, or consultations, this category is your platform.",
			// 		img: "",
			// 	},
			// 	{
			// 		title: "Pharmacy",
			// 		subTitle:
			// 			"If you're in the business of health and wellness, providing pharmaceutical products or consultation services, this category is dedicated to you.",
			// 		img: "",
			// 	},
			// ],
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

.card {
	height: 252px;
	border-radius: 8px;
	position: relative;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url("https://res.cloudinary.com/dd26v0ffw/image/upload/v1719841922/OnCall/Rectangle_14_zrcla4.png");
	background-size: cover;
	background-position: center;
}

.cardDesktop {
	height: 377px;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	background-image: url("https://res.cloudinary.com/dd26v0ffw/image/upload/v1719841922/OnCall/Rectangle_14_zrcla4.png");
	background-size: cover;
	background-position: center;
}

.img1 {
	position: absolute;
	top: 0;
	right: -155px;
}
.img2 {
	position: absolute;
	bottom: 0;
	right: -12%;
}
.img3 {
	position: absolute;
	bottom: 0;
	right: -8%;
}
.img4 {
	position: absolute;
	bottom: -30%;
	left: -20%;
}
.img5 {
	position: absolute;
	bottom: 0;
	right: -15%;
}
.img6 {
	position: absolute;
	bottom: 0;
	right: -25%;
}

/* Add these iPad specific styles */
@media (max-width: 1199px) and (min-width: 768px) {
	.rower .d-inline-block {
		width: 48% !important;
		margin-right: 2% !important;
		margin-bottom: 20px !important;
	}

	.rower .pa-5 {
		height: 300px !important;
	}

	/* Image adjustments for iPad */
	.img1 {
		right: -80px !important;
		width: 80% !important;
	}

	.img2 {
		right: -8% !important;
		width: 85% !important;
	}

	.img3 {
		right: -5% !important;
		width: 90% !important;
	}

	.img4 {
		left: -12% !important;
		width: 90% !important;
	}

	.img5 {
		right: -10% !important;
		width: 90% !important;
	}

	.img6 {
		right: -15% !important;
		width: 90% !important;
	}

	/* Text adjustments */
	.businesstype-header h1 {
		font-size: 36px !important;
		line-height: 42px !important;
	}

	.businesstype-header p {
		font-size: 18px !important;
		line-height: 24px !important;
	}

	div[style*="font-size: 18px"] {
		font-size: 16px !important;
		margin-top: 150px !important;
	}
}
</style>
