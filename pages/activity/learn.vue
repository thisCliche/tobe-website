<template>
	<view class="IndexPage">
		<view class="banner">

			<img src="https://website.tobeapp.cn/uploads/20240413/6d040c6d785ad3b305cfdc12b825d469.jpeg" alt=""
				srcset="" />

			<view class="banner-word">
				<view class="word-name">
					<view class="name-cn">
						学术活动

					</view>
					<view class="name-en">
						EVENTS
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
			"></i><text class="cursor-pointer">活动</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">学术</text>

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

					<view class="containerBody">
						<view class="list_item" v-for="item in 12" :key="item">

							<view class="item-content">
								<view class="content-header">
									<img :src="logoScr" alt="" srcset="" />

								</view>
								<view class="item-item">
									<view class="midee">
										印尼巴厘岛教学海龟保育深度国际义工
									</view>
									<view class="des">
										形式：线下 </view>
									<view class="des">
										地点：印尼巴厘岛 </view>
									<view class="des">
										时间：8天7夜 </view>

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
	import logoScr from '@image/resource/科研配图.png';
	import VideoProfile from '@/assets/components/VideoProfile.vue';
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
			VideoProfile
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
			//this.getData();
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
	@import "../../assets/styles/minix.scss";

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


				.containerBody {
					flex: 1;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					gap: vw(18);

					.list_item {
						width: vw(330);
						margin-bottom: vw(40);
						box-sizing: border-box;
						background-color: #fff;
						display: flex;
						border-radius: 0 0 20px 20px; /* 左下角圆角 */
						cursor: pointer;

						.item-content {
							flex: 1;
							display: flex;
							flex-direction: column;
							

							.content-header {
								width: vw(330);
								display: flex;
								height: vw(200);

								img {
									width: 100%;
									height: 100%;
									object-fit: cover;

								}



							}

							.item-item {
								padding-left: vw(15);
								box-sizing: border-box;
								display: flex;
								flex-direction: column;
								margin: vw(22) 0;
								 
								   

								.midee {
									width: 100%;

									font-weight: 600;
									font-size: vw(16);
									color: #333333;
									line-height: vw(22);
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

								.des {
									width: 100%;
									font-weight: 500;
									font-size: vw(14);
									box-sizing: border-box;
									color: #666666;
									line-height: vw(20);
									margin-top: vw(6);
						
								}
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



	}
</style>