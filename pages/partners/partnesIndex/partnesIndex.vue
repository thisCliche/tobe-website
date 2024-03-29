<template>
	<view class="partnes">
		<view class="banner">
			<img :src="partnersBanner" alt="" />
		</view>
		<view class="model1">
			<view class="button">
				<view class="">
					注册成为我们的一员
				</view>
				<view class="">
					马上开启你的教学/升学之旅
				</view>
			</view>
			<view class="slogan">
				我们致力于为学生提供最直接的资源，连接最好的学术老师，也欢迎老师加入我们，在这里发展你的事业。我们为你提供教学题库和管理平台。
			</view>
		</view>
		<view class="model2">
			<view class="modelTitle">
				<view class="">
					College Ambassador
				</view>
				<view class="">
					世界顶尖名校招生代表
				</view>
			</view>
			<el-carousel trigger="click" :interval="5000" height="488px" arrow="always" indicator-position="none">
				<el-carousel-item v-for="(page,idx) in CollegeList" :key="idx">
					<el-row :gutter="80">
						<el-col :span="6" v-for="item in page" :key="item.id">
							<view class="collegeItem">
								<view class="imgWrap">
									<img :src="item.url" alt="" class="collegeImg" />
								</view>
								<view class="collegeName">
									{{item.name}}
								</view>
							</view>
						</el-col>
					</el-row>
				</el-carousel-item>
			</el-carousel>
			<view class="btn">
				<view class="coolBeans">立即加入</view>
			</view>
		</view>
		<!-- <roll-entry></roll-entry> -->
	</view>
</template>

<script>
	import partnersBanner from '@image/partnersBanner.png'
	import universityLogo from '@image/universityLogo.jpg'
	import RollEntry from './RollEntry.vue'
	export default {
		name: 'partnes',
		data() {
			return {
				partnersBanner,
				CollegeList: [
					[{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 1
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 2
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 3
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 4
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 5
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 6
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 7
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 8
						},
					],
					[{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 9
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 10
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 11
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 12
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 13
						},
						{
							name: '某某学校限定10个字符',
							url: universityLogo,
							id: 14
						},
					]
				],
			}
		},
		components: {
			RollEntry
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/styles/minix.scss";

	.banner {
		height: 700px;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

	}

	.model2 {
		@include modelPdOther;
		@include ct1200;
		.btn{
			@include fj(flex-end);
			.coolBeans{
				cursor: pointer;
				border-radius: 50px;
				color: #fff;
				background-color: #000;
				font-size: 20px;
				font-weight: 700;
				overflow: hidden;
				padding: 20px 80px;
			
			}
		}
		.modelTitle{
			color: $partnerTitle;
			font-size: 26px;
			font-weight: 700;
			@include mb(20px);
		}
		.collegeItem {
			@include mb(20px);
			@include fj(center);
			flex-direction: column;
				align-items: center;
			.collegeName{
				@include mt(16px);
				width: 162px;
				@include ellipsis;
			}
		}

		.imgWrap {
			width: 200px;

			img {
				@include imgLayout;
			}
		}
	}

	.model1 {
		@include modelPd;
		@include ct1200;
		@include fj(space-around);

		.slogan {
			font-size: 22px;
			width: 600px;
			font-weight: 700;
		}

		.button {
			background: #F54696;
			width: 500px;
			height: 100px;
			border-radius: 16px;
			color: #fff;
			font-weight: 700;
			text-align: center;
			line-height: 40px;
			font-size: 22px;
			cursor: pointer;
			padding-top: 10px;
			box-sizing: border-box;
			transition: 0.3s all ease-in;

			&:hover {
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			}
		}
	}
</style>