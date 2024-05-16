<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' withValue="100%" heightValue="26vw" borderRidius="0px" />

		</view>

		<view class="container3">
			<view class="positon">

				所在位置：<text class="cursor-pointer">首页</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">资源</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">科研</text>

			</view>

			<view class="container3wap">
				<el-form :inline="true" :model="form" class="demo-form-inline">

					<el-form-item label="教学类型：">
						<el-checkbox-group v-model="form.type">
							<el-checkbox label="1V1" name="type"></el-checkbox>
							<el-checkbox label="小组" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>

					<el-form-item label="类目选择：">
						<el-checkbox-group v-model="form.type">
							<el-checkbox label="国内" name="type"></el-checkbox>
							<el-checkbox label="国外" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>

					<el-form-item label="授课方式：">
						<el-checkbox-group v-model="form.type">
							<el-checkbox label="线上" name="type"></el-checkbox>
							<el-checkbox label="线下" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>

					<el-form-item label="类目选择：">
						<el-checkbox-group v-model="form.type">
							<el-checkbox label="实验室" name="type"></el-checkbox>

						</el-checkbox-group>
					</el-form-item>

				</el-form>
				<view class="searchList">
					<view class="side">
						<view class="side_title">
							课程内容
						</view>
						<view class="side_list">
							<view class="list_item">
								计算机与人工智能
							</view>
							<view class="list_item">
								工程 </view>
							<view class="list_item">
								金融商科
							</view>
						</view>
						
						<view class="qrcode">
							 <view class="qrcode-Img">
								 <img src="@image/footCode.png" alt="" srcset="" />
							 	
							 </view>
							 <view class="qrcode-des">
							 	添加微信小助手
							 </view>
							
						</view>

					</view>
					<view class="containerBody">
						<view class="list_item" v-for="item in 9" :key="item">

							<view class="item-content">
								<view class="content-header">
									<img :src="logoScr" alt="" srcset="" />
									
								

								</view>
								<view class="midee">
									金融商科领航时代：智慧投资卓越管理，引领变革潮流，洞察市场趋势塑造全球经济新动力，共筑商业辉煌未来。

								</view>
								<view class="des">
									导师：张三，数字化转型实战专家，具备丰富的数字化转型项目经验，曾负责咨询和实施的数字化项目超过XX个。
								</view>

							</view>
						</view>
						<view class="pagination mt10">
							<el-pagination class="nPagination" background @size-change="handleSizeChange"
								@current-change="handleCurrentChange" :current-page.sync="currentPage"
								:page-sizes="[10, 30, 50, 100]" :page-size="100"
								layout=" prev, pager, next,sizes, jumper" :total="300">
							</el-pagination>
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

	import logoScr from '@image/resource/科研配图.png';
	import VideoProfile from '@/assets/components/VideoProfile.vue';
	import HomeCase from '../HomeCase.vue';
	import {
		videoApi,
		bannerApi,
		configApi,
		schoolResourceSearch,
		schoolDetail,
		schoolList

	} from '@api/resource.js'
	export default {
		name: 'PagesIndex',
		components: {
			VideoProfile,
			HomeCase,
		},
		data() {
			return {
				logoScr: logoScr,
				currentPage: 1,
				form: {
					type: '',
					region: ''
				},
				introduction: {},
				container3Banner: [],
				area: [],
				countryList: [],

				class_formatList: [],
				class_format: [],
				chineseList: [],
				otherList: [],

				project_direction: [],
				is_creditList: [],
				cePinginfo: {
					one: {
						title: '',
						text: '',
						introduction: {
							imageUrl: '',
							videoUrl: '',
							id: 0

						}

					},
					two: {
						title: '',
						text: '',
						introduction: {
							imageUrl: '',
							videoUrl: '',
							id: 0

						}

					}
				}, // 1




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

					bannerApi({
						type: 34,
						limit: 1
					}),
					bannerApi({
						type: 35,
						limit: 1
					}),

					bannerApi({
						type: 36,
						limit: 1
					}),
					schoolResourceSearch({}),


				]);
				let topVideo = [],
					cePinginfo = [],
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
						let data = []
						res.data.map(item => {
							data.push({
								imageUrl: item.image_text,
								id: item.id,
								name: item.name
							})
						})
						this.container3Banner.push(data[0])
					} else if (idx == 3) {
						let data = []
						res.data.map(item => {
							data.push({
								imageUrl: item.image_text,
								id: item.id,
								name: item.name
							})
						})
						this.container3Banner.push(data[0])
					} else if (idx == 4) {
						let data = []
						res.data.map(item => {
							data.push({
								imageUrl: item.image_text,
								id: item.id,
								name: item.name
							})
						})
						this.container3Banner.push(data[0])
					} else if (idx == 5) {
						const {
							area,
							class_format,
							project_direction
						} = res.data
						this.countryList = area
						this.class_formatList = class_format
						this.is_creditList = project_direction
						let arr = area.map(item => {
							return item.id
						})
						const [a, b] = [arr.slice(0, 2), arr.slice(2)]

						this.getDiffRecource(a, 1)
						this.getDiffRecource(b, 2)

					}

				})

				this.introduction = topVideo[0]

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


			},

			getDiffRecource(prams, type) {
				let params = {
					area: prams,

				}
				schoolList(params).then(res => {
					const data = res.data

					if (type == 1) {
						this.chineseList = data
					} else if (type == 2) {
						this.otherList = data
					}



				})


			},

			getResoce() {

				schoolList({
					area: this.area,
					class_format: this.class_format,
					project_direction: this.project_direction
				}).then(res => {
					this.chineseList = res.data

				})


			},
			getDtail(val) {
				// 当前页面发起跳转
				uni.navigateTo({
					url: `/pages/resource/school/detail?id=${val}&type=3`
				});
			},
			handleSizeChange() {},
			handleCurrentChange() {},



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

		}

		.container3 {
			width: 100%;
			background: #F4F6FE;
			padding: 0 vw(240);
			box-sizing: border-box;
			margin-bottom: 2vw;

			.positon {
				padding: 15px 0;
				color: #666666;
				line-height: vw(17);
				text-align: left;
				font-style: normal;

				.cursor-pointer {
					cursor: pointer;
				}


			}



			.container3wap {
				margin-top: vw(65);

				.demo-form-inline {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					align-items: center;
					grid-template-rows: 1fr;
					justify-content: center;
					height: vw(60);
					background: #FFFFFF;

					::v-deep .el-form-item {
						margin-bottom: 0;
						display: flex;
						justify-content: center;
					}


				}

			}

			.searchList {
				margin-top: vw(40);
				width: 100%;
				display: flex;

				.side {
					width: vw(320);
					display: flex;
					flex-direction: column;
					padding-right: 30px;
					box-sizing: border-box;

					.side_title {
						font-size: vw(22);
						line-height: vw(30);
						color: #333333;
						text-decoration: none;
						position: relative;
						padding-left: vw(40);
						margin-bottom: 12px;

						&::after {
							content: '';
							position: absolute;
							left: vw(40);
							bottom: -10px;
							width: 30%;
							height: 1px;
							background-color: black;
						}

					}

					.side_list {
						display: flex;
						flex-direction: column;
						width: 100%;

						.list_item {
							width: calc(100% - 60px);
							height: vw(65);
							display: flex;
							font-size: vw(18);
							color: #333333;
							align-items: center;
							padding-left: vw(40);

							&:hover {
								color: #FFFFFF;
								background: linear-gradient(90deg, #5A5DE6 0%, #B443C2 100%);
								border-radius: 0px 100px 100px 0px;
								cursor: pointer;
							}


						}

					}
					.qrcode{
						
						width: 100%;
						padding-right: 30px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin-top: vw(40);
						.qrcode-Img{
							width: vw(180);
							height: vw(180);
							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
							
						}
						.qrcode-des{
							margin-top: 14px;
							font-size: vw(16);
							color: #666666;
							line-height: vw(22);
							
						}
						
					}
					


				}

				.containerBody {
					flex: 1;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					gap: (36);

					.list_item {
						width: vw(338);
						margin-bottom: vw(40);
						box-sizing: border-box;
						background-color: #fff;
						display: flex;

						.item-content {
							flex: 1;
							display: flex;
							flex-direction: column;

							.content-header {
								width: vw(338);
								display: flex;
								height: vw(200);
								background: #000000;
								
								opacity: 0.5;
								
								img {
									width: 100%;
									height: 100%;
									object-fit: cover;
							
								}
							
							

							}

							.midee {
								width: 100%;
								height: vw(72);
								padding: 0 vw(10) ;
								font-weight: 500;
								font-size: vw(14);
								box-sizing: border-box;
								color: #333333;
								line-height: vw(24);
								display: -webkit-box;
								overflow: hidden;
								text-overflow: ellipsis;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;


						
							}

							.des {
								width: 100%;
								height: vw(72);
								padding: 0 vw(10) ;
								font-weight: 500;
								font-size: vw(14);
								box-sizing: border-box;
								color: #666666;
								line-height: vw(24);
								display: -webkit-box;
								overflow: hidden;
								text-overflow: ellipsis;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							}


						}


					}

					.pagination {
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: vw(30) 0;
					}

				}


				// display: flex;
				// flex-wrap: wrap;
				// justify-content: space-between;
				// gap: 20px;



			}


		}



	}
</style>