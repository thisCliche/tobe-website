<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' withValue="100%" heightValue="700px" />

		</view>
		<view class="container1">
			<view class="containerWap">
				<view class="wap1">
					<VideoProfile :introduction='container1Info.introduction' withValue="550px" heightValue="460px" />

				</view>
				<view class="wap2">
					{{container1Info.content}}

				</view>

			</view>

		</view>
		<view class="container2">
			<view class="containerWap">
				<view class="wap1">
					<view class="title">
						海外名校看中的5大要素
					</view>
					<view class="wapYuan">
						<view class="yuan-item " v-for="item in 5" :key="item">
							<div class="num">35%</div>
							<view class='mt num'>
								领导能力

							</view>

						</view>

					</view>

				</view>

				<view class="wap2">
					<view class="miantitle">
						申请者应该提升的软实力
					</view>
					<view class="wapList">
						<view class="lsit-item" v-for="(item,index) in 6" :key="index">
							<view class="title">
								leaderShip

							</view>
							<view class="subtitle">
								领导能力
							</view>

						</view>

					</view>
					<view class="wapfoot">

						<view class="foot-item" v-for="(item,index) in 2" :key="index">
							<view class="title">
								Community Contribution

							</view>
							<view class="subtitle">
								社区贡献

							</view>



						</view>


					</view>

				</view>
				<!-- <view class="wap2">
					<view class="title">
						申请者应该提升的软实力
					</view>
					<view class="wapList">
						<view class="list-item">

						</view>

					</view>

				</view> -->
			</view>
		</view>

		<view class="container3">
			<view class="containerWapItme" v-for="(item,index) in container3Banner " :key="index">

				<img :src="item.imageUrl" alt="" srcset="" />


			</view>


		</view>

		<view class="model2">

			<view class="model2Item">
				<view class="top">
					<view class="textDiscipt">
						<view class="textTitle">
							{{model2Info.item1.name}}
						</view>


					</view>
					<view class="video">
						<VideoProfile :introduction='model2Info.item1.introduction' withValue="510px"
							heightValue="300px" />
					</view>

				</view>

				<view class="bottom">

					<view class="video">
						<VideoProfile :introduction='model2Info.item2.introduction' withValue="510px"
							heightValue="300px" />
					</view>
					<view class="textDiscipt">
						<view class="textTitle">
							{{model2Info.item2.name}}
						</view>

						<view class="textBody">
							{{model2Info.item2.text}}

						</view>

					</view>

				</view>

				<view class="top">
					<view class="textDiscipt">
						<view class="textTitle">
							{{model2Info.item3.name}}
						</view>


					</view>
					<view class="video">
						<VideoProfile :introduction='model2Info.item3.introduction' withValue="510px"
							heightValue="300px" />
					</view>

				</view>



			</view>


			<view class="model2Scroll">

				<HomeCase />

			</view>
			<view class="container4">
				<view class="container4Wap">
					<view class="wap1">
						了解更多，添加微信
					</view>
					<view class="wap2">
						<view class="wap2img">
							<img src="" alt="" srcset="" />

						</view>
						<view class="waptext">
							入学申请咨询

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


				]);
				let topVideo = [],
					container1Info = [],
					model2Item1 = [],
					model2Item2 = [],
					model2Item3 = [],
					container3BannerItem1 = [],
					container3BannerItem2 = [],
					container3BannerItem3 = [],

					usecase = [];
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
				console.log(this.container1Info, 'container1Info')

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

		.container3 {
			@include ct1200;
			@include modelPd;
			@include fj();

			.containerWapItme {

				width: 32%;
				height: 480px;
				margin: 0 20px;
				border-radius: 20px;
				background: rgb(196, 196, 196);

				img {

					width: 100%;
					height: 100%;
					object-fit: cover
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
			@include ct1200;
			padding: 40px 0;

			.model2Item {
				@include wh(100%, 100%);

				.top {
					width: 100%;
					display: flex;

					.textDiscipt {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
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

			.model2Scroll {

				.banner12 {}



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