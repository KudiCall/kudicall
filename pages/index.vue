<template>
	<v-app>
		<KeepAlive>
			<Home />
		</KeepAlive>
	</v-app>
</template>

<!-- <script setup lang="ts">
const title = ref("My App");
const description = ref("My App Description");

// This will be reactive when you change title/description above
useHead({
	title,
	meta: [
		{
			name: "description",
			content: description,
		},
		{ property: "og:title", content: "OnCall" },
		{ property: "og:description", content: "Discover a new way to Shop, Connect, and Experience!!" },
		{ property: "og:image", content: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1727115612/OnCall/favicon1_owh5zd.png" }, // Use absolute URL
		{ property: "og:url", content: "https://www.oncall-shop.netlify.app" },
		{ property: "og:type", content: "website" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: "OnCall" },
		{ name: "twitter:description", content: "Discover a new way to Shop, Connect, and Experience!!" },
		{ name: "twitter:image", content: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1727115612/OnCall/favicon1_owh5zd.png" }, // Use absolute URL
	],
	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon1.png" }],
});
</script> -->

<script setup lang="ts">
useSeoMeta({
	title: "OnCall",
	ogTitle: "OnCall",
	description: "Discover a new way to Shop, Connect, and Experience!!",
	ogDescription: "Discover a new way to Shop, Connect, and Experience!!",
	ogImage: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1727115612/OnCall/favicon1_owh5zd.png",
	twitterCard: "summary_large_image",
});
</script>

<style></style>
