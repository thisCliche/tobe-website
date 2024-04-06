<template>
	<view>
		<el-dialog title="支付选项" :visible.sync="dialogVisible" width="940px" :close-on-click-modal="false">
			<view class="wrap">
				<view class="img">
					<img :src="aiImg" alt="" />
				</view>
				<view class="wrapR">
					<view class="optionList">
						<view class="top-list" v-for="(item,index) in xiangmuList "
							:class="[item.isPopular ? 'isPopular' :'noPopular']" :key="index">
							<view class="list-title">
								口语练习
							</view>
							<view class="list-content">
								{{item.name}}
							</view>
							<view class="list-money">
								{{item.active}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</el-dialog>
	</view>
</template>

<script>
	import aiImg from '@image/ai.jpeg'
	export default {
		data() {
			return {
				aiImg,
				dialogVisible: true,
				xiangmuList: [{
					id: 1,
					name: "7天/周卡",
					active: '免费试用',
					isPopular: false
				}, {
					id: 2,
					name: "30天/月卡",
					active: '19.9元',
					isPopular: true
				}, {
					id: 1,
					name: "365天/年卡",
					active: '199元',
					isPopular: false
				}]
			}
		},
		methods: {
			openDialog() {
				this.dialogVisible = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		@include fj();

		.img {
			@include wh(668px, 570px);
			border-radius: 10px;
			overflow: hidden;

			img {
				@include imgLayout;
			}
		}

		.top-list {
			@include wh(220px, 182px);
			@include fj();
			@include mb(10px);
			align-items: center;
			padding: 20px 8px;
			border-radius: 20px;
			flex-direction: column;
			box-sizing: border-box;
			cursor: pointer;

			&.isPopular {
				position: relative;
				border: 2px solid rgb(238, 167, 31);
				border-radius: 20px;

				&::before {
					content: "Most POPULAR";
					position: absolute;
					top: -10px;
					left: 45%;
					transform: translateX(-40%);
					padding: 2px 10px;
					background-color: white;
					color: #000;
					font-size: 12px;
					font-weight: 700;
					z-index: 1;
					border-radius: 10px;
					background: #eea71f;
				}

				.list-title {
					background: rgb(12, 106, 199);
					color: #fff;

				}


			}

			&.noPopular {
				box-shadow: 0px 0px 25px 6px rgba(0, 0, 0, 0.15);
				background: rgba(255, 255, 255, 0);

			}

			.list-title {
				@include fj(center);
				align-items: center;
				width: 100%;
				height: 34px;
				font-size: 16px;
				color: rgb(51, 51, 51);
				border-radius: 16px 16px 0px 0px;
				background: rgb(242, 242, 242);


			}

			.list-content {
				@include fj(center);
				align-items: center;
				width: 100%;
				flex: 1;
				color: rgb(31, 31, 31);
				font-size: 24px;
				font-weight: 700;

			}

			.list-money {
				@include fj(center);
				align-items: center;
				height: 34px;
				width: 80%;
				color: #fff;
				font-size: 20px;
				box-sizing: border-box;
				border: 1px solid rgb(0, 188, 142);
				border-radius: 4px;
				background: rgb(0, 188, 142);
				&:hover{
					background: rgb(0, 225, 169);
				}
			}


		}

	}
</style>