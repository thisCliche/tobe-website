<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' />

		</view>
		<view class="container1">
			<view class="containerWap">
				<view class="wap1">
					<VideoProfile :introduction='container1Wap1' />

				</view>
				<view class="wap2">
					文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字

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
			<view class="containerWapItme" v-for="(item,index) in 3 " :key="index">

				<img src="" alt="" srcset="" />


			</view>


		</view>

		<view class="model2">

			<view class="model2Item">
				<view class="top">
					<view class="textDiscipt">
						<view class="textTitle">
							科研的重要性，什么是科研
						</view>


					</view>
					<view class="video">
						<VideoProfile :introduction='cePinginfo.one.introduction' />
					</view>

				</view>

				<view class="bottom">

					<view class="video">
						<VideoProfile :introduction='cePinginfo.one.introduction' />
					</view>
					<view class="textDiscipt">
						<view class="textTitle">
							科研的重要性，什么是科研
						</view>


					</view>

				</view>

				<view class="top">
					<view class="textDiscipt">
						<view class="textTitle">
							科研的重要性，什么是科研
						</view>


					</view>
					<view class="video">
						<VideoProfile :introduction='cePinginfo.one.introduction' />
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
		KeepAlive
	} from "vue";
	import {
		tagIcon,
	} from '../export.js'

	import UseCase from '../UseCase.vue';
	import VideoProfile from '../VideoProfile.vue';
	import HomeCase from '../HomeCase.vue';
	import {
		videoApi,
		bannerApi,
		configApi,
		userSide,
		textConfig,
		suanFa1,
		teatcha1
	} from '@api/study.js'
	export default {
		name: 'PagesIndex',
		components: {
			UseCase,
			VideoProfile,
			HomeCase,
		},
		data() {
			return {
				cePinginfo: {}, // 1
				howVideoInfo: [],
				kaiqiVideo: [],
				guiHuavideo: {},
				PlanningConfigInfo: {},
				tPlanningClassConfigInfo: {},
				liuChenegBanner: '',
				daoshiBanImg: '',
				tagIcon,
				suanfaList: [],
				model1ComImg: [],
				banner13: [],
				banner: [{
					id: 1,
					bannerUrl: 'https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg'
				}, {
					id: 2,
					bannerUrl: 'https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg'
				}, {
					id: 3,
					bannerUrl: 'https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg'
				}, {
					id: 4,
					bannerUrl: 'https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg'
				}, {
					id: 5,
					bannerUrl: 'https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg'
				}, {
					id: 6,
					bannerUrl: 'https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg'
				}],
				container1Wap1: {
					imageUrl: '1111111',
					videoUrl: '222222222',
					discript: '33333333'
				}



			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				let resDataList = await Promise.all([videoApi({
						type: 4,
						limit: 1
					}),
					videoApi({
						type: 5,
						limit: 2
					}),

					videoApi({
						type: 6,
						limit: 2
					}),
					videoApi({
						type: 7,
						limit: 4
					}),
					videoApi({
						type: 8,
						limit: 1
					}),
					configApi({}), textConfig({}),
					userSide({
						type: 1,
						limit: 5
					}),
					bannerApi({
						type: 15,
						limit: 1
					}),
					bannerApi({
						type: 14,
						limit: 1
					}),
					suanFa1({

					}),
					bannerApi({
						type: 13,
					}),
					teatcha1({
						type: 6,
						limit: 3

					})

				]);
				let topVideo = [],
					cePinginfo = [],
					howVideoInfo = [],
					kaiqiVideo = [],
					guiHuavideo = [],
					PlanningConfigInfo = {},
					tPlanningClassConfigInfo = {},
					suanFaList = [],
					teatcha = [],
					banner13 = [],
					model1ComImg = [],

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
							cePinginfo.push({
								imageUrl: item.image_text,
								id: item.id,
								videoUrl: item.video_text,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 2) {
						res.data.map(item => {
							howVideoInfo.push({
								id: item.id,
								name: item.name,
								introduction: {
									imageUrl: item.image_text,
									videoUrl: item.video_text
								}


							})
						})



					} else if (idx == 3) {
						res.data.map(item => {
							kaiqiVideo.push({
								id: item.id,
								name: item.name,
								introduction: {
									imageUrl: item.image_text,
									videoUrl: item.video_text
								}


							})

						})

					} else if (idx == 4) {
						res.data.map(item => {
							guiHuavideo.push({
								id: item.id,
								name: item.name,
								text: item.text,
								introduction: {
									imageUrl: item.image_text,
									videoUrl: item.video_text
								}
							})
						})
					} else if (idx == 5) {
						PlanningConfigInfo = res.data
					} else if (idx == 6) {
						tPlanningClassConfigInfo = res.data
					} else if (idx == 7) {
						res.data.map(item => {
							usecase.push({
								engineerUrl: item.image_text,
								desc: item.text,
								id: item.id,
								name: item.name
							})
						})
					} else if (idx == 8) {
						let data = res.data

						this.liuChenegBanner = data[0].image_text
					} else if (idx == 9) {
						let data = res.data

						this.daoshiBanImg = data[0].image_text
					} else if (idx == 10) {
						res.data.map(item => {
							suanFaList.push({
								code: item.code,
								title: item.title,
								name: item.name
							})

						})

					} else if (idx == 11) {

						res.data.map(item => {
							banner13.push({
								imageUrl: item.image_text,
								desc: item.text,
								id: item.id,
								name: item.name
							})

						})

					} else if (idx == 12) {

						res.data.map(item => {
							teatcha.push({

								text: item.text,
								name: item.name,
								subname: item.subname
							})
						})

					}

				})

				this.introduction = topVideo[0]

				this.cePinginfo = {
					one: {
						textcontent: {
							title: cePinginfo[0].name,
							text: cePinginfo[0].text,
						},
						introduction: {
							imageUrl: cePinginfo[0].imageUrl,
							videoUrl: cePinginfo[0].imageUrl,
							id: cePinginfo[0].id

						}

					}
				}


				this.howVideoInfo = howVideoInfo;
				this.kaiqiVideo = kaiqiVideo;
				this.guiHuavideo = guiHuavideo[0];
				this.PlanningConfigInfo = PlanningConfigInfo;
				this.tPlanningClassConfigInfo = tPlanningClassConfigInfo;
				this.usecase = usecase;
				// this.homecase = homecase;
				this.suanFaList = suanFaList;
				this.model1ComImg = teatcha;
				this.banner13 = banner13;



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