<template>
	<v-card class="d-flex flex-column ga-6" flat style="background-color: #1c1c1c; padding: 40px; border-radius: 40px">
		<div class="d-flex align-center justify-space-between ga-2">
			<p style="font-weight: 700; color: #ececec; font-size: 24px">Update status</p>
			<div>
				<v-img eager style="cursor: pointer" width="32" height="32" src="/images/close-circle.svg" @click="leftBtnAction" />
			</div>
		</div>

		<div>
			<v-menu v-model="menu" :close-on-content-click="false" offset-y>
				<template v-slot:activator="{ props }">
					<v-btn
						v-bind="props"
						@click="toggleDropdown"
						class="w-100 mb-10 py-4 px-3 d-flex justify-space-between align-center"
						color="#212121"
						size="x-large"
						style="background: #1c1c1c; border: 1px solid #292929; border-radius: 12px"
						:append-icon="dropdownOpen ? 'mdi mdi-chevron-down' : 'mdi mdi-chevron-up'"
					>
						<span v-if="selected === ''" style="color: #ccc">Update status</span>
						<span>{{ selected }}</span>
					</v-btn>
				</template>

				<v-list class="mt-4" style="border-radius: 30px">
					<v-list-item v-for="(item, index) in items" :key="index">
						<div class="d-flex justify-space-between py-2 align-center text-truncate w-100">
							<div>
								<p style="font-size: 16px; font-weight: 400; color: #fff">{{ item }}</p>
							</div>
							<div class="px-2">
								<input color="#1288FC" style="accent-color: #1288fc; transform: scale(1.5)" type="radio" v-model="selected" :value="item" />
							</div>
						</div>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-textarea
				label=""
				variant=""
				rows="2"
				auto-grow
				style="background: #1c1c1c; border: 1px solid #292929; border-radius: 12px"
				placeholder="State reason for the status update, this would guide other admins who may pick up this dispute e.g; Contacted parties to resolve dispute"
			></v-textarea>
		</div>
		<div class="d-flex align-center justify-end mt-5" style="gap: 10px">
			<v-btn
				width="200"
				style="font-weight: 600; font-size: 16px; line-height: 22.4px"
				color="#3E3E3E"
				rounded="xl"
				size="x-large"
				@click="leftBtnAction"
				>Cancel</v-btn
			>
			<v-btn
				width="200"
				:class="'blueBtn'"
				style="font-weight: 600; font-size: 16px; line-height: 22.4px"
				rounded="xl"
				color="primary"
				size="x-large"
				@click="rightBtnAction"
				>Update Status</v-btn
			>
		</div>
	</v-card>
</template>

<script setup>
defineProps({
	leftBtnAction: {
		type: Function,
		required: true,
	},
	rightBtnAction: {
		type: Function,
		required: true,
	},
});
const menu = ref(false);
const selected = ref("Pending");
const dropdownOpen = ref(false);

const toggleDropdown = () => {
	dropdownOpen.value = !dropdownOpen.value;
};
const items = ["Pending", "In Progress", "Resolved"];
</script>

<style scoped>
.blueBtn {
	background: linear-gradient(180deg, #1288fc 15%, #0b5297 85.96%);
}
</style>
