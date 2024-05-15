<template>
	<view class="home-case">
		<VueSlickCarousel v-bind="settings">
			<view class="item" v-for="item in usecase" :key="item.id">
				<view class="imgWrap">
					<image :src='item.imageUrl' class='iamgeCase' />
					<view class="footerWap">
						<view class="title">
							夏威夷州政府实习
						</view>
						<view class="line">
							参与人群：高中生/成人
						</view>
						<view class="line">
							形式地点：线上/线下
						</view>

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
					focusOnSelect: true,
					 arrows: true, //展示箭头
					  infinite: true,
					  slidesToShow: 3,
					  slidesToScroll: 3,
					  speed: 500,
					  
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
	@import "../../assets/styles/minix.scss";

	.home-case {
		@include mt(16px);
	
width: 100%;
		::v-deep .slick-next {
	

			&:before {
				color: #5053E3;
				font-size: 37px;
			}
		}

		::v-deep .slick-prev {
			left: -80px !important;
			  z-index: 10;


			&:before {
				color: #5053E3;
				font-size: 37px;
			}
		}
	}

	.item {
		outline: none;


		.imgWrap {
			width: vw(455);
			height: vw(430);
			box-sizing: border-box;
			position: relative;
			background-color: #fff;

			.iamgeCase {
				width: vw(455);
				height: vw(387);
				object-fit: cover;
			}

			.footerWap {
				position: absolute;
				top: 16vw;
				left: vw(31);
				display: flex;
				flex-direction: column;
				z-index: 10;
				box-sizing: border-box;

				.title {
					font-weight: 600;
					font-size: vw(18);
					line-height: vw(25);
					color: #222326;
					margin: vw(8) 0;
				}

				.line {
					font-size: vw(16);
					color: #222326;
					line-height: vw(22);
					text-align: left;
					margin: vw(4) 0;
				}
			}







		}



		&::v-deep .slick-list .slick-track {
			margin: 0 !important;
		}

		&::v-deep .el-avatar {
			width: 120px;
			height: 120px;
			display: flex;
			justify-content: center;
		}
	}
</style>