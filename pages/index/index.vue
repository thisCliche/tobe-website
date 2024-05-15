<template>
	<view class="IndexPage">
		<view class="banner">
			<el-carousel trigger="click" :interval="5000" height="680px" indicator-position="none">
				<el-carousel-item v-for="item in banner" :key="item.id">
					<img :src="item.bannerUrl" alt="" class="bannerImg" />
				</el-carousel-item>
			</el-carousel>
		</view>
		<view class="model1">
			<view class="modelContent">
				<view class="row1 wow animate__animated animate__fadeInUp">基于人工智能的留学网站</view>
				<view class="row2 wow animate__animated animate__fadeInUp">TOBE可以安全扩展，支持学生的DIY操作</view>
				<div class="block_1 flex-row">
					<div class="text-group_2 flex-col justify-between">
						<div class="text-wrapper_4 wow animate__animated animate__fadeIn">
							<span class="text_20">100</span> <span class="text_21">%</span>
						</div>
						<span class="text_22">录取成功</span>
					</div>
					<img class="image_3" referrerpolicy="no-referrer" :src="SketchPng" />
					<div class="box_3 flex-col justify-between">
						<div class="text-wrapper_5 flex-row justify-between wow animate__animated animate__fadeIn">
							<span class="text_23">5</span> <span class="text_24">万+</span>
						</div>
						<span class="text_25">学生使用</span>
					</div>
					<img class="image_4" referrerpolicy="no-referrer" :src="SketchPng" />
					<div class="box_4 flex-col justify-between">
						<div class="text-wrapper_6 flex-row justify-between wow animate__animated animate__fadeIn">
							<span class="text_26">AI</span> <span class="text_27">算法</span>
						</div>
						<span class="text_28">独家技术突破</span>
					</div>
					<img class="image_5" referrerpolicy="no-referrer" :src="SketchPng" />
					<div class="text-group_3 flex-col justify-between wow animate__animated animate__fadeIn">
						<span class="text_29">2000</span>
						<span class="text_30">合作学校</span>
					</div>
					<img class="image_6" referrerpolicy="no-referrer" :src="SketchPng" />
					<div class="box_5 flex-col justify-between">
						<div class="text-wrapper_7 flex-row wow animate__animated animate__fadeIn">
							<span class="text_31">10</span> <span class="text_32">万+</span>
						</div>
						<span class="text_33">文书大数据</span>
					</div>
				</div>
				<view class="btns">
					<custom-button :wh="{width:358,height:80,size:22}">注册成为TOBE的合作伙伴</custom-button>
					<custom-button :wh="{width:358,height:80,size:22}" isPlain>欢迎加入TOBE大家庭</custom-button>
				</view>
				<view class="adsense">
					<img :src="middleBanner" alt="" />
				</view>
			</view>
		</view>
		<view class="model2">
			<view class="model2Wrap">
				<view class="row1 wow animate__animated animate__fadeInUp">我们为你而生</view>
				<view class="row2 wow animate__animated animate__fadeInUp">TOBE可以安全扩展，支持学生的DIY操作</view>
				<view class="iconWrap">
					<view class="iconItem" v-for="item of iconList" :key="item.id">
						<view class="iconImg"><img :src="item.iconImg" alt="" /></view>
						<view class="title">{{item.title}}</view>
						<view class="desc">{{item.des}}</view>
					</view>
				</view>
				<view class="partner">
					<view class="partnerItem" v-for="item of homecase" :key="item.contentId">
						<img :src="item.engineerUrl" alt="" />
					</view>
				</view>
			</view>
		</view>

		<view class="model7">
			<view class="model7Wrap">
				<view class="row1 wow animate__animated animate__fadeInUp">更好的了解</view>
				<view class="row2 wow animate__animated animate__fadeInUp">基于职业规划、性格测评、AI测评、人才测评用心呵护个人用户的留学生涯，倾力协助DIY效能</view>
				<view class="videoWrap">
					<view class="videoItem" v-for="(item,idx) in videoInfo" :key="idx">
						<video-profile :introduction="item"></video-profile>
						<view class="infoProfile">
							<view class="title">理念视频</view>
							<view class="desc">测评后的信息可以同步给AI规划老师，学生有任何针对于报告或者专业不懂的问题都可以跟老师沟通得到实时的解答</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="model8">
			<view class="model8Wrap">
				<view class="row1 wow animate__animated animate__fadeInUp">听听用户怎么说</view>
				<view class="row2 wow animate__animated animate__fadeInUp">选择大于努力是共识，选定一个合适的能发挥自身价值的赛道是提升人生成功概率的最有方法论</view>
				<template v-if="usecase.length">
					<view class="usercase">
						<el-carousel trigger="click" :autoplay="false" height="780px" indicator-position="none">
							<el-carousel-item v-for="(item,idx) of usecase" :key="idx">
								<view class="usercaseWrap">
									<view class="usercaseItem" v-for="child in item" :key="item.id">
										<view class="topInfo">
											<view class="topInfoL">
												<view class="topInfoLFirst">
													<view class="name">{{child.name}}</view>
													<view class="deraction">印度</view>
												</view>
												<view class="topInfoLSecond">
													IBM数据科学专业证书获得者
												</view>
											</view>
											<view class="avatar">
												<img :src="child.engineerUrl" alt="" />
											</view>
										</view>
										<view class="desc ">{{child.desc}}</view>
									</view>
								</view>
							</el-carousel-item>
						</el-carousel>
					</view>
				</template>
			</view>
		</view>
		<view class="model9">
			<view class="model9Wrap">
				<view class="row1 wow animate__animated animate__fadeInUp">TOBE正成为最具创造力和责任心的留学公司</view>
				<view class="hr"></view>
				<view class="row2 wow animate__animated animate__fadeInUp">
					致力于以创意方式助学生实现梦想。我们聚集最优秀的年轻人，恪守严格的道德准则，以几近苛刻的要求和最卓越的专业水平为客户提供一流的留学咨询和能力培养服务。</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import CountTo from 'vue-count-to'

	import {
		tagIcon,
		SketchPng,
		iconList
	} from './export.js'
	import HomeCase from '@components/HomeCase.vue';
	import UseCase from './UseCase.vue';
	import VideoProfile from '@components/VideoProfile.vue';
	import {
		videoApi,
		bannerApi,
		configApi,
		userSide,
		textConfig
	} from '@api/homeApi.js'
	export default {
		name: 'PagesIndex',
		components: {
			HomeCase,
			UseCase,
			VideoProfile,
			CountTo
		},
		data() {
			return {
				textconfigObj: [],
				usecase: [], // 
				homecase: [], // 
				model1ComImg: [],
				tagIcon,
				iconList,
				SketchPng,
				middleBanner: '', // 
				bottomBanner: '', // 
				aboutUs: {}, // 
				banner: [],
				videoInfo: [],
			}
		},
		mounted() {
			new this.$wow.WOW().init();
		},
		created() {
			this.getData();
		},
		destroyed() {},
		methods: {

			toDetail(path) {
				uni.navigateTo({
					url: path
				})
			},
			async getData() {
				let resDataList = await Promise.all([videoApi({
					type: 1,
					limit: 2
				}), bannerApi({
					type: 1,
					limit: 3
				}), bannerApi({
					type: 2,
					limit: 6
				}), bannerApi({
					type: 3,
					limit: 1
				}), bannerApi({
					type: 4,
					limit: 5
				}), bannerApi({
					type: 5,
					limit: 1
				}), configApi({}), textConfig({}), userSide({
					type: 1,
					limit: 5
				})]);
				let videoInfo = [],
					banner = [],
					model1ComImg = [],
					middleBanner = '',
					homecase = [],
					bottomBanner = '',
					aboutUs = {},
					usecase = [],
					textconfigObj = [];
				resDataList.map((res, idx) => {
					if (idx == 0) {
						res.data.map(item => {
							videoInfo.push({
								imageUrl: item.image_text,
								videoUrl: item.video_text,
								id: item.id
							})
						})
					} else if (idx == 1) {
						res.data.map(item => {
							banner.push({
								bannerUrl: item.image_text,
								id: item.id,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 2) {
						let siger = res.data.slice(0, 1);
						let other = res.data.slice(1);
						other.map((item, index) => {
							if (index == 2) {
								model1ComImg.push({
									img1: siger[0].image_text,
									img2: item.image_text
								})
							} else {
								model1ComImg.push(item.image_text)
							}
						})
					} else if (idx == 3) {
						res.data.map(item => {
							middleBanner = item.image_text
						})
					} else if (idx == 4) {
						res.data.map(item => {
							homecase.push({
								engineerUrl: item.image_text,
								contentId: item.id
							})
						})
					} else if (idx == 5) {
						res.data.map(item => {
							bottomBanner = item.image_text
						})
					} else if (idx == 6) {
						aboutUs = res.data
					} else if (idx == 7) {
						res.data.forEach(item => {
							item.num = Number(item.num);
						})
						this.textconfigObj = res.data;
					} else if (idx == 8) {
						usecase = res.data.reduce((accumulator, currentValue, currentIndex) => {
							const chunkIndex = Math.floor(currentIndex / 6);
							if (!accumulator[chunkIndex]) {
								accumulator[chunkIndex] = [];
							}
							accumulator[chunkIndex].push({
								engineerUrl: currentValue.image_text,
								desc: currentValue.text,
								id: currentValue.id,
								name: currentValue.name
							});
							return accumulator;
						}, []);
						console.log(usecase)
					}
				})
				this.usecase = usecase;
				this.homecase = homecase;
				this.model1ComImg = model1ComImg;
				this.middleBanner = middleBanner;
				this.bottomBanner = bottomBanner;
				this.aboutUs = aboutUs;
				this.banner = banner;
				this.videoInfo = videoInfo;
			},
			testFun() {
				uni.navigateTo({
					url: "/pages/error/error"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.IndexPage {
		width: 100%;

		.banner {
			&::v-deep .el-carousel__arrow {
				width: 50px;
				height: 50px;
				background-color: rgba(31, 45, 61, 0.5);

				i {
					font-weight: 700;
					font-size: 40px;
				}
			}

			.name {
				@include center;
				font-size: 60px;
				color: #fff;
				font-weight: 700;
			}

			.bannerImg {
				width: 100%;
				height: 100%;
				@include imgLayout;
			}
		}

		.model8 {
			@include bis-self("../../assets/image/science/modelBg.jpg");
			@include modelPd;

			.model8Wrap {
				@include ct1200;
				text-align: center;

				.usercase {
					@include mt(80px);

					.usercaseWrap {
						@include fj();
						flex-wrap: wrap;
					}

					.usercaseItem {
						@include wh(380px, 350px);
						padding: 22px 24px;
						box-sizing: border-box;
						background: #f6f8ff;
						border-radius: 20px;
						margin: 20px 0;
						transition: all 0.4s ease;

						&:hover {
							@include defaultShadow;
						}

						.desc {
							font-size: 16px;
							color: #666666;
							line-height: 32px;
							text-align: left;
							margin-top: 30px;
							@include multi-ellipsis--l(5);
						}

						.topInfo {
							@include fj();
							align-items: center;

							.avatar {
								@include wh(100px, 100px);
								border-radius: 50%;
								overflow: hidden;

								img {
									@include imgLayout;
								}
							}

							.topInfoL {
								.topInfoLSecond {
									@include sc(16px, #222326);
									@include mt(12px);
								}

								.topInfoLFirst {
									@include fj(flex-start);
									align-items: flex-end;

									.name {
										@include sc(23px, #222326);
										@include mr(10px);
									}

									.deraction {
										@include sc(16px, #999);
									}
								}
							}
						}
					}
				}

				.row1 {
					font-weight: 600;
					font-size: 38px;
					color: #333333;
					line-height: 53px;
					@include mb(12px);
				}

				.row2 {
					font-weight: 400;
					font-size: 22px;
					color: #999999;
				}
			}
		}

		.model7 {
			background: #F4F6FE;
			@include modelPd;

			.model7Wrap {
				@include ct1200;
				text-align: center;

				.videoWrap {
					@include mt(70px);
					@include fj();

					.videoItem {
						border-radius: 20px;
						background: #fff;
						width: 560px;
					}

					.infoProfile {
						padding: 28px 30px;

						.title {
							@include sc(22px, #333);
							font-weight: 700;
						}

						.desc {
							@include mt(10px);
							@include sc(16px, #666);
						}
					}
				}

				.row1 {
					font-weight: 600;
					font-size: 38px;
					color: #333333;
					line-height: 53px;
					@include mb(12px);
				}

				.row2 {
					font-weight: 400;
					font-size: 22px;
					color: #999999;
				}
			}
		}

		.model9 {
			@include bis-self("../../assets/image/science/modelBg3.jpg");
			@include modelPd;

			.model9Wrap {
				@include ct1200;
				text-align: center;

				.row1 {
					font-weight: 600;
					font-size: 38px;
					color: #000;
					line-height: 53px;
					@include mb(12px);
				}

				.hr {
					@include wh(46px, 8px);
					background: #000;
					border-radius: 20px;
					margin: 0 auto;
				}

				.row2 {
					font-weight: 400;
					font-size: 22px;
					color: #999999;
					line-height: 50px;
					width: 700px;
					margin: 0 auto;
				}
			}
		}

		.model2 {
			@include bis-self("../../assets/image/science/modelBg.jpg");
			@include modelPd;

			.model2Wrap {
				@include ct1200;
				text-align: center;

				.partner {
					@include mt(80px);
					@include fj(center);
					flex-wrap: wrap;

					.partnerItem {

						@include wh(150px, 60px);
						margin: 26px 40px;
						border-radius: 10px;
						overflow: hidden;

						img {
							@include imgLayout;
						}
					}

				}

				.iconWrap {
					@include fj(center);
					@include mt(80px);
					flex-wrap: wrap;
					padding: 40px 22px;
					background: #fff;
					border-radius: 20px;
					overflow: hidden;

					.iconItem {
						padding: 10px 10px;
						margin: 10px 8px;
						border-radius: 10px;
						transition: all 0.3s ease;

						&:hover {
							transform: translateY(-4px);
							@include defaultShadow;
						}

						.title {
							@include mt(20px);
							font-weight: 700;
						}

						.desc {
							@include sc(14px, #999999);
							@include mt(10px);
						}
					}
				}

				.row1 {
					font-weight: 600;
					font-size: 38px;
					color: #333333;
					line-height: 53px;
					@include mb(12px);
				}

				.row2 {
					font-weight: 400;
					font-size: 22px;
					color: #999999;
				}
			}
		}

		.model1 {
			@include bis("../../assets/image/science/modelBg3.jpg");
			@include modelPd;
			height: 770px;

			.modelContent {
				@include ct1200;
				text-align: center;

				.row1 {
					font-weight: 600;
					font-size: 38px;
					color: #333333;
					line-height: 53px;
					@include mb(12px);
				}

				.row2 {
					font-weight: 400;
					font-size: 22px;
					color: #999999;
				}

				.btns {
					@include fj(space-around);
				}

				.adsense {
					width: 100%;
					height: 300px;
					overflow: hidden;
					@include mt(50px);
					border-radius: 20px;
					overflow: hidden;

					img {
						@include imgLayout;
					}
				}
			}
		}
	}

	// 自动生成的代码
	.flex-row {
		display: flex;
	}

	.block_1 {
		margin: 80px 0 70px;
		// width: 1275px;
		height: 92px;
		// margin: 79px 0 0 314px;
	}

	.text-group_2 {
		width: auto;
		height: 92px;
	}

	.text-wrapper_4 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: auto;
		height: 65px;
		overflow-wrap: break-word;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 0;
		letter-spacing: 5.454545497894287px;
		font-family: D-DINExp-Bold;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 65px;
	}

	.text_20 {
		width: 140px;
		height: 65px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 60px;
		font-family: D-DINExp-Bold;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 65px;
	}

	.text_21 {
		width: 140px;
		height: 65px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 30px;
		font-family: D-DINExp-Bold;
		font-weight: normal;
		text-align: left;
		line-height: 65px;
	}

	.text_22 {
		width: 64px;
		height: 22px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 22px;
		margin-top: 5px;
	}

	.image_3 {
		width: 1px;
		height: 57px;
		margin: 24px 0 0 50px;
	}

	.box_3 {
		width: 80px;
		height: 92px;
		margin-left: 103px;
	}

	.text-wrapper_5 {
		width: 80px;
		height: 65px;
	}

	.text_23 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: 40px;
		height: 65px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 60px;
		letter-spacing: 5.454545497894287px;
		font-family: D-DINExp-Bold;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 65px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.text_24 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: 40px;
		height: 30px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 22px;
		letter-spacing: 2px;
		font-family: AlibabaPuHuiTiH;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 30px;
		margin-top: 24px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.text_25 {
		width: 64px;
		height: 22px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 22px;
		margin-top: 5px;
	}

	.image_4 {
		width: 1px;
		height: 57px;
		margin: 24px 0 0 78px;
	}

	.box_4 {
		width: 116px;
		height: 92px;
		margin-left: 85px;
	}

	.text-wrapper_6 {
		width: 116px;
		height: 65px;
	}

	.text_26 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: 68px;
		height: 65px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 60px;
		letter-spacing: 5.454545497894287px;
		font-family: D-DINExp-Bold;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 65px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.text_27 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: 48px;
		height: 30px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 22px;
		letter-spacing: 2px;
		font-family: AlibabaPuHuiTiH;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 30px;
		margin-top: 24px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.text_28 {
		width: 96px;
		height: 22px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 22px;
		margin-top: 5px;
	}

	.image_5 {
		width: 1px;
		height: 57px;
		margin: 24px 0 0 50px;
	}

	.text-group_3 {
		width: 156px;
		height: 92px;
		margin-left: 65px;
	}

	.text_29 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: 156px;
		height: 65px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 60px;
		letter-spacing: 5.454545497894287px;
		font-family: D-DINExp-Bold;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 65px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.text_30 {
		width: 64px;
		height: 22px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 22px;
		margin-top: 5px;
	}

	.image_6 {
		width: 1px;
		height: 57px;
		margin: 24px 0 0 50px;
	}

	.box_5 {
		width: auto;
		height: 92px;
		margin-left: 90px;
	}

	.text-wrapper_7 {
		width: 106px;
		height: 65px;
	}

	.text_31 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: auto;
		height: 65px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 60px;
		letter-spacing: 5.454545497894287px;
		font-family: D-DINExp-Bold;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 65px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.text_32 {
		background-image: linear-gradient(90deg,
				rgba(80, 83, 227, 1) 0,
				rgba(127, 53, 136, 1) 100%);
		width: 39px;
		height: 30px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 22px;
		letter-spacing: 2px;
		font-family: AlibabaPuHuiTiH;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 30px;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 24px 0 0 -1px;
	}

	.text_33 {
		width: 80px;
		height: 22px;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: normal;
		text-align: center;
		white-space: nowrap;
		line-height: 22px;
		margin: 5px 0 0 7px;
	}
</style>