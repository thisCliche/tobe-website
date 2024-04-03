<template>
	<view class="growthCourseDetail">
		<view class="detailWrap">
			<view class="detailTitle">
				<view class="title">国际教育带你全方位了解IB课程</view>
				<view class="info">
					<i class="el-icon-video-play" /><text class="views">1.5万</text><text>2023-05-01</text>
				</view>
			</view>
			<view class="videoWrap">
				<view class="VideoPlay">
					<video class="video-player" show-mute-btn autoplay :src="url" controls></video>
				</view>
				<view class="videoRecomm">
					<view class="title">接下来播放</view>
					<template v-for="(item,idx) in 4">
						<growth-course-unit :isColumn="false"></growth-course-unit>
					</template>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import GrowthCourseUnit from '@components/GrowthCourseUnit.vue'
	export default {
		name: 'growthCourseDetail',
		components: {
			GrowthCourseUnit,
		},
		data() {
			return {
				url: 'http://website.tobeapp.cn/uploads/20240326/14244fcd01825d54f112d872bcf69fb1.mp4',
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.detailWrap {
		@include ct1200;
		@include modelPd;

		.videoWrap {
			@include modelPdOther;
			@include fj();

			.VideoPlay {
				.video-player {
					@include wh(774px, 516px);
				}
			}

			.videoRecomm {
				width: 386px;

				.title {
					font-size: 24px;
					font-weight: 700;
					@include mb(10px);
				}
			}
		}

		.detailTitle {
			.title {
				font-size: 28px;
				font-weight: 700;
			}

			.info {
				@include sc(15px, $themeColor);
				@include mt(10px);

				.views {
					@include mr(10px);
				}
			}
		}
	}
</style>