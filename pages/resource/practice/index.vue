<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' withValue="100%" heightValue="700px" />

		</view>

		<view class="container3">
			<view class="container3Title">
				海外实地/线上实训
			</view>
			<view class="container3wap">
				<HomeCase></HomeCase>
			</view>
		</view>

		<view class="container2">
			<view class="container2Title">
				国内顶尖企业——定制实训
			</view>
			<view class="container2wap">
				<view class="wap2-item" v-for="(item,index) in 24 " :key="index">
					<img src="https://img2.baidu.com/it/u=671610231,3191155332&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500"
						alt="" srcset="" />

				</view>

			</view>

			<view class="container2wap2">
				<view class="wap21">
					<view class="zixun">
						报名咨询
					</view>
					<view class="more">
						扫描了解更多项目信息
					</view>

				</view>

				<view class="wap22">
					<img src="https://img1.baidu.com/it/u=2578175001,3807510909&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200"
						alt="" srcset="" />


				</view>



			</view>
		</view>

		<view class="container4">

			<view class="container4content">
				<view class="wapItem" v-for="(item, index) in 8" :key="index">
					<view class="item-img">
						<img src="" alt="" srcset="" />
					</view>

					<view class="title"> 人工智能 </view>
					<view class="item-wap">
						简介简介简介简介简介简介简介简介简介简介简介简介简介简介
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
				container3Banner: [],
				value1: "",
				options1: [{
						value: "1",
						label: "线上",
					},
					{
						value: "2",
						label: "线下",
					},
				],

				value2: "",
				options2: [{
						value: "1",
						label: "线上",
					},
					{
						value: "2",
						label: "线下",
					},
				],
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
						type: 23,
						limit: 1
					}),
					videoApi({
						type: 24,
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

					bannerApi({
						type: 15,
						limit: 1
					}),
					bannerApi({
						type: 14,
						limit: 1
					}),

					bannerApi({
						type: 13,
					}),


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

				console.log(cePinginfo, 'cePinginfo')


				this.cePinginfo = {
					one: {
						title: cePinginfo[0].name,
						text: cePinginfo[0].text,
						introduction: {
							imageUrl: cePinginfo[0].imageUrl,
							videoUrl: cePinginfo[0].imageUrl,
							id: cePinginfo[0].id

						}

					},
					two: {
						title: cePinginfo[1].name,
						text: cePinginfo[1].text,
						introduction: {
							imageUrl: cePinginfo[1].imageUrl,
							videoUrl: cePinginfo[1].imageUrl,
							id: cePinginfo[1].id

						}

					}
				}


				this.howVideoInfo = howVideoInfo;
				this.kaiqiVideo = kaiqiVideo;
				this.guiHuavideo = guiHuavideo[0];
				this.PlanningConfigInfo = PlanningConfigInfo;
				this.tPlanningClassConfigInfo = tPlanningClassConfigInfo;





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

		.container2 {
			@include ct1200;
			padding: 40px 0;

			.container2Title {
				color: black;
				font-size: 32px;
				font-weight: 700;
				line-height: 48px;
			}

			.container2wap {
				display: flex;
				flex-wrap: wrap;

				.wap2-item {
					width: 180px;
					height: 120px;
					box-sizing: border-box;
					margin: 10px;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}



				}


			}

			.container2wap2 {
				@include fj();
				align-items: center;
				margin-top: 20px;
				height: 250px;

				.wap21 {
					display: flex;
					flex-direction: column;
					box-sizing: border-box;
					padding: 20px 0;
					height: 100%;
					justify-content: space-around;


					.zixun {
						color: #fff;
						font-size: 18px;
						border-radius: 0 20px 20px 0;
						padding: 10px 20px;
						background: rgb(112, 85, 176);
						width: 50%;




					}

					.more {
						color: #fff;
						font-size: 18px;
						border-radius: 20px;
						background: rgb(128, 173, 226);
						padding: 10px 20px;
					}

				}

				.wap22 {
					width: 200px;
					height: 200px;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}


				}


			}

		}

		.container3 {
			@include ct1200;
			padding: 40px 0;

			.container3Title {
				color: black;
				font-size: 32px;
				font-weight: 700;
				line-height: 48px;

			}

			.container3wap {
				margin-top: 10px
			}


		}

		.container4 {
			@include ct1200;
		
			.container4content {
				display: flex;
				flex-wrap: wrap;

				.wapItem {
					@include fj(flex-start);
					flex-direction: column;
					margin: 0 45px 45px 0;
					width: 300px;
					height: 420px;
					box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
					box-sizing: border-box;
					.item-img {
						width: 100%;
						height: 150px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}



					.title {
						color: rgb(0, 0, 0);
						margin-top: 20px;
						font-size: 26px;
						font-weight: 700;
						line-height: 30px;
						padding-right: 10px;
						display: flex;
						box-sizing: border-box;
						padding: 0 20px;
					}


					.item-wap {
						width: 100%;
						overflow-wrap: break-word;
						color: rgb(0, 0, 0);
						font-size: 18px;
						font-weight: 700;
						line-height: 24px;
						letter-spacing: 0px;
						padding: 0 20px;
						margin-top: 20px;
						box-sizing: border-box;
					}
				}



			}

		}


	}
</style>