<template>
	<view class="home-case">
		<VueSlickCarousel v-bind="settings">
			<view class="item" v-for="item in usecase" :key="item.id">
				<view class="imgWrap">
					<view class="header">
						<img class="headerImg" :src="item.image_text" />
						<view class="nameWrap">
							<view class="name">{{item.name}}</view>
						</view>
					</view>
					<view class="des">{{item.text}}</view>
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
	@import "../../../assets/styles/minix.scss";

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
			margin: 0 auto;
			background: $bc;
			border-radius: 10px;
			padding: 30px 24px;
			box-sizing: border-box;

			.header {
				// @include fj(flex-start);
				// align-items: center;
				text-align: center;
				.headerImg {
					width: 60px;
					height: 60px;
					border-radius: 50%;
					object-fit: cover;
				}

				.nameWrap {
					font-weight: 700;
					@include ml(10px);
					// width: 132px;
					text-align: center;
					.name {
						font-size: 24px;
						line-height: 30px;

						@include ellipsis;
					}

					.dec {
						font-size: 14px;
					}
				}
			}

			.des {
				color: $themeColor;
				line-height: 26px;
				@include mt(20px);
				@include multi-ellipsis--l(7);
			}
		}



		&::v-deep .slick-list .slick-track {
			margin: 0 !important;
		}
	}
</style>