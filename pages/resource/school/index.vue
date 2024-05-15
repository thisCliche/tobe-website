<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' withValue="100%" heightValue="26vw" borderRidius="0px" />

		</view>

		<view class="container3">
			<view class="positon">

				所在位置：<text class="cursor-pointer">首页</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">资源</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">夏校</text>

			</view>
			<view class="container3Title">
				国外夏校项目
			</view>
			<view class="container3subTitle">
				结合顶尖企业资源优势，开展深度定制化实习项目，为青年学子提供实践平台，培养专业技能
			</view>
			<view class="container3wap">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">


					<view class="searchPart">
						<el-form-item>
							<el-select v-model="formInline.region" placeholder="地区">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-select v-model="formInline.region" placeholder="项目方向">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-select v-model="formInline.region" placeholder="线上">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</view>
					<view class="searchPart">
						<el-form-item>
							<el-input v-model="formInline.user" class="nInput" placeholder="搜索" style="36.45vw;"> <i
									slot="prefix" class="el-input__icon el-icon-search "></i></el-input>
						</el-form-item>
					</view>


				</el-form>
				<view class="searchList">
					<view class="list_item" v-for="item in 10" :key="item">
						<view class="item-logo">
							<view class="logo-img">
								<img :src="logoScr" alt="" srcset="" />

							</view>


						</view>
						<view class="item-content">
							<view class="content-header">
								<view class="header-left">
									<view class="left-title">
										剑桥大学 ｜ 人文历史学
									</view>
									<view class="title-en">
										Crowh&developemen
									</view>

								</view>
								<view class="header-right">查看详情

								</view>


							</view>
							<view class="midee">
								<view class="tag">
									美国

								</view>

							</view>
							<view class="des">
								简介：囊括全网最全科研界面，帮助你在社科、商科、工科、理科、艺术等所有领域达到科研实习目标囊括全网最全科研界面，帮助你在社科、商科、工科、理科、艺术等所有领域达到科研实习目标
							</view>

						</view>
					</view>
					<view class="pagination mt10">
						<el-pagination class="nPagination" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
							:current-page.sync="currentPage" :page-sizes="[10, 30, 50, 100]" :page-size="100"
							layout=" prev, pager, next,sizes, jumper" :total="300">
						</el-pagination>
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

	import logoScr from '@image/resource/logo.png';
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
				formInline: {
					user: '',
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
				margin-top: vw(65);

				.demo-form-inline {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: 1fr;
					grid-column-gap: 0px;
					grid-row-gap: 20px;

					.searchPart {
						width: vw(700);
						display: flex;
						justify-content: space-between;

						.nInput {
							width: vw(700);
						}

					}
				}

			}

			.searchList {
				margin-top: vw(50);
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				gap: 20px;

				.list_item {
					width: calc(50% - 20px);
					margin-bottom: vw(40);
					height: vw(204);
					box-sizing: border-box;
					background-color: #fff;
					display: flex;
					padding: vw(19) vw(40) vw(19) 0;

					.item-logo {
						width: vw(150);
						height: 100%;
						display: flex;
						flex-direction: column;
						align-items: center;

						.logo-img {
							width: vw(72);
							height: vw(72);

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}
					}

					.item-content {
						flex: 1;
						display: flex;
						flex-direction: column;

						.content-header {
							display: flex;
							justify-content: space-between;

							.header-left {
								display: flex;
								flex-direction: column;
								justify-content: space-between;

								.left-title {
									color: #333333;
									font-size: vw(16);
									line-height: vw(22);
								}

								.title-en {
									margin-top: 5px;
									color: #999999;
									line-height: vw(16);

								}
							}

							.header-right {
								width: vw(146);
								height: vw(40);
								background: linear-gradient(90deg, #5A5DE6 0%, #B443C2 100%);
								border-radius: 21px;
								font-size: vw(16);
								display: flex;
								justify-content: center;
								align-items: center;
								color: #fff;
								cursor: pointer;
							}

						}

						.midee {
							width: 100%;
							height: vw(18);
							margin: vw(10) 0;

							.tag {
								height: 100%;
								width: vw(40);
								border-radius: 2px;
								border: 1px solid;
								border-image: linear-gradient(90deg, rgba(82, 82, 224, 1), rgba(125, 55, 141, 1)) 1 1;
								text-align: center;
								font-size: 13px;
								color: #3f3fa1;
							}
						}

						.des {
							flex: 1;
							display: -webkit-box;
							overflow: hidden;
							text-overflow: ellipsis;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
							color: #666666;
							font-size: vw(16);
							line-height: vw(26);
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


		}



	}
</style>