<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction'  withValue="100%" heightValue="700px" />

		</view>

		<view class="container3">
			<view class="containerWapItme" v-for="(item,index) in container3Banner " :key="index">

				<img :src=item.imageUrl alt="" srcset="" />


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
						<VideoProfile :introduction='cePinginfo.one.introduction' withValue="510px" heightValue="300px" />
					</view>

				</view>

				<view class="bottom">

					<view class="video">
						<VideoProfile :introduction='cePinginfo.two.introduction' withValue="510px" heightValue="300px" />
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
				国际学校备考/面试
			</view>
			<view class="container4content">
				<view class="wapItem" v-for="(item, index) in 8" :key="index">
					<view class="item-img">
						<img src="" alt="" srcset="" />
					</view>
					<view class="item-logo">
						<img src="" alt="" srcset="" />
					</view>
					<view class="title"> 人工智能 </view>
					<view class="subtitle"> 线上 </view>
					<view class="item-wap">
						简介简介简介简介简介简介简介简介简介简介简介简介简介简介
					</view>
				</view>

			</view>


		</view>
		
		<view class="container5">
		  <view class="wap1">
		    <el-select v-model="value1" placeholder="线上/线下" class="nselect">
		      <el-option
		        v-for="item in options"
		        :key="item.value"
		        :label="item.label"
		        :value="item.value"
		      >
		      </el-option>
		    </el-select>
		
		    <el-select v-model="value2" placeholder="暑假/寒假">
		      <el-option
		        v-for="item in options2"
		        :key="item.value"
		        :label="item.label"
		        :value="item.value"
		      >
		      </el-option>
		    </el-select>
		
		    <el-select v-model="value1" placeholder="线上/线下" class="nselect">
		      <el-option
		        v-for="item in options"
		        :key="item.value"
		        :label="item.label"
		        :value="item.value"
		      >
		      </el-option>
		    </el-select>
		
		    <el-select v-model="value2" placeholder="暑假/寒假">
		      <el-option
		        v-for="item in options2"
		        :key="item.value"
		        :label="item.label"
		        :value="item.value"
		      >
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
		    <view class="wapItem" v-for="(item, index) in 12" :key="index">
		      <view class="item-img">
		        <img src="" alt="" srcset="" />
		      </view>
		      <view class="item-logo">
		        <img src="" alt="" srcset="" />
		      </view>
		      <view class="title"> 北京鼎石学校 </view>
		      <view class="subtitle"> Keystone Academy </view>
		      <view class="item-wap">
				  <view class="item-item">
					  站点 ：北京
				  	
				  </view>
				  <view class="item-item">
				  					  类型 ：公办
				  	
				  </view>
				  <view class="item-item">
				  					  课程 ：IBM
				  	
				  </view>
				  <view class="item-item">
				  					  学费 ：100$
				  	
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

	} from '@api/resource.js'
	export default {
		name: 'PagesIndex',
		components: {
			VideoProfile,
			HomeCase,
		},
		data() {
			return {
				introduction:{},
				container3Banner:[],
				value1: "",
				options1: [
				  {
				    value: "1",
				    label: "线上",
				  },
				  {
				    value: "2",
				    label: "线下",
				  },
				],
				
				value2: "",
				options2: [
				  {
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
						type:24,
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
				
				console.log(cePinginfo,'cePinginfo')
				

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
				.item-item{
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