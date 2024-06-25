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
					style="background-color: #1c1c1c; height: 166px"
				>
					<v-icon :icon="n.icon" color="primary" size="60" />

					<div class="d-flex align-center w-full mt-auto" style="justify-content: space-between">
						<p style="font-size: 24px">{{ n.value }}</p>
						<div>
							<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719326024/OnCall/Frame_1000007886_neoj6x.svg" width="40" height="40" />
						</div>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "Contact",

	data() {
		return {
			contacts: [
				{ value: "hello@oncall.net", icon: "mdi mdi-email" },
				{ value: "+234 8168286370", icon: "mdi mdi-phone" },
				{ value: "@oncallhq", icon: "mdi mdi-map-marker" },
			],
		};
	},
};
</script>
