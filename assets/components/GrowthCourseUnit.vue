<template>
	<view @click="toDetail">
		<view class="video-card-wrap" v-if="isColumn">
			<view class="video-card-img">
				<img :src="imgUrl" alt="" />
				<view class="video-play-info">
					<view class="info-left"><i class="el-icon-video-play" /><text>2.5万</text></view>
					<view class="info-right">12:30</view>
				</view>
			</view>
			<view class="video-card-info">
				<view class="video-card-info-tit">
					酷态科30W电能块值不值得买？一期视频告诉你！
				</view>
			</view>
		</view>
		<view class="video-card-wrap-row" v-else>
			<view class="video-card-img">
				<img :src="imgUrl" alt="" />
			</view>
			<view class="video-card-info">
				<view class="video-card-info-tit">
					酷态科30W电能块值不值得买？一期视频告诉你！
				</view>
				<view class="video-play-info">
					<view class="info-left"><i class="el-icon-video-play" /><text>2.5万</text></view>
					<view class="info-right">12:30</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import imgUrl from '@image/testVideoCover.png'
	export default {
		name: 'growthCourseUnit',
		props: {
			isColumn: {
				type: Boolean,
				default: true,
			}

		},
		data() {
			return {
				imgUrl,
			}
		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url: '/pages/study/growthCourse/detail/detail'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.video-card-wrap-row {
		@include fj();
		@include wh(386px,118px);
	
		.video-card-info {
			@include mt(10px);
			width: 186px;
			.video-play-info {
				height: 38px;
				line-height: 38px;
				@include sc(13px, $gray);
				@include fj(flex-start);

				.info-left {
					@include mr(10px);
					i {
						@include mr(6px);
					}
				}
			}

			.video-card-info-tit {
				line-height: 22px;
				font-size: 15px;
				@include multi-ellipsis--l2;
				transition: 0.3s all ease;
				cursor: pointer;

				&:hover {
					color: $linkColor;
				}
			}
		}

		.video-card-img {
			@include wh(180px, 98px);
			border-radius: 6px;
			overflow: hidden;
			cursor: pointer;

			img {
				transition: 0.3s all ease;
				@include imgLayout;

				&:hover {
					filter: brightness(0.7);
				}
			}

		}
	}


	.video-card-wrap {
		@include wh(266px, 220px);

		.video-card-info {
			@include mt(10px);

			.video-card-info-tit {
				line-height: 22px;
				font-size: 15px;
				@include multi-ellipsis--l2;
				transition: 0.3s all ease;
				cursor: pointer;

				&:hover {
					color: $linkColor;
				}
			}
		}

		.video-card-img {
			@include wh(266px, 146px);
			border-radius: 6px;
			overflow: hidden;
			position: relative;
			cursor: pointer;

			img {
				transition: 0.3s all ease;
				@include imgLayout;

				&:hover {
					filter: brightness(0.7);
				}
			}

			.video-play-info {
				position: absolute;
				left: 0;
				right: 0;
				height: 38px;
				bottom: 0;
				padding: 0 8px;
				line-height: 38px;
				@include sc(13px, #fff);
				@include fj(space-between);
				background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);

				.info-left {
					i {
						@include mr(6px);
					}
				}
			}
		}
	}
</style>