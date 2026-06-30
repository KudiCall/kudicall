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
				eager
				width="486"
				height="44"
				class="d-none d-md-block mx-auto"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F61e9f647-e4fa-463e-ae6a-e11e3b435d30.png?alt=media&token="
			></v-img>
			<v-img
				eager
				width="339"
				height="58"
				class="d-block d-md-none mx-auto mb-4"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fcf32ec51-4dfe-4cc5-9610-82583457afbc.png?alt=media&token="
			></v-img>
			<p class="title title1">Discover a new way to</p>

			<p class="pacifico text-primary title title2">Shop, Connect, and Experience!</p>
			<p class="subTitle mt-14">We bring your favorite vendors and services to life through immersive real-time commerce.</p>
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
			<v-img
				eager
				class="d-none d-md-block"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F71e70cc2-7bc2-4edc-b616-897e1803ee9a.png?alt=media&token="
				alt="Frame 25 1"
				width="100%"
				height="100%"
			/>
			<v-img
				eager
				class="d-block d-md-none"
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Ff8a465ba-7141-406d-9a3d-fbf9e5cf359a.png?alt=media&token="
				alt="Frame 26"
				width="100%"
				height="100%"
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
	background-image: url("https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F0609aa6a-f082-4a1b-8918-cca02bcef38f.png?alt=media&token=");
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
