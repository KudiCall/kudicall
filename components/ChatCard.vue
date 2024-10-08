<template>
	<div @click="$emit('click')" style="gap: 12px" class="d-flex justify-space-between align-center mb-8 w-100 cursor-pointer">
		<v-avatar size="40">
			<v-img eager :src="avatarSrc"></v-img>
		</v-avatar>
		<div class="d-flex flex-column ga-2" style="flex: 1">
			<div class="d-flex justify-space-between pr-4">
				<div class="d-flex align-center ga-2">
					<p class="d-flex align-center ga-2" :style="titleStyle">{{ title }}</p>
					<v-img eager :src="badgeSrc" :width="size" :height="size" v-if="showBadge"></v-img>
				</div>
				<!-- <p :style="newStyle">{{ label }}</p> -->
			</div>
			<p class="text-truncate" :style="messageStyle">{{ message }}</p>
		</div>
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
		badgeSrc: {
			type: String,
			default: "/images/verified-badge.png",
		},
		showBadge: {
			type: Boolean,
			default: true,
		},
		label: {
			type: String,
			default: "New",
		},
		message: {
			type: String,
			default: "New feature alert! We are always working to",
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
				maxWidth: "90%",
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
.text-truncate {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
