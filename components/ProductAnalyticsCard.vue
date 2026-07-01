<template>
	<v-card variant="outlined" class="mb-4 py-2" :style="{ border: '0.5px solid #303030' }" style="min-width: 250px">
		<v-card-text>
			<v-avatar :size="32" class="pa-1" style="background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%)">
				<v-img :src="img" style="width: 24px; height: 24px"></v-img>
			</v-avatar>
		</v-card-text>
		<v-card-title style="font-weight: 400; font-size: 16px; line-height: 22px; color: #8f8f8f">
			{{ name }}
		</v-card-title>
		<v-card-text style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec"> {{ value }} </v-card-text>
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
		img: {
			type: String,
			required: true,
		},
	},
};
</script>
