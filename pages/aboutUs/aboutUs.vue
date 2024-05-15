<template>
	<view class="aboutUs">
		<view class="banner">
			<img :src="resourceImg.aboutUs" alt="" />
		</view>
		<view class="mainWrap">
			<view class="main">
				<view class="slogan animate__animated animate__fadeInUp">
					<view>{{aboutUsInfo.about_us_title}}</view>
					<view class="grayColor">{{aboutUsInfo.about_us_subtitle}}</view>
				</view>
			</view>
			<view class="info animate__animated animate__fadeInUp">
				<view class="row" v-html="aboutUsInfo.text">
				</view>

			</view>
		</view>
		<view class="map">
			<view class="mapWrap">
				<view class="mapL">
					<img :src="resourceImg.map" alt="" />
				</view>
				<view class="mapM">
					<view class="locationItem">
						<img :src="resourceImg.icon1" alt="" />
						<view class="info">
							<view class="title">公司名称 合作成为partner</view>
							<view class="desc">北京星卉川鹭科技有限公司</view>
						</view>
					</view>
					<view class="locationItem">
						<img :src="resourceImg.icon2" alt="" />
						<view class="info">
							<view class="title">公司地址 留学咨询</view>
							<view class="desc">上海市静安区吴江路 182 号 </view>
							<view class="desc">国安大厦（胜安）大厦19层 1609 室</view>
						</view>
					</view>
					<view class="locationItem">
						<img :src="resourceImg.icon3" alt="" />
						<view class="info">
							<view class="title">联系方式</view>
							<view class="desc">400-123-9987</view>
						</view>
					</view>
				</view>
				<view class="mapR">
					<view class="rqItem">
						<img :src="aboutUsInfo.contact_us" alt="" />
						<view class="label">
							联系我们
						</view>
					</view>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import resourceImg from './export.js'
	import qrCode from '@image/qrCode.png';
	import {
		configApi,
	} from '@api/homeApi.js'

	export default {
		name: 'aboutUs',
		data() {
			return {
				resourceImg,
				qrCode,
				aboutUsInfo: {},
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
	.aboutUs {
		background: #F4F6FE;

		.map {
			@include mb(80px);
		}

		.mapWrap {
			@include ct1200;
			@include fj();
			align-items: center;
			.mapL{
				img{width: 600px};
			}
			.mapM {
				.locationItem {
					@include fj(flex-start);
					align-items: flex-start;
					margin: 30px 0;
					.info {
						@include ml(14px);
						.title {
							@include mb(10px);
							@include sc(18px, #333);
						}
						.desc {
							@include sc(14px, #333);
						}
					}
				}
			}
			.mapR{
				.rqItem {
					text-align: center;
					margin: 0 30px;
					@include wh(140px,140px);
					img {
						@include imgLayout;
					}
				
					.label {
						@include mt(10px);
						font-size: 16px;
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

		
			.main {
				// @include fj();
				padding: 40px 0 100px;

				.title {
					font-size: 32px;
					font-weight: 700;
					@include mb(40px);
				}

				.slogan {
					font-size: 38px;
					font-weight: 700;
					text-align: center;

					.grayColor {
						color: $partnerTitle;
						font-size: 22px;
						@include mt(16px);
					}
				}

			}
		}
	}
</style>