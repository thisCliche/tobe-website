<template>
	<view class="universityIntro">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="mainWrap">
			<view class="main">
				<view class="tabWrap">
					<view class="tabItem" :class="currentTab==item.id?'active':''" v-for="item of tabList" :key="item.id"
						:data-id="item.id" @click="changeTab">
						<view class="">
							{{item.name}}
						</view>
						<view class="">
							{{item.text}}
						</view>
					</view>
				</view>
				<view class="searchTotal">当前共1000所学校</view>
				<view class="contentWrap">
					<view class="filterWrap">
						<el-select style="width:360px;" v-model="value1" placeholder="申请国家">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-select style="width:360px;" v-model="value2" placeholder="学校名称">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-select style="width:360px;" v-model="value3" placeholder="目标专业">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</view>
					<view class="listWrap">
						<view class="collageItem" @click="toDetail" v-for="(item,idx) of collegeList" :key="item.id">
							<view class="itemL">
								<view class="order">{{++idx}}</view>
								<view class="avatar">
									<img :src="item.avatar" alt="" />
								</view>
								<view class="info">
									<view class="title">
										<view class="">
											{{item.title}}
										</view>
										<view class="mark">
											<img :src="item.authentic" alt="" />
											<img :src="item.settle" alt="" />
										</view>
									</view>
									<view class="tag">{{item.tag}}</view>
									<view class="text">{{item.info}}</view>
								</view>
							</view>
							<view class="itemR">
								<view class="tagImg" v-for="child of item.tagList" :key="child.id">
									<img :src="child.url" alt="" />
								</view>
							</view>
						</view>
					</view>
					<view class="pageWrap">
						<el-pagination class="nPagination" background @size-change="handleSizeChange"
							@current-change="handleCurrentChange" :current-page.sync="currentPage"
							:page-sizes="[10, 30, 50, 100]" :page-size="100"
							layout=" prev, pager, next,sizes, jumper" :total="300">
						</el-pagination>
					</view>
				</view>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import resourceImg from './universityIntroduction.js'
	import {
		videoApi
	} from '@api/commonApi.js';
	export default {
		name: "universityIntro",
		data() {
			return {
				value1: '',
				value2: '',
				value3: '',
				currentPage:1,
				collegeList: [{
						id: 1,
						avatar: 'https://website.tobeapp.cn/uploads/20240412/00d550e548824df7165553fce308ca65.jpeg',
						title: '哈佛大学',
						authentic: resourceImg.authentication,
						settle: resourceImg.settle,
						tag: 'Cambridge, MA, United States',
						info: '总人数：20,739  国际生：5,353  本科生：1,694  研究生：3,649   博士生：1,546',
						tagList: [{
								id: 1,
								url: resourceImg.collegeIcon1,
							},
							{
								id: 2,
								url: resourceImg.collegeIcon2,
							},
							{
								id: 3,
								url: resourceImg.collegeIcon3,
							},
							{
								id: 4,
								url: resourceImg.collegeIcon4,
							},
						]
					},
					{
						id: 2,
						avatar: 'https://website.tobeapp.cn/uploads/20240412/00d550e548824df7165553fce308ca65.jpeg',
						title: '哈佛大学',
						authentic: resourceImg.authentication,
						settle: resourceImg.settle,
						tag: 'Cambridge, MA, United States',
						info: '总人数：20,739  国际生：5,353  本科生：1,694  研究生：3,649   博士生：1,546',
						tagList: [{
								id: 1,
								url: resourceImg.collegeIcon1,
							},
							{
								id: 2,
								url: resourceImg.collegeIcon2,
							},
							{
								id: 3,
								url: resourceImg.collegeIcon3,
							},
							{
								id: 4,
								url: resourceImg.collegeIcon4,
							},
						]
					},
				],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				bannerProfile: {},
				currentTab: 1,
				tabList: [{
						id: 1,
						name: 'QS',
						text: '世界大学排名'
					},
					{
						id: 2,
						name: 'USNEW',
						text: '世界大学排名'
					},
					{
						id: 3,
						name: 'TIMES',
						text: '世界大学排名'
					},
					{
						id: 4,
						name: 'USNEW',
						text: '世界大学排名'
					},
				],
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
			changeTab(e) {
				let id = e.currentTarget.dataset.id;
				this.currentTab = id;
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
								maskImg: resourceImg.InfotroMask,
								description: "提供权威排名信息，提供每个大学专门介绍。"
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
	.universityIntro {
		.mainWrap {
			background: #F4F6FE;

			.main {
				@include modelPd;
				@include ct1200;

				.contentWrap {
					padding: 30px 20px;
					border-radius: 20px;
					background: #fff;

					.filterWrap {
						@include fj();
					}
				}

				.searchTotal {
					margin: 20px 0;
				}

				.tabWrap {
					height: 100px;
					@include fj(space-around);
					border-bottom: 3px solid #E3E3E3;
					background: #fff;

					.tabItem {
						padding: 20px 40px 0;
						text-align: center;
						font-weight: 700;
						line-height: 28px;
						cursor: pointer;
						position: relative;
					}

					.active {
						&::before {
							position: absolute;
							bottom: -3px;
							left: 0;
							content: '';
							width: 100%;
							height: 4px;
							background-image: linear-gradient(to right, $gradientS, $gradientE);
						}
					}
				}
			}
		}
	}
	.pageWrap{
		margin-top: 80px;
		text-align: center;
	}
	.collageItem{
		margin: 50px 0;
		@include fj();
		padding: 10px;
		transition:all 0.2s ease;
		border-radius: 4px;
		cursor: pointer;
		&:hover{
			@include defaultShadow;
		}
		.itemR{
			@include fj();
			align-items: center;
			.tagImg{
				margin: 0 6px;
			}
		}
		.itemL{
			@include fj(flex-start);
			align-items: center;
			.order{
				display: table;
				font-weight: 700;
				font-style: italic;
				font-size: 20px;
				background-image: linear-gradient(90deg, #5053e3 0, #7f3588 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			.avatar{
				@include wh(90px,90px);
				margin: 0 20px;
				img{
					@include imgLayout;
				}
			}
			.info{
				color: #333;
				line-height: 26px;
				font-size: 14px;
				.title{
					@include fj(flex-start);
					font-size: 16px;
					font-weight: 700;
					align-items: center;
					.mark{
						img{margin: 0 6px;}
					}
				}
			}
		}
		
	}
</style>