<template>
	<view class="">
		<view @click="toDetail" v-if="info.hasOwnProperty('image_text')">
			<view class="video-card-wrap" v-if="isColumn">
				<view class="video-card-img">
					<img :src="info.image_text" alt="" />
					<view class="video-play-info">
						<view class="info-left"><i class="el-icon-video-play" /><text>{{info.times}}</text></view>
						<view class="info-right">{{info.sort}}</view>
					</view>
				</view>
				<view class="video-card-info">
					<view class="video-card-info-tit">
						{{info.name}}
					</view>
				</view>
			</view>
			<view class="video-card-wrap-row" v-else>
				<view class="video-card-img">
					<img :src="info.image_text" alt="" />
				</view>
				<view class="video-card-info">
					<view class="video-card-info-tit">
						{{info.name}}
					</view>
					<view class="video-play-info">
						<view class="info-left"><i class="el-icon-video-play" /><text>{{info.times}}</text></view>
						<view class="info-right">{{info.sort}}</view>
					</view>
				</view>
			</view>
		</view>
		<pay-dialog goods_type="3" ref="payDialogRef"></pay-dialog>
	</view>
</template>

<script>
	import PayDialog from './PayDialog.vue';
	import {
		userIsHadBuyApi
	} from '@api/commonApi.js'
	export default {
		name: 'growthCourseUnit',
		props: {
			isColumn: {
				type: Boolean,
				default: true,
			},
			info: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		components: {
			PayDialog
		},
		data() {
			return {

			}
		},
		methods: {
			changePath(){
				uni.navigateTo({
					url: `/pages/study/growthCourse/detail/detail?id=${this.info.id}`,
				})
			},
			async toDetail() {
				if (this.info.is_free == 0) {
					try {
						let res = await userIsHadBuyApi({
							order_type: 3
						});
						this.changePath();
					} catch (err) {
						this.$refs.payDialogRef.openDialog();
					}
				} else {
					this.changePath();
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.video-card-wrap-row {
		@include fj();
		@include wh(386px, 118px);
		
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