<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' withValue="100%" heightValue="700px" borderRidius="0px" />

		</view>

		<view class="container3">
			<view class="containerWapItme" v-for="(item,index) in container3Banner " :key="index">
				<view class="WapItme">
					<img :src=item.imageUrl alt="" srcset="" />
				</view>
				<view class="wapTitle">
					{{item.name}}

				</view>


			</view>


		</view>

		<view class="model2">
			<view class="model12Wap">
				夏校咨询

			</view>

			<view class="model2Item">
				<view class="top">
					<view class="textDiscipt">
						<view class="textTitle">
							{{cePinginfo.one.title}}
						</view>
						<view class="textContent">
							{{cePinginfo.one.text}}
						</view>


					</view>
					<view class="video">
						<VideoProfile :introduction='cePinginfo.one.introduction' withValue="510px"
							heightValue="300px" />
					</view>

				</view>

				<view class="bottom">

					<view class="video">
						<VideoProfile :introduction='cePinginfo.two.introduction' withValue="510px"
							heightValue="300px" />
					</view>
					<view class="textDiscipt">
						<view class="textTitle">
							{{cePinginfo.two.title}}
						</view>
						<view class="textContent">
							{{cePinginfo.two.text}}
						</view>


					</view>

				</view>



			</view>


		</view>
		<view class="container4">
			<view class="container4Wap">
				国内外夏校项目
			</view>
			<view class="container4content">
				<view class="wapItem" v-for="(item, index) in otherList" :key="index" @click="getDtail(item.id)">
					<view class="item-img">
						<img :src="item.image" alt="" srcset="" />
					</view>
					<view class="item-logo">
						<img :src="item.logo" alt="" srcset="" />
					</view>
					<view class="title"> {{item.name}} </view>
					<view class="subtitle"> {{item.english_name}} </view>
					<view class="item-wap">
				{{item.introduction}}
					</view>
				</view>

			</view>


		</view>

		<view class="container5">
			<view class="wap1">
				<el-select v-model="area" multiple placeholder="地区" class="nselect" @change='getResoce'  >
					<el-option v-for="item in countryList" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>

				<el-select v-model="class_format" multiple placeholder="线上/线下" @change='getResoce'>
					<el-option v-for="item in class_formatList" :key="item.value" :label="item.label"
						:value="item.value">
					</el-option>
				</el-select>

				<el-select v-model="project_direction" multiple placeholder="项目方向" class="nselect" @change='getResoce'>
					<el-option v-for="item in is_creditList" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>

				<view class="footer">
					<view class="foot-img">
						<img src="" alt="" srcset="" />
					</view>
					<view class="foot-text"> 入学申请咨询 </view>
				</view>
			</view>
			<view class="wap2">
				<view class="wapItem" v-for="(item, index) in chineseList" :key="index" @click="getDtail(item.id)">
					<view class="item-img">
						<img :src="item.image" alt="" srcset="" />
					</view>
					<view class="item-logo">
						<img :src="item.logo" alt="" srcset="" />
					</view>
					<view class="title"> {{item.name}} </view>
					<view class="subtitle"> {{item.english_name}}  </view>
					<view class="item-wap">
						<view class="item-item">
							地点 ：{{item.area_text}}

						</view>
						<view class="item-item">
							类型 ：{{item.type}}

						</view>
						<view class="item-item">
							课程 ：{{item.class}}

						</view>
						<view class="item-item">
							学费 ：{{item.tuition_fee}}

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
					this.chineseList=res.data

				})


			},
			getDtail(val) {
				// 当前页面发起跳转
				uni.navigateTo({
					url: `/pages/resource/school/detail?id=${val}&type=3`
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
		}

		.container3 {
			@include ct1200;
			@include modelPd;
			@include fj();

			.containerWapItme {

				width: 32%;
				height: 480px;
				margin: 0 20px;

				.WapItme {
					height: 480px;
					width: 100%;
					border-radius: 20px;
					cursor: pointer;

					img {

						width: 100%;
						height: 100%;
						object-fit: cover
					}

				}

				.wapTitle {
					margin-top: 10px;
					font-size: 28px;
					color: #000;
					font-weight: 500
				}





			}




		}

		.container4 {
			@include ct1200;
			@include modelPd;

			.container4Wap {
				color: rgb(0, 0, 0);
				font-size: 48px;
				font-weight: 700;
				line-height: 60px;


			}

			.container4content {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;

				.wapItem {
					@include fj(flex-start);
					flex-direction: column;
					position: relative;
					margin: 10px;
					width: 275px;
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

					.item-logo {
						position: absolute;
						top: 25%;
						left: 5%;
						width: 120px;
						height: 80px;
						border-radius: 20px;

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
						justify-content: flex-end;
						box-sizing: border-box;
					}

					.subtitle {
						color: rgb(0, 0, 0);
						margin-bottom: 10px;
						font-size: 18px;
						font-weight: 700;
						line-height: 20px;
						display: flex;
						justify-content: flex-end;
						padding-right: 10px;
						box-sizing: border-box;
					}

					.item-wap {
						width: 100%;
						overflow-wrap: break-word;
						color: rgb(0, 0, 0);
						font-size: 20px;
						font-weight: 700;
						line-height: 24px;
						letter-spacing: 0px;
						padding: 0 10px;
						box-sizing: border-box;
					}
				}



			}

		}


		.container5 {
			@include ct1200;
			@include modelPd;
			display: flex;

			.wap1 {
				display: flex;
				width: 200px;
				flex-direction: column;
				gap: 5px 0;

				.footer {
					margin-top: 50px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 100%;

					.foot-img {
						width: 120px;
						height: 120px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.foot-text {
						color: rgb(0, 0, 0);
						margin-top: 10px;

						font-size: 22px;
						font-weight: 700;
						line-height: 30px;
						letter-spacing: 0px;
					}
				}
			}

			.wap2 {
				display: flex;
				flex-wrap: wrap;
				margin-left: 40px;

				.wapItem {
					@include fj(flex-start);
					flex-direction: column;
					position: relative;
					margin: 10px;
					width: 324px;
					height: 280px;
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

					.item-logo {
						position: absolute;
						top: 15%;
						left: 5%;
						width: 120px;
						height: 80px;
						border-radius: 20px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.title {
						color: rgb(0, 0, 0);
						margin-top: 20px;
						font-size: 22;
						font-weight: 700;
						line-height: 28px;
						padding-right: 10px;

						display: flex;
						justify-content: flex-end;
						box-sizing: border-box;
					}

					.subtitle {
						color: rgb(0, 0, 0);
						margin-bottom: 10px;
						font-size: 14px;
						font-weight: 700;
						line-height: 20px;
						display: flex;
						justify-content: flex-end;
						padding-right: 10px;
						box-sizing: border-box;
					}

					.item-wap {
						width: 100%;
						display: flex;
						flex-direction: column;
						box-sizing: border-box;
						padding-left: 20px;
						margin-top: 10px;
						padding-bottom: 10px;

						.item-item {
							overflow-wrap: break-word;
							color: rgb(0, 0, 0);
							font-size: 16px;
							font-weight: 700;
							line-height: 24px;

						}
					}
				}
			}
		}


		.model2 {
			@include ct1200;
			padding: 40px 0;

			.model12Wap {
				color: rgb(0, 0, 0);
				font-size: 48px;
				font-weight: 700;
				line-height: 60px;


			}

			.model2Item {
				@include wh(100%, 100%);

				.top {
					width: 100%;
					display: flex;

					.textDiscipt {
						display: flex;
						flex-direction: column;
						justify-content: center;
						padding: 0 20px;
						margin-right: 20px;
						flex: 1;

						.textTitle {
							font-family: 思源黑体;
							font-size: 30px;
							font-weight: 700;
							line-height: -1px;
							letter-spacing: 0px;
							text-align: left
						}

						.textContent {

							font-size: 24px;
							font-weight: 700;
							line-height: 36px;
							color: rgb(0, 0, 0);
							font-family: Gothic A1;
							font-weight: 700;
							padding: 0 20px;
							box-sizing: border-box;

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

						.textContent {

							font-size: 24px;
							font-weight: 700;
							line-height: 36px;
							color: rgb(0, 0, 0);
							font-family: Gothic A1;
							font-weight: 700;
							padding: 0 20px;
							box-sizing: border-box;

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


		}

	}
</style>