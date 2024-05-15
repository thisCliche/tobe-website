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
				国内顶尖企业——定制化实习
			</view>
			<view class="container3subTitle">
				结合顶尖企业资源优势，开展深度定制化实习项目，为青年学子提供实践平台，培养专业技能
			</view>
			<view class="container3wap">

				<el-carousel indicator-position="outside" :autoplay="false" trigger="click">
					<el-carousel-item v-for="item in 4" :key="item">
						<view class="banner-carousel-item">
							<view class="banner_img" v-for="item2 in 19" :key="item2">
								<img src="https://img2.baidu.com/it/u=671610231,3191155332&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500"
									alt="" srcset="" />
							</view>

						</view>
					</el-carousel-item>
				</el-carousel>

			</view>
		</view>

		<view class="container2">
			<view class="container3Title">
				实习场景
			</view>
			<view class="container3subTitle">
				选择大于努力是共识，选定一个合适的能发挥自身价值的赛道是提升人生成功概率的最有方法论
			</view>
			<view class="container2wap">
				<UesCase :usecase="usecase"/>

			</view>

		</view>



		<my-foot></my-foot>
	</view>
</template>

<script>
	import {
		tagIcon,
	} from '../export.js'

import imageDemo from '@image/resource/配图3.png';
	import VideoProfile from '@/assets/components/VideoProfile.vue';
	import UesCase from '../UseCase.vue';
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
			UesCase,
		},
		data() {
			return {
				topBanner: {},
				resourceList: [],
				banner3dList: [],
				usecase:[{id:1,imageUrl:imageDemo,title:'夏威夷州政府实习',peple:'高中生/成人',address:'线上/线下'},{id:2,imageUrl:imageDemo,title:'夏威夷州政府实习',peple:'高中生/成人',address:'线上/线下'},{id:3,imageUrl:imageDemo,title:'夏威夷州政府实习',peple:'高中生/成人',address:'线上/线下'},{id:4,imageUrl:imageDemo,title:'夏威夷州政府实习',peple:'高中生/成人',address:'线上/线下'}]




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
		width: 100%;
		background: rgba(244, 246, 254, 0.57);
		padding: vw(80) vw(240);
		height: vw(744);
		box-sizing: border-box;

			.container3Title {
				color: #333;
				font-size: vw(38);
				font-weight: 700;
				line-height: vw(48);
				display: flex;
				justify-content: center;
				margin-top: vw(50);
			
			}
			
			.container3subTitle {
				color: #999999;
				font-size: vw(22);
				line-height: vw(30);
				display: flex;
				justify-content: center;
			
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
				margin: 15px 0;
				color: #666666;
				line-height: vw(17);
				text-align: left;
				font-style: normal;

				.cursor-pointer {
					cursor: pointer;
				}


			}

			.container3Title {
				color: #333;
				font-size: vw(38);
				font-weight: 700;
				line-height: vw(48);
				display: flex;
				justify-content: center;
				margin-top: vw(50);

			}

			.container3subTitle {
				color: #999999;
				font-size: vw(22);
				line-height: vw(30);
				display: flex;
				justify-content: center;

			}

			.container3wap {
				margin-top: vw(20)
			}


		}

	}

	::v-deep .el-carousel {

		.el-carousel__item {
			.banner-carousel-item {
				width: 100%;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;

				.banner_img {
					width: vw(150);
					height: vw(60);
					margin: vw(20) vw(13);

					&:nth-child(1),
					// 第一个 div
					&:nth-child(15) {
						// 第七个 div
						padding-left: vw(160); // 添加左右 20px 的 padding
					}

					;
					&:nth-child(6) // 第一个 div

						{
						// 第七个 div
						padding-right: vw(160); // 添加左右 20px 的 padding
					}

					;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}


			}


		}



		.el-carousel__indicator {
			.el-carousel__button {
				background-color: #D8D8D8;
				width: vw(74);
				height: 4px;
			}

			&.is-active {
				.el-carousel__button {
					background-color: #5053E3;
					width: vw(70);
					height: 4px;
				}

			}

		}

	}
</style>