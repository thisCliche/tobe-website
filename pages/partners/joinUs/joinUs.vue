<template>
	<view class="joinUs">
		<view class="banner">
			<img :src="aboutUs" alt="" />
		</view>
		<view class="mainWrap">
			<view class="main">
				<view class="mainL animate__animated animate__fadeInUp">
					<view class="row1">
						扫描二维码
					</view>
					<view class="">
						<view class="row2">
							立即添加小助手，
						</view>
						<view class="row2">
							开启你的合作之旅
						</view>
					</view>
					<view class="row3">
						通过小助手的材料真实性审核后，小助手会帮您把个人信息发布在平台上，开启您的合作之旅
					</view>
				</view>
				<view class="mainR animate__animated animate__fadeIn">
					<img :src="aboutUsCode" alt="" />
				</view>
			</view>
			<view class="bottomSlogan animate__animated animate__fadeInUp">
				<view class="row1">
					TOBE正成为最具创造力和责任心的留学平台
				</view>
				<view class="row2">
					致力于以创意方式助学生实现梦想。我们聚集最优秀的年轻人，恪守严格的道德准则，以几近苛刻的要求和最卓越的专业水平，希望加入我们的你也能成为我们的一员，让学生更好的成长！
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import aboutUs from '@image/aboutUs.png'
	import aboutUsCode from '@image/aboutUsCode.png'
	export default {
		data() {
			return {
				aboutUs,aboutUsCode
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/minix.scss";
.banner {
		height: 700px;

		img {
			@include imgLayout;
		}

	}
	.mainWrap{
		@include modelPdOther;
		@include ct1200;
		.bottomSlogan{
			text-align: center;
			margin: 60px 0 100px;
			.row1{
				font-size: 30px;
				font-weight: 700;
			}
			.row2{
				@include mt(20px);
				@include sc(22px,$partnerTitle)
			}
		}
		.main{
			@include fj();
			.mainL{
				@include fj(space-around);
				flex-direction: column;
				padding: 60px 0;
				text-align: center;
				.row1{
					font-size: 40px;
					font-weight: 700;
				}
				.row2{
					@include sc(26px,$partnerTitle)
				}
				.row3{
					@include sc(22px,$partnerTitle)
				}
			}
			.mainR{
				width: 700px;
				img{
					@include imgLayout;
				}
			}
		}
	}
</style>
