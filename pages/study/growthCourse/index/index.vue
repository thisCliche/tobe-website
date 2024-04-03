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
			<view class="videoRecommed commTitle">
				<view class="title">探索更多成长课</view>
				<view class="hr"></view>
				<view class="filter">
					<view class="filterRow">
						<label for="">地区:</label>
						<el-radio-group v-model="radio1" size="medium">
							<el-radio-button label="美国"></el-radio-button>
							<el-radio-button label="英国"></el-radio-button>
							<el-radio-button label="港新"></el-radio-button>
							<el-radio-button label="其他"></el-radio-button>
						</el-radio-group>
					</view>
					<view class="filterRow">
						<label for="">年级:</label>
						<el-radio-group v-model="radio1" size="medium">
							<el-radio-button label="7年级"></el-radio-button>
							<el-radio-button label="8年级"></el-radio-button>
							<el-radio-button label="9年级"></el-radio-button>
							<el-radio-button label="10年级"></el-radio-button>
						</el-radio-group>
					</view>
				</view>
				<view class="videoList">
					<el-row :gutter="26">
						<template v-for="(item,idx) in 8">
							<el-col :key="idx" :span="6"><growth-course-unit></growth-course-unit></el-col>
						</template>
					</el-row>
				</view>
			</view>
			<view class="commTitle">
				<view class="title">通过我们的规划录取的部分offer</view>
				<view class="hr"></view>
				<home-case :homecase="homecase"></home-case>
			</view>
			<view class="videoRecommed commTitle">
				<view class="title">最受欢迎的课</view>
				<view class="hr"></view>
				<view class="filter">
					<view class="filterRow">
						<label for="">地区:</label>
						<el-radio-group v-model="radio1" size="medium">
							<el-radio-button label="美国"></el-radio-button>
							<el-radio-button label="英国"></el-radio-button>
							<el-radio-button label="港新"></el-radio-button>
							<el-radio-button label="其他"></el-radio-button>
						</el-radio-group>
					</view>
				</view>
				<view class="videoList">
					<el-row :gutter="26">
						<template v-for="(item,idx) in 8">
							<el-col :key="idx" :span="6"><growth-course-unit></growth-course-unit></el-col>
						</template>
					</el-row>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import GrowthCourseUnit from '@components/GrowthCourseUnit.vue'
	import VideoProfile from '@components/VideoProfile.vue';
	import HomeCase from '@components/HomeCase.vue';
	export default {
		name: 'growthCourseIndex',
		components: {
			VideoProfile,
			GrowthCourseUnit,
			HomeCase,
		},
		data() {
			return {
				homecase:[{engineerUrl:'http://website.tobeapp.cn/uploads/20240326/e0ba53bc86f80943022d206b2cdb26eb.jpg',contentId:1},
				{engineerUrl:'http://website.tobeapp.cn/uploads/20240326/e0ba53bc86f80943022d206b2cdb26eb.jpg',contentId:2},
				{engineerUrl:'http://website.tobeapp.cn/uploads/20240326/e0ba53bc86f80943022d206b2cdb26eb.jpg',contentId:3},
				{engineerUrl:'http://website.tobeapp.cn/uploads/20240326/e0ba53bc86f80943022d206b2cdb26eb.jpg',contentId:4},
				],
				radio1: '美国',
				radio2: '7年级',
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

		.commTitle {
			@include modelPdOther;
			.title {
				@include sc(24px, #000);
				font-weight: 700;
			}

			.hr {
				margin: 20px 0;
				border-bottom: 1px solid $tagBg;
			}
		}

		.videoRecommed {
			.videoList {
				@include mt(20px);
			}
			.filter {
				.filterRow {
					margin: 10px 0;

					label {
						@include mr(10px);
					}
				}
			}
		}

		.top {
			@include modelPd;
			@include fj(space-between);

			.topL {
				width: 600px;

				.title {
					@include sc(40px, $themeFontColor);
					font-weight: 700;
				}

				.des {
					line-height: 30px;
					@include mt(20px);
					@include multi-ellipsis--l(8);
					@include sc(24px, $themeColor);
				}
			}
		}
	}
</style>