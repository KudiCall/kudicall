<template>
	<div class="transaction-card">
		<div class="d-flex flex-column ga-1">
			<div class="d-flex justify-space-between">
				<span style="color: #b5b5b5"
					>{{ transaction.date }}
					<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
					15:45
				</span>
				<span class="transaction-type">{{ transaction.type }}</span>
			</div>
			<span style="font-size: 20px; font-weight: 700; line-height: 28px; color: #ececec">{{ transaction.title }}</span>
			<span style="font-size: 18px; font-weight: 400; line-height: 24px; color: #ececec"> {{ transaction.info }}</span>
		</div>

		<v-divider></v-divider>
		<div class="d-flex align-center ga-2">
			<span>
				<span class="mr-1" style="color: #039855; font-weight: 600">Mark as read</span>
				<span class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></span>
				<span style="color: #d92d20; font-weight: 600"> Clear</span>
			</span>
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
	border: 1px solid #292929;
	background-color: #141515;
	padding: 16px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: space-between;
	gap: 15px;
	margin-bottom: 20px;
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
