<template>
	<div class="px-4 px-md-5" style="margin-bottom: 50px">
		<v-row dense>
			<v-col cols="12" md="6">
				<v-card variant="outlined" class="pa-3 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<p class="mb-4" style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec">About post</p>

					<div class="d-flex flex-column ga-4" style="font-size: 16px; font-weight: 600; line-height: 22.4px">
						<p>
							<span class="mr-5" style="color: #454545">Type</span>
							<span class="user-status user-status-buyer">Buyer</span>
						</p>
						<p>
							<span class="mr-2" style="color: #454545">Category</span>
							<span style="color: #b5b5b5">Fashion</span>
						</p>
						<p>
							<span class="mr-2" style="color: #454545">Viewed by</span>
							<span style="color: #b5b5b5">112K</span>
						</p>
						<p>
							<span class="mr-2" style="color: #454545">Liked by</span>
							<span style="color: #b5b5b5">112K</span>
						</p>
						<p>
							<span class="mr-2" style="color: #454545">Shared by</span>
							<span style="color: #b5b5b5">1K</span>
						</p>
						<p class="d-flex align-center">
							<span class="mr-2" style="color: #454545">Posted by</span>
							<span class="d-flex align-center">
								<v-avatar size="24" class="mr-2">
									<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
								</v-avatar>
								<span style="color: #ececec; font-size: 18px; font-weight: 500">Chioma Adamu</span>
							</span>
						</p>
						<p>
							<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">Posted</span>
							<span style="color: rgba(181, 181, 181, 1); font-weight: 600">August 02, 2024 <span class="dot">.</span> 08:15 AM</span>
						</p>
					</div>
					<v-btn @click="confirmDeletePost = true" class="btn my-4" size="x-large" rounded>Delete post</v-btn>
				</v-card>

				<v-card variant="outlined" class="pa-3" style="border: 0.5px solid #303030; border-radius: 8px">
					<v-img eager src="/images/video.png" max-width="400" max-height="400" class="mt-3" />

					<v-btn variant="text" class="px-5 mt-3" size="x-large" style="font-size: 16px; letter-spacing: normal; line-height: 21.82px">
						<v-img eager src="/images/download.svg" class="mr-2" width="24" height="24"></v-img>
						Download
					</v-btn>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<v-card variant="outlined" class="pa-3" style="border: 0.5px solid #303030; border-radius: 8px">
					<div class="mb-4 d-flex justify-space-between">
						<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec">Account post history</p>
						<p>
							<span class="mr-2" style="color: #454545">Total</span>
							<span style="color: #b5b5b5">112K</span>
						</p>
					</div>

					<div>
						<PostHistoryCard v-for="transaction in posts" :key="transaction.id" :transaction="transaction" />
					</div>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="confirmDeletePost" persistent max-width="600">
			<ConfirmActionModal
				title="Delete post"
				message="Are you sure you want to delete this post? This action cannot be undone."
				infoTitle="Deleting a post will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmDeletePost = false)"
				:rightBtnAction="() => (confirmDeletePost = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
const confirmDeletePost = ref(false);

const posts = ref([
	{
		id: "12322",
		customerName: "Belinda Bikes",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
	},
]);

const removeActionInfo = ["Permanently remove the post from the store’s profile"];
</script>

<style scoped>
.user-status {
	border-radius: 300px;
	padding: 4px 10px;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 500;
	width: 89px;
	text-align: center;
}

.user-status-buyer {
	background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%);
	color: #f97066;
}

.btn {
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.btn :deep(.v-icon) {
	font-size: 36px;
}
</style>
