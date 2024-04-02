<template>
	<view class="IndexPage">
		<view class="banner">
			<view class="bannerAI">
				AI

			</view>
			<view class="bannerTitle">
				AI 职场工具，<text class="title2">提升您的工作效率</text>

			</view>
			<view class="bannerText">
				AI 职场工具为我们提升工作效率，脱离烦杂的信息搜索，筛选,Ai 职场工具为我们提升工作效率，脱离烦杂的信息搜索，筛选,Ai 职场工具为我们提升工作效率，脱离烦杂的信息搜索，筛选, Ai 职场工具为我们,

			</view>
			<view class="AiBtn">

				<view class="btnText">让Ai助力职场腾飞</view>


			</view>


			<view class="AiImgItem" v-for="(item,index) in tagIcon.bannerList " :key="index" :class="`icon${index}`">
				<view class="item-item">

				</view>

				<view class="item-icon"  :class="`bgIcon${index}`">
					<img :src="item.url" alt="" srcset="" />

				</view>
				<view class="item-name" :class="`bg${index}`" >
				{{item.name}}

				</view>




			</view>







		</view>
		<view class="model1">
			<view class="model1-des" v-html="textConfigInfo.aicontent">



			</view>
			<view class="model1-img">
				<img :src="banner17.bannerUrl" alt="" />
			</view>


		</view>

		<view class="model2">
			<view class="slogan fadeIn animated">{{textConfigInfo.ai_base}}</view>
			<view class="ftitle">{{textConfigInfo.ai_base_desc}}</view>
			<view class="top">
				<view class="video">
					<view class="img-list">
						<img :src="banner18.bannerUrl" alt="" />
					</view>

				</view>
				<view class="textDiscipt" v-html="banner18.text">


				</view>


			</view>

			<view class="bottom">
				<view class="textDiscipt" v-html="banner19.text">

				</view>
				<view class="video">
					<view class="img-list">
						<img :src="banner19.bannerUrl" alt="" />


					</view>

				</view>

			</view>


		</view>


		<view class="model4">
			<view class="model4Wrap">
				<view class="slogan fadeIn animated">还可以梦幻联动</view>

				<view class="model4Body">
					<!-- <view class="model4-left">
						 <view class="video-mode4-list">
							<view class="video-mode4-list-item" v-for="(item,index) in 3" :key="index"
								:class="`list${index}`">
								<VideoProfile :introduction='introduction2' />

							</view>

						</view> 
						<view class="video-mode4-des">
							<view class="des-title">
								人生成长课

							</view>
							<view class="des-des">
								测评会给出清晰的成长课时间线，在对的时间学习对的知识

							</view>

						</view>
						

					</view> -->
					<view class="model4-right" v-for="item in banner20" :key="item.id">
						<view class="right-img">
							<img :src="item.bannerUrl" alt="" />

						</view>
						<view class="video-mode4-des">
							<view class="des-title">
								{{item.name}}

							</view>
							<view class="des-des">
								{{item.text}}

							</view>

						</view>


					</view>


				</view>

			</view>
		</view>
		<view class="model5">
			<view class="model5Wrap" v-html="textConfigInfo.service_desc">

			</view>

		</view>
		<view class="model6">
			<view class="model6Wrap">
				<view class="model6Wrap-top">
					<view class="top-list" v-for="(item,index) in xiangmuList "
						:class="[item.isPopular ? 'isPopular' :'noPopular']" :key="index">
						<view class="list-title">
							口语练习

						</view>
						<view class="list-content">
							{{item.name}}

						</view>
						<view class="list-money">
							{{item.active}}

						</view>


					</view>



				</view>
				<view class="model6Wrap-bottom">
					<view class="model6Wrap-btn">
						立即测试

					</view>


				</view>


			</view>


		</view>
		<view class="model8">
			<view class="slogan1">学生反馈</view>
			<use-case :usecase="usecase" style="padding: 0 80px;"></use-case>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import {
		tagIcon,
	} from './export.js'
	import HomeCase from './HomeCase.vue';
	import UseCase from './UseCase.vue';
	import VideoProfile from './VideoProfile.vue';
	import {
		videoApi,
		bannerApi,
		configApi,
		textConfig,
		userSide
	} from '@api/cePing.js'
	export default {
		name: 'PagesIndex',
		components: {
			HomeCase,
			UseCase,
			VideoProfile
		},
		data() {
			return {
				textConfigInfo: {},
				banner20: [],
				banner19: {},
				banner18: {},
				banner17: {},
				usecase: [], // 1
				homecase: [], // 1
				model1ComImg: [],
				// model1Comtext: {},
				tagIcon,
				middleBanner: '', // 1
				bottomBanner: '', // 1
				aboutUs: {}, // 1
				banner: [],
				videoInfo: [],
				introduction: {
					videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
					discript: '规划课+AI智能规划+AI测评',
				},
				introduction2: {
					videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
				},
				xiangmuList: [{
					id: 1,
					name: "7天/周卡",
					active: '免费试用',
					isPopular: false
				}, {
					id: 2,
					name: "30天/月卡",
					active: '19.9元',
					isPopular: true
				}, {
					id: 1,
					name: "365天/年卡",
					active: '199元',
					isPopular: false
				}]
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				let resDataList = await Promise.all([textConfig({}), bannerApi({
					type: 20,
					limit: 2
				}), bannerApi({
					type: 19,
					limit: 1
				}), bannerApi({
					type: 18,
					limit: 1
				}), bannerApi({
					type: 17,
					limit: 1
				}), bannerApi({
					type: 5,
					limit: 1
				}), configApi({}), userSide({
					type: 1,
					limit: 5
				})]);
				let videoInfo = [],
					banner20 = [],
					banner19 = [],
					banner18 = [],
					banner17 = [],
					banner = [],
					model1ComImg = [],
					middleBanner = '',
					homecase = [],
					bottomBanner = '',
					aboutUs = {},
					usecase = [];
				resDataList.map((res, idx) => {
					if (idx == 0) {

						this.textConfigInfo = res.data
					} else if (idx == 1) {
						res.data.map(item => {
							banner20.push({
								bannerUrl: item.image_text,
								id: item.id,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 2) {
						res.data.map(item => {
							banner19.push({
								bannerUrl: item.image_text,
								id: item.id,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 3) {
						res.data.map(item => {
							banner18.push({
								bannerUrl: item.image_text,
								id: item.id,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 4) {
						res.data.map(item => {
							banner17.push({
								bannerUrl: item.image_text,
								id: item.id,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 5) {
						res.data.map(item => {
							bottomBanner = item.image_text
						})
					} else if (idx == 6) {
						aboutUs = res.data
					} else if (idx == 7) {
						res.data.map(item => {
							usecase.push({
								engineerUrl: item.image_text,
								desc: item.text,
								id: item.id,
								name: item.name
							})
						})
					}
				})
				usecase.push(usecase[0])
				this.banner20 = banner20;
				this.banner19 = banner19[0];
				this.banner18 = banner18[0];
				this.banner17 = banner17[0];
				this.usecase = usecase
				this.homecase = homecase;
				this.model1ComImg = [1, 2, 4];
				this.middleBanner = middleBanner;
				this.bottomBanner = bottomBanner;
				this.aboutUs = aboutUs;
				this.banner = banner;
				this.videoInfo = videoInfo;
			},

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/minix.scss";

	.IndexPage {
		width: 100%;

		.banner {

			width: 100%;
			height: 867px;
			background: linear-gradient(180.00deg, rgb(220, 244, 254) 0%, rgb(190, 190, 190) 135.033%);
			position: relative;
			display: flex;
			flex-direction: column;

			.bannerAI {
				font-size: 200px;
				margin-top: 50px;
				background: linear-gradient(to right, #398AE2, #38D4F8);
				/* 定义从左到右的渐变色 */
				-webkit-background-clip: text;
				/* 应用文字 */
				-webkit-text-fill-color: transparent;
				/* 隐藏文字的实际颜色 */
				font-weight: bold;
				/* 设置文字加粗 */
				display: flex;
				justify-content: center;

			}

			.bannerTitle {
				font-size: 36px;
				font-weight: 700;
				margin-top: 40px;
				display: flex;
				justify-content: center;
				align-items: center;

				.title2 {
					background: linear-gradient(to right, #F41CFE, #38D4F8);
					-webkit-background-clip: text;
					/* 应用文字 */
					-webkit-text-fill-color: transparent;
					/* 隐藏文字的实际颜色 */


				}


			}

			.bannerText {
				font-size: 22px;
				margin-top: 20px;
				/* 让文本超出一行时自动换行 */
				overflow-wrap: break-word;
				text-align: center;
				padding: 0 220px;
				line-height: 40px;
				color: rgba(0,0,0,0.8);


			}

			.AiBtn {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 140px;
				width: 100%;
				height: 60px;
				cursor: pointer;

				.btnText {
					padding: 15px 40px;
					height: 40px;
					background-color: #4E7FE1;
					border-radius: 40px;
					font-size: 30px;
					color: #fff
				}

			}



			.AiImgItem {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				&.icon0 {
					top: 10%;
					left: 30%;

				}

				&.icon1 {
					top: 10%;
					right: 30%;

				}

				&.icon2 {
					top: 30%;
					left: 10%;

				}

				&.icon3 {
					top: 30%;
					right: 10%;

				}

				&.icon4 {
					top: 70%;
					left: 25%;

				}

				&.icon5 {
					top: 70%;
					right: 25%;

				}

				.item-icon {
					display: inline-block; /* 让元素表现为块级元素 */
					  padding: 0.5em 1em; /* 添加内边距 */
					  border-radius: 50%; /* 将边框设置为圆形 */
					  color: #ffffff; /* 设置文字颜色 */
					
					
				}

				.item-name {
					color:#fff;
					padding:  10px;
					border-radius: 20px;
					&.bg0{
						background-color: #FCA999
					}
					&.bg1{
						background-color:#3661FF
					}
					&.bg2{
						background-color: #E45353
					}
					&.bg3{
						background-color: #82ACFF
					}
					&.bg4{
						background-color: #617AFF
					}
					&.bg5{
						background-color: #FF7070
					}
					
				}

			}








		}

		.model8 {
			@include ct1400;
			@include modelPd;

			.slogan1 {
				@include fj(center);
				@include mb(20px);
				font-size: 34px;
				font-weight: 700;
			}

		}

		.model6 {
			@include ct1400;
			padding: 0 100px;

			.model6Wrap {
				display: flex;
				flex-direction: column;

				.model6Wrap-top {
					@include fj();

					.top-list {
						@include wh(350px, 320px);
						@include fj();
						align-items: center;
						padding: 40px 15px;
						border-radius: 20px;
						flex-direction: column;
						box-sizing: border-box;
						cursor: pointer;

						&.isPopular {
							position: relative;
							border: 2px solid rgb(238, 167, 31);
							border-radius: 20px;

							::before {
								content: "Most POPULAR";
								position: absolute;
								top: -15px;
								left: 50%;
								transform: translateX(-50%);
								padding: 5px 15px;
								background-color: white;
								color: #000;
								font-size: 14px;
								font-weight: 700;
								z-index: 1;
								border-radius: 10px;
								background: rgb(238, 167, 31);
							}

							.list-title {
								background: rgb(12, 106, 199);
								color: #fff;

							}


						}

						&.noPopular {
							box-shadow: 0px 0px 25px 6px rgba(0, 0, 0, 0.15);
							background: rgba(255, 255, 255, 0);

						}

						.list-title {
							@include fj(center);
							align-items: center;
							width: 100%;
							height: 40px;
							font-size: 18px;
							color: rgb(51, 51, 51);
							border-radius: 16px 16px 0px 0px;
							background: rgb(242, 242, 242);


						}

						.list-content {
							@include fj(center);
							align-items: center;
							width: 100%;
							flex: 1;
							color: rgb(31, 31, 31);
							font-size: 25px;
							font-weight: 700;

						}

						.list-money {
							@include fj(center);
							align-items: center;
							margin-bottom: 40px;
							height: 64px;
							width: 80%;
							color: #fff;
							font-size: 24px;
							box-sizing: border-box;
							border: 1px solid rgb(0, 188, 142);
							border-radius: 4px;
							background: rgb(0, 188, 142);
						}


					}

				}

				.model6Wrap-bottom {
					@include wh(100%, 80px);
					@include fj(center);
					align-items: center;
					margin: 80px 0;

					.model6Wrap-btn {
						@include fj(center);
						align-items: center;
						width: 460px;
						height: 80px;
						border-radius: 50px;
						cursor: pointer;
						background: rgb(10, 10, 10);
						opacity: 0.9;
						font-size: 48px;
						color: #fff;

					}




				}



			}

			.adsense {
				margin: 40px 0;
				width: 100%;
				height: 260px;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		.model5 {
			@include ct1400;
			@include modelPd;

			.model5Wrap {
				color: rgb(10, 10, 10);
				font-family: 旁门正道标题体;
				font-size: 36px;
				font-weight: 400;
				line-height: 55px;
				letter-spacing: 0px;
				padding-left: 18%;
			}

		}

		.model4 {
			@include modelPd;
			@include ct1400;

			.model4Wrap {


				.slogan {
					width: 100%;
					font-size: 32px;
					font-weight: 700;
					margin: 0 auto 10px;
					text-align: center;
					font-family: 思源黑体;
				}


				.model4Body {
					@include fj();
					@include mt(40px);
					padding: 0 20px;

					.model4-left {
						width: 700px;
						height: 600px;

						.video-mode4-list {
							@include wh(100%, 400px);

							position: relative;

							.video-mode4-list-item {
								width: 408px;
								height: 232px;
								border-radius: 25px;
								background: rgb(196, 196, 196);

								&.list0 {
									position: absolute;
									top: 0;
									left: 0;
									z-index: 10;
								}

								&.list1 {
									position: absolute;
									top: 28%;
									left: 15%;
									z-index: 20;
								}

								&.list2 {
									position: absolute;
									top: 56%;
									left: 30%;
									z-index: 20;
								}


							}

						}

						.video-mode4-des {
							@include fj(center);
							flex-direction: column;
							align-items: center;
							margin-top: 100px;
							padding: 0 70px;

							.des-title {
								font-size: 36px;
								color: #000;
								font-weight: 700;
							}

							.des-des {
								font-size: 28px;
								color: #000;
								font-weight: 700;
								text-align: center;
							}



						}


					}

					.model4-right {
						@include fj(center);
						flex-direction: column;
						width: 700px;
						height: 600px;

						.right-img {
							width: 516px;
							height: 473px;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						.video-mode4-des {
							@include fj(center);
							flex-direction: column;
							align-items: center;
							margin-top: 40px;
							padding: 0 70px;

							.des-title {
								font-size: 36px;
								color: #000;
								font-weight: 700;
							}

							.des-des {
								font-size: 28px;
								color: #000;
								font-weight: 700;
								text-align: center;
							}



						}

					}



				}


				.btns {
					@include fj();
					width: 600px;
					margin: 0 auto;

					.btn {
						width: 280px;
						height: 80px;
						line-height: 80px;
						text-align: center;
						border-radius: 10px;
						font-size: 20px;
						cursor: pointer;
						transition: 0.3s all ease-in-out;

						&:hover {
							box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
							transform: translate3d(0, -3px, 0px);
						}
					}

					.deepColor {
						background-color: $themeFontColor;
						color: #fff;
					}

					.lightColor {
						border: 1px solid #333;
						color: #333;
					}
				}
			}
		}

		.model3 {
			@include ct1400;
			@include modelPd;

			.adsense {
				width: 100%;
				height: 460px;
				border-radius: 10px;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		.model2 {
			@include ct1400;
			padding: 40px 0;

			.slogan {
				width: 100%;
				font-size: 32px;
				font-weight: 700;
				margin: 0 auto 10px;
				text-align: center;
				font-family: 思源黑体;
			}

			.ftitle {
				width: 100%;
				font-family: 思源黑体;
				text-align: center;
				font-size: 20px;
				color: rgb(183, 183, 183);
				margin: 0 auto 20px;
			}

			.top {
				width: 100%;
				display: flex;

				.textDiscipt {
					@include fj(center);
					align-items: center;
					flex-direction: column;
					padding: 0 20px;
					margin-right: 20px;
					flex: 1;
					font-family: 思源黑体;
					font-size: 30px;
					font-weight: 700;
					text-align: center;

				}

				.video {
					width: 650px;
					height: 428px;
					position: relative;
					display: flex;

					.img-list {
						@include wh(100%, 100%);

						img {
							width: 100%;
							height: 100%;
							object-fit: cover
						}


					}



				}

			}

			.bottom {
				width: 100%;
				display: flex;
				@include mt(20px);

				.textDiscipt {
					@include fj(center);
					align-items: center;
					flex-direction: column;
					padding: 0 20px;
					margin-right: 250px;
					flex: 1;
					font-family: 思源黑体;
					font-size: 30px;
					font-weight: 700;
					text-align: center;
				}

				.video {
					width: 650px;
					height: 428px;
					position: relative;
					display: flex;

					.img-list {
						@include wh(100%, 100%);

						img {
							width: 100%;
							height: 100%;
							object-fit: cover
						}


					}




				}

			}



		}

		.model1 {
			@include ct1400;
			@include modelPd;
			@include fj(flex-start);
			flex-direction: column;

			.model1-des {
				@include pl(40px);
				@include mb(20px);
				color: rgb(10, 10, 10);
				font-family: 旁门正道标题体;
				font-size: 36px;
				font-weight: 400;
				line-height: 55px;
				letter-spacing: 0px;
				text-align: left;

			}

			.model1-img {

				@include wh(100%, 560px);
				@include fj(center);
				align-items: center;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

			}






		}
	}

	@keyframes fadeInUp-20 {
		0% {
			opacity: 0;
			transform: translate3d(0, 20px, 0);
		}

		100% {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}

		100% {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>