<template>
	<v-card class="pa-0" style="border-radius: 10px; overflow: hidden; background-color: #111212">
		<v-img src="/images/video.png" eager />
		<div class="d-flex flex-column ga-4 px-4 pb-4">
			<div class="d-flex justify-space-between">
				<div>
					<p>112K</p>
					<p style="color: #b5b5b5">Views</p>
				</div>
				<div>
					<p>112K</p>
					<p style="color: #b5b5b5">Likes</p>
				</div>
				<div>
					<p>112K</p>
					<p style="color: #b5b5b5">Shares</p>
				</div>
			</div>
			<div class="d-flex align-center">
				<v-avatar size="24" class="mr-2">
					<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
				</v-avatar>
				<p style="color: #ececec; font-size: 18px; font-weight: 500">Chioma Adamu</p>
			</div>
			<span class="user-status user-status-buyer">Buyer</span>
			<p>
				<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">Category</span>
				<span style="color: rgba(181, 181, 181, 1); font-weight: 600">Fashion</span>
			</p>
			<p>
				<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">Posted</span>
				<span style="color: rgba(181, 181, 181, 1); font-weight: 600">August 02 <span class="dot">.</span> 2024</span>
			</p>
		</div>
	</v-card>
</template>

<script setup></script>

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
</style>
