<template>
	<view class="growthCourseDetail">
		<view class="detailWrap">
			<view class="detailTitle">
				<view class="title">{{info.name}}</view>
				<view class="info">
					<i class="el-icon-video-play" /><text class="views">{{info.times}}</text><text>{{info.updatetime}}</text>
				</view>
			</view>
			<view class="videoWrap">
				<view class="VideoPlay">
					<video class="video-player" show-mute-btn autoplay :src="info.video_text" :poster="info.image_text" controls></video>
				</view>
				<view class="videoRecomm">
					<view class="title">推荐播放</view>
					<template v-for="(item,idx) in prev">
						<growth-course-unit :isColumn="false" :info="item"></growth-course-unit>
					</template>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import GrowthCourseUnit from '@components/GrowthCourseUnit.vue'
	import {CourseDetailApi} from '@api/growthCourseApi.js'
	import {myFormatTime} from '@utils/tools.js'
	export default {
		name: 'growthCourseDetail',
		components: {
			GrowthCourseUnit,
		},
		data() {
			return {
				info:{},
				prev:[],
			}
		},
		methods: {
			async getData(id) {
				let res = await CourseDetailApi({id});
				// 需要鉴权 但是目前没有
				res.data.now.updatetime = myFormatTime(res.data.now.updatetime)
				this.info = res.data.now;
				this.prev = res.data.prev;
			},
		},
		created() {
			let id = this.$route.query.id;
			this.getData(id);
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
					margin: 0 10px 0 6px;
				}
			}
		}
	}
</style>