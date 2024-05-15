<template>
	<view class="myFoot">
		<view class="footWrap">
			<view class="footL">
				<view class="row2">
					<view class="row2first">
						TOBE
					</view>
					<view class="row2scend">
						打破信息差全网最前资源库与学习系统
					</view>
				</view>
				<custom-button @click="toNavigate('/pages/login/login?type=register')" :wh="{width:248,height:50,size:16}">加入TOBE，立刻注册</custom-button>
				<view class="row4">
					<view class="row4L">
						<view class="item">
							AP/AL
						</view>
						<view class="item">
							竞赛
						</view>
						<view class="item">
							语言
						</view>
						<view class="item">
							ACT/SAT
						</view>
						<view class="item">
							GRE/GMAT
						</view>
					</view>
				</view>
			</view>
			<view class="footR">
				<view class="codeItem">
					<img :src="footCode" alt="" />
					<view class="codeProfile">
						扫码下载APP
					</view>
				</view>
				<view class="codeItem">
					<img :src="footCode" alt="" />
					<view class="codeProfile">
						扫码添加小助手
					</view>
				</view>
			</view>
		</view>
		<view class="lastInfo">
			<view class="hr"></view>
			<view class="websitInfo">
				留学新未来营业执照　 COPYRIGHT ©2020-2021 LIUXUEXINWEILAI.COM　留学新未来　|　版权所有
			</view>
			<view class="websitInfo">
				京ICP备2020044829号-1
			</view>
		</view>
	</view>
</template>

<script>
	import footCode from '@image/footCode.png'
	export default {
		name: 'MyFoot',
		data() {
			return {
				footCode,
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