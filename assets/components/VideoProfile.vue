<template>
	<view class="video-profile" :style="{width:withValue,height:heightValue,borderRadius:borderRidius}">
		<!-- 因为客户要求，添加音量按钮，又因uniapp对web原生组件video重写导致无法正常使用，现特做以下更改，注意，此组件在调用前请确保已获得数据 -->
		<view>
			<view class="video-js" ref="videoRef"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'VideoProfile',
		props: {
			introduction: null,
			withValue: {
				type: String,
				default: '560px',
			},
			borderRidius: {
				type: String,
				default: '20px',
			},
			heightValue: {
				type: String,
				default: '420px',
			}
		},
		data() {
			return {
			}
		},
		mounted() {
			this.createVideo()
		},
		methods: {
			createVideo() {
				var video = document.createElement('video');
				var source = document.createElement('source');
				source.src = this.introduction.videoUrl;
				video.appendChild(source);
				video.id = 'video' + this.getRandom();
				video.style = `width: ${this.withValue}; height: ${this.heightValue};object-fit:cover;`;
				video.controls = true;
				video.poster = this.introduction.imageUrl;
				video.setAttribute('x5-video-player-type', 'h5')
				this.$refs.videoRef.$el.appendChild(video);
			},
			getRandom() {
				return parseInt(Math.random() * 1000);
			},
		},
	}
</script>

<style lang="scss" scoped>
	.video-profile {
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