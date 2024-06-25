<template>
	<v-container
		class="d-flex flex-column justify-center align-center text-center container"
		style="position: relative; max-width: 1400px; width: 100%"
	>
		<div>
			<h1 class="quote">
				"Incredible variety and personalized service. OnCall has revolutionized shopping with live videos, product uploads, and seamless payments for
				an interactive experience."
			</h1>
		</div>
		<!-- <v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719231351/OnCall/Frame_25_zzougd.png" class="background-image" /> -->
		<v-img v-for="(bubble, index) in bubblesDesktop" :key="index" :src="bubble.src" :style="bubble.style" class="bubble-image d-none d-md-block" />
		<v-img v-for="(bubble, index) in bubblesMobile" :key="index" :src="bubble.src" :style="bubble.style" class="bubble-image d-block d-md-none" />
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			bubblesDesktop: [
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272492/OnCall/avatar1_riawom.svg",
					style: "position: absolute; top: 10%; left: 3%; width: 50px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Frame_26_cpulhn.svg",
					style: "position: absolute; top: 12%; left: 28%; width: 165px; height: 82px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Rectangle_3194_u9nnl7.svg",
					style: "position: absolute; top: 0%; left: 53%; width: 50px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Frame_1171275582_c6cgg7.svg",
					style: "position: absolute; top: 16%; right: 14%; width: 230px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Group_25_qy1shl.svg",
					style: "position: absolute; bottom: 28%; left: 2%; width: 230px; height: 58px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272495/OnCall/Rectangle_3198_bvwys9.svg",
					style: "position: absolute; bottom: 0%; left: 30%; width: 50px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Frame_1171275581_pzpohj.svg",
					style: "position: absolute; bottom: 25%; left: 60%; width: 311px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272494/OnCall/Rectangle_3196_y7bemf.svg",
					style: "position: absolute; bottom: 40%; right: 3%; width: 50px; height: 50px;",
				},
			],
			bubblesMobile: [
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272492/OnCall/avatar1_riawom.svg",
					style: "position: absolute; top: 5%; left: 5%; width: 50px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Frame_26_cpulhn.svg",
					style: "position: absolute; top: 20%; left: 3%; width: 165px; height: 82px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Rectangle_3194_u9nnl7.svg",
					style: "position: absolute; top: 0%; left: 66%; width: 50px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Frame_1171275582_c6cgg7.svg",
					style: "position: absolute; top: 10%; right: 0%; width: 230px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719276087/OnCall/Frame_25_kdyv7x.svg",
					style: "position: absolute; bottom: 5%; right: 0%; width: 230px; height: 58px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272495/OnCall/Rectangle_3198_bvwys9.svg",
					style: "position: absolute; bottom: 0%; left: 10%; width: 50px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272493/OnCall/Frame_1171275581_pzpohj.svg",
					style: "position: absolute; bottom: 20%; left: 0%; width: 311px; height: 50px;",
				},
				{
					src: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1719272494/OnCall/Rectangle_3196_y7bemf.svg",
					style: "position: absolute; bottom: 30%; right: 3%; width: 50px; height: 50px;",
				},
			],
		};
	},
};
</script>

<style scoped>
.quote {
	font-size: 40px;
	color: #ffffff;
	max-width: 1127px;
	margin: auto;
	line-height: 56px;
	z-index: 1;
	font-weight: 400;
}

.container {
	height: 594px;
	margin-top: 80px;
}

.bubble-image {
	z-index: 2;
}

/* Adjust bubble sizes for smaller screens */
@media (max-width: 768px) {
	.quote {
		font-size: 22px;
		max-width: 100%;
		line-height: 33.6px;
	}
	.container {
		height: 729px;
		margin-top: 10px;
	}
}
</style>
