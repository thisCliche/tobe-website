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
					<view class="des">
						<template v-if="item.type==1">
							<view class="">
								老师背景：{{item.edu_back}}
							</view>
							<view class="">
								擅长科目：{{item.edu_subject}}
							</view>
							<view class="">
								上课特点：{{item.edu_special}}
							</view>
						</template>
						<template v-else>
							{{item.text}}
						</template>
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
			margin: 0 auto;
			background: $bc;
			border-radius: 10px;
			padding: 20px 14px;
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
					font-weight: 700;
					@include ml(10px);
width: 132px;
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
				@include multi-ellipsis--l(8);
			}
		}



		&::v-deep .slick-list .slick-track {
			margin: 0 !important;
		}
	}
</style>