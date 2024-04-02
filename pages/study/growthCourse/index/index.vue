<template>
	<view class="growthCourseIndex">
		<view class="mainWrap">
			<view class="top">
				<view class="topL">
					<view class="title">规划标题</view>
					<view class="des">
						文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
					</view>
				</view>
				<view class="topR">
					<video-profile :introduction="introduction"></video-profile>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import VideoProfile from '@components/VideoProfile.vue';
	export default {
		name: 'growthCourseIndex',
		components: {
			VideoProfile,
		},
		data() {
			return {
				introduction: {
					imageUrl: 'http://website.tobeapp.cn/uploads/20240326/e0ba53bc86f80943022d206b2cdb26eb.jpg',
					videoUrl: 'http://website.tobeapp.cn/uploads/20240326/14244fcd01825d54f112d872bcf69fb1.mp4'
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.mainWrap {
		@include ct1200;
		.top{
			@include modelPd;
			@include fj(space-between);
			.topL{
				width: 600px;
				.title{
					@include sc(40px,$themeFontColor);
					font-weight: 700;
				}
				.des{
					line-height: 30px;
					@include mt(20px);
					@include multi-ellipsis--l(8);
					@include sc(24px,$themeColor);
				}
			}
		}
	}
</style>