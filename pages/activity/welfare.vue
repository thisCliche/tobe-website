<template>
	<view class="IndexPage">
		<view class="banner">

			<img :src="topBanner.imageUrl" alt="" srcset="" />

		</view>


		<view class="container3">
			<view class="positon">

				所在位置：<text class="cursor-pointer">首页</text><i class="el-icon-arrow-right
"></i><text class="cursor-pointer">资源</text><i class="el-icon-arrow-right
"></i><text class="cursor-pointer">实习</text>

			</view>

			<view class="container3wap">
				<view class="left">
					<view class="header">
						<view class="title">
							印尼巴厘岛教学海龟保育深度国际义工项目
						</view>
						<view class="collect">

							<template v-if="isCollect">
								<i class="el-icon-star-on star  isActive "> </i><text class="shoucang">已收藏</text>
							</template>

							<template v-else>
								<i class="el-icon-star-off noActive star "> </i><text class="shoucang">收藏</text>
							</template>


						</view>

					</view>
					<view class="titleContent">
						<view class="chapt">
							<view class="header-charpt">
								<img src="@image/my/icon/dot.png" class="header-dot" alt="" srcset="" />
								<text class="chart-title">适合人群：</text>

							</view>
							<view class="xiangmu-content mt10">
								<view class="line">
									项目形式：线下     
								</view>
								<view class="line">
									项目地点：巴厘岛    
								</view>
								<view class="line">
									项目时间：8天7夜       
								</view>
								<view class="line">
									项目费用：RMB5650    
								</view>
							</view>

						</view>
						<view class="chapt">
							<view class="header-charpt">
								<img src="@image/my/icon/dot.png" class="header-dot" alt="" srcset="" />
								<text class="chart-title">项目收获：</text>

							</view>
							<view class="charpt-content mt10">
								专业技能与成就：
							</view>
							<view class="charpt-content ">
							 数字化转型实战专家，具备丰富的数字化转型项目经验，曾负责咨询和实施的数字化项目超过XX个。精通大数据相关领域，包括数据中台、数据应用、用户画像等，并熟悉数字孪生、边缘计算等先进数字化生产力工具。擅长领域广泛，包括数字化转型、数据中台、客户体验管理等，并在多个领域拥有实战经验和成功案例。
							</view>

						</view>
						<view class="chapt">
							<view class="header-charpt">
								<img src="@image/my/icon/dot.png" class="header-dot" alt="" srcset="" />
								<text class="chart-title">项目介绍：</text>

							</view>
							<view class="charpt-content mt10">
								数字化转型实战专家，具备丰富的数字化转型项目经验，曾负责咨询和实施的数字化项目超过XX个。精通大数据相关领域，包括数据中台、数据应用、用户画像等，并熟悉数字孪生、边缘计算等先进数字化生产力工具。擅长领域广泛，包括数字化转型、数据中台、客户体验管理等，并在多个领域拥有实战经验和成功案例。
							</view>

						</view>
						<view class="chapt">
							<view class="header-charpt">
								<img src="@image/my/icon/dot.png" class="header-dot" alt="" srcset="" />
								<text class="chart-title">行程安排：</text>

							</view>
							<view class="charpt-content mt10">
数字化转型实战专家，具备丰富的数字化转型项目经验，总的来说，[导师姓名]是一位在人工智能和数字化转型领域具有深厚背景和丰富经验的专家，同时也是一位具备出色教学能力和领导力的优秀导师。他/她将为学生提供宝贵的知识和经验，助力学生在人工智能和ChatGPT领域取得更大的成就。曾负责咨询和实施的数字化项目超过XX个。精通大数据相关领域，包括数据中台、数据应用、用户画像等，并熟悉数字孪生、边缘计算等先进数字化生产力工具。							</view>

						</view>
						<view class="chapt">
													<view class="header-charpt">
														<img src="@image/my/icon/dot.png" class="header-dot" alt="" srcset="" />
														<text class="chart-title">项目食宿：</text>
						
													</view>
													<view class="charpt-content mt10">
						数字化转型实战专家，具备丰富的数字化转型项目经验，总的来说，[导师姓名]是一位在人工智能和数字化转型领域具有深厚背景和丰富经验的专家，同时也是一位具备出色教学能力和领导力的优秀导师。他/她将为学生提供宝贵的知识和经验，助力学生在人工智能和ChatGPT领域取得更大的成就。曾负责咨询和实施的数字化项目超过XX个。精通大数据相关领域，包括数据中台、数据应用、用户画像等，并熟悉数字孪生、边缘计算等先进数字化生产力工具。							</view>
						
												</view>


						<view class="qrcod-content">
							<view class="qrcod-mg">
								<img src="" alt="" srcset="" />

							</view>
							<view class="qrcod-name mt10">
								添加小助手
							</view>

						</view>
					</view>


				</view>
				<view class="right">
					<view class="school">
						<img src="@image/resource/us.png" alt="" srcset="" />

					</view>
					<view class="school margin-top-20">
						<img src="@image/resource/uk.png" alt="" srcset="" />

					</view>
					<view class="right-content ">
						<view class="right-item" v-for="item in 4" :key="item">
							<view class="right-title">
								AI智能申请系统
							</view>
							<view class="linea">
							</view>
							<view class="line-text">
								TOBE志愿
							</view>
							<view class="line-text">
								公益项目
							</view>
							<view class="line-text">
								社团招募 </view>
							<view class="line-text">
								营地沙龙
							</view>

						</view>

					</view>


				</view>


			</view>
		</view>


		<my-foot></my-foot>
	</view>
