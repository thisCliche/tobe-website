<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' withValue="100%" heightValue="700px" borderRidius="0px" />

		</view>

		<view class="model2">

			<view class="model2Item">
				<view class="bottom">

					<view class="video">
						<img src="@image/resource/科研配图.png" alt="" srcset="" />
					</view>
					<view class="textDiscipt">
						<view class="textTitle">
							<view class="name_en">
								SCIENTIFIC
							</view>
							<view class="name_cn">
								科研
							</view>
						</view>

						<view class="textBody">
							帮你找到匹配包括
							美国、英国、香港等顶尖教授、实验室

						</view>
						<view class="text-button">
							立刻了解

						</view>

					</view>

				</view>


				<view class="top">

					<view class="textDiscipt">
						<view class="textTitle">
							<view class="name_cn">
								实习
							</view>
							<view class="name_en">
								PRACTICE
							</view>

						</view>

						<view class="textBody">
							最强软实力资源平台，囊括全网最全科研界面
							帮助你在社科、商科、工科、理科、艺术等
							所有领域达到科研实习目标

						</view>
						<view class="text-button">
							立刻了解
						</view>

					</view>

					<view class="video">
						<img src="@image/resource/科研配图.png" alt="" srcset="" />
					</view>


				</view>


				<view class="bottom">

					<view class="video">
						<img src="@image/resource/科研配图.png" alt="" srcset="" />
					</view>
					<view class="textDiscipt">
						<view class="textTitle">
							<view class="name_en">
								FIELDWORK
							</view>
							<view class="name_cn">
								夏校
							</view>
						</view>

						<view class="textBody">
							帮你找到匹配包括
							美国、英国、香港等顶尖教授、实验室

						</view>
						<view class="text-button">
							立刻了解

						</view>

					</view>

				</view>


			</view>



		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import {
		tagIcon,
	} from '../export.js'

	import VideoProfile from '@/assets/components/VideoProfile.vue';
	import HomeCase from '../HomeCase.vue';
	import {
		videoApi,
		bannerApi,
		configApi,
		userSide,
		textConfig,
	} from '@api/resource.js'
	export default {
		name: 'PagesIndex',
		components: {
			VideoProfile,
			HomeCase,
		},
		data() {
			return {
				introduction: {},
				container1Info: {
					introduction: {},
					content: ""
				}, // 1
				container3Banner: [],
				model2Info: {
					item1: {
						name: '',
						introduction: {}
					},
					item2: {
						name: '',
						introduction: {}
					},
					item3: {
						name: '',
						introduction: {}
					},
				},

				tagIcon,
				qrcode: '',
				banner3dList: []



			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				let resDataList = await Promise.all([videoApi({
						type: 21,
						limit: 1
					}),
					videoApi({
						type: 16,
						limit: 1
					}),

					videoApi({
						type: 17,
						limit: 1
					}),
					videoApi({
						type: 18,
						limit: 4
					}),
					videoApi({
						type: 19,
						limit: 1
					}),
					bannerApi({
						type: 26,
						limit: 1
					}), bannerApi({
						type: 32,
						limit: 1
					}), bannerApi({
						type: 31,
						limit: 1
					}),
					bannerApi({
						type: 37,
						limit: 1
					}),
					bannerApi({
						type: 49,
						limit: 5
					}),


				]);
				let topVideo = [],
					container1Info = [],
					model2Item1 = [],
					model2Item2 = [],
					model2Item3 = [],
					container3BannerItem1 = [],
					container3BannerItem2 = [],
					container3BannerItem3 = [];

				resDataList.map((res, idx) => {
					console.log(res, idx)
					if (idx == 0) {
						res.data.map(item => {
							topVideo.push({
								imageUrl: item.image_text,
								videoUrl: item.video_text,
								id: item.id
							})
						})
					} else if (idx == 1) {
						res.data.map(item => {
							container1Info.push({
								imageUrl: item.image_text,
								id: item.id,
								videoUrl: item.video_text,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 2) {
						res.data.map(item => {
							model2Item1.push({
								id: item.id,
								name: item.name,
								imageUrl: item.image_text,
								videoUrl: item.video_text


							})
						})



					} else if (idx == 3) {
						res.data.map(item => {
							model2Item2.push({
								id: item.id,
								name: item.name,
								text: item.text,
								imageUrl: item.image_text,
								videoUrl: item.video_text


							})

						})

					} else if (idx == 4) {
						res.data.map(item => {
							model2Item3.push({
								id: item.id,
								name: item.name,
								text: item.text,
								imageUrl: item.image_text,
								videoUrl: item.video_text
							})
						})
					} else if (idx == 5) {
						res.data.map(item => {
							container3BannerItem1.push({
								id: item.id,
								name: item.name,
								imageUrl: item.image_text,

							})
						})
						this.container3Banner.push(container3BannerItem1[0])

					} else if (idx == 6) {
						res.data.map(item => {
							container3BannerItem2.push({
								id: item.id,
								name: item.name,
								imageUrl: item.image_text,

							})
						})
						this.container3Banner.push(container3BannerItem2[0])
					} else if (idx == 7) {
						res.data.map(item => {
							container3BannerItem3.push({
								id: item.id,
								name: item.name,
								imageUrl: item.image_text,

							})
						})
						this.container3Banner.push(container3BannerItem3[0])
					} else if (idx == 8) {
						let data = []
						res.data.map(item => {
							data.push({
								imageUrl: item.image_text,

							})
						})
						this.qrcode = data[0].imageUrl


					} else if (idx == 9) {
						let data = []
						res.data.map(item => {
							data.push({
								imageUrl: item.image_text,
								name: item.name,
								url: item.url

							})
						})

						this.$nextTick(() => {
							this.banner3dList = data
							console.log(this.banner3dList)


						})





					}


				})

				this.introduction = topVideo[0]


				this.container1Info = {
					introduction: {
						imageUrl: container1Info[0].imageUrl,
						videoUrl: container1Info[0].videoUrl

					},
					content: container1Info[0].text

				};


				this.model2Info = {
					item1: {
						name: model2Item1[0].name,
						introduction: {
							imageUrl: model2Item1[0].imageUrl,
							videoUrl: model2Item1[0].videoUrl

						}
					},

					item2: {
						name: model2Item2[0].name,
						text: model2Item2[0].text,
						introduction: {
							imageUrl: model2Item2[0].imageUrl,
							videoUrl: model2Item2[0].videoUrl

						}
					},
					item3: {
						name: model2Item3[0].name,
						introduction: {
							imageUrl: model2Item2[0].imageUrl,
							videoUrl: model2Item2[0].videoUrl

						}
					},



				};





			},

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/styles/minix.scss";

	.IndexPage {
		width: 100%;

		.banner {
			@include fj(center);
			width: 100%;
			height: 700px;
			background: rgb(196, 196, 196);
		}

		.container1 {
			@include ct1200;
			@include modelPd;

			.containerWap {
				@include fj();
				@include wh(100%, 460px);

				.wap1 {
					width: 550px;
					height: 100%;
					border-radius: 20px;
					background: rgb(196, 196, 196);

				}

				.wap2 {
					display: flex;
					font-size: 40px;
					padding: 36px 0;
					width: 550px;
					height: 100%;
					font-weight: 700;
					overflow-wrap: break-word;
					text-align: center;
				}


			}


		}


		.container2 {
			@include ct1200;
			@include modelPd;

			.containerWap {
				@include fj();
				@include wh(100%, 460px);

				.wap1 {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 580px;
					height: 100%;
					border-radius: 20px;
					background: #F5F5F5;
					position: relative;

					.title {
						@include fj(center);
						align-items: center;
						width: 60%;
						height: 60px;
						font-size: 16px;
						color: #fff;
						font-weight: 500;
						text-align: center;
						background: linear-gradient(#A32045, #6B0f2C);
						position: absolute;
						top: -5%;


					}

					.wapYuan {
						margin-top: 64px;
						width: 100%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						flex-wrap: wrap;

						.yuan-item {
							width: 180px;
							height: 180px;
							border-radius: 50%;
							background-color: #8D2441;
							color: #fff;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;

							.num {
								color: #fff;
								font-size: 20px;

								&.mt {
									margin-top: 10px;
								}
							}

						}

					}


				}

				.wap2 {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 580px;
					height: 100%;
					border-radius: 20px;
					background: #F5F5F5;
					position: relative;

					.miantitle {
						@include fj(center);
						align-items: center;
						width: 60%;
						height: 60px;
						font-size: 16px;
						color: #fff;
						font-weight: 500;
						text-align: center;
						background: linear-gradient(#A32045, #6B0f2C);
						position: absolute;
						top: -5%;


					}

					.wapList {
						margin-top: 64px;
						width: 100%;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						justify-content: center;

						.lsit-item {
							width: 150px;
							height: 120px;

							color: #fff;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							border: 1px solid #BD4358;
							margin: 10px;
							border-radius: 20px;

							&:nth-child(even) {
								background-color: #fff6f7;
							}

							.title {
								color: #BD4358;
								font-size: 20px;

							}

							.subtitle {
								color: #BD4358;
								font-size: 26px;
								margin-top: 20px;


							}


						}

					}

					.wapfoot {
						@include fj();
						@include wh(100%, 100%);
						align-items: center;

						.foot-item {
							background-color: #8D2441;
							width: 260px;
							height: 80px;
							box-sizing: border-box;
							padding-top: 10px;
							padding-left: 20px;

							.title {
								font-size: 20px;
								color: #fff;
								font-weight: 500;

							}

							.subtitle {
								font-size: 24px;
								color: #fff;
								font-weight: 500;

							}




						}


					}


				}


			}


		}


		.container4 {
			@include ct1200;

			.container4Wap {
				@include modelPd;
				@include fj(center);
				align-items: center;

				.wap1 {

					color: rgb(0, 0, 0);
					font-family: Gothic A1;
					font-size: 45px;
					font-weight: 700;
					line-height: 60px;
					letter-spacing: 0px;



				}

				.wap2 {
					@include fj(center);
					align-items: center;
					flex-direction: column;
					margin-left: 60px;

					.wap2img {
						width: 200px;
						height: 200px;
						background: rgb(196, 196, 196);

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.waptext {}

				}



			}

		}


		.model2 {
			.model2Item {
				@include wh(100%, 100%);

				.top {
					width: 100%;
					display: flex;
					height: vw(602);
					background-image: url(@/assets/image/resource/reBg1.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
					justify-content: space-between;
					padding: vw(100) vw(270);
					box-sizing: border-box;


					.textDiscipt {
						display: flex;
						flex-direction: column;
						padding: 0 20px;
						margin-left: 20px;
						flex: 1;

						.textTitle {
							margin-top: vw(64);
							display: inline-flex;

							align-items: center;

							.name_en {
								font-size: vw(60);
								color: rgba(63, 71, 192, 0.05)
							}

							.name_cn {
								font-size: vw(52);
								margin-right: 0.5vw;
								color: #000000
							}

						}

						.textBody {
							display: flex;

							width: vw(294);
							font-size: vh(24);
							text-align: left;
							margin-top: 10px;
							line-height: vw(30);
						}

						.text-button {
							margin-top: vw(30);
							width: vw(236);
							height: vw(60);
							background: linear-gradient(90deg, #5A5DE6 0%, #B443C2 100%);
							border-radius: 30px;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #fff;
							font-size: vw(22);
							cursor: pointer;

						}
					}

					.video {
						width: vw(744);
						height: vw(420);

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}

					}

				}

				.bottom {
					width: 100%;
					display: flex;
					height: vw(602);
					background-image: url(@/assets/image/resource/reBg1.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
					justify-content: space-between;
					padding: vw(100) vw(270);
					box-sizing: border-box;


					.textDiscipt {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						padding: 0 20px;
						margin-left: 20px;
						flex: 1;

						.textTitle {
							margin-top: vw(64);
							display: inline-flex;

							align-items: center;

							.name_en {
								font-size: vw(60);
								color: rgba(63, 71, 192, 0.05)
							}

							.name_cn {
								font-size: vw(52);
								margin-left: 0.5vw;
								color: #000000
							}

						}

						.textBody {
							display: flex;

							width: vw(294);
							font-size: vh(24);
							text-align: right;
							margin-top: 10px;
							line-height: vw(30);
						}

						.text-button {
							margin-top: vw(30);
							width: vw(236);
							height: vw(60);
							background: linear-gradient(90deg, #5A5DE6 0%, #B443C2 100%);
							border-radius: 30px;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #fff;
							font-size: vw(22);
							cursor: pointer;

						}
					}

					.video {
						width: vw(744);
						height: vw(420);

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}

					}

				}


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