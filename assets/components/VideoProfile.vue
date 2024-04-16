<template>
	<view class="video-profile" :style="{width:withValue,height:heightValue,borderRadius:borderRidius}">
		<video class="video-player" :autoplay="false" object-fit="cover" show-mute-btn :poster="introduction.imageUrl" :src="introduction.videoUrl" :controls="true" :style="{width:withValue,height:heightValue}"></video>
	</view>
</template>

<script>
	import playImg from '@image/play.png'
	import VideoPlay from '@components/VideoPlay.vue'
	export default {
		name: 'VideoProfile',
		components: {
			VideoPlay
		},
		props:{
			introduction:null,
			withValue:{
				type:String,
				default:'560px',
			},
			borderRidius:{
				type:String,
				default:'20px',
			},
			heightValue:{
				type:String,
				default:'420px',
			}
		},
		data() {
			return {
				playImg,
				visble: false,
			}
		},
		methods: {
			play() {
				this.visble = true
				window.document.body.style.overflow = 'hidden'
			},
			closeVideo() {
				this.visble = false
				window.document.body.style.overflow = 'auto'
			}
		},
	}
</script>

<style lang="scss" scoped>
	.video-profile {
		// @include wh(560px, 420px);
		// border-radius: 20px;
		overflow: hidden;

		.cover {
			@include wh(100%, 420px);

			.leggings {
				@include wh(100%, 100%);

				img {
					@include wh(100%, 100%);
					object-fit: cover;
				}
				transition: all 200ms ease-in-out;
			}

			position: relative;
			cursor: pointer;

			img {
				position: relative;
				@include center;
				z-index: 99;
			}

			&:hover .leggings {
				filter: brightness(60%);
			}
		}

	}
</style>