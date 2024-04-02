<template>
	<view class="home-case">
		<VueSlickCarousel v-bind="settings">
			<view class="item" v-for="item in usecase" :key="item.id">
				<view class="imgWrap">
					<view class="header">
						<img class="headerImg" :src="item.image_text" />
						<view class="nameWrap">
							<view class="name">{{item.name}}</view>
							<view class="dec">{{item.subname}}</view>
						</view>
					</view>
					<view class="recommend">推荐理由</view>
					<view class="des">{{item.text}}</view>
					<view class="btn">查看要求</view>
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
					autoplay: false,
					arrows: true,
					"dots": false,
					"infinite": true,
					"initialSlide": 2,
					"speed": 500,
					"slidesToShow": 3,
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
		height: 360px;
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
			@include wh(350px, 330px);
			overflow: hidden;
			margin: 0 auto;
			// background: $bc;
			border: 1px solid $bc;
			border-radius: 10px;
			padding: 30px 24px;
			box-sizing: border-box;

			.header {
				@include fj(flex-start);
				align-items: center;

				.headerImg {
					width: 60px;
					height: 60px;
					border-radius: 50%;
					object-fit: cover;
				}

				.nameWrap {

					@include ml(16px);
					width: 220px;

					.name {
						font-size: 22px;
						line-height: 30px;
						font-weight: 700;
						@include ellipsis;
					}

					.dec {
						font-size: 14px;
						color: $partnerTitle;
					}
				}
			}

			.des {
				color: $themeColor;
				line-height: 26px;
				@include mt(14px);
				@include multi-ellipsis--l(4);
				height: 104px;
			}
			.btn{
				margin: 20px auto 0;
				cursor: pointer;
				border-radius: 50px;
				color: $recommendColor;
				font-size: 14px;
				font-weight: 700;
				padding: 6px 20px;
				border: 1px solid $recommendColor;
				text-align: center;
				width: 160px;
			}
			.recommend {
				@include mt(10px);
				color: $recommendColor;
				line-height: 30px;
				position: relative;

				&::after {
					content: '';
					width: 228px;
					border-top: 1px solid #65c798;
					position: absolute;
					top: 16px;
					right: 0px;
				}
			}
		}



		&::v-deep .slick-list .slick-track {
			margin: 0 !important;
		}
	}
</style>