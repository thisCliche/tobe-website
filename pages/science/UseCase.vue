<template>
	<view class="home-case">
		<VueSlickCarousel v-bind="settings">
			<view class="item" v-for="item in usecase" :key="item.id">
				<view class="imgWrap">
					<view class="header2">
						<img class="headerImg" :src="item.image_text" />
						<view class="nameWrap">
							<view class="name">{{item.name}}</view>
							<view class="dec">{{item.subname}}</view>
						</view>
					</view>
					<view class="desc">
						{{item.text}}
					</view>
				</view>
			</view>
		</VueSlickCarousel>
	</view>
</template>

<script>
	import VueSlickCarousel from 'vue-slick-carousel'
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
	export default {
		name: 'UseCase',
		props: ['usecase'],
		data() {
			return {
				settings: {
					draggable: false,
					autoplay: true,
					arrows: true,
					"dots": false,
					"infinite": true,
					"initialSlide": 2,
					"speed": 500,
					"slidesToShow": 4,
					"slidesToScroll": 1,
					"swipeToSlide": false
				},
			}
		},
		methods: {},
		components: {
			VueSlickCarousel
		},
	}
</script>

<style lang="scss" scoped>
	.home-case {
		@include mt(16px);
		height: 400px;
		overflow: hidden;

		::v-deep .slick-next {
			right: 0px;
			@include wh(30px, 30px);

			&:before {
				color: $tagBg;
				font-size: 30px;
			}
		}

		::v-deep .slick-prev {
			left: 0px;
			@include wh(30px, 30px);
			z-index: 99;

			&:before {
				color: $tagBg;
				font-size: 30px;
			}
		}
	}

	.item {
		outline: none;

		.imgWrap {
			@include wh(250px, 360px);
			overflow: hidden;
			// margin: 0 auto;
			background: #fff;
			border-radius: 10px;
			position: relative;
			// padding: 20px 14px;
			box-sizing: border-box;

			.desc {
				padding: 10px;
				    font-size: 14px;
				    color: #666;
				    border-radius: 20px;
				    position: absolute;
				    top: 168px;
				    left: 0;
				    right: 0;
				    background: #fff;
				    z-index: 99;
			}

			.header2 {
				width: 100%;
				height: 180px;
				background-image: linear-gradient(to right, $gradientS, $gradientE);
				color: #fff;
				@include fj(center);
				flex-direction: column;
				align-items: center;

				.headerImg {
					@include wh(80px, 80px);
					object-fit: cover;
					border-radius: 50%;
					overflow: hidden;
				}

				.nameWrap {
					@include mt(10px);
					text-align: center;
					.name {
						font-size: 18px;
						@include mb(6px);
					}

					.dec {
						font-size: 14px;
					}
				}
			}


			.des {
				padding: 10px 16px;
				.title {
					@include mb(4px);
				}

				.info {
					@include sc(14px, #666);
					@include mb(6px);
					@include multi-ellipsis--l2;
				}

				// text-align: center;
				// color: $themeColor;
				// line-height: 26px;
				// @include mt(20px);
				// @include multi-ellipsis--l(8);
			}
		}



		&::v-deep .slick-list .slick-track {
			margin: 0 !important;
		}
	}
</style>