<template>
	<v-container style="max-width: 1400px; width: 100%; margin-top: 80px" class="d-flex flex-column justify-center align-center text-center">
		<div>
			<span class="chip--outlined text--white">
				<v-img
					class="mr-3"
					src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719266720/OnCall/Lightning_zrneu0.svg"
					width="24"
					height="24"
				></v-img>
				<span>The seamless shopping experience you didn't know you needed</span>
			</span>
			<h1 class="title title1" style="font-weight: 400">Discover a new way to</h1>
			<br />
			<h1 class="pacifico text-primary title title2" style="font-weight: 400">Shop, Connect, and Experience!</h1>
			<p class="subTitle mt-6">We bring your favorite vendors and services to life through immersive live video interactions.</p>
			<v-btn color="primary" rounded class="" style="font-size: 16px">Download Now</v-btn>
		</div>
		<div style="width: 100%; height: auto; margin: 100px auto">
			<v-img
				class="d-none d-md-block"
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719271541/OnCall/Frame_25_1_obekis.png"
				width="100%"
				height="100%"
				lazy
			></v-img>
			<v-img
				class="d-block d-md-none"
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719271531/OnCall/Frame_26_vspyd4.png"
				width="100%"
				height="100%"
				lazy
			></v-img>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
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
}

.chip--outlined:hover {
	border-image-source: none;
	border-color: #1388fc;
}

.title {
	font-size: 70px;
	line-height: 55px;
	letter-spacing: -2;
}

.subTitle {
	font-size: 24px;
	font-weight: 400;
	line-height: 32px;
	color: #c8c8c8;
	width: 624px;
	margin: 30px auto;
}

/* Responsive Styles */
@media (max-width: 1400px) {
	.title {
		font-size: 70px;
		line-height: 84px;
	}

	.subTitle {
		font-size: 22px;
		line-height: 30px;
	}
}

@media (max-width: 768px) {
	.chip--outlined {
		width: 350px;
	}

	.title {
		font-size: 48px;
		line-height: 40px;
	}

	.title1 {
		width: 70%;
		margin: auto;
	}
	.title2 {
		font-size: 40px;
	}

	.subTitle {
		font-size: 18px;
		line-height: 26px;
		width: 90%;
	}
}

/* @media (max-width: 992px) {
	.title {
		font-size: 50px;
		line-height: 64px;
	}

	.subTitle {
		font-size: 20px;
		line-height: 28px;
		width: 90%;
	}
} */

/* @media (max-width: 576px) {
	.chip--outlined {
		width: 100%;
		padding: 8px 10px;
		font-size: 10px;
	}

	.title {
		font-size: 30px;
		line-height: 42px;
	}

	.subTitle {
		font-size: 16px;
		line-height: 24px;
		width: 100%;
	}
} */
</style>
