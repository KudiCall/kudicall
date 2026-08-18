<template>
	<v-container style="max-width: 1400px; width: 100%" class="d-flex flex-column justify-center align-center text-center mt-4 bg-pattern">
		<div class="mt-md-16 mt-6">
			<!-- <span class="chip--outlined text--white">
				<v-img
					class="d-flex align-center justify-center"
					eager
					width="50px"
					height="50px"
					src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720611263/OnCall/Vector_k5lnlf.svg"
				>
					<v-container>
						<v-img
							eager
							class="mr-3"
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719266720/OnCall/Lightning_zrneu0.svg"
							width="24"
							height="24"
						></v-img>
					</v-container>
				</v-img>

				<span>The seamless shopping experience you didn't know you needed</span>
			</span> -->

			<v-img
				width="486"
				height="44"
				class="d-none d-md-block mx-auto"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F0e2899ac-22cb-47f0-8a8d-ff589d659b2e.png?alt=media&token="
				alt="Discover a new way to Call, Connect, and Close!"
			></v-img>
			<v-img
				width="339"
				height="58"
				class="d-block d-md-none mx-auto mb-4"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fab412286-27b7-4a8a-9ed4-a80ed45e2159.png?alt=media&token="
				alt="Discover a new way to Call, Connect, and Close!"
			></v-img>
			<p class="title title1">Discover a new way to</p>
 
			<p class="pacifico text-primary title title2">Call, Connect, and Close!</p>
			<p class="subTitle mt-14">Dial a category, talk to every vendor in it, and pay right there on the call.</p>
			<v-btn @click="openWaitlist" color="primary" rounded class="px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
				Join Waitlist
				<!-- <v-img
					eager
					src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720005665/OnCall/ArrowLineDown_1_thmlla.svg"
					class="ml-2"
					width="24"
					height="24"
				></v-img> -->
			</v-btn>
			<!-- <div class="d-flex align-center ga-4 my-5 my-md-10 w-75 w-md-33 justify-center mx-auto">
				<v-btn color="white" size="x-large" class="px-2 px-md-6" rounded="lg" href="https://on-call-alpha.vercel.app/">
					<v-img height="28" width="120" src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fef602f9b-8afd-4f9a-ac9a-0e87dd6e7e8b.png?alt=media&token=" />
				</v-btn>

				<v-btn
					color="white"
					size="x-large"
					class="px-2 px-md-6"
					rounded="lg"
					href="https://drive.google.com/file/d/11bys3OTqi65LgLx3zogqi7We_R4qCpgO/view?usp=sharing"
				>
					<v-img height="28" width="120" src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F70f7d2d4-891d-44b3-8c77-b8620a7479a3.png?alt=media&token=" />
				</v-btn>
			</div> -->
		</div>
		<div class="heroImgContainer">
			<img
				class="d-none d-md-block"
				src="/images/hero-desktop.webp"
				alt="KudiCall hero image showing the app on desktop"
				width="100%"
				height="100%"
				style="object-fit: contain; max-width: 100%; height: auto;"
				fetchpriority="high"
			/>
			<img
				class="d-block d-md-none"
				src="/images/hero-mobile.webp"
				alt="KudiCall hero image showing the app on mobile"
				width="100%"
				height="100%"
				style="object-fit: contain; max-width: 100%; height: auto;"
				fetchpriority="high"
			/>
		</div>


		<!-- Waitlist Modal -->
		<WaitlistModal ref="waitlistModal" />
	</v-container>
</template>

<script>
import WaitlistModal from "./WaitlistModal.vue";

export default {
	name: "Hero",
	components: {
		WaitlistModal,
	},
	methods: {
		openWaitlist() {
			this.$refs.waitlistModal.open();
		}
	}
};
</script>

<style scoped>
.bg-pattern {
	background-image: url("/images/bg-pattern.webp");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.chip--outlined {
	border: 1px solid;
	border-image-source: linear-gradient(90deg, rgba(19, 136, 252, 0.3) 0%, rgba(12, 13, 13, 0.3) 53.5%, rgba(19, 136, 252, 0.3) 99%);
	box-shadow: 0px 4px 12.6px 0px rgba(19, 136, 252, 0.15) inset;
	padding: 10px 20px;
	font-size: 14px;
	background: rgba(19, 136, 252, 0.05);
	border-radius: 100px;
	font-weight: 600;
	margin: auto;
	text-align: left;
	display: flex;
	align-items: center;
	width: fit-content;
	margin-bottom: 30px;
	backdrop-filter: blur(10px);
}

.chip--outlined:hover {
	border-image-source: none;
	border-color: #1388fc;
}

.title {
	font-size: 70px;
}

.title1 {
	font-weight: 700;
}

.title2 {
	line-height: 60px;
	font-weight: 400;
}

.subTitle {
	font-size: 24px;
	font-weight: 400;
	line-height: 32px;
	color: #c8c8c8;
	width: 624px;
	margin: 30px auto;
}

.heroImgContainer {
	width: 100%;
	height: auto;
	margin: 100px auto 100px;
}

@media (max-width: 768px) {
	.chip--outlined {
		width: 350px;
	}

	.title {
		font-size: 48px;
	}

	.title1 {
		width: 80%;
		margin: auto;
		line-height: 60px;
	}
	.title2 {
		line-height: 60px;
	}

	.subTitle {
		font-size: 18px;
		line-height: 28.8px;
		width: 90%;
	}

	.heroImgContainer {
		width: 100%;
		height: auto;
		margin: 100px auto 0px;
	}
}
</style>
