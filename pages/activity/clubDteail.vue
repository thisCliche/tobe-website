<template>
	<view class="science">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="container3">
			<view class="positon">

				所在位置：<text class="cursor-pointer">首页</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">活动</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">社团</text><i class="el-icon-arrow-right
			"></i><text class="cursor-pointer">社团详情</text>


			</view>
			<view class="disctory">

				<view class="disctory-list">
					<view class="list-item" v-for="item in 4 " :key="item">
						<img src="@/assets/image/resource/夏校配图.png" alt="" srcset="" />

						<view class="item-name">
							我们减肥社开始营业啦

						</view>

					</view>

				</view>

			</view>

			<vue-waterfall-easy ref="waterfall" :imgsArr="pictureList" :height="1000" :maxCols="4" :gap='46'
				@click="clickFn" @scrollReachBottom="getPictrueData" style="padding-bottom: 200px; background: #F4F6FE;">
				<!-- 图片信息 -->

				<view class="img-info" slot-scope="props">

					<view class="some-info"> {{props.value.info}}</view>

				</view>
				<!-- 自定义结束文案 -->
				<view slot="waterfall-over">没有更多数据了</view>
			</vue-waterfall-easy>



		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import resourceImg from './indexImport'
	import vueWaterfallEasy from 'vue-waterfall-easy'
	import {
		videoApi
	} from '@api/commonApi.js'
	export default {
		name: 'science',
		components: {
			CommonBanner,
			vueWaterfallEasy
		},
		data() {
			return {
				bannerProfile: {},
				pictureList: [{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/2-.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/3.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/4.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/5.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/6.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/7.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/8.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/9.jpg",

						"info": "一些图片描述文字"
					},
					{
						"src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/10.jpg",

						"info": "一些图片描述文字"
					}

				]
			}
		},
		methods: {
			async getData() {
				let apiRequestArr = [videoApi({
					type: 4,
					limit: 1
				})];
				let result = await Promise.all(apiRequestArr);
				result.map((item, idx) => {
					switch (idx) {
						case 0:
							this.bannerProfile = item.data[0];
							this.bannerProfile.maskInfo = {
								maskImg: resourceImg.InfotroMask,
								description: "找到你的学术资料，开启你的学习之旅开启你的学习之旅"
							}
							break;
						default:
							break;
					}
				})
			},
			getPictrueData() {

				this.pictureList = this.pictureList.concat([])
				console.log(this.pictureList)
			},
			clickFn(event, {
				index,
				value
			}) {
				event.preventDefault()
				console.log(event)

				// if (event.target.tagName.toLowerCase() == "img") {
				// 	console.log("img clicked", index, value);
				// }
			},
		},
		created() {
			this.getData();
			this.getPictrueData()
		}
	}
</script>

<style lang="scss" scoped>
	.container3 {
		width: 100%;
		background: #F4F6FE;
		padding: 0 vw(240);
		box-sizing: border-box;

		.positon {
			margin: 15px 0;
			color: #666666;
			line-height: vw(17);
			text-align: left;
			font-style: normal;

			.cursor-pointer {
				cursor: pointer;
			}


		}

		.disctory {
			margin-top: vw(20);
			padding: vw(45);
			width: 100%;

			.disctory-list {
				width: 100%;
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				grid-template-rows: repeat(1, 1fr);
				grid-column-gap: vw(18);
				justify-content: center;
				align-items: center;

				.list-item {
					width: vw(325);
					
					background-color: #FEFFFF;
					border-radius: 20px;


					img {
						width: 100%;
						height: vw(410);
						object-fit: cover;
					}

					.item-name {
						padding-left: 20px;
						width: 100%;
						height: vw(61);
						color: #333333;
						line-height: vw(22);
						font-size: vw(16);
						display: flex;
						align-items: center;
						box-sizing: border-box;
					}
				}
			}


		}


	}

	.img-info {
		height: vw(60);
		background: #FEFFFF;
		width: 100%;
		border-radius: 20px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		.some-info {
			font-size: vw(16);
			color: #333333;


		}

	}

	a {
		text-decoration: none;
	}
</style>