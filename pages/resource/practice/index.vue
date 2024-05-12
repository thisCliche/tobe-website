<template>
	<view class="IndexPage">
		<view class="banner">

			<img :src="topBanner.imageUrl" alt="" srcset="" />

			<view class="banner-word">
				<view class="word-name">
					<view class="name-cn">
						名企实训

					</view>
					<view class="name-en">
						COMPANY&nbsp;TRAINING
					</view>

				</view>
				<view class="word-body">
					训机会均来自知名企业或机构构的内部推荐
					由中高层专业管理者一对一带领学生
					在实训中将有效运用专业知识分析case与project
					实现理论与实践能力的提高
					实训结束均获得导师个人推荐信，助力留学申请！
				</view>



			</view>



		</view>


		<view class="container3">
			<view class="positon">

				所在位置：<text class="cursor-pointer">首页</text><i class="el-icon-arrow-right
"></i><text class="cursor-pointer">资源</text><i class="el-icon-arrow-right
"></i><text class="cursor-pointer">实习</text>

			</view>
			<view class="container3Title">
				海外实地/线上实训
			</view>
			<view class="container3wap">
				<HomeCase :slides="banner3dList" v-if="banner3dList.length>0" />
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
				resourceList: [],
				banner3dList: []




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
					bannerApi({
						type: 48,
						limit: 5
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
					} else if (idx == 2) {

						let data = []
						res.data.map(item => {
							data.push({
								imageUrl: item.image_text,
								name: item.name,
								url: item.url

							})
						})
						this.banner3dList = data

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
			height: vw(500);
			position: relative;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover
			}

			.banner-word {
				position: absolute;
				top: vw(105);
				left: vw(298);
				display: flex;
				flex-direction: column;

				.word-name {
					display: inline-flex;
					align-items: center;

					.name-cn {
						color: #fff;
						font-size: vw(52);
						line-height: vw(68);

					}

					.name-en {
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 0.5);
						font-weight: normal;
						text-align: justify;
						white-space: nowrap;
						line-height: vw(34);
						font-size: vw(30);
						margin-left: 5px;

					}
				}

				.word-body {
					width: vw(460);
					word-wrap: break-word;
					/* 允许在单词内换行 */
					overflow-wrap: break-word;
					/* 对于兼容性更好的浏览器 */
					font-size: vw(24);
					line-height: vw(40);
					color: #fff;




				}


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
			width: 100%;
			background: #F4F6FE;
			padding: 0 vw(240);
			box-sizing: border-box;

			.positon {
				margin: 10px 0;
				color: #666666;
				line-height: vw(17);
				text-align: left;
				font-style: normal;

				.cursor-pointer {
					cursor: pointer;
				}


			}

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