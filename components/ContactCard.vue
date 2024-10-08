<template>
	<div class="d-flex justify-space-between align-center mb-3 w-100 cursor-pointer">
		<div class="d-flex justify-space-between align-center ga-3">
			<v-avatar size="40">
				<v-img eager :src="avatarSrc"></v-img>
			</v-avatar>
			<div>
				<p :style="titleStyle">{{ title }}</p>
				<p :style="messageStyle">{{ message }}</p>
			</div>
		</div>
		<v-checkbox color="#1288FC" class="my-checkbox" @click.stop></v-checkbox>
	</div>
</template>

<script>
export default {
	name: "OncallChatCard",
	props: {
		title: {
			type: String,
			default: "Official Oncall",
		},
		avatarSrc: {
			type: String,
			default: "/images/oncall-icon.png",
		},
		message: {
			type: String,
		},
		titleStyle: {
			type: Object,
			default: () => ({
				fontSize: "18px",
				lineHeight: "25px",
				color: "#ececec",
			}),
		},
		newStyle: {
			type: Object,
			default: () => ({
				color: "#ececec",
				fontSize: "12px",
				lineHeight: "16.8px",
				fontWeight: 600,
			}),
		},
		messageStyle: {
			type: Object,
			default: () => ({
				color: "#b5b5b5",
				fontSize: "16px",
				lineHeight: "23px",
			}),
		},
		size: {
			type: Number,
			default: 24,
		},
	},
};
</script>

<style scoped>
/* .text-truncate {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
} */
</style>
