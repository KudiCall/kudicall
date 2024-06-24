<template>
	<v-container fluid>
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus"> Item </v-expansion-panel-title>
				<v-expansion-panel-text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</v-expansion-panel-text>
			</v-expansion-panel>
			<v-expansion-panel>
				<v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">What is OnCall?</v-expansion-panel-title>
				<v-expansion-panel-text>
					OnCall is a platform that revolutionizes online shopping with live demos and real-time interactions.
				</v-expansion-panel-text>
			</v-expansion-panel>
			<v-expansion-panel>
				<v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">How does it work?</v-expansion-panel-title>
				<v-expansion-panel-text>
					Users can watch live product demonstrations, chat with vendors, and make purchases instantly.
				</v-expansion-panel-text>
			</v-expansion-panel>
			<v-expansion-panel>
				<v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">Is it secure?</v-expansion-panel-title>
				<v-expansion-panel-text>
					Yes, OnCall uses secure transactions and data protection to ensure user privacy and security.
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-container>
</template>

<script>
export default {
	name: "FAQ",
};
</script>
