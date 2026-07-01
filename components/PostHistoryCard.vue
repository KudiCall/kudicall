<template>
	<div class="transaction-card">
		<div class="d-flex flex-column align-start ga-1">
			<span style="color: #b5b5b5"
				>{{ transaction.date }}
				<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
				15:45
			</span>
			<span class="transaction-type">#{{ transaction.id }}</span>
			<span style="font-size: 20px; font-weight: 700; line-height: 28px; color: #ececec">{{ transaction.title }}</span>
			<v-img eager src="/images/video1.png" width="auto" max-height="400" class="mt-3" />
			<v-btn variant="text" class="pr-5 pl-0 mt-3" size="x-large" style="font-size: 16px; letter-spacing: normal; line-height: 21.82px">
				View post
			</v-btn>
		</div>

		<v-divider></v-divider>
		<div class="d-flex align-center ga-2">
			<v-avatar size="24">
				<v-img eager :alt="transaction.customerName" :src="transaction.customerAvatar" cover></v-img>
			</v-avatar>
			<span class="transaction-name">{{ transaction.customerName }}</span>
		</div>
	</div>
</template>

<script setup>
defineProps({
	transaction: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.transaction-card {
	border: 1px solid;
	border-image-source: linear-gradient(185.49deg, #454545 15%, #292929 85.96%);
	background-color: #1c1c1c;
	padding: 16px;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: space-between;
	gap: 15px;
	margin: 10px 0;
	color: #fff;
}

.transaction-type {
	font-weight: 400;
	font-size: 18px;
	line-height: 19.6px;
	color: #ececec;
}
.transaction-name {
	font-weight: 400;
	font-size: 18px;
	line-height: 19.6px;
	color: #8f8f8f;
}
</style>
