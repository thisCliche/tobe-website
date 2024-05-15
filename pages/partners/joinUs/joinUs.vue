<template>
	<view class="joinUs">
		<view class="banner">
			<img :src="aboutUs" alt="" />
		</view>
		<view class="model9">
			<view class="model9Wrap">
				<view class="row1 wow animate__animated animate__fadeInUp">TOBE正成为最具创造力和责任心的留学公司</view>
				<view class="hr"></view>
				<view class="row2 wow animate__animated animate__fadeInUp">
					致力于以创意方式助学生实现梦想。我们聚集最优秀的年轻人，恪守严格的道德准则，以几近苛刻的要求和最卓越的专业水平为客户提供一流的留学咨询和能力培养服务。</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import aboutUs from '@image/aboutUs/JoinUs.jpg'
	import aboutUsCode from '@image/aboutUsCode.png'
	export default {
		data() {
			return {
				aboutUs,
				aboutUsCode
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.banner {
		// height: 500px;

		img {
			// @include imgLayout;
			    vertical-align: sub;
		}

	}

	.model9 {
		@include bis-self("../../../assets/image/science/modelBg3.jpg");
		@include modelPd;

		.model9Wrap {
			@include ct1200;
			text-align: center;

			.row1 {
				font-weight: 600;
				font-size: 38px;
				color: #000;
				line-height: 53px;
				@include mb(12px);
			}

			.hr {
				@include wh(46px, 8px);
				background: #000;
				border-radius: 20px;
				margin: 0 auto;
			}

			.row2 {
				font-weight: 400;
				font-size: 22px;
				color: #999999;
				line-height: 50px;
				width: 700px;
				margin: 0 auto;
			}
		}
	}

	.mainWrap {
		@include modelPdOther;
		@include ct1200;

		.bottomSlogan {
			text-align: center;
			margin: 60px 0 100px;

			.row1 {
				font-size: 30px;
				font-weight: 700;
			}

			.row2 {
				@include mt(20px);
				@include sc(22px, $partnerTitle)
			}
		}

		.main {
			@include fj();

			.mainL {
				@include fj(space-around);
				flex-direction: column;
				padding: 60px 0;
				text-align: center;

				.row1 {
					font-size: 40px;
					font-weight: 700;
				}

				.row2 {
					@include sc(26px, $partnerTitle)
				}

				.row3 {
					@include sc(22px, $partnerTitle)
				}
			}

			.mainR {
				width: 700px;

				img {
					@include imgLayout;
				}
			}
		}
	}
</style>