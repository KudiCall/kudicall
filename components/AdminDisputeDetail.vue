<template>
	<div class="px-4 px-md-5" style="margin-bottom: 50px">
		<v-row dense>
			<v-col cols="12" md="6">
				<v-card variant="outlined" class="pa-3 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<p class="mb-4" style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec">About dispute</p>

					<div class="d-flex flex-column ga-4" style="font-size: 16px; font-weight: 600; line-height: 22.4px">
						<p>
							<span class="mr-5" style="color: #454545">Status</span>
							<span class="user-status user-status-inprogress">{{ "In progress" }}</span>
						</p>
						<p>
							<span class="mr-2" style="color: #454545">Filed by</span>
							<span style="color: #b5b5b5"
								>Sandra Apeh
								<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
								<span>#1234567890</span>
								<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
								<span>sandraapeh@gmail.com</span>
							</span>
						</p>
						<p>
							<span class="mr-2" style="color: #454545">Against</span>
							<span style="color: #b5b5b5"
								>Belinda Bikes
								<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
								<span>#1234567890</span>
								<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
								<span>belindabikes@gmail.com</span>
							</span>
						</p>
						<p>
							<span class="mr-2" style="color: #454545">Order</span>
							<span style="color: #b5b5b5"
								>#123456
								<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
								$40
							</span>
						</p>

						<p>
							<span class="mr-2" style="color: #454545">Order date</span>
							<span style="color: #b5b5b5"
								>June 10
								<div class="mx-1" style="border-radius: 50%; width: 4px; height: 4px; background-color: #454545; display: inline-block"></div>
								2024
							</span>
						</p>
					</div>
					<v-btn class="btn my-4" size="x-large" rounded>View Dispute</v-btn>
				</v-card>

				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p class="mb-4" style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec">Dispute report</p>
					<!-- <div class="d-flex flex-column mt-6 ga-4">
						<OrderCard v-for="product in products" :product="product" :key="product.id" />
					</div> -->
					<div>
						<p>
							<span class="mr-2" style="color: #454545">Message</span>
							<span style="color: #b5b5b5">The item I received did not match my order </span>
						</p>
						<v-img eager src="/images/handbag.png" width="200" height="200" class="mt-3" />
					</div>

					<v-btn variant="text" class="px-5 mt-3" size="x-large" style="font-size: 16px; letter-spacing: normal; line-height: 21.82px">
						<v-img eager src="/images/download.svg" class="mr-2" width="24" height="24"></v-img>
						Download
					</v-btn>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<v-card variant="outlined" class="pa-3" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec" class="mb-4">Dispute History</p>

					<div>
						<TransactionHistoryCard v-for="transaction in transactionHistory" :key="transaction.id" :transaction="transaction" />
					</div>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
const products = [
	{
		id: 1,
		name: "Modern sports shoe",
		image: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1721951428/OnCall/Rectangle_3188_yjggrg.png",
		price: 100,
		quantity: 1,
	},
	{
		id: 2,
		name: "Futuristic sports shoe",
		image: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1721951429/OnCall/Rectangle_3188_1_kibthh.png",
		price: 150,
		quantity: 2,
	},
	{
		id: 3,
		name: "Classic running shoe",
		image: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1721951429/OnCall/Rectangle_3188_2_tamdit.png",
		price: 150,
		quantity: 2,
	},
];

const transactionHistory = ref([
	{
		id: "123456",
		status: "Pending",
		title: "Dispute filed",
		customerName: "Belinda Bikes",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "Seller",
	},
	{
		id: "123456",
		status: "Delivered",
		title: "Order status update",
		customerName: "Stephanie Sunday",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "Seller",
	},
	{
		id: "123457",
		status: "packaged & out for delivery",
		title: "Order status update",
		customerName: "Stephanie Sunday",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "Buyer",
	},
	{
		id: "123457",
		status: "Delivered",
		title: "Order complete",
		customerName: "Stephanie Sunday",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "Buyer",
	},
]);
</script>

<style scoped>
.user-status {
	border-radius: 6px;
	padding: 4px 10px;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 500;
	width: 89px;
	text-align: center;
}

.user-status-inprogress {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}

.btn {
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.btn :deep(.v-icon) {
	font-size: 36px;
}
</style>
