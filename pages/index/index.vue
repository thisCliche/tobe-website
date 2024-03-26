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
				<view class="pictureComWrap animated fadeInUp-20" :class="'list'+idx" v-for="(item,idx) in model1ComImg">
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
	</view>
</template>

<script>
	import bannerUrl from '@image/banner.png';
	import consulting from '@image/consulting.jpg';
	import design from '@image/design.jpg';
	import plate from '@image/plate.jpg';
	import tech from '@image/tech.jpg';
	import project from '@image/project.jpg';
	import {
		login
	} from '@/assets/api/homeApi.js'
	export default {
		name: 'home',
		data() {
			return {
				bannerUrl,
				model1ComImg: [consulting, design, plate, tech, project],
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
			&>>>.el-carousel__arrow {
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

		.model3 {
			@include ct1400;
			padding: 40px 0;
			.adsense{
				width: 100%;
				height: 460px;
				border-radius: 10px;
				overflow: hidden;
				img{
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