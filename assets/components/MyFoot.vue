<template>
	<view class="myFoot">
		<view class="footWrap">
			<view class="row1">加入我们</view>
			<view class="row2">
				<view class="">
					我们在做一家一往无前的留学全栈产品
				</view>
				<view class="">
					让你的每一个留学点子得到真正的升华和构造
				</view>
			</view>
			<view class="row3">加入TOBE，立刻注册</view>
			<view class="row4">
				<view class="row4L">
					<view class="item">
						学科
					</view>
					<view class="item">
						牛剑/竞赛 语言
					</view>

					<view class="item">
						面试
					</view>
					<view class="item">
						申请
					</view>
					<view class="item">
						文书
					</view>
				</view>
				<view class="img">
					<img :src="footLogo" alt="" />
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import footLogo from '@image/footLogo.png'
	export default {
		name: 'MyFoot',
		data() {
			return {
				footLogo,
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/minix.scss";

	.myFoot {
		background: $footBg;
		color: #fff;
		padding: 60px 0;

		.footWrap {
			@include ct1200;

			.row1 {
				font-size: 30px;
				font-weight: 700;
				@include mb(20px);
			}

			.row2 {
				@include mb(20px);
			}

			.row3 {
				@include wh(350px, 60px) background: #fff;
				border-radius: 46rpx;
				color: #333;
				line-height: 60px;
				text-align: center;
				font-size: 30px;
				font-weight: 700;
				cursor: pointer;
			}
			.row4{
				@include fj();
				@include mt(40px);
				.row4L{
					width: 600px;
					@include fj();
					font-size: 24px;
					.item{
						cursor:pointer;
						transition: 0.6s ease;
						&:hover{
							color:$themeColor;
						}
					}
				}
			}
		}
	}
</style>