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
	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-16x16.png" }],
});
</script> -->

<script setup lang="ts">
useSeoMeta({
	title: "KudiCall",
	ogTitle: "KudiCall",
	description: "Discover a new way to Shop, Connect, and Experience!!",
	ogDescription: "Discover a new way to Shop, Connect, and Experience!!",
	ogImage: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Ff3ba885c-af01-4894-bd95-74432dd9e775.png?alt=media&token=",
	twitterCard: "summary_large_image",
});
</script>

<style></style>
