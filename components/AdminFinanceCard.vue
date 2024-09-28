<template>
	<v-card variant="outlined" class="mb-4 py-2" :style="{ border: '0.5px solid #303030' }" style="min-width: 250px">
		<v-card-text>
			<v-avatar :size="32" :style="avatarStyle">
				<v-icon :size="24" :color="iconColor" :icon="icon"></v-icon>
			</v-avatar>
		</v-card-text>
		<v-card-title style="font-weight: 400; font-size: 16px; line-height: 22px; color: #8f8f8f">
			{{ name }}
		</v-card-title>
		<v-card-text style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec"> $ {{ value }} </v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
	},
	computed: {
		avatarStyle() {
			return this.name.split(" ").includes("Withdrawals")
				? "background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%)"
				: "background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%)";
		},
		iconColor() {
			return this.name.split(" ").includes("Withdrawals") ? "#D92D20" : "#007E70";
		},
		icon() {
			return this.name.split(" ").includes("Withdrawals") ? "mdi mdi-trending-up" : "mdi mdi-trending-down";
		},
	},
};
</script>
