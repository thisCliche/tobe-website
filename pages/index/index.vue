<template>
	<view class="IndexPage">
		<view class="banner">
			<el-carousel trigger="click" :interval="5000" height="680px" indicator-position="none">
				<el-carousel-item v-for="item in banner" :key="item.id">
					<img :src="item.bannerUrl" alt="" class="bannerImg" />
				</el-carousel-item>
			</el-carousel>
		</view>
		<view class="model1">
			<view class="slogan fadeIn animated">基于人工智留学网站基于人工智能的留学网站基于人工智能的留学网站</view>
			<view class="pictureCom">
				<view class="pictureComWrap animated fadeInUp-20" :class="'list'+idx"
					v-for="(item,idx) in model1ComImg">
					<template v-if="idx==2">
						<img class="img1" :src="item" alt="" />
						<img class="img2" :src="item" alt="" />
					</template>
					<template v-else>
						<img :src="item" alt="" />
					</template>
				</view>
			</view>
		</view>
		<view class="model2">
			<view class="model2Wrap">
				<view class="model2L">
					<view class="slogan">你可以通过TO BE获取全面的升学信息，打破中介信息差，超越一般文案老师，成为自己的留学老师。</view>
					<view class="coolBeans">关于TOBE，了解更多</view>
				</view>
				<view class="model2R">
					<img :src="bannerUrl" alt="" />
				</view>
			</view>
		</view>
		<view class="model3">
			<view class="adsense">
				<img :src="bannerUrl" alt="" />
			</view>
		</view>
		<view class="model4">
			<view class="model4Wrap">
				<view class="slogan1">大大小小的留学团队都依赖TOBE</view>
				<view class="slogan2">tobe可以安全扩展，支持学生的DIY操作</view>
				<view class="btns">
					<view class="btn deepColor">注册成为TOBE的合作伙伴</view>
					<view class="btn lightColor">欢迎加入TOBE大家庭</view>
				</view>
				<view class="countNumWrap">
					<view class="countNum">
						<view class="num">84%</view>
						<view class="des">认为录取更好了</view>
					</view>
					<view class="countNum">
						<view class="num">84%</view>
						<view class="des">认为录取更好了</view>
					</view>
					<view class="countNum">
						<view class="num">84%</view>
						<view class="des">认为录取更好了</view>
					</view>
				</view>
				<view class="littleTag">
					<view class="tagMono" :class="'icon'+idx" v-for="(item,idx) in tagIcon" :key="idx">
						<img :src="item.url" alt="" />
						<span>{{item.num}}</span>
					</view>
				</view>
			</view>
		</view>
		<view class="model5">
			<view class="slogan">我们的合作伙伴</view>
			<home-case :homecase="homecase"></home-case>
		</view>
		<view class="model6">
			<view class="adsense">
				<img :src="bannerUrl" alt="" />
			</view>
		</view>
	</view>
</template>