</template>

<script>
	import imageDemo from '@image/resource/配图3.png';
	import VideoProfile from '@/assets/components/VideoProfile.vue';

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

		},
		data() {
			return {
				topBanner: {},
				resourceList: [],
				banner3dList: [],
				isCollect: true,
				webviewStyles: {
					with: '200px',
					height: '200px'
				},




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
	@import "../../assets/styles/minix.scss";

	.IndexPage {
		width: 100%;
		background: #F4F6FE;

		.banner {
			@include fj(center);
			width: 100%;
			height: vw(450);
			position: relative;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover
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

			.container3wap {
				display: flex;
				margin-bottom: vw(80);

				.left {
					width: vw(1125);
					display: flex;
					flex-direction: column;
					box-sizing: border-box;


					.header {
						width: 100%;
						height: vw(88);
						background-color: #fff;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 vw(20);
						box-sizing: border-box;

						.title {
							font-size: vw(30);
							color: #333333;
						}

						.collect {
							display: inline-flex;
							align-items: center;

							.star {
								font-size: vw(36);
								margin-right: 10px;
								cursor: pointer;

								&.noActive {
									color: #7c7676;
								}

								&.isActive {
									color: #FF9D34;
								}

							}

							.shoucang {
								font-size: vw(24);
								color: #666666;
							}

						}

					}

					.titleContent {
						margin-top: vw(20);
						padding: 0 vw(20);
						background-color: #fff;

						.chapt {
							padding: vw(25) 0;
							display: flex;
							flex-direction: column;

							.header-charpt {
								display: flex;
								align-items: center;

								.header-dot {
									width: vw(24);
									height: vw(24);
								}

								.chart-title {
									font-weight: 500;
									font-size: vw(20);
									color: #333333;
									margin-left: 10px;
								}

							}
							.xiangmu-content{
								display: grid;
								grid-template-columns: repeat(2, 1fr);
								grid-template-rows: repeat(2, 1fr);
								grid-column-gap: 0px;
								grid-row-gap: 10px;
								align-items: center;
								width: 50%;
								 .line {
									 
									 font-size: vw(16);
									 color: #666666;
									 line-height:vw(28);
									 width: vw(200);
								 }
								
							}

							.charpt-content {
								font-size: vw(16);
								color: #666666;
								width: 100%;
								box-sizing: border-box;
								overflow-wrap: break-word;
								word-break: break-word;

							}


						}

						.qrcod-content {
							margin-top: vw(40);
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
							margin-bottom: vw(110);

							.qrcod-mg {
								width: 108px;
								height: 108px;

								img {
									width: 100%;
									height: 100%;
									object-fit: cover;
								}

							}

							.qrcod-name {
								font-size: vw(16);
								color: #666666;
							}

						}

					}
				}

				.right {
					flex: 1;
					margin-left: vw(30);
					display: flex;
					flex-direction: column;
					box-sizing: border-box;
					height: 100%;

					.school {
						width: vw(285);
						height: vw(86);
						cursor: pointer;

						&.margin-top-20 {
							margin-top: vw(20);
						}

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;

						}
					}

					.right-content {
						width: vw(285);
						background: #FFFFFF;
						margin-top: vw(20);
						border-radius: 20px;
						padding-left: vw(40);
						box-sizing: border-box;
						padding-bottom: vw(80);

						.right-item {
							margin-top: vw(50);

							.right-title {
								font-weight: 600;
								font-size: vw(22);
								font-style: normal;
								background: linear-gradient(to bottom, #5A5DE6, #B047BE);
								/* 渐变背景 */
								-webkit-background-clip: text;
								/* 使文字透明 */
								color: transparent;

							}

							.linea {
								margin-top: vw(20);
								width: vw(88);
								height: 2px;
								background-color: #000000;
							}

							.line-text {
								margin-top: vw(20);
								font-weight: 500;
								font-size: vw(18);
								color: #333333;
								cursor: pointer;
							}

						}

					}

				}


			}


		}

	}

	.mt10 {
		margin-top: 10px;
	}

	.mt15 {
		margin-top: 15px;
	}
</style>