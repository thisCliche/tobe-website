<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' />

		</view>
		<view class="model1">
			<view class="slogan fadeIn animated">探索专业/留学规划，系统优化出国准备工作</view>
			<view class="ftitle">选择大于努力是共识，选定一个合适的，能发挥自身价值的塞到，是提升人生成功概率的最优方法论</view>
			<view class="pictureCom">
				<view class="pictureComWrap animated  list0" v-for="(item,idx) in model1ComImg" :key="idx">

					<img :src="item" alt="" />

				</view>
			</view>
		</view>

		<view class="model2">
			<view class="slogan fadeIn animated">AI测评规划</view>
			<view class="top">
				<view class="textDiscipt">
					<view class="textTitle">
						AI测评
					</view>
					<view class="textBody">
						文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
					</view>

				</view>
				<view class="video">
					<VideoProfile :introduction='introduction2' />
				</view>

			</view>

			<view class="bottom">

				<view class="video">
					<VideoProfile :introduction='introduction2' />
				</view>
				<view class="textDiscipt">
					<view class="textTitle">
						AI测评
					</view>
					<view class="textBody">
						文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
					</view>

				</view>

			</view>


		</view>


		<view class="model4">
			<view class="model4Wrap">
				<view class="slogan fadeIn animated">更懂你的留学AI系统</view>
				<view class="ftitle">基于职业规划，性格测评，AI测评，人才测评，用心呵护个人用户的留学生涯，倾力协助DIY效能</view>
				<view class="model4Body">
					<view class="content content1">
						<view class="content1Btn">
							系统规划内容
						</view>
						<view class="list" v-for="item in 6" :key="item">
							<img :src="tagIcon.yiwen" alt="" class="list-img" />
							<text class="list-text">专业方向</text>

						</view>


					</view>
					<view class="content content2">
						<view class="list">
							<view class="list-item" v-for="item in 3" :key="item">
								<view class="list-top">
									<view class="light">
										亮点一

									</view>
									<view class="light-title">
										底层算法智能支撑

									</view>

								</view>
								<view class="list-bottom">
									基于职业规划，性格测评，AI测评，人才测评，用心呵护个人用户的留学生涯，倾力协助DIY效能

								</view>

							</view>

						</view>
						<view class="tiyan">
							立即体验，领取测评报告
						</view>
					</view>
					<view class="content content3">
						<view class="lunbo-img">
							<el-carousel trigger="click" :interval="5000" height="320px" indicator-position="none">
								<el-carousel-item v-for="item in banner" :key="item.id">

									<img :src="item.bannerUrl" alt="" class="bannerImg" />
								</el-carousel-item>
							</el-carousel>

						</view>

						<view class="content3-botoom">
							<view class="content3-btn">
								<img :src="tagIcon.icon2" alt="" class="btn3" />
								<text class="btn3-text">职业规划</text>

							</view>
							<view class="content3-btn">
								<img :src="tagIcon.icon2" alt="" class="btn3" />
								<text class="btn3-text">职业规划</text>

							</view>

						</view>



					</view>

				</view>

			</view>
		</view>
		<view class="model5">
			<view class="model5Wrap">
				<view class="model5WrapTop">
					<view class="top-left">
						<text class="leftTitle">规划课</text>
						<text
							class="leftDes">详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详
						</text>
						<text class="more">探索更多规划课</text>
						<view class="more-item">
							<text class="more-item-text" v-for="item in 3" :key="item">课程目录：</text>

						</view>

					</view>
					<view class="top-right">
						<view class="right-title">
							如何做规划

						</view>
						<view class="video-list">
							<view class="video-item">
								<view class="video-item-video">
									<VideoProfile :introduction='introduction2' />

								</view>
								<text class="video-item-des">招生官谈录取内幕与长线规划</text>


							</view>
							<view class="video-item">
								<view class="video-item-video">
									<VideoProfile :introduction='introduction2' />

								</view>
								<view class="video-item-des">招生官谈录取内幕与长线规划</view>


							</view>


						</view>


					</view>
				</view>

				<view class="model5WrapBottom">
					<view class="model5WrapBottom-title">
						如何开启规划：
					</view>
					<view class="warp-video-list">
						<view class="video-item" v-for="item in 4" :key="item">
							<view class="video-video">
								<VideoProfile :introduction='introduction2' />

							</view>
							<view class="video-name">
								Grade 8规划课
							</view>


						</view>


					</view>

				</view>

			</view>

		</view>
		<view class="model6">
			<view class="model6Wrap">
				<view class="left-img">
					<img src="" alt="" srcset="" />
				</view>
				<view class="right-content">
					<view class="content-name">
						AI 1V1规划导师

					</view>
					<view class="content-des">
						文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文133字
					</view>

				</view>

			</view>

			<view class="adsense">
				<img src="bottomBanner" alt="" />
			</view>
		</view>
		<view class="model8">
			<view class="slogan1">学生反馈</view>
			<use-case :usecase="usecase"></use-case>
			
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import {
		tagIcon,
	} from './export.js'
	import HomeCase from './HomeCase.vue';
	import UseCase from './UseCase.vue';
	import VideoProfile from './VideoProfile.vue';
	import {
		videoApi,
		bannerApi,
		configApi,
		userSide
	} from '@api/homeApi.js'
	export default {
		name: 'PagesIndex',
		components: {
			HomeCase,
			UseCase,
			VideoProfile
		},
		data() {
			return {
				usecase: [], // 1
				homecase: [], // 1
				model1ComImg: [],
				// model1Comtext: {},
				tagIcon,
				middleBanner: '', // 1
				bottomBanner: '', // 1
				aboutUs: {}, // 1
				banner: [],
				videoInfo: [],
				introduction: {
					videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
					discript: '规划课+AI智能规划+AI测评',
				},
				introduction2: {
					videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
				}
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
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
				}), configApi({}), userSide({
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
					usecase = [];
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
						res.data.map(item => {
							usecase.push({
								engineerUrl: item.image_text,
								desc: item.text,
								id: item.id,
								name: item.name
							})
						})
					}
				})
				usecase.push(usecase[0])
				this.usecase = usecase
				this.homecase = homecase;
				this.model1ComImg = [1, 2, 4];
				this.middleBanner = middleBanner;
				this.bottomBanner = bottomBanner;
				this.aboutUs = aboutUs;
				this.banner = banner;
				this.videoInfo = videoInfo;
			},

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/minix.scss";

	.IndexPage {
		width: 100%;

		.banner {
			@include fj(center);
			width: 100%;
			height: 570px;
			border-radius: 20px;
			background: rgb(196, 196, 196);

			.name {
				@include center;
				font-size: 60px;
				color: #fff;
				font-weight: 700;
			}

			.bannerImg {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.model8 {
			@include ct1200;
			@include modelPd;

			.slogan1 {
				@include fj(center);
				@include mb(20px);
				font-size: 34px;
				font-weight: 700;
			}

		}

		.model6 {
			@include ct1200;
			@include modelPd;

			.model6Wrap {
				@include ct1200;
				@include fj();

				.left-img {
					width: 520px;
					height: 480px;
					background-color: red;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}

				}

				.right-content {
					@include pl(200px);
					@include pr(100px);
					display: flex;
					flex-direction: column;
					width: 100%;

					.content-name {
						@include fj(center);
						align-items: center;
						color: rgb(0, 0, 0);
						font-family: 思源黑体;
						font-size: 52px;
						font-weight: 700;
						line-height: 72px;


					}

					.content-des {
						@include mt(80px);
						@include multi-ellipsis--l(7);
						font-size: 28px;

					}


				}
			}

			.adsense {
				margin: 40px 0;
				width: 100%;
				height: 260px;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		.model5 {
			@include ct1200;

			.model5Wrap {
				display: flex;
				flex-direction: column;

				.model5WrapTop {
					display: flex;

					.top-left {
						display: flex;
						flex-direction: column;
						max-width: 50%;

						.leftTitle {
							@include ml('20px');
							font-size: 40px;
							font-weight: 700;
						}

						.leftDes {
							@include multi-ellipsis--l(4);
							color: rgb(183, 183, 183);
						}

						.more {
							margin: 10px 0 15px;

							font-size: 24px;
							color: rgb(0, 0, 0);
							font-weight: 500;
						}

						.more-item {
							@include fj('flex-start');
							flex-direction: column;

							.more-item-text {

								color: rgb(0, 0, 0);
								font-weight: 500;
								margin: 3px 0;


							}

						}

					}

					.top-right {
						margin-left: 80px;
						@include fj(flex-start);
						flex-direction: column;

						.right-title {
							@include mt(20px);
							@include ml(20px);
							color: rgb(0, 0, 0);
							font-size: 24px;
							font-weight: 500;


						}

						.video-list {
							@include mt(20px);
							@include fj();


							.video-item {
								@include fj(center);
								flex-direction: column;

								.video-item-video {
									width: 300px;
									height: 180px;
									margin: 0 20px;
									border-radius: 0px 20px 20px 20px;
									background: rgb(196, 196, 196);

								}

								.video-item-des {
									@include ellipsis width: 100%;
									@include mt(10px);
									padding-left: 30px;
									;
									font-size: 16px;
									font-weight: 500;
									color: rgb(0, 0, 0);



								}


							}


						}



					}

				}

				.model5WrapBottom {
					@include mt(10px);

					.model5WrapBottom-title {
						@include mt(10px);
						@include mb(10px);
						color: rgb(0, 0, 0);
						font-size: 22px;
						font-weight: 500;

					}

					.warp-video-list {
						@include fj();

						.video-item {
							@include fj(center);
							@include mr(20px);
							flex-direction: column;

							.video-video {
								@include wh(260px, 160px);
								border-radius: 20px;
								background: rgb(196, 196, 196);
								align-items: center;

							}

							.video-name {
								@include mt(5px);
								font-weight: 500;
								color: rgb(8, 8, 8);
								font-size: 16px;

							}



						}

					}


				}


			}




		}

		.model4 {
			@include modelPd;
			@include ct1200;

			.model4Wrap {

				position: relative;

				.slogan {
					width: 100%;
					font-size: 32px;
					font-weight: 700;
					margin: 0 auto 10px;
					text-align: center;
					font-family: 思源黑体;

				}

				.ftitle {
					width: 100%;
					font-family: 思源黑体;
					text-align: center;
					font-size: 20px;
					color: rgb(183, 183, 183);
					margin: 0 auto 20px;
				}

				.model4Body {
					@include fj();
					@include mt(40px);
					padding: 0 20px;

					.content {

						&.content1 {

							width: 320px;
							height: 550px;
							border-radius: 20px;
							background: rgb(29, 121, 242);

							.content1Btn {
								@include fj(center);
								align-items: center;
								margin: 20px auto 40px;
								width: 180px;
								height: 40px;
								color: #000;
								font-size: 24px;
								border-radius: 300px;
								background: rgb(255, 255, 255);
							}

						}

						&.content2 {
							width: 320px;
							height: 550px;

							.list {
								@include fj();
								flex-direction: column;

								.list-item {
									@include fj();
									flex-direction: column;

									.list-top {
										@include fj();
										align-items: center;

										.light {
											@include fj(center);
											align-items: center;
											width: 80px;
											height: 30px;
											box-sizing: border-box;
											border: 1px solid rgb(29, 121, 242);
											border-radius: 20px;
											background: rgb(255, 255, 255);


										}

										.light-title {
											color: rgb(0, 0, 0);
											font-family: 思源黑体;
											font-size: 26px;
											font-weight: 500;
											line-height: 52px;
											letter-spacing: 0px;

										}



									}

									.list-bottom {
										@include multi-ellipsis--l(4);
										margin: 5px 0;
										color: rgb(183, 183, 183);


									}


								}

							}

							.tiyan {
								@include fj(center);
								margin: 0 auto;
								align-items: center;
								width: 80%;
								height: 48px;
								box-sizing: border-box;
								border: 2px solid rgb(29, 121, 242);
								border-radius: 50px;
								background: rgb(255, 255, 255);
								color: rgb(0, 0, 0);
								font-family: 思源黑体;
								font-size: 18px;
								font-weight: 500;
								letter-spacing: 0px;
								cursor: pointer;



							}


						}

						&.content3 {
							width: 320px;
							height: 550px;

							.lunbo-img {
								width: '100%';
								height: 320px;

								&::v-deep .el-carousel__arrow {
									width: 20px;
									height: 20px;
									background-color: rgba(31, 45, 61, 0.5);

									i {
										font-weight: 700;
										font-size: 40px;
									}
								}

							}

							.content3-botoom {
								margin: 20px 0;
								@include fj(center);

								.content3-btn {
									@include fj(center);
									align-items: center;
									width: 140px;
									height: 40px;
									margin: 0 10px;
									border-radius: 10px;

									box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
									background: rgb(241, 241, 241);

									.btn3 {
										width: 20px;
										height: 20px;
									}

									.btn3-text {
										color: rgb(0, 0, 0);
										font-family: 思源黑体;
										font-size: 18px;
										font-weight: 500;
										margin-left: 5px;
									}

								}


							}


						}

					}

					.list {
						@include fj(center);
						margin: 20px 0;

						.list-img {
							@include wh('30px', '30px');

						}

						.list-text {
							margin-left: 20px;
							color: #fff;
							font-size: 30px;
						}


					}



				}


				.btns {
					@include fj();
					width: 600px;
					margin: 0 auto;

					.btn {
						width: 280px;
						height: 80px;
						line-height: 80px;
						text-align: center;
						border-radius: 10px;
						font-size: 20px;
						cursor: pointer;
						transition: 0.3s all ease-in-out;

						&:hover {
							box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
							transform: translate3d(0, -3px, 0px);
						}
					}

					.deepColor {
						background-color: $themeFontColor;
						color: #fff;
					}

					.lightColor {
						border: 1px solid #333;
						color: #333;
					}
				}
			}
		}

		.model3 {
			@include ct1200;
			@include modelPd;

			.adsense {
				width: 100%;
				height: 460px;
				border-radius: 10px;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		.model2 {
			@include ct1200;
			padding: 40px 0;

			.slogan {
				width: 100%;
				font-size: 32px;
				font-weight: 700;
				margin: 0 auto 10px;
				text-align: center;
				font-family: 思源黑体;
			}

			.top {
				width: 100%;
				display: flex;

				.textDiscipt {
					display: flex;
					flex-direction: column;
					padding: 0 20px;
					margin-right: 20px;
					flex: 1;

					.textTitle {
						font-family: 思源黑体;
						font-size: 30px;
						font-weight: 700;
						line-height: -1px;
						letter-spacing: 0px;
						text-align: left;


					}

					.textBody {
						@include mt(20px);
						@include multi-ellipsis--l(4);
						font-family: 思源黑体;
						font-size: 30px;
					}
				}

				.video {
					width: 510px;
					height: 300px;
					border-radius: 20px;
					background: rgb(196, 196, 196);

				}

			}

			.bottom {
				width: 100%;
				display: flex;
				@include mt(20px);

				.textDiscipt {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					padding: 0 20px;
					margin-left: 20px;
					flex: 1;

					.textTitle {
						@include multi-ellipsis--l(4);
						@include mt(20px);
						font-family: 思源黑体;
						font-size: 30px;
						font-weight: 700;
						line-height: -1px;
						letter-spacing: 0px;
						text-align: left;


					}

					.textBody {
						@include multi-ellipsis--l(4);
						font-family: 思源黑体;
						font-size: 30px;
					}
				}

				.video {
					width: 510px;
					height: 300px;
					border-radius: 20px;
					background: rgb(196, 196, 196);

				}

			}



		}

		.model1 {
			@include ct1200;
			@include modelPd;

			.pictureCom {
				display: flex;
				justify-content: space-between;


				.pictureComWrap {
					width: 100%;
					height: 420px;
					margin-right: 20px;
					border-radius: 20px;
					background: rgb(196, 196, 196);

				}

			}

			.fadeInUp-20 {
				animation-name: fadeInUp-20;
			}

			.fadeIn {
				animation-name: fadeIn;
			}

			.animated {
				animation-duration: 2.4s;
				animation-fill-mode: both;
			}

			.slogan {
				width: 100%;
				font-size: 32px;
				font-weight: 700;
				margin: 0 auto 10px;
				text-align: center;
				font-family: 思源黑体;

			}

			.ftitle {
				width: 100%;
				font-family: 思源黑体;
				text-align: center;
				font-size: 20px;
				color: rgb(183, 183, 183);
				margin: 0 auto 20px;
			}
		}
	}

	@keyframes fadeInUp-20 {
		0% {
			opacity: 0;
			transform: translate3d(0, 20px, 0);
		}

		100% {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}

		100% {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>