<script>
	import bannerUrl from '@image/banner.png';
	import {model1ComImg,tagIcon,homecase} from './export.js'
	import HomeCase from './HomeCase.vue';
	import {
		login
	} from '@/assets/api/homeApi.js'
	export default {
		name: 'PagesIndex',
		components:{HomeCase},
		data() {
			return {
				homecase,
				tagIcon,
				bannerUrl,
				model1ComImg,
				banner: [{
					bannerUrl,
					id: 1
				}, {
					bannerUrl,
					id: 2
				}, {
					bannerUrl,
					id: 3
				}]
			}
		},
		onLoad() {

		},
		methods: {
			testFun() {
				uni.navigateTo({
					url: "/pages/error/error"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/minix.scss";

	.IndexPage {
		.banner {
			&::v-deep .el-carousel__arrow {
				width: 50px;
				height: 50px;
				background-color: rgba(31, 45, 61, 0.5);

				i {
					font-weight: 700;
					font-size: 40px;
				}
			}

			.bannerImg {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.model6{
			@include ct1400;			
			.adsense {
				width: 100%;
				height: 460px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
		.model5{
			@include ct1400;
			padding: 40px 0;
			font-weight: 700;
			.slogan{
				font-size: 34px;
				text-align: center;
			}
		}
		.model4{
			background-color: $bc;
			padding: 40px 0;
			.model4Wrap{
				@include ct1400;
				position: relative;
				.littleTag{
					.tagMono{
						position: absolute;
						width: 100px;
						height: 60px;
						background-color: $tagBg;
						border-radius: 8px;
						@include fj(center);
						align-items: center;
						transition: 0.3s all ease-in-out;
						&:hover{
							box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
							transform: translate3d(0, -3px, 0px);
						}
						img{
							@include wh(44px,38px);
							@include mr(8px);
						}
						span{
							font-family: Impact;
							font-size: 28px;
						}
					}
					.icon0{
						left: 0px;
						top: 10px;
					}
					.icon1{
						left: 90px;
						top: 100px;
					}
					.icon2{
						left: 20px;
						top: 230px;
					}
					.icon3{
						right: 100px;
						top: 20px;
					}
					.icon4{
						right: 20px;
						top: 120px;
					}
					.icon5{
						right: 120px;
						top: 230px;
					}
					
				}
				.countNumWrap{
					@include fj();
					.countNum{
						width: 800px;
						text-align: center;
						margin: 140px auto 40px;
						.num{
							font-family: Impact;
							font-size: 80px;
							color: $themeFontColor;
						}
						.des{
							font-family: Impact;
							font-weight: 700;
							font-size: 30px;
							color: $themeFontColor;
						}
					}
				}
				.slogan1{
					font-size: 34px;
					font-weight: 700;
					margin: 20px auto;
					text-align: center;
				}
				.slogan2{
					font-size: 24px;
					font-weight: 700;
					margin: 40px auto 60px;
					text-align: center;
				}
				.btns{
					@include fj();
					width: 600px;
					margin: 0 auto;
					.btn{
						width: 280px;
						height: 80px;
						line-height: 80px;
						text-align: center;
						border-radius: 10px;
						font-size: 20px;
						cursor: pointer;
						transition: 0.3s all ease-in-out;
						&:hover{
							box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
							transform: translate3d(0, -3px, 0px);
						}
					}
					.deepColor{
						background-color: $themeFontColor;
						color: #fff;
					}
					.lightColor{
						border:1px solid #333;
						color: #333;
					}
				}
			}
		}
		.model3 {
			@include ct1400;
			padding: 40px 0;

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
			background-color: $bc;

			.model2Wrap {
				@include ct1400;
				@include fj();
				padding: 40px 0;

				.model2L {
					width: 500px;
					@include fj(space-around);
					flex-direction: column;

					.slogan {
						font-size: 24px;
						font-weight: 700;
					}

					.coolBeans {
						width: 250px;
						text-align: center;
						@include coolBeans;
					}
				}

				.model2R {
					width: 700px;
					height: 360px;
					border-top-left-radius: 500px;
					border-bottom-left-radius: 500px;
					overflow: hidden;

					img {
						width: 100%;
					}
				}
			}

		}

		.model1 {
			@include ct1400;
			padding: 40px 0;

			.pictureCom {
				@include fj();
				align-items: flex-end;

				.pictureComWrap {
					width: 244px;
					height: 346px;
					border-radius: 10px;
					overflow: hidden;

					img {
						width: 100%;

					}
				}

				.list1,
				.list3 {
					height: 240px;
				}

				.list2 {
					height: 330px;
					@include fj();
					flex-direction: column;

					.img1 {
						height: 80px;
						border-radius: 10px;
					}

					.img2 {
						height: 120px;
						border-radius: 10px;
					}
				}
			}

			.fadeInUp-20 {
				animation-name: fadeInUp-20;
			}

			.fadeIn {
				animation-name: fadeIn;
			}

			.animated {
				animation-duration: 2.4s;
				animation-fill-mode: both;
			}

			.slogan {
				width: 400px;
				font-size: 24px;
				font-weight: 700;
				margin: 0 auto 20px;
				text-align: center;
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