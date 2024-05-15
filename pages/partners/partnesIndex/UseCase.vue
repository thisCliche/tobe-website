<template>
	<view class="home-case">
		<VueSlickCarousel v-bind="settings">
			<view class="item" v-for="item in usecase" :key="item.id">
				<template v-if="item.type==1">
					<view class="imgWrap">
						<view class="header">
							<img class="headerImg" :src="item.image_text" />
							<view class="nameWrap">
								<view class="name">{{item.name}}</view>
								<view class="dec">{{item.subname}}</view>
							</view>
						</view>
						<view class="des">
							<view class="title">老师背景：</view>
							<view class="info">
								{{item.edu_back}}
							</view>
							<view class="title">擅长科目：</view>
							<view class="info">
								{{item.edu_subject}}
							</view>
							<view class="title">上课特点：</view>
							<view class="info">
								{{item.edu_special}}
							</view>
						</view>
					</view>
				</template>
				<template v-else>
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
					
				</template>
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

			// padding: 20px 14px;
			box-sizing: border-box;
			.desc{
				padding: 10px;
				@include sc(14px,#666);
			}
			.header2 {
				width: 100%;
				height: 140px;
				background-image: linear-gradient(to right,$gradientS,$gradientE);
				color: #fff;
				@include fj(flex-start);
				padding-left: 10px;
				align-items: center;
				.headerImg{
					@include wh(80px,80px);
					object-fit: cover;
					border-radius: 50%;
					overflow: hidden;
				}
				.nameWrap{
					@include ml(10px);
					.name{
						font-size: 18px;
						@include mb(6px);
					}
					.dec{
						font-size: 14px;
					}
				}
			}

			.header {
				// @include fj(flex-start);
				// align-items: center;
				border-bottom: 1px solid $gray;

				.headerImg {
					width: 100%;
					height: 100px;
					object-fit: cover;
				}

				.nameWrap {
					// font-weight: 700;
					// @include ml(10px);
					@include fj(flex-start);
					align-items: center;
					padding: 10px 16px;

					// width: 132px;
					.name {
						font-size: 18px;
						line-height: 30px;
						font-weight: 700;
						@include ellipsis;
					}

					.dec {
						font-size: 12px;
						color: $gradientS;
						border: 1px solid $gradientS;
						padding: 0px 8px;
						line-height: 24px;
						height: 24px;
						text-align: center;
						border-radius: 4px;
						@include ml(10px);
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