<template>
	<view class="home-case">
		<template v-if="usecase.length">
			<VueSlickCarousel v-bind="settings">

				<view class="item" v-for="item in usecase" :key="item.id">
					<view class="imgWrap">
						<view class="header"><el-avatar shape="circle" :src="item.engineerUrl"></el-avatar></view>
						<view class="name">{{item.name}}</view>
						<view class="nis">大学大学大学大学大学</view>
						<view class="city">韩国</view>
						<view class="line"></view>
						<view class="des">{{item.desc}}</view>
					</view>
				</view>

			</VueSlickCarousel>
		</template>
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
			@include wh(200px, 380px);
			overflow: hidden;
			border-radius: 10px;
			padding: 26px 16px;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.header {
				display: flex;
				justify-content: center;
			}

			.des {
				color: $themeColor;
				line-height: 26px;
				@include mt(20px);
				@include multi-ellipsis--l(6);
				height: 156px;
			}

			.name {
				@include mt(5px);
				font-weight: 700;
				color: #3B6AAB;
				text-align: center;

			}

			.nis {
				@include mt(5px);
				text-align: center;
			}

			.city {
				@include mt(5px);
				text-align: center;
			}

			.line {
				@include mt(10px);
				display: flex;
				justify-content: center;
				align-items: center;
				width: 30px;
				height: 5px;
				background-color: #3B6AAB;
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