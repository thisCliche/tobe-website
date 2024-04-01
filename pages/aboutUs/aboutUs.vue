<template>
	<view class="aboutUs">
		<view class="mainWrap">
			<view class="main">
				<view class="mainL">
					<view class="title animate__animated animate__fadeInUp">OUR VISION</view>
					<view class="slogan animate__animated animate__fadeInUp">
						<text>{{aboutUsInfo.about_us_title}}</text>
						<text class="grayColor">{{aboutUsInfo.about_us_subtitle}}</text>
					</view>
				</view>
				<view class="mainR animate__animated animate__fadeIn">
					<img :src="aboutUsInfo.image" alt="" />
				</view>
			</view>
			<view class="info animate__animated animate__fadeInUp">
				<view class="row" v-html="aboutUsInfo.text">
				</view>
				
			</view>
			<view class="rqCodeWrap">
				<view class="rqItem">
					<img :src="aboutUsInfo.contact_us" alt="" />
					<view class="label">
						联系我们
					</view>
				</view>
				<view class="rqItem">
					<img :src="aboutUsInfo.download_app" alt="" />
					<view class="label">
						扫码下载'APP'
					</view>
				</view>
			</view>
		</view>
		<view class="location">
			<view class="locationWrap">
				<view class="locationItem">
					<view class="title"><span class="default">公司名称</span><span class="minor">合作为partner</span></view>
					<view class="dec">某某公司</view>
				</view>
				<view class="locationItem">
					<view class="title"><span class="default">公司名称</span><span class="minor">合作为partner</span></view>
					<view class="dec">某某公司</view>
				</view>
				<view class="locationItem">
					<view class="title"><span class="default">公司名称</span><span class="minor">合作为partner</span></view>
					<view class="dec">某某公司</view>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import qrCode from '@image/qrCode.png';
	import {
		configApi,
	} from '@api/homeApi.js'

	export default {
		name: 'aboutUs',
		data() {
			return {
				qrCode,
				aboutUsInfo:{},
			}
		},
		methods: {
			async getData() {
				let res = await configApi();
				this.aboutUsInfo = res.data
				console.log(res);
			},
		},
		created() {
			this.getData()

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/minix.scss";

	.aboutUs {
		.location {
			height: 120px;
			background: $locationBg;

			.locationWrap {
				@include ct1200;
				@include fj(space-between);
				align-items: center;
				color: #fff;
				height: 100%;

				.locationItem {
					.dec {
						@include sc(14px, #d5d5d5);
					}

					.title {
						@include mb(6px);

						.default {
							font-size: 18px;
						}

						.minor {
							font-size: 14px;
							@include ml(8px);
						}
					}
				}
			}
		}

		.mainWrap {
			@include modelPdOther;
			@include ct1200;

			.info {
				@include sc(18px, $partnerTitle);

				.row {
					@include mb(20px);
				}
			}

			.rqCodeWrap {
				@include fj(flex-end);
				@include mt(40px);

				.rqItem {
					text-align: center;
					margin: 0 30px;

					img {
						width: 150px;
						height: 150px;
						object-fit: cover;
					}

					.label {
						@include mt(10px);
						font-size: 22px;
						font-weight: 700;
					}
				}
			}

			.main {
				@include fj();
				padding: 40px 0 100px;

				.mainR {
					img {
						width: 300px;
						height: 300px;
						object-fit: cover;
					}
				}

				.mainL {
					width: 800px;

					.title {
						font-size: 32px;
						font-weight: 700;
						@include mb(40px);
					}

					.slogan {
						font-size: 26px;

						.grayColor {
							color: $partnerTitle;
						}
					}
				}
			}
		}
	}
</style>