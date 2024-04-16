<template>
	<view class="video-play" v-if="visble">
		<view class="icon" @click="closeVideo">
			<i class="el-icon-circle-close"></i>
		</view>
		<video class="video-player" autoplay :src="url" controls ></video>
	</view>
</template>

<script>
	export default {
		name: 'VideoPlay',
		props: ['url', 'visble'],
		data() {
			return {

			}
		},
		methods: {
			closeVideo() {
				this.$emit('closeVideo')
			}
		},
	}
</script>

<style lang="scss" scoped>

	html {
		overflow: hidden;
	}

	.video-play {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		overflow: hidden;
		z-index: 9999;

		.video-player {
			width: 800px;
			height: 450px;
			@include center;
		}

		.icon {
			position: absolute;
			right: 50%;
			top: 50%;
			margin-right: -426px;
			margin-top: -250px;
			cursor: pointer;

			i {
				font-size: 30px;
				color: $bc;
			}
		}
	}
</style>