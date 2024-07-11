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
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720720461/OnCall/desktop_a3pkrs.png"
			></v-img>
			<v-img
				eager
				width="339"
				height="58"
				class="d-block d-md-none mx-auto mb-4"
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720720461/OnCall/mobile_zzsnrx.png"
			></v-img>
			<p class="title title1">Discover a new way to</p>

			<p class="pacifico text-primary title title2">Shop, Connect, and Experience!</p>
			<p class="subTitle mt-14">We bring your favorite vendors and services to life through immersive real-time comment interactions.</p>
			<!-- <v-btn color="primary" rounded class="px-6" size="x-large" style="font-size: 16px; line-height: 21.82px">
				Download Now
				<v-img
					eager
					src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720005665/OnCall/ArrowLineDown_1_thmlla.svg"
					class="ml-2"
					width="24"
					height="24"
				></v-img>
			</v-btn> -->
			<div class="d-flex align-center ga-4 my-5 my-md-10 w-75 w-md-33 justify-center mx-auto">
				<v-img
					eager
					src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719691153/OnCall/BTN_1_oegkqr.png"
					class="cursor-pointer"
					width="50%"
					height="50"
				/>

				<v-img
					eager
					src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719691154/OnCall/BTN_2_nkjih3.png"
					class="cursor-pointer"
					width="50%"
					height="50"
				/>
			</div>
		</div>
		<div style="width: 100%; height: auto; margin: 100px auto">
			<v-img
				eager
				class="d-none d-md-block"
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719271541/OnCall/Frame_25_1_obekis.png"
				alt="Frame 25 1"
				width="100%"
				height="100%"
			/>
			<v-img
				eager
				class="d-block d-md-none"
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719271531/OnCall/Frame_26_vspyd4.png"
				alt="Frame 26"
				width="100%"
				height="100%"
			/>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
.bg-pattern {
	background-image: url("https://res.cloudinary.com/dd26v0ffw/image/upload/v1720617849/OnCall/Background_pattern_bwo9yj.svg");
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
}
</style>
