<template>
	<div class="px-4 px-md-5">
		<div class="d-flex justify-space-between">
			<div class="pr-4" style="width: 50%">
				<div class="d-flex flex-column-reverse flex-md-row align-center justify-space-between ga-5 mb-5">
					<div class="w-100 w-md-66">
						<SearchComponent placeholder="Search" />
					</div>
				</div>

				<div style="max-width: 100%">
					<h2 class="mb-5">Select recipient</h2>
					<div class="d-flex flex-column flex-md-row align-center justify-space-between ga-5 mb-5">
						<div class="d-flex ga-4 align-center">
							<v-checkbox color="#1288FC" class="my-checkbox" label="Select All"></v-checkbox>
							<div class="d-flex align-center ga-2">
								<span style="font-size: 18px; font-weight: 500; color: #b5b5b5">0 of {{ messages.length }} Selected</span>
							</div>
						</div>
						<div class="d-flex align-center ga-5">
							<p style="font-size: 18px; font-weight: 500; color: #b5b5b5">1 - 100 of 50,000</p>
							<div>
								<v-btn size="small" class="mr-1" icon="mdi mdi-chevron-left"></v-btn>
								<v-btn size="small" icon="mdi mdi-chevron-right"></v-btn>
							</div>
						</div>
					</div>
					<v-virtual-scroll :items="messages" :item-height="80" style="height: 55vh; overflow: auto; padding-bottom: 10vh">
						<template v-slot:default="{ item }">
							<contact-card
								:title="item.name"
								:avatar-src="item.avatar || 'https://res.cloudinary.com/dd26v0ffw/image/upload/v1721865425/OnCall/Ellipse_2895_o2kkhu.png'"
								badge-src="/images/online-status-indicator.svg"
								:message="item.message"
								label="New"
								:show-badge="item.online"
								:size="8"
								@click="
									() => {
										if (item) {
											selectedChat.value = item;
										} else {
											console.error('Item is null or undefined');
										}
									}
								"
							/>
						</template>
					</v-virtual-scroll>
				</div>
			</div>

			<v-divider vertical class="my-0"></v-divider>

			<div class="d-flex flex-column" style="width: 50%; height: 90vh">
				<div class="d-flex align-center ga-3 pa-3" style="font-size: 20px; font-weight: 700; color: #ececec; border-bottom: 1px solid #303030">
					<v-avatar size="40">
						<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1721865425/OnCall/Ellipse_2895_o2kkhu.png"></v-img>
					</v-avatar>
					<div>
						<span>Michael Faraday <span style="color: #8f8f8f">+ 300 Others</span></span>
					</div>
				</div>

				<div class="pl-4 flex-grow-1">
					<div v-if="selectedChat?.value" style="margin-top: 10px; margin-bottom: 20px">
						<p>{{ selectedChat?.value.message || "No message available" }}</p>
					</div>
					<!-- <div v-else class="d-flex justify-center align-center">
						<div class="d-flex flex-column align-center w-75 ga-4" style="margin-top: 40%">
							<h3 style="font-weight: 600; font-size: 32px; line-height: 44px; color: #ececec">Click on a chat</h3>
							<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #8f8f8f">
								Select an existing conversation from the left or start a new chat by clicking the button below
							</p>
							<v-btn class="custom_btn" size="x-large" rounded> New message </v-btn>
						</div>
					</div> -->
				</div>

				<div class="d-flex align-center mx-10 px-3 mb-5" style="background-color: #1c1c1c; border-radius: 50px; height: 70px">
					<v-textarea rows="1" auto-grow class="message-input mt-5" bg-color="#1C1C1C" variant="solo" flat placeholder="Message"></v-textarea>
					<div class="d-flex align-center ga-2" style="" @click.stop>
						<v-menu>
							<template v-slot:activator="{ props }">
								<div class="icons" v-bind="props">
									<v-img eager width="56" height="56" src="/images/attach-file.svg" />
								</div>
							</template>
							<!-- <v-card class="prompt mb-4">
								<v-row>
									<v-col class="d-flex flex-column align-center ga-2" cols="4" v-for="icon in options" :key="icon.name">
										<v-avatar class="pa-4" :style="`background: ${icon.color};`" size="56">
											<v-img eager width="24" height="24" :src="icon.icon" />
										</v-avatar>
										<p style="color: #ececec; font-size: 14px">{{ icon.name }}</p>
									</v-col>
								</v-row>
							</v-card> -->
						</v-menu>
						<!-- <div v-if="!message" @click.stop="startVn" class="icons">
					<v-img eager width="24" height="24" src="/images/icons/tzekaxcv0eoxvgqojcui.png" />
				</div> -->
						<div class="icons">
							<v-img eager width="56" height="56" src="/images/send.svg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const selectedChat = ref({});

const messages = ref([
	{
		name: "Belinda bikes",
		message: "Manage users, messages",
		online: true,
		unread: true,
	},
	{
		name: "Precious Karty’s business",
		message: "Manage users, messages",
		online: true,
		unread: true,
	},
	{
		name: "Bridget homes",
		message: "Manage users, messages",
		online: true,
		unread: true,
	},

	{
		name: "Albertini gadgets",
		message: "Manage users, messages",
		online: true,
		unread: true,
	},
	{
		name: "House of crocs",
		message: "Manage users, messages",
		online: true,
		unread: false,
	},
	{
		name: "Hilary Clinton",
		message: "Manage users, messages",
		online: true,
		unread: false,
	},
]);

// const options = [
// 	{
// 		name: "Document",
// 		icon: "/images/icons/document-text.svg",
// 		color: "linear-gradient(180deg, #D37A39 2.68%, #B45007 84.82%)",
// 		action: pickDocument,
// 	},
// 	{ name: "Camera", icon: "/images/icons/camera.svg", color: "linear-gradient(185deg, #00B4A0 15%, #006C60 85.96%)", action: () => sendPhoto() },
// 	{ name: "Gallery", icon: "/images/icons/gallery.svg", color: "linear-gradient(185deg, #454545 15%, #292929 85.96%)", action: toGallery },
// 	{
// 		name: "Location",
// 		icon: "/images/icons/location1.svg",
// 		color: "linear-gradient(170deg, #013365 6.54%, #031A30 114.61%)",
// 		action: () => router.push("/chats/share-location"),
// 	},
// 	{ name: "Audio", icon: "/images/icons/headphone.svg", color: "linear-gradient(185deg, #1288FC 15%, #0B5297 85.96%)", action: sendAudio },
// ];
</script>

<style scoped>
.my-chip {
	background-color: #161818;
	border-radius: 16px !important;
}

.my-chip--active {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.2) 15%, rgba(0, 108, 96, 0.2) 85.96%);
	border-radius: 16px !important;
}

.custom_btn {
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.my-checkbox :deep(.v-input__details) {
	display: none !important;
}
</style>
