<template>
	<view class="interHightSchool">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="model1Wrap">
			<view class="model1">
				<view class="item">
					<view class="imgWrap">
						<img :src="resourceImg.hightSchooltmp" alt="" />
					</view>
					<view class="middleText">
						<view class="">
							国际高中体系分析与介绍
						</view>
						<view class="">
							IB/AP/AL/ossd/dse
						</view>
					</view>
				</view>
				<view class="item">
					<view class="imgWrap">
						<img :src="resourceImg.hightSchooltmp2" alt="" />
					</view>
					<view class="middleText">
						<view class="">
							国内国际高中排行榜
						</view>
						<view class="">
							（国外不同高中排行榜）
						</view>
					</view>
				</view>
				<view class="item">
					<view class="imgWrap">
						<img :src="resourceImg.hightSchooltmp3" alt="" />
					</view>
					<view class="middleText">
						<view class="">
							国内国际高中分析介绍
						</view>
						<view class="">
							（如何选校）
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="model2Wrap">
			<view class="model2">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						国际高中最新资讯
					</view>
					<view class="titleEn">
						留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
					</view>
				</view>
				<view class="content">
					<view class="row">
						<view class="rowL">
							<view class="title">
								<view class="">
									AI测评
								</view>
								<view class="">
									<img :src="resourceImg.EVALUATION" alt="" />
								</view>
							</view>
							<view class="text">清晰的目标，了解留学</view>
							<view class="desc">
								关于就业策略，是随大流，还是寻找与自身匹配的职业锚?通过COAS专业测评系统，寻找和定位符合自身特质、兴趣爱好、未来潜能的就业方向，并规划好未来的职业生涯路径，这种谋而后动的策略是职涯探索期的必要之举。
							</view>
							<view class="descEn">As for the employment strategy, is it to follow the crowd,to find and locate
								interests and future potential, and to plan the future career path, this strategy is a necessary move in
								the career exploration period.</view>
						</view>
						<view class="rowR">
							<view class="videoWrap" v-if="introduction.hasOwnProperty('videoUrl')">
								<video-profile :introduction="introduction"></video-profile>
							</view>
						</view>
					</view>
					<view class="row rowRever">
						<view class="rowR">
							<view class="videoWrap" v-if="introduction.hasOwnProperty('videoUrl')">
								<video-profile :introduction="introduction"></video-profile>
							</view>
						</view>
						<view class="hold"></view>
						<view class="rowL">
							<view class="title">
								<view class="">
									<img :src="resourceImg.EVALUATION" alt="" />
								</view>
								<view class="">
									规划
								</view>
							</view>
							<view class="text">清晰的目标，了解留学</view>
							<view class="desc">
								关于就业策略，是随大流，还是寻找与自身匹配的职业锚?通过COAS专业测评系统，寻找和定位符合自身特质、兴趣爱好、未来潜能的就业方向，并规划好未来的职业生涯路径，这种谋而后动的策略是职涯探索期的必要之举。
							</view>
							<view class="descEn">As for the employment strategy, is it to follow the crowd,to find and locate
								interests and future potential, and to plan the future career path, this strategy is a necessary move in
								the career exploration period.</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="model3Wrap">
			<view class="model3">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						国际学校
					</view>
					<view class="titleEn">
						结合顶尖企业资源优势，开展深度定制化实习项目，为青年学子提供实践平台，培养专业技能
					</view>
				</view>
				<view class="filterWrap">
					<el-select style="width:360px;" v-model="value1" placeholder="体系">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select style="width:360px;" v-model="value2" placeholder="学费">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select style="width:360px;" v-model="value3" placeholder="公立/私立">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</view>
				<view class="content">
					<view class="list_item" v-for="item in 10" :key="item" @click="toDetail">
						<view class="item-logo">
							<view class="logo-img">
								<img :src="logoScr" alt="" srcset="" />
							</view>
						</view>
						<view class="item-content">
							<view class="content-header">
								<view class="header-left">
									<view class="left-title">
										剑桥大学 ｜ 人文历史学
									</view>
									<view class="title-en">
										Crowh&developemen
									</view>
								</view>
								<view class="header-right">查看详情
								</view>
							</view>
							<view class="midee">
								<view class="tag">
									美国
								</view>
							</view>
							<view class="des">
								简介：囊括全网最全科研界面，帮助你在社科、商科、工科、理科、艺术等所有领域达到科研实习目标囊括全网最全科研界面，帮助你在社科、商科、工科、理科、艺术等所有领域达到科研实习目标
							</view>

						</view>
					</view>
				</view>
				<view class="pageWrap">
					<el-pagination class="nPagination" background @size-change="handleSizeChange"
						@current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 30, 50, 100]"
						:page-size="100" layout=" prev, pager, next,sizes, jumper" :total="300">
					</el-pagination>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import resourceImg from './interHightSchool.js';
	import VideoProfile from '@components/VideoProfile.vue';
	import CommonBanner from '@components/CommonBanner.vue';
	import logoScr from '@image/resource/logo.png';
	import {
		videoApi
	} from '@api/commonApi.js';
	export default {
		name: "interHightSchool",
		data() {
			return {
				currentPage:1,
				value1: '',
				value2: '',
				value3: '',
				logoScr,
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				resourceImg,
				bannerProfile: {},
				introduction: {},
			}
		},
		components: {
			CommonBanner,
			VideoProfile
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:'/pages/science/scienceDetail'
				})
			},
			handleSizeChange() {},
			handleCurrentChange() {},
			async getData() {
				let apiRequestArr = [videoApi({
					type: 4,
					limit: 1
				})];
				let result = await Promise.all(apiRequestArr);
				result.map((item, idx) => {
					switch (idx) {
						case 0:
							//临时获取
							this.introduction = {
								videoUrl: item.data[0].video_text,
								imageUrl: item.data[0].image_text,
							}
							this.bannerProfile = item.data[0];
							this.bannerProfile.maskInfo = {
								maskImg: resourceImg.hightSchoolMask,
								description: "最全最新一手国际本科资讯"
							}
							break;
						default:
							break;
					}
				})
			},
		},
		created() {
			this.getData();
		}
	}
