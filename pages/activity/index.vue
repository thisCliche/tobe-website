<template>
	<view class="IndexPage">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="model2">

			<view class="model2Item">
				<view class="bottom">
					<view class="video">
						<img src="@image/resource/科研配图.png" alt="" srcset="" />
					</view>
					<view class="textDiscipt">
						<view class="textTitle">
							<view class="name_en">
								PUBLIC GOOD
							</view>
							<view class="name_cn">
								公益
							</view>
						</view>

						<view class="textBody">
							组织名校招生官、高中招生主任、知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开组织名校招生官、高中招生主任知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开沙龙活动

						</view>
						<view class="textBody2">
							The admissions officers of prestigious schools and well-known academic tutors of senior high
							school admissions directors were organized to launch salon activities
						</view>
						<view class="text-button">
							立刻了解

						</view>

					</view>

				</view>


				<view class="top">

					<view class="textDiscipt">
						<view class="textTitle">
							<view class="name_cn">
								人文
							</view>
							<view class="name_en">
								HUMANITY
							</view>

						</view>

						<view class="textBody">
							组织名校招生官、高中招生主任、知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开组织名校招生官、高中招生主任知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开沙龙活动

						</view>
						<view class="textBody2">
							The admissions officers of prestigious schools and well-known academic tutors of senior high
							school admissions directors were organized to launch salon activities
						</view>
						<view class="text-button">
							立刻了解
						</view>

					</view>

					<view class="video">
						<img src="@image/resource/科研配图.png" alt="" srcset="" />
					</view>


				</view>
			<!-- 	111111111 -->
			
			<view class="bottom">
				<view class="video">
					<img src="@image/resource/科研配图.png" alt="" srcset="" />
				</view>
				<view class="textDiscipt">
					<view class="textTitle">
						<view class="name_en">
							STEM
						</view>
						<view class="name_cn">
							理工
						</view>
					</view>
			
					<view class="textBody">
						组织名校招生官、高中招生主任、知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开组织名校招生官、高中招生主任知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开沙龙活动
			
					</view>
					<view class="textBody2">
						The admissions officers of prestigious schools and well-known academic tutors of senior high
						school admissions directors were organized to launch salon activities
					</view>
					<view class="text-button">
						立刻了解
			
					</view>
			
				</view>
			
			</view>
			
			
			<view class="top">
			
				<view class="textDiscipt">
					<view class="textTitle">
						<view class="name_cn">
							商科
						</view>
						<view class="name_en">
							BUSINESS
						</view>
			
					</view>
			
					<view class="textBody">
						组织名校招生官、高中招生主任、知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开组织名校招生官、高中招生主任知名学术导师展开沙龙活动组织名校招生官、高中招生主任知名学术导师展开沙龙活动
			
					</view>
					<view class="textBody2">
						The admissions officers of prestigious schools and well-known academic tutors of senior high
						school admissions directors were organized to launch salon activities
					</view>
					<view class="text-button">
						立刻了解
					</view>
			
				</view>
			
				<view class="video">
					<img src="@image/resource/科研配图.png" alt="" srcset="" />
				</view>
			
			
			</view>
			

			</view>



		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import resourceImg from './indexImport'
	import {
		videoApi
	} from '@api/commonApi.js'
	export default {
		name: 'science',
		components: {
			CommonBanner
		},
		data() {
			return {
				bannerProfile: {},
				modelList: [{
						id: 1,
						reverse: false,
						imgUrl: resourceImg.model1,
						bgUrl: resourceImg.modelBg2,
						title: 'TOBE题库',
						customBtn: ['TOEFL', 'KET', 'PET', 'IELTS', 'FCE', 'OSSD', 'SAT', 'GRE', 'LSAT', 'GMAT', 'IB',
							'ALevel', 'AP'
						],
						des: ['收录海量题库在线刷题；囊括主流国际课程,全体系', '英文能力标准测试，国际竞赛题库等']
					},
					{
						id: 2,
						reverse: true,
						bgUrl: resourceImg.modelBg,
						imgUrl: resourceImg.model2,
						title: '学科助教tutor',
						des: ['收录100万余条留学申请数据库，精准分析留学申', '请优劣势，TOBE独家留学申请数据模型，为', '学生智能匹配选校名单和申请专业']
					},
					{
						id: 3,
						reverse: false,
						imgUrl: resourceImg.model3,
						bgUrl: resourceImg.modelBg2,
						title: '英语语言培训',
						des: ['囊括全国国际高中学校信息', '包含海外英美澳加等国家高中学校信息', '帮助学生和家长提前规划国际学校入学备考']
					},
					{
						id: 4,
						reverse: true,
						imgUrl: resourceImg.model4,
						bgUrl: resourceImg.modelBg,
						title: '世界名校介绍',
						des: ['全面世界名校介绍，锚定申请目标', '专业介绍帮助你提前做好规划']
					},
					{
						id: 5,
						reverse: false,
						imgUrl: resourceImg.model5,
						bgUrl: resourceImg.modelBg2,
						title: '大学专业介绍',
						des: ['AI自由口语练习', '系统针对性开发，不限时托福、雅思口语练习']
					},
					{
						id: 6,
						reverse: true,
						imgUrl: resourceImg.model6,
						bgUrl: resourceImg.modelBg,
						title: '国际高中介绍',
						des: ['AI学科助教TUTOR', '国际课程学科辅导培训；', 'AI导师辅导答疑；', '匹配资深国际课程老师课外辅导培训']
					},
					{
						id: 7,
						reverse: false,
						imgUrl: resourceImg.model7,
						bgUrl: resourceImg.modelBg2,
						title: '中国国际本科介绍',
						des: ['收集全国最全国际本科（2+2/3+1/4+0）信息', '直接对接国际本科资源', '帮助高考体系学生寻找后备方案']
					},
				],
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

		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/minix.scss";

	.IndexPage {
		width: 100%;

		.banner {
			@include fj(center);
			width: 100%;
			height: 700px;
			background: rgb(196, 196, 196);
		}

		.model2 {
			.model2Item {
				@include wh(100%, 100%);

				.top {
					width: 100%;
					display: flex;
					height: vw(705);
					background-image: url(@/assets/image/resource/reBg2.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
					justify-content: space-between;
					padding: vw(75) vw(274);
					box-sizing: border-box;


					.textDiscipt {
						display: flex;
						flex-direction: column;
						padding: 0 20px;
						margin-left: 20px;
						flex: 1;

						.textTitle {
							margin-top: vw(64);
							display: inline-flex;

							align-items: center;

							.name_en {
								font-size: vw(60);
								color: rgba(63, 71, 192, 0.05)
							}

							.name_cn {
								font-size: vw(52);
								margin-right: 0.5vw;
								color: #000000
							}

						}

						.textBody {
							display: flex;

							width: vw(628);
							font-size: vh(24);
							text-align: left;
							line-height: vw(40);
							color: #666666;
							box-sizing: border-box;
							padding: 0 vw(39) 0 8px;

						}

						.textBody2 {
							display: flex;

							width: vw(628);
							font-size: vh(24);
							text-align: left;
							line-height: vw(40);
							padding: 0 vw(39) 0 8px;
							color: #333333;
						}

						.text-button {
							margin-top: vw(30);
							width: vw(236);
							height: vw(60);
							background: linear-gradient(90deg, #5A5DE6 0%, #B443C2 100%);
							border-radius: 30px;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #fff;
							font-size: vw(22);
							cursor: pointer;

						}
					}

					.video {
						width: vw(744);
						height: vw(500);

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}

					}

				}

				.bottom {
					width: 100%;
					display: flex;
					height: vw(705);
					background-image: url(@/assets/image/resource/reBg1.png);
					background-size: 100% 100%;
					background-repeat: no-repeat;
					justify-content: space-between;
					padding: vw(75) vw(274);
					box-sizing: border-box;


					.textDiscipt {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						padding: 0 20px;
						margin-left: 20px;
						flex: 1;

						.textTitle {

							display: inline-flex;

							align-items: center;

							.name_en {
								font-size: vw(60);
								color: rgba(63, 71, 192, 0.05)
							}

							.name_cn {
								font-size: vw(52);
								margin-left: 0.5vw;
								color: #000000
							}

						}

						.textBody {
							display: flex;

							width: vw(628);
							font-size: vw(24);
							text-align: right;
							line-height: vw(40);
							color: #666666;
							box-sizing: border-box;
							padding: 0 vw(8) 0 vw(39);
						}

						.textBody2 {
							display: flex;

							width: vw(628);
							font-size: vw(24);
							text-align: right;
							line-height: vw(40);
							padding: 0 vw(8) 0 vw(39);
							color: #333333;
						}

						.text-button {
							margin-top: vw(30);
							width: vw(236);
							height: vw(60);
							background: linear-gradient(90deg, #5A5DE6 0%, #B443C2 100%);
							border-radius: 30px;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #fff;
							font-size: vw(22);
							cursor: pointer;

						}
					}

					.video {
						width: vw(744);
						height: vw(500);

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}

					}

				}


			}


		}

	}
</style>