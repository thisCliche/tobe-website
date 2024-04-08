<template>
	<view class="myFoot">
		<view class="footWrap">
			<view class="row1" @click="toNavigate('/pages/aboutUs/aboutUs')">About US</view>
			<view class="row2">
				<view class="">
					我们在做一家一往无前的留学全栈产品
				</view>
				<view class="">
					让你的每一个留学点子得到真正的升华和构造
				</view>
			</view>
			<view class="row3" @click="toNavigate('/pages/login/login?type=register')">加入TOBE，立刻注册</view>
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
		},
		methods: {
			toNavigate(path) {
				uni.navigateTo({
					url: path
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import "assets/styles/myComponents.scss";
</style>