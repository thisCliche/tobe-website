<template>
	<view class="interCollege">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="main">
			<view class="mainWrap">
				<view class="linkWrap">
					<view class="linkItem">
						<img :src="collegeLink" alt="" />
						<view class="title">教育部监管信息平台（超链2）</view>
					</view>
					<view class="linkItem">
						<img :src="collegeLink" alt="" />
						<view class="title">教育部监管信息平台（超链2）</view>
					</view>
				</view>
				<view class="filter">
					<view class="filterRow">
						<label for="">地区:</label>
						<el-radio-group v-model="radio2" size="medium">
							<el-radio-button :label="item" v-for="(item,idx) in filterList.class" :key="idx"></el-radio-button>
						</el-radio-group>
					</view>
					<view class="filterRow">
						<label for="">年级:</label>
						<el-radio-group v-model="radio1" size="medium">
							<el-radio-button :label="item" v-for="(item,idx) in filterList.country" :key="idx"></el-radio-button>
						</el-radio-group>
					</view>
				</view>
				<view class="listWrap">
					<view class="collegeItem" @click="toDetail" v-for="(item) in 10" :key="item">
						<view class="topImg">
							<img :src="schoolImgHolder" alt="" />
						</view>
						<view class="desList">
							<view class="title">中国传媒大学</view>
							<view class="infoRow">
								<text class="label">项目性质：</text>
								<text>IEB（保险学院）</text>
							</view>
							<view class="infoRow">
								<text class="label">学制模式：</text>
								<text>I2+2-3精英人才班 </text>
							</view>
							<view class="infoRow">
								<text class="label">留学国家：</text>
								<text>英国、美国、澳洲、加拿大</text>
							</view>
						</view>
					</view>
				</view>
				<view class="pageWrap">
					<el-pagination background @size-change="handleSizeChange"
						@current-change="handleCurrentChange" :current-page.sync="currentPage"
						:page-sizes="[10, 30, 50, 100]" :page-size="100"
						layout=" prev, pager, next,sizes, jumper" :total="300">
					</el-pagination>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import bannerMask from '@image/science/maskCollege.png';
	import collegeLink from '@image/science/collegeLink.png';
	import schoolImgHolder from '@image/science/schoolImgHolder.png'
	import {
		videoApi
	} from '@api/commonApi.js';
	export default {
		name: "interCollege",
		data() {
			return {
				currentPage:1,
				collegeLink,
				schoolImgHolder,
				bannerProfile: {},
				filterList: {
					country: ['美国', '英国', '加拿大', '澳大利亚', '新加坡', '新西兰', '爱尔兰'],
					class: ['3+1', '2+2', '3+1+1']
				},
				radio1: '英国',
				radio2: '3+1+1',
			}
		},
		components: {
			CommonBanner
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:'/pages/science/scienceDetail'
				})
			},
			handleSizeChange(){},
			handleCurrentChange(){},
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
								maskImg: bannerMask,
								description: "高考逆袭，国际本科让你多一个机会上好大学？"
							}
							break;
						default:
							break;
					}
				})
			},
		},
		created() {
			this.getData();
		}
	}
</script>

<style scoped lang="scss">
	.interCollege {
		.main {
			background: #F4F6FE;

			.mainWrap {
				@include ct1200;
				@include modelPdOther;
.pageWrap{
	@include mt(20px);
	text-align: center;
}
				.listWrap {
					@include fj(flex-start);
					flex-wrap: wrap;
					@include mt(20px);

					.collegeItem {
						cursor: pointer;
						margin: 10px 10px;
						@include wh(280px, 400px);
						background: #fff;
						border-radius: 20px;
						transition: all 0.4s ease;

						&:hover {
							@include defaultShadow;
						}

						.desList {
							padding: 20px;

							.title {
								font-weight: 700;
								@include mb(10px);
							}

							.infoRow {
								margin: 6px 0;
								line-height: 30px;

								.label {
									font-weight: 700;
								}
							}
						}

						.topImg {
							img {
								@include wh(280px, auto);
							}
						}
					}
				}

				.filter {
					@include mt(20px);
					padding: 20px;
					background: #fff;
					border-radius: 20px;

					.filterRow {
						margin: 10px 0;

						label {
							@include mr(10px);
						}
					}
				}

				.linkWrap {
					padding: 28px;
					background: #fff;
					border-radius: 20px;
					@include fj();

					.linkItem {
						text-align: center;

						img {
							@include wh(550px, auto);
						}

						.title {
							@include sc(16px, #666);
							@include mt(10px);
						}
					}
				}
			}
		}
	}

	// .el-radio-button ::v-deep .el-radio-button__orig-radio:checked+.el-radio-button__inner {
	// 	background-image: linear-gradient(45deg, $gradientS, $gradientE);
	// }
</style>