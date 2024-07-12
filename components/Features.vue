<template>
	<v-container id="features" style="max-width: 1400px; width: 100%" class="d-flex flex-column justify-center text-center container overflow-hidden">
		<div class="header-container">
			<v-img
				eager
				width="181"
				height="44"
				class="mx-auto my-5"
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719276448/OnCall/Frame_1171275577_xhzcrp.svg"
			/>
			<h1 class="header-title" style="font-weight: 700">
				Smart shopping and selling solutions by <span class="text-primary pacifico" style="font-weight: 400">OnCall</span>
			</h1>
		</div>
		<div class="px-10 text-left my-16 features-section" style="background: linear-gradient(270deg, #ffffff 0%, #f8f8f8 100%); color: #444444">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-10">
					<h1 class="text-black" style="">Live Commerce</h1>
					<p style="">Engage in real-time calls with vendors for a personalized and interactive shopping experience</p>
					<v-btn color="#000" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720005665/OnCall/ArrowLineDown_1_thmlla.svg"
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section first-image mt-auto mb-0">
					<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719278324/OnCall/iphone_15_xa1t8m.png" class="phone-mockup"></v-img>

					<!-- Overlay images -->
					<v-img
						eager
						width="50%"
						height="50%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716206/OnCall/hanging_call_b5f2ve.png"
						class="overlay-img call-notification"
					></v-img>
					<v-img
						eager
						width="55%"
						height="65%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716207/OnCall/shoe_tr9cmv.png"
						class="overlay-img shoe-offer"
					></v-img>
					<v-img
						eager
						width="100%"
						height="80%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716212/OnCall/sidebar_pxpb5d.png"
						class="overlay-img call"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #1787f2 0%, #1470c9 100%)">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Catalogs</h1>
					<p style="color: #fff">
						Anyone can create and customize catalogs showcasing their products or services with images, descriptions, and prices.
					</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720005665/OnCall/ArrowLineDown_jurj73.svg"
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0">
					<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719282884/OnCall/iphone_19_i8wosw.png" class="phone-mockup"></v-img>
					<!-- Overlay images -->
					<v-img
						eager
						width="60%"
						height="40%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716536/OnCall/add_z21zhx.png"
						class="overlay-img add"
					></v-img>
					<v-img
						eager
						width="60%"
						height="40%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716536/OnCall/edit_kssg8o.png"
						class="overlay-img edit"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #5ec6bb 0%, #439189 100%)">
			<v-row dense class="mx-auto h-100 mb-0 pb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Uploading Real Time Product Videos</h1>
					<p style="color: #fff">Plan your live commerce experience by scheduling video calls with vendors in advance.</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720005665/OnCall/ArrowLineDown_jurj73.svg"
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0 pb-0">
					<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719846888/OnCall/iphone_15_xmstw3.png" class="phone-mockup"></v-img>

					<!-- Overlay images -->
					<v-img
						eager
						width="40%"
						height="100%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716765/OnCall/upload_vb4uto.png"
						class="overlay-img uplaod"
					></v-img>
					<v-img
						eager
						width="40%"
						height="40%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716765/OnCall/success_o0gfvn.png"
						class="overlay-img success"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #9f86ff 0%, #8e70ff 100%)">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Secure Transactions and Data Protection</h1>
					<p style="color: #fff">
						Utilize industry-standard encryption and work with trusted payment processors to ensure the security of user transactions and financial
						information.
					</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720005665/OnCall/ArrowLineDown_jurj73.svg"
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0">
					<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719847617/OnCall/iphone_16_j3qbat.png" class="phone-mockup"></v-img>
					<!-- Overlay images -->
					<v-img
						eager
						width="50%"
						height="50%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720716884/OnCall/payment_t9fdj3.png"
						class="overlay-img payment"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<div class="px-10 text-left mb-16 features-section" style="background: linear-gradient(270deg, #ff688f 0%, #f04a75 100%)">
			<v-row dense class="mx-auto h-100 mb-0">
				<v-col cols="12" md="4" class="text-section py-10 pr-md-16">
					<h1 style="color: #fff">Comprehensive Order Tracking</h1>
					<p style="color: #fff">
						Vendors can create and customize catalogs showcasing their products or services with images, descriptions, and prices.
					</p>
					<v-btn color="#fff" rounded class="download-btn px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
						Download Now
						<v-img
							eager
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720005665/OnCall/ArrowLineDown_jurj73.svg"
							class="ml-2"
							width="24"
							height="24"
						></v-img>
					</v-btn>
				</v-col>
				<v-col cols="12" md="8" class="image-section bottom mt-auto mb-0 pb-0">
					<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719847961/OnCall/iphone_18_f47hmp.png" class="phone-mockup"></v-img>

					<!-- Overlay images -->
					<v-img
						eager
						width="50%"
						height="50%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720717007/OnCall/status_kg20z2.png"
						class="overlay-img status"
					></v-img>
					<v-img
						eager
						width="50%"
						height="40%"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720717006/OnCall/delivery_date_tozdfk.png"
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
	bottom: 8%;
	left: -6%;
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
	bottom: -3%;
	right: 6%;
}

.status {
	top: 18%;
	right: 6%;
}

.delivery {
	bottom: 5%;
	left: 3%;
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
		bottom: 8%;
		right: 0%;
	}

	.status {
		top: 18%;
		right: -5%;
	}

	.delivery {
		bottom: 10%;
		left: -16%;
	}
}
</style>
