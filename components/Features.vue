<template>
	<v-container id="features" style="max-width: 1400px; width: 100%" class="d-flex flex-column justify-center text-center container overflow-hidden">
		<div class="header-container">
			<v-img
				eager
				width="181"
				height="44"
				class="mx-auto my-5"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fcf03bbc9-fe51-4678-81f3-fed12f84dffc.png?alt=media&token="
			/>
			<h1 class="header-title" style="font-weight: 700">
				Smart shopping and selling solutions by <span class="text-primary pacifico" style="font-weight: 400">KudiCall</span>
			</h1>
		</div>
		<div class="px-10 text-left my-16 features-section" style="background: linear-gradient(270deg, #ffffff 0%, #f8f8f8 100%); color: #444444">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-10">
					<h1 class="text-black" style="">Direct Calls</h1>
					<p style="">Connect with customers instantly through voice calls before closing a sale, building trust and increasing conversions</p>
					<v-btn color="#000" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc7b8c527-0340-48b0-b85b-9acfc7a13684.png?alt=media&token="
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section first-image mt-auto mb-0">
					<v-img eager src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F96e2aee6-6ae8-491c-abb6-3983399df43c.png?alt=media&token=" class="phone-mockup"></v-img>

					<!-- Overlay images -->
					<v-img
						eager
						width="50%"
						height="50%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F93bf6a6c-7377-4b54-80e3-4644ba2799c1.png?alt=media&token="
						class="overlay-img call-notification"
					></v-img>
					<div class="overlay-img shoe-offer product-card-slider">
						<v-img
							v-for="(card, index) in productCards"
							:key="card"
							eager
							:src="card"
							class="product-card-slide"
							:class="{ active: activeProductCard === index }"
						></v-img>
						<div class="product-card-dots" aria-label="Product card slides">
							<button
								v-for="(_, index) in productCards"
								:key="index"
								type="button"
								class="product-card-dot"
								:class="{ active: activeProductCard === index }"
								:aria-label="`Show product card ${index + 1}`"
								@click="setActiveProductCard(index)"
							></button>
						</div>
					</div>
					<v-img
						eager
						width="90%"
						height="76%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F0917221f-9e4d-4223-9d28-9710d841dd72.png?alt=media&token="
						class="overlay-img call"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #1787f2 0%, #1470c9 100%)">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Manage Teams</h1>
					<p style="color: #fff">
						Add staff members to customer conversations while maintaining visibility and control over all business communications
					</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fdc191bb8-cefa-440b-ac00-8ff729321ac6.png?alt=media&token="
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0">
					<v-img eager src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fa64f3b8f-fa17-4228-bc4c-2de29f838bef.png?alt=media&token=" class="phone-mockup"></v-img>
					<!-- Overlay images -->
					<v-img
						eager
						width="60%"
						height="40%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fbef43737-628b-40b4-9910-32f03a2f5181.png?alt=media&token="
						class="overlay-img add"
					></v-img>
					<v-img
						eager
						width="60%"
						height="40%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F96300d06-1404-4d7c-8509-9543a877f32a.png?alt=media&token="
						class="overlay-img edit"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #5ec6bb 0%, #439189 100%)">
			<v-row dense class="mx-auto h-100 mb-0 pb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Secure Deals</h1>
					<p style="color: #fff">Payments are held securely in escrow and only released when the customer confirms the job is completed or the product is received.</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fdc191bb8-cefa-440b-ac00-8ff729321ac6.png?alt=media&token="
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0 pb-0">
					<v-img eager src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fdf372710-f3d8-43e0-9eae-2bc563035110.png?alt=media&token=" class="phone-mockup"></v-img>

					<!-- Overlay images -->
					<v-img
						eager
						width="40%"
						height="100%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F3477c374-eb18-4f4c-89ea-ce28416ebabc.png?alt=media&token="
						class="overlay-img uplaod"
					></v-img>
					<v-img
						eager
						width="40%"
						height="40%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fd17307f1-85f2-47ef-a908-3cbe690f1cab.png?alt=media&token="
						class="overlay-img success"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #9f86ff 0%, #8e70ff 100%)">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Build Shops</h1>
					<p style="color: #fff">
						Create your online storefront in minutes by adding products or services without needing a website.
					</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fdc191bb8-cefa-440b-ac00-8ff729321ac6.png?alt=media&token="
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0">
					<v-img eager src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F37e46230-08c7-41e9-b3f8-ca8588b58c8a.png?alt=media&token=" class="phone-mockup"></v-img>
					<!-- Overlay images -->
					<v-img
						eager
						width="35%"
						height="35%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F2032de65-e2f4-43ad-bd81-d88a17ea0ae4.png?alt=media&token="
						class="overlay-img payment"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #ff688f 0%, #f04a75 100%)">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Easy Updates</h1>
					<p style="color: #fff">
					Edit product details, pricing, descriptions, and inventory anytime to keep your shop accurate and up to date.
					</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fdc191bb8-cefa-440b-ac00-8ff729321ac6.png?alt=media&token="
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0 pb-0">
					<v-img eager src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F60298442-2c7e-42c5-9667-5d8d4f1d7496.png?alt=media&token=" class="phone-mockup"></v-img>

					<!-- Overlay images -->
					<v-img
						eager
						width="50%"
						height="50%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F2341e2f4-f04d-4701-a5f8-3c0fa68d2084.png?alt=media&token="
						class="overlay-img status"
					></v-img>
					<v-img
						eager
						width="50%"
						height="40%"
						src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F6844c5e9-118d-4ad5-bab2-e120bffd4c5b.png?alt=media&token="
						class="overlay-img delivery"
					></v-img>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "Features",
	data() {
		return {
			activeProductCard: 0,
			productCardInterval: null,
			productCards: [
				"https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F2b2ec7b3-0918-4363-b192-f45ef0000bbb.png?alt=media&token=",
				"https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc9be9113-ea25-46ce-b6ea-eea2beaf586f.png?alt=media&token=",
				"https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc9be9113-ea25-46ce-b6ea-eea2beaf586f.png?alt=media&token=",
			],
		};
	},
	mounted() {
		this.productCardInterval = window.setInterval(this.showNextProductCard, 3000);
	},
	beforeUnmount() {
		window.clearInterval(this.productCardInterval);
	},
	methods: {
		setActiveProductCard(index) {
			this.activeProductCard = index;
			window.clearInterval(this.productCardInterval);
			this.productCardInterval = window.setInterval(this.showNextProductCard, 3000);
		},
		showNextProductCard() {
			this.activeProductCard = (this.activeProductCard + 1) % this.productCards.length;
		},
	},
};
</script>

