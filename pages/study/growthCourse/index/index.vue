<template>
	<view class="growthCourseIndex">
		<view class="mainWrap">
			<view class="top">
				<view class="topL">
					<view class="title">{{topIntroduction.name}}</view>
					<view class="des">
						{{topIntroduction.text}}
					</view>
				</view>
				<view class="topR" v-if="topIntroduction.hasOwnProperty('introduction')">
					<video-profile :introduction="topIntroduction.introduction"></video-profile>
				</view>
			</view>
			<view class="videoRecommed commTitle">
				<view class="title">探索更多成长课</view>
				<view class="hr"></view>
				<view class="filter">
					<view class="filterRow">
						<label for="">地区:</label>
						<el-radio-group v-model="radio2" size="medium">
							<el-radio-button :label="item" v-for="(item,idx) in filterList.class" :key="idx"></el-radio-button>
						</el-radio-group>
					</view>
					<view class="filterRow">
						<label for="">年级:</label>
						<el-radio-group v-model="radio1" size="medium">
							<el-radio-button :label="item" v-for="(item,idx) in filterList.country" :key="idx"></el-radio-button>
						</el-radio-group>
					</view>
				</view>
				<view class="videoList">
					<el-row :gutter="26">
						<template v-for="(item,idx) in viewList">
							<el-col :key="idx" :span="6"><growth-course-unit :info="item"></growth-course-unit></el-col>
						</template>
					</el-row>
				</view>
			</view>
			<view class="commTitle">
				<view class="title">通过我们的规划录取的部分offer</view>
				<view class="hr"></view>
				<home-case :homecase="homecase"></home-case>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import GrowthCourseUnit from '@components/GrowthCourseUnit.vue'
	import VideoProfile from '@components/VideoProfile.vue';
	import HomeCase from '@components/HomeCase.vue';
	import {
		videoApi
	} from '@api/study.js'
	import {
		bannerApi
	} from '@api/homeApi.js'
	import {
		courseConfigApi,
		getCourseApi
	} from '@api/growthCourseApi.js'
	export default {
		name: 'growthCourseIndex',
		components: {
			VideoProfile,
			GrowthCourseUnit,
			HomeCase,
		},
		data() {
			return {
				topIntroduction: {},
				viewList: [],
				homecase: [],
				filterList: {
					country: [],
					class: []
				},
				radio1: '美国',
				radio2: '7年级',
			}
		},
		methods: {
			async getData() {
				let topIntroduction = {},
					filterList = {},
					viewList = [],
					homecase = [];
				let result = await Promise.all([videoApi({
					type: 10,
					limit: 1
				}), courseConfigApi(), getCourseApi({
					// class: '7年级',
					// country: '美国'
				}), bannerApi({
					type: '4',
					limit: 5
				})]);
				result.map((res, idx) => {
					switch (idx) {
						case 0:
							let info = res.data[0];
							topIntroduction = {
								name: info.name,
								text: info.text,
								introduction: {
									imageUrl: info.image_text,
									videoUrl: info.video_text,
								}
							}
							break;
						case 1:
							let classVal = Object.values(res.data.class)
							let country = Object.values(res.data.country)
							filterList = {
								class: classVal,
								country
							}
							break;
						case 2:
							viewList = res.data.data;
							break;
						case 3:
							res.data.map(item => {
								homecase.push({
									engineerUrl: item.image_text,
									contentId: item.id
								})
							})
							break;
						default:
							break;
					}
				})
				this.topIntroduction = topIntroduction;
				this.filterList = filterList;
				this.viewList = viewList;
				this.homecase = homecase;
			},
		},
		created() {
			this.getData()
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