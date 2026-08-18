<template>
	<v-container style="max-width: 1400px; width: 100%; margin-top: 100px">
		<v-row>
			<v-col cols="12" md="4" class="d-flex flex-column text-center text-md-left">
				<p style="font-size: 36px; font-weight: 600; line-height: 43.2px">24-hour support, even on weekends and holidays</p>
				<p class="mt-10 mt-md-auto" style="font-size: 32px; font-weight: 400; line-height: 38.4px; color: #c8c8c8">
					We're always here to help if you have questions or if something doesn't work out.
				</p>
			</v-col>
			<v-col cols="12" md="3"></v-col>
			<v-col cols="12" md="5">
				<div
					v-for="(n, i) of contacts"
					:key="n"
					class="w-full pa-4 d-flex flex-column"
					:class="i === 1 && 'my-4'"
					style="background-color: #1c1c1c; height: 126px; border-radius: 15px"
				>
					<svg style="color: #1388FC;" viewBox="0 0 24 24" width="60" height="60" fill="currentColor">
						<path :d="n.svgPath" />
					</svg>

					<div class="d-flex align-center w-full mt-auto" style="justify-content: space-between; color: #fff">
						<p style="font-size: 20px">{{ n.value }}</p>
						<div>
							<v-img
								eager
								src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F6b6be361-ee6b-4937-bffd-bf2ca0b3c146.png?alt=media&token="
								width="40"
								height="40"
								alt="Contact icon"
							/>
						</div>
					</div>
				</div>
			</v-col>
		</v-row>
		<div class="w-100 mt-16 d-flex flex-col items-center justify-center backgroundImgCont">
			<div class="w-100 w-md-66 px-5 px-md-0">
				<h2 class="text-center title" style="color: #fff">
					We have unlocked what calls can do. Connect with people, businesses, and opportunities  and turn conversations into 
					<span class="pacifico" style="font-weight: 400">action.</span>
				</h2>
				<div class="d-flex align-center ga-4 my-5 my-md-10 w-75 w-md-33 justify-center mx-auto">
					<v-btn color="white" size="x-large" class="px-2 px-md-6" rounded="lg" aria-label="Download on the App Store">
						<v-img eager height="28" width="120" src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fef602f9b-8afd-4f9a-ac9a-0e87dd6e7e8b.png?alt=media&token=" alt="Download on the App Store" />
					</v-btn>

					<v-btn color="white" size="x-large" class="px-2 px-md-6" rounded="lg" aria-label="Get it on Google Play">
						<v-img eager height="28" width="120" src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F70f7d2d4-891d-44b3-8c77-b8620a7479a3.png?alt=media&token=" alt="Get it on Google Play" />
					</v-btn>
				</div>
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "Contact",

	data() {
		return {
			contacts: [
				{ value: "hello@oncall.net", svgPath: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" },
				{ value: "+234 8168286370", svgPath: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" },
				{ value: "@oncallhq", svgPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" },
			],
		};
	},
};
</script>

<style scoped>
.backgroundImgCont {
	background-image: url("https://res.cloudinary.com/dd26v0ffw/image/upload/v1719690512/OnCall/Frame_20_k79ibi.svg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	height: 530px;
	overflow: hidden;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.title {
	font-size: 48px;
	font-weight: 700;
	line-height: 57.6px;
}

@media screen and (max-width: 768px) {
	.title {
		font-size: 32px;
		line-height: 38.4px;
	}
	.backgroundImgCont {
		height: 450px;
	}
}
</style>
