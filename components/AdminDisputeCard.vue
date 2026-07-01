<template>
	<v-card variant="outlined" class="mb-4 py-2" :style="{ border: '0.5px solid #303030' }" style="width: 230px">
		<v-card-text>
			<v-avatar :size="32" :style="avatarStyle">
				<v-icon :size="24" :color="iconColor" :icon="icon"></v-icon>
			</v-avatar>
		</v-card-text>
		<v-card-title style="font-weight: 400; font-size: 16px; line-height: 22px; color: #8f8f8f">
			{{ name }}
		</v-card-title>
		<v-card-text style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec"> {{ value }} </v-card-text>
	</v-card>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	value: {
		type: String,
		required: true,
	},
});

const avatarStyle = computed(() => {
	switch (props.name) {
		case "Total Dispute":
			return "background: rgba(48, 48, 48, 0.1)";
		case "Cancelled":
			return "background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%)";
		case "Resolved":
			return "background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%)";
		case "Pending":
			return "background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%)";
		case "In progress":
			return "background: linear-gradient(185.49deg, rgba(18, 136, 252, 0.1) 15%, rgba(11, 82, 151, 0.1) 85.96%)";

		default:
			return;
	}
});

const iconColor = computed(() => {
	switch (props.name) {
		case "Total Dispute":
			return "#303030";
		case "Cancelled":
			return "#D92D20";
		case "Resolved":
			return "#007E70";
		case "Pending":
			return "#D37A39";
		case "In progress":
			return "#0B5297";
		default:
			return;
	}
});

const icon = computed(() => {
	switch (props.name) {
		case "Total Dispute":
			return "mdi mdi-trending-down";
		case "Cancelled":
			return "mdi mdi-trending-up";
		case "Resolved":
			return "mdi mdi-trending-down";
		case "Pending":
			return "mdi mdi-trending-down";
		case "In progress":
			return "mdi mdi-trending-down";
		default:
			return "";
	}
});
</script>
