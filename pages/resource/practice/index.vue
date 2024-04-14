<template>
	<view class="IndexPage">
		<view class="banner">

			<img :src="topBanner.imageUrl" alt="" srcset="" />



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
				<view class="wapItem" v-for="(item, index) in resourceList" :key="index" @click="getDtail(item.id)">
					<view class="item-img">
						<img :src="item.image" alt="" srcset="" />
					</view>

					<view class="title"> {{item.name}} </view>
					<view class="item-wap">
						{{item.introduction}}
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
		resourceList

	} from '@api/resource.js'
	export default {
		name: 'PagesIndex',
		components: {
			VideoProfile,
			HomeCase,
		},
		data() {
			return {
				topBanner: {},
				resourceList: []




			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				let resDataList = await Promise.all([bannerApi({
						type: 44,
						limit: 1
					}),
					resourceList({
						type: "实习",
						limit: 9
					}),



				]);
				let topBanner = [],

					usecase = [];
				resDataList.map((res, idx) => {
					console.log(res, idx)
					if (idx == 0) {
						res.data.map(item => {
							topBanner.push({
								imageUrl: item.image_text,
								name: item.name,
								id: item.id
							})
						})
					} else if (idx == 1) {
						res.data.map(item => {
							this.resourceList.push({
								image: item.image,
								id: item.id,
								name: item.name,
								introduction: item.introduction
							})
						})
					}

				})

				this.topBanner = topBanner[0]


			},
			getDtail(val) {
				// 当前页面发起跳转
				uni.navigateTo({
					url: `/pages/resource/practice/detail?id=${val}&type=2`
				});
			}

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

			img {
				width: 100%;
				height: 100%;
				object-fit: cover
			}
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
					cursor: pointer;

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