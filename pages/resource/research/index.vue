<template>
	<view class="IndexPage">
		<view class="banner">
			<VideoProfile :introduction="introduction" withValue="100%" heightValue="700px" borderRidius="0px" />
		</view>
		<view class="container1">
			<view class="title"> 最受欢迎 </view>
			<view class="container1wap">
				<HomeCase></HomeCase>
			</view>
		</view>
		<view class="container1">
			<view class="title"> 最近上新 </view>
			<view class="container1wap">
				<HomeCase></HomeCase>
			</view>
		</view>

		<view class="container2">
			<view class="wap1">
				<view class="nselect">

					<el-checkbox-group v-model="format" @change="getRecoce">
						<el-checkbox :label="item.id"  v-for="(item,index) in formatList"
							:key="index">{{item.value}}</el-checkbox>
						</el-checkbox>

					</el-checkbox-group>

				</view>
				<view class="nselect">

					<el-select v-model="major" placeholder="请选择学科" @change="getRecoce">
						<el-option v-for="item in majorList" :key="item.id" :label="item.value" :value="item.id">
						</el-option>
					</el-select>

				</view>

				<view class="footer">
					<view class="foot-img">
						<img :src="qrcode" alt="" srcset="" />
					</view>
					<view class="foot-text"> 入学申请咨询 </view>
				</view>
			</view>
			<view class="wap2">
				<view class="wapItem" v-for="(item, index) in schollResourceList" :key="item.id" @click="getDtail(item.id)">
					<view class="item-img">
						<img :src="item.image" alt="" srcset="" />
					</view>
					<view class="item-logo">
						<img :src="item.avatar" alt="" srcset="" />
					</view>
					<view class="title"> {{item.name}} </view>
					<view class="subtitle"> 线上 </view>
					<view class="item-wap">
						{{item.overview}}
					</view>
				</view>
			</view>
		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import {
		tagIcon
	} from "../export.js";

	import VideoProfile from '@/assets/components/VideoProfile.vue';
	import HomeCase from "../HomeCase.vue";
	import {
		videoApi,
		bannerApi,
		configApi,
		textConfig,
		resourceList,
		scientificSearch

	} from "@api/resource.js";
	export default {
		name: "PagesIndex",
		components: {
			VideoProfile,
			HomeCase,
		},
		data() {
			return {
				introduction: {},
				qrcode: '',
				schollResourceList: [],
				format: [],
				major: '',
				formatList: [],
				majorList: [],


			};
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				let resDataList = await Promise.all([
					videoApi({
						type: 30,
						limit: 1,
					}),
					bannerApi({
						type: 37,
						limit: 2,
					}),
					resourceList({
						type: "科研"
					}),
					scientificSearch({})



				]);
				let topVideo = [],
					cePinginfo = [];

				resDataList.map((res, idx) => {
					console.log(res, idx);
					if (idx == 0) {
						res.data.map((item) => {
							topVideo.push({
								imageUrl: item.image_text,
								videoUrl: item.video_text,
								id: item.id,
							});
						});
					} else if (idx == 1) {
						let data = []
						res.data.map(item => {
							data.push({
								imageUrl: item.image_text,

							})
						})
						this.qrcode = data[0].imageUrl
					} else if (idx == 2) {
						res.data.map((item) => {
							this.schollResourceList.push({
								id: item.id,
								image: item.image,
								avatar: item.avatar,
								introduction: item.introduction,
								overview: item.overview,
							})


						});
					} else if (idx == 3) {
						const {
							format,
							major
						} = res.data
						this.formatList = format
						this.majorList = major
					}

				});

				this.introduction = topVideo[0];


			},
			getRecoce() {

				resourceList({
					type: "科研",
					format: this.format,
					major: this.major

				}).then(res => {
					let dataRes = [];
					res.data.map(item => {

						dataRes.push({
							id: item.id,
							image: item.image,
							avatar: item.avatar,
							introduction: item.introduction,
							overview: item.overview,
						})
					})

					this.schollResourceList = dataRes

				})


			},
			getDtail(val) {
				// 当前页面发起跳转
				uni.navigateTo({
					url: `/pages/resource/research/detail?id=${val}&type=1`
				});
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import "../../../assets/styles/minix.scss";

	.IndexPage {
		width: 100%;

		.banner {
			@include fj(center);
			width: 100%;
			height: 700px;
			background: rgb(196, 196, 196);
		}

		.container1 {
			@include ct1200;
			padding: 20px 0;
			flex-direction: column;

			.title {
				color: rgb(0, 0, 0);
				font-size: 48px;
				font-weight: 700;
				line-height: 62px;
			}
		}

		.container2 {
			@include ct1200;
			@include modelPd;
			display: flex;

			.wap1 {
				display: flex;
				width: 200px;
				flex-direction: column;
				gap: 5px 0;

				.nselect {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					margin: 20px 0;



				}


				.footer {
					margin-top: 50px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 100%;

					.foot-img {
						width: 120px;
						height: 120px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.foot-text {
						color: rgb(0, 0, 0);
						margin-top: 10px;

						font-size: 18px;
						font-weight: 700;
						line-height: 40px;
						letter-spacing: 0px;
					}
				}
			}

			.wap2 {
				display: flex;
				flex-wrap: wrap;
				margin-left: 40px;

				.wapItem {
					@include fj(flex-start);
					flex-direction: column;
					position: relative;
					margin: 10px;
					width: 310px;
					height: 430px;
					box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
					box-sizing: border-box;
					cursor: pointer;

					.item-img {
						width: 100%;
						height: 150px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.item-logo {
						position: absolute;
						top: 20%;
						left: 5%;
						width: 100px;
						height: 100px;
						border-radius: 20px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.title {
						color: rgb(0, 0, 0);
						margin-top: 20px;
						font-size: 26px;
						font-weight: 700;
						line-height: 30px;
						padding-right: 10px;

						display: flex;
						justify-content: flex-end;
						box-sizing: border-box;
					}

					.subtitle {
						color: rgb(0, 0, 0);
						margin-bottom: 10px;
						font-size: 18px;
						font-weight: 700;
						line-height: 20px;
						display: flex;
						justify-content: flex-end;
						padding-right: 10px;
						box-sizing: border-box;
					}

					.item-wap {
						width: 100%;
						overflow-wrap: break-word;
						color: rgb(0, 0, 0);
						font-size: 20px;
						font-weight: 700;
						line-height: 24px;
						letter-spacing: 0px;
						padding: 0 10px;
					}
				}
			}
		}
	}
</style>