<!-- <template>
	<v-container class="pa-0" style="position: relative; width: 100%; height: 100%">
		<v-skeleton-loader v-if="loading" class="image-skeleton" type="image" :height="height" :width="width"></v-skeleton-loader>
		<v-img v-show="!loading" :src="src" :alt="alt" :height="height" :width="width" @load="onLoad" @error="onError" aspect-ratio="1"></v-img>
	</v-container>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			default: "",
		},
		width: {
			type: String,
			default: "100%",
		},
		height: {
			type: String,
			default: "100%",
		},
	},
	data() {
		return {
			loading: true,
			hasError: false,
		};
	},
	methods: {
		onLoad() {
			console.log("loaded");
			this.loading = false;
		},
		onError() {
			this.loading = false;
			this.hasError = true;
		},
	},
};
</script>

<style scoped>
.image-skeleton {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style> -->

<template>
	<v-container class="pa-0" style="position: relative; width: 100%; height: 100%">
		<v-skeleton-loader v-if="loading" class="image-skeleton" type="image" :height="height" :width="width"></v-skeleton-loader>
		<v-img v-show="!loading" :src="src" :alt="alt" :height="height" :width="width" @load="onLoad" @error="onError" aspect-ratio="1">
			<slot name="onLoad"></slot>
			<slot name="onError"></slot>
		</v-img>
	</v-container>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			default: "",
		},
		width: {
			type: String,
			default: "100%",
		},
		height: {
			type: String,
			default: "100%",
		},
	},
	data() {
		return {
			loading: true,
			hasError: false,
		};
	},
	methods: {
		onLoad() {
			console.log("Image loaded");
			this.loading = false;
			this.$emit("imageLoaded");
		},
		onError() {
			console.error("Image load error");
			this.loading = false;
			this.hasError = true;
			this.$emit("imageLoadError");
		},
	},
};
</script>

<style scoped>
.image-skeleton {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>
