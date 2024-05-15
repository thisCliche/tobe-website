<template>
	<div class="banner">
		<div class="maskWrap" v-if="bannerProfile.hasOwnProperty('maskInfo')">
			<img class="maskPng" :src="bannerProfile.maskInfo.maskImg" mode="cover"></img>
			<div class="desText">{{bannerProfile.maskInfo.description}}</div>
		</div>
		<video class="myVideo" :src="bannerProfile.video_text" :poster="bannerProfile.image_text" object-fit="cover"
			autoplay loop controls></video>
	</div>
</template>

<script>
	export default {
		name: 'CommonBanner',
		props: ['bannerProfile']
	}
</script>

<style lang="scss" scoped>
	.banner {

		@include wh(100%, 500px);
		position: relative;

		.maskWrap {
			width: 590px;
			position: absolute;
			left: 50%;
			top:120px;
			transform: translateX(-500px);
			z-index: 99;
			
			.maskPng {
				@include wh(370px, 100%);
			}

			.desText {
				line-height: 48px;
				margin-top: 22px;
				@include sc(20px, #fff);
				width: 420px;
			}
		}

		.myVideo {
			@include wh(100%, 100%);

		}

	}
</style>