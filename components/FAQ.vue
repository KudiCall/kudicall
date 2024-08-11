<template>
	<v-container id="faq" style="max-width: 1400px; width: 100%; padding-top: 100px" class="mx-auto">
		<v-row>
			<v-col cols="12" md="3" class="faq-header">
				<v-img eager width="192" height="44" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1720009222/OnCall/Frame_1171275577_aza04y.svg" />
				<h1 class="mt-5">Frequently asked questions</h1>
			</v-col>
			<v-col cols="12" md="9">
				<v-expansion-panels variant="accordion" class="d-flex flex-column ga-4 expansion">
					<v-expansion-panel v-for="n of faq" :key="n.id" class="expansion" style="border-radius: 15px !important; overflow: hidden">
						<v-expansion-panel-title class="custom-panel-title">
							{{ n.title }}
							<template v-slot:actions="{ expanded }">
								<v-icon :color="!expanded ? 'primary' : ''" :icon="expanded ? 'mdi mdi-close' : 'mdi mdi-plus'"></v-icon>
							</template>
						</v-expansion-panel-title>
						<v-expansion-panel-text class="custom-panel-text"> {{ n.text }} </v-expansion-panel-text>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "FAQ",

	data() {
		return {
			faq: [
				{
					id: 1,
					title: "How does live commerce work on OnCall?",
					text: "OnCall is a platform that revolutionizes online shopping with live demos and real-time interactions.",
				},
				{
					id: 2,
					title: "Can anyone become a vendor on OnCall?",
					text: "Users can watch live product demonstrations, chat with vendors, and make purchases instantly.",
				},
				{
					id: 3,
					title: "How do I ensure the security of my transactions on OnCall?",
					text: "OnCall prioritizes the security of your transactions. We use industry-standard encryption and work with reputable payment processors to safeguard your financial information. Additionally, our platform undergoes regular security assessments to ensure a safe and secure shopping environment for all users.",
				},
				{
					id: 4,
					title: "Can I schedule a live video call with a vendor in advance?",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eum cumque possimus iusto suscipit molestiae non aliquid assumenda odit modi asperiores, incidunt, temporibus magni fuga aliquam earum nulla nisi veniam?",
				},
				{
					id: 5,
					title: "How do I choose a rider for delivery?",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eum cumque possimus iusto suscipit molestiae non aliquid assumenda odit modi asperiores, incidunt, temporibus magni fuga aliquam earum nulla nisi veniam?",
				},
				{
					id: 6,
					title: "What makes OnCall different from traditional e-commerce platforms?",
					text: "Users can watch live product demonstrations, chat with vendors, and make purchases instantly.",
				},
			],
		};
	},
};
</script>

<style scoped>
.v-expansion-panels div.v-expansion-panel {
	border-radius: 15px !important;
}
.custom-panel-title {
	padding: 40px 20px;
	background-color: #1c1c1c;
	font-size: 20px;
	font-weight: 600;
	line-height: 20px;
	color: #fff;
	/* border-radius: 15px !important; */
	height: 104px;
}

.custom-panel-text {
	font-size: 16px;
	font-weight: 300;
	line-height: 25px;
	background-color: #1c1c1c;
	padding-bottom: 10px;
	padding-right: 250px;
	color: #fff;
	border-radius: 0px !important;
	border-bottom-right-radius: 15px !important;
	border-bottom-left-radius: 15px !important;
}

.custom-panel-title .v-icon {
	color: blue;
	margin-left: 20px;
}

/* Responsive Styles */
@media (max-width: 1400px) {
}

@media (max-width: 768px) {
	.faq-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.custom-panel-title {
		font-size: 16px;
		line-height: 22.4px;
		padding: 20px 20px;
		height: 84px;
	}

	.custom-panel-text {
		padding-right: 10px;
	}
}
</style>
