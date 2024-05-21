<template>
	<view class="scienceDetail">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="mainWrap">
			<view class="main">
				<view class="tabWrap">
					<view class="tabList">
						<view class="tabItem" :class="currentId==item.id?'active':''" v-for="item of tabList" :key="item.id"
							:data-id="item.id" @click="changeTab">
							<view class="name">{{item.name}}</view>
						</view>
					</view>
					<view class="content">
						<template v-for="item of content">
							<view class="" :key="item.id">
								<view class="title">{{item.title}}</view>
								<view class="text">{{item.text}}</view>
							</view>
						</template>
					</view>
				</view>
				<view class="linkWrap">
					<view class="btns">
						<view class="college btn">
							美国本科院校库 >
						</view>
						<view class="hightSchool btn">
							高中院校库 >
						</view>
					</view>
					<view class="linkList">
						<view class="linkItem" v-for="item of linkList" :key="item.id">
							<view class="title">{{item.title}}</view>
							<view class="hr"></view>
							<view class="linkChild">
								<view class="name" v-for="child of item.child" :key="child.id">{{child.name}}</view>
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import InfotroMask from '@image/science/competitionMask.png'
	import {
		videoApi
	} from '@api/commonApi.js';
	export default {
		name: "scienceDetail",
		data() {
			return {
				bannerProfile: {},
				tabList: [{
						id: 1,
						name: '概况'
					},
					{
						id: 2,
						name: '发展方向'
					},
					{
						id: 3,
						name: '统计数据'
					},
					{
						id: 4,
						name: '优势专业'
					},
					{
						id: 5,
						name: '体育'
					},
					{
						id: 6,
						name: '艺术'
					},
				],
				currentId: 1,
				content: [{
						id: 1,
						title: '概况',
						text: 'WHO:我们与国内外顶尖国际高中的学科老师和升学老师合作，引入完整的国际课程资料，覆盖语言学习、学科、竞赛等全面的学科资源，根据学科老师多年行知有效的教学模式和应试经验，根据申请顶尖名校的录取要求，创建智能化学习系统。在这个学习系统中，老师和学生可以自主灵活创建专属题库，进行模考。'
					},
					{
						id: 2,
						title: '发展方向',
						text: 'WHO:我们与国内外顶尖国际高中的学科老师和升学老师合作，引入完整的国际课程资料，覆盖语言学习、学科、竞赛等全面的学科资源，根据学科老师多年行知有效的教学模式和应试经验，根据申请顶尖名校的录取要求，创建智能化学习系统。在这个学习系统中，老师和学生可以自主灵活创建专属题库，进行模考。'
					},
				],
				linkList: [{
						id: 1,
						title: '活动资源',
						child: [{
								name: 'TOBE志愿',
								url: '',
								id: 11
							},
							{
								name: '公益项目',
								url: '',
								id: 12
							},
							{
								name: '社团招募',
								url: '',
								id: 13
							},
							{
								name: '社会调研',
								url: '',
								id: 14
							},
							{
								name: '营地沙龙',
								url: '',
								id: 15
							}
						]
					},
					{
						id: 2,
						title: 'AI智能申请系统',
						child: [{
								name: 'AI定校',
								url: '',
								id: 21
							},
							{
								name: '文书训练系统',
								url: '',
								id: 22
							},
							{
								name: '面试训练系统',
								url: '',
								id: 23
							},
							{
								name: '简历制作系统',
								url: '',
								id: 24
							},
							{
								name: '澳新免费申请',
								url: '',
								id: 25
							}
						]
					},
					{
						id: 3,
						title: '科研实习资源库',
						child: [{
								name: '顶尖科研',
								url: '',
								id: 31
							},
							{
								name: '专业实习',
								url: '',
								id: 32
							},
							{
								name: '夏校项目',
								url: '',
								id: 33
							},
						]
					},
					{
						id: 4,
						title: '学术库',
						child: [{
								name: 'AP/ALevel/IB/OSSD',
								url: '',
								id: 41
							},
							{
								name: '竞赛笔试',
								url: '',
								id: 42
							},
							{
								name: '学科助教',
								url: '',
								id: 43
							},
							{
								name: '听口联系',
								url: '',
								id: 44
							},
						]
					},
				]
			}
		},
		components: {
			CommonBanner
		},
		methods: {
			changeTab(e) {
				// 切换tab中的内容
				let id = e.currentTarget.dataset.id;
				this.currentId = id;
			},
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
								maskImg: InfotroMask,
								description: "最全最新一手竞赛资讯,囊括海量国际竞赛题库和牛剑笔试加试真题！,还有小组学习模式可共享题库，老师和学生都可以创建自己的学习小组，邀请小伙伴一起来学习。"
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
	.scienceDetail {
		.mainWrap {
			background: #F4F6FE;

			.main {
				@include modelPd;
				@include ct1200;
				@include fj();

				.tabWrap {
					width: 900px;
					border-radius: 0 0 20px 20px;
					background: #fff;
					.content{
						padding: 30px 20px;
						.title{
							font-weight: 700;
							font-size: 30px;
							@include mb(16px);
						}
						.text{
							@include sc(16px,#666);
							@include mb(20px);
							line-height: 30px;
						}
					}
					.tabList {
						@include fj();
						background: #F1F1F1;
					}

					.tabItem {
						height: 74px;
						position: relative;

						.name {
							line-height: 74px;
							font-weight: 700;
							padding: 0 50px;
							cursor: pointer;
						}
					}

					.active {
						background: #fff;

						.name {
							display: table;
							background-image: linear-gradient(90deg, #5053e3 0, #7f3588 100%);
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
						}

						&::before {
							position: absolute;
							top: 0;
							content: '';
							width: 100%;
							height: 4px;
							background-image: linear-gradient(to right, $gradientS, $gradientE);
						}
					}
				}

				.linkWrap {
					width: 284px;

					.linkList {
						padding: 30px 20px;
						border-radius: 20px;
						background: #fff;

						.title {
							display: table;
							background-image: linear-gradient(90deg, #5053e3 0, #7f3588 100%);
							color: #333333;
							font-weight: 700;
							font-size: 18px;
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
						}

						.hr {
							@include wh(80px, 2px);
							background: #999;
							margin: 20px 0 10px;
						}

						.linkChild {
							@include mb(20px);

							.name {
								line-height: 30px;
								cursor: pointer;

								&:hover {
									color: $gradientE;
								}
							}
						}
					}

					.btns {
						.college {
							background: linear-gradient(180deg, #A69AED 0%, #4B50DF 100%);
						}

						.hightSchool {
							background: linear-gradient(180deg, #FFAD43 0%, #FF9450 100%);
						}

						.btn {
							@include wh(284px, 86px);
							@include mb(20px);
							border-radius: 8px;
							font-weight: 600;
							font-size: 20px;
							color: #FFFFFF;
							line-height: 86px;
							text-align: center;
							cursor: pointer;
						}

					}
				}
			}
		}
	}
</style>