<style scoped>
.container {
	padding-top: 100px;
	margin-top: 50px;
}
.header-container {
	width: 708px;
	margin: 0 auto;
}
.header-title {
	font-size: 48px;
	line-height: 66.72px;
	letter-spacing: -2%;
}

.features-section {
	height: 680px;
	border-radius: 20px;
	overflow: hidden;
}

.text-section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
}

.text-section h1 {
	font-size: 40px;
	font-weight: 700;
	line-height: 57.6px;
}

.text-section p {
	font-size: 24px;
	font-weight: 400;
	line-height: 32.74px;
	/* margin-top: auto; */
}

.download-btn {
	margin-top: auto;
	width: fit-content;
	font-size: 16px;
	padding: 10px;
	line-height: 21.82px;
}

.image-section {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	/* overflow: hidden; */
	padding-bottom: 0px !important;
}

.bottom {
	bottom: -4px;
}

.first-image {
	bottom: -4px;
}

.overlay-img {
	position: absolute;
	z-index: 100;
}

.call-notification {
	top: -3%;
	left: 0%;
}

.shoe-offer {
	bottom: 15%;
	left: -6%;
}

.product-card-slider {
	width: 50%;
	height: 55%;
}

.product-card-slide {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 450ms ease;
}

.product-card-slide.active {
	opacity: 1;
}

.product-card-dots {
	position: absolute;
	left: 50%;
	bottom: 8%;
	z-index: 2;
	display: flex;
	gap: 4px;
	transform: translateX(-50%);
}

.product-card-dot {
	width: 7px;
	height: 4px;
	padding: 0;
	border: 0;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.35);
	cursor: pointer;
	transition: width 200ms ease, background 200ms ease;
}

.product-card-dot.active {
	width: 16px;
	background: rgba(255, 255, 255, 0.9);
}

.call {
	top: 10%;
	right: -27%;
}

.add {
	bottom: -6%;
	right: -7%;
}

.edit {
	top: 22%;
	left: -13%;
}

.success {
	bottom: -3%;
	right: 9%;
}

.uplaod {
	top: 8%;
	left: 3%;
}

.payment {
	bottom: -5%;
	right: 8%;
}

.status {
	top: 48%;
	right: -6%;
}

.delivery {
	bottom: 13%;
	left: -10%;
}

.phone-mockup {
	/* Default styles */
	/* width: 100%; */
	max-width: 400px;
}

/* Responsive Styles */
@media (min-width: 768px) and (max-width: 1400px) {
	.phone-mockup {
		width: 100%;
		max-width: 400px;
	}
}

@media (max-width: 768px) {
	.container {
		margin-top: 100px;
	}
	.header-container {
		width: 100%;
	}
	.header-title {
		font-size: 32px;
		line-height: 44.48px;
	}

	.features-section {
		height: 600px;
		overflow: hidden;
	}

	.text-section {
		align-items: center;
	}

	.text-section h1 {
		font-size: 32px;
		line-height: 38.4px;
		text-align: center;
		letter-spacing: -2px;
	}

	.text-section p {
		font-size: 16px;
		line-height: 21.82px;
		text-align: center;
	}

	/* .first-image {
		bottom: -15%;
	} */

	.phone-mockup {
		width: auto !important;
		/* height: auto; */
		max-width: 70%;
		margin-top: auto;
	}

	.call-notification {
		top: -6%;
		left: -8%;
	}

	.shoe-offer {
		bottom: 9%;
		left: -20%;
	}

	.call {
		top: 10%;
		right: -40%;
	}

	.add {
		bottom: -5%;
		right: -10%;
	}

	.edit {
		top: 22%;
		left: -18%;
	}

	.success {
		bottom: -3%;
		right: 0%;
	}

	.uplaod {
		top: 8%;
		left: -3%;
	}

	.payment {
		bottom: -8%;
		right: -1%;
	}

	.status {
		top: 18%;
		right: -17%;
	}

	.delivery {
		bottom: 10%;
		left: -18%;
	}
}
</style>
