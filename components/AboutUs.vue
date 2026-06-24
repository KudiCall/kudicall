<template>
	<v-container
		class="d-flex flex-column justify-center align-center text-center container"
		style="position: relative; max-width: 1400px; width: 100%"
	>
		<div>
			<h1 class="quote text--white">
				"Incredible variety and personalized service. KudiCall has revolutionized shopping with live videos, product uploads, and seamless payments for
				an interactive experience."
			</h1>
		</div>
		<v-img
			eager
			v-for="(bubble, index) in bubblesDesktop"
			:key="index"
			:src="bubble.src"
			:style="bubble.style"
			class="bubble-image d-none d-md-block"
		/>
		<v-img
			eager
			v-for="(bubble, index) in bubblesMobile"
			:key="index"
			:src="bubble.src"
			:style="bubble.style"
			class="bubble-image d-block d-md-none"
		/>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			bubblesDesktop: [
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F647c9659-6dc4-482e-95be-694de0307e16.png?alt=media&token=",
					style: "position: absolute; top: 10%; left: 3%; width: 50px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F7b486903-8edf-4d40-a3dd-d3ba96a62853.png?alt=media&token=",
					style: "position: absolute; top: 12%; left: 28%; width: 165px; height: 82px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F6eae0d3a-d1c4-486d-9319-a17bb13f5cfa.png?alt=media&token=",
					style: "position: absolute; top: 0%; left: 53%; width: 50px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F8830a59b-d36f-462d-9ee7-24915eb47b74.png?alt=media&token=",
					style: "position: absolute; top: 16%; right: 14%; width: 230px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F247b2c30-5df0-4a8e-bbee-684d4e89d339.png?alt=media&token=",
					style: "position: absolute; bottom: 28%; left: 2%; width: 230px; height: 58px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F4d391e4b-9342-4bb5-95d2-adf3bfa8fec7.png?alt=media&token=",
					style: "position: absolute; bottom: 0%; left: 30%; width: 50px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fb3acba90-5173-4b93-9df3-a0968eba373f.png?alt=media&token=",
					style: "position: absolute; bottom: 25%; left: 60%; width: 311px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Faeee89da-06c4-4d7d-86b9-fb3647055bdf.png?alt=media&token=",
					style: "position: absolute; bottom: 40%; right: 3%; width: 50px; height: 50px;",
				},
			],
			bubblesMobile: [
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F647c9659-6dc4-482e-95be-694de0307e16.png?alt=media&token=",
					style: "position: absolute; top: 5%; left: 5%; width: 50px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F7b486903-8edf-4d40-a3dd-d3ba96a62853.png?alt=media&token=",
					style: "position: absolute; top: 20%; left: 3%; width: 165px; height: 82px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F6eae0d3a-d1c4-486d-9319-a17bb13f5cfa.png?alt=media&token=",
					style: "position: absolute; top: 0%; left: 66%; width: 50px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F8830a59b-d36f-462d-9ee7-24915eb47b74.png?alt=media&token=",
					style: "position: absolute; top: 10%; right: 2%; width: 230px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F247b2c30-5df0-4a8e-bbee-684d4e89d339.png?alt=media&token=",
					style: "position: absolute; bottom: 5%; right: 2%; width: 230px; height: 58px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F4d391e4b-9342-4bb5-95d2-adf3bfa8fec7.png?alt=media&token=",
					style: "position: absolute; bottom: 0%; left: 10%; width: 50px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fb3acba90-5173-4b93-9df3-a0968eba373f.png?alt=media&token=",
					style: "position: absolute; bottom: 20%; left: 2%; width: 311px; height: 50px;",
				},
				{
					src: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Faeee89da-06c4-4d7d-86b9-fb3647055bdf.png?alt=media&token=",
					style: "position: absolute; bottom: 30%; right: 4%; width: 50px; height: 50px;",
				},
			],
		};
	},
};
</script>

<style scoped>
.quote {
	font-size: 40px;
	/* color: #ffffff; */
	max-width: 1127px;
	margin: auto;
	line-height: 56px;
	z-index: 1;
	font-weight: 400;
}

.container {
	height: 594px;
	margin-top: 50px;
}

.bubble-image {
	z-index: 2;
}

/* Adjust bubble sizes for smaller screens */
@media (max-width: 768px) {
	.quote {
		font-size: 24px;
		max-width: 100%;
		line-height: 33.6px;
	}
	.container {
		height: 729px;
		margin-top: 10px;
		/* padding: 0 10px; */
	}
}
</style>