</script>

<style scoped lang="scss">
	.interHightSchool {
		.modelTitle {
			text-align: center;
			@include mb(80px);

			.title {
				color: #333;
				font-size: 30px;
				font-weight: 700;
				@include mb(12px);
			}

			.titleEn {
				color: $partnerTitle;
				font-size: 20px;
			}
		}

		.pageWrap {
			@include mt(20px);
			text-align: center;
		}

		.model2Wrap {
			background: #e5f1fd url('../../assets/image/science/maxBg.jpg') 100% 100% no-repeat;

			.model2 {
				@include modelPd;
				@include ct1200;

				.content {

					.row {
						@include fj();
						margin: 100px 0 0;
						position: relative;

						.rowR {
							background: #fff;
							padding: 20px;
							border-radius: 20px;
							position: absolute;
							right: -160px;
						}

						.rowL {
							padding: 100px 0;
						}

						.title {
							font-weight: 700;
							font-size: 28px;
							display: flex;
							align-items: flex-end;
						}

						.text {
							font-size: 22px;
							margin: 10px 0 30px;
						}

						.desc {
							width: 540px;
							@include sc(16px, #666);
							line-height: 26px;
						}

						.descEn {
							width: 540px;
							font-size: 16px;
							@include mt(30px);
						}
					}

					.rowRever {
						.rowL {
							display: flex;
							flex-direction: column;
							align-items: flex-end;
						}

						.rowR {
							left: -160px;
							right: auto;
						}

						.text,
						.desc,
						.descEn {
							text-align: right;
						}
					}
				}
			}
		}

		.model3Wrap {
			background: #F4F6FE;

			.model3 {
				@include modelPd;
				@include ct1200;

				.filterWrap {
					@include fj();
				}

				.content {
					@include fj();
					flex-wrap: wrap;
					// @include wh(100%, 1440px);
					@include mt(30px);
					// background: #fff;
					// border-radius: 20px;

					.list_item {
						width: 580px;
						margin-bottom: 40px;
						height: 198px;
						box-sizing: border-box;
						background-color: #fff;
						display: flex;
						padding: 18px 40px 18px 0;

						.item-logo {
							width: 150px;
							height: 100%;
							display: flex;
							flex-direction: column;
							align-items: center;

							.logo-img {
								width: 72px;
								height: 72px;

								img {
									width: 100%;
									height: 100%;
									object-fit: cover;
								}
							}
						}

						.item-content {
							flex: 1;
							display: flex;
							flex-direction: column;

							.content-header {
								display: flex;
								justify-content: space-between;

								.header-left {
									display: flex;
									flex-direction: column;
									justify-content: space-between;

									.left-title {
										color: #333333;
										font-size: 16px;
										line-height: 22px;
									}

									.title-en {
										margin-top: 5px;
										color: #999999;
										line-height: 16px;

									}
								}

								.header-right {
									width: 146px;
									height: 40px;
									background: linear-gradient(90deg, #5A5DE6 0%, #B443C2 100%);
									border-radius: 20px;
									font-size: 16px;
									display: flex;
									justify-content: center;
									align-items: center;
									color: #fff;
									cursor: pointer;
								}

							}

							.midee {
								width: 100%;
								height: 18px;
								margin: 10px 0;

								.tag {
									height: 100%;
									width: 40px;
									border-radius: 2px;
									border: 1px solid;
									border-image: linear-gradient(90deg, rgba(82, 82, 224, 1), rgba(125, 55, 141, 1)) 1 1;
									text-align: center;
									font-size: 13px;
									color: #3f3fa1;
								}
							}

							.des {
								flex: 1;
								display: -webkit-box;
								overflow: hidden;
								text-overflow: ellipsis;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
								color: #666666;
								font-size: 16px;
								line-height: 26px;
							}


						}


					}
				}
			}

		}

		.model1Wrap {
			background: #F4F6FE;

			.model1 {
				@include modelPd;
				@include ct1200;
				@include fj();

				.item {
					position: relative;

					.middleText {
						position: absolute;
						@include wh(200px, 60px);
						color: #fff;
						top: 110px;
						left: 66px;
						padding-top: 6px;
						box-sizing: border-box;
						text-align: center;
						line-height: 26px;
						background-color: rgba(255, 255, 255, 0.2);
						backdrop-filter: blur(3px);
						border-radius: 4px;
					}

					.imgWrap {
						@include wh(340px, 280px);

						img {
							@include imgLayout;
						}
					}
				}
			}
		}
	}
</style>