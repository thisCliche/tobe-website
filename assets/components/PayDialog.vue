<template>
	<view>
		<el-dialog title="支付选项" :visible.sync="dialogVisible" width="840px" @close="closeHandle"
			:close-on-click-modal="false">
			<view class="wrap">
				<view class="wrapL">
					<el-radio-group v-model="type" @input="changePayType">
						<el-radio-button label="alipay">支付宝</el-radio-button>
						<el-radio-button label="wechat">微信</el-radio-button>
					</el-radio-group>
					<view class="statusClass">{{statusText|statusTextEsc}}</view>
					<div class="qrcode" ref="qrCodeUrl"></div>
				</view>
				<view class="wrapR">
					<view class="optionList">
						<view class="top-list" v-for="(item,index) in xiangmuList "
							:class="[item.isPopular ? 'isPopular' :'noPopular']" :key="index">
							<view class="list-title">
								{{item.goodName}}
							</view>
							<view class="list-content">
								{{item.name}}
							</view>
							<view class="list-money" @click="changeGood(item)">
								{{item.price}}元
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
	import QRCode from 'qrcodejs2'
	import {
		goodsType
	} from '@utils/staticData.js'
	import {
		createOrderApi,
		probationApi,
		GoodsForTypeApi,
		getOrderIsPayApi
	} from '@api/commonApi.js'
	export default {
		props: {
			goods_type: {
				type: String,
				default: '0',
			},
		},
		data() {
			return {
				statusText: 3, // 1未支付 2支付成功 3正在生成二维码
				checkTimer: null,
				qrcode: null,
				type: 'alipay',
				goods_id: 0, // 当前选中的商品id
				goods_idx: 0, // 当前选中商品的下标
				dialogVisible: false,
				order_id: "",
				xiangmuList: [],
			}
		},
		filters: {
			statusTextEsc(val) {
				let res = '';
				switch (val) {
					case 1:
						res = '等待支付...'
						break;
					case 2:
						res = '支付成功,请开始使用'
						break;
					case 3:
						res = '正在生成二维码'
						break;
					default:
						break;
				}
				return res;
			},
		},
		methods: {
			// 查询支付状态
			checkPayStatus() {
				this.checkTimer = setInterval(async () => {
					if (this.statusText == 2) {
						clearInterval(this.checkTimer)
					} else {
						let res = await getOrderIsPayApi({
							order_id: this.order_id
						});
						if (res.msg == '支付成功') {
							this.statusText = 2;
							setTimeout(() => {
								this.dialogVisible = false;
								this.$emit('payLoad')
							}, 2000)
						}
					}
				}, 3000)
			},
			creatQrCode(text) {
				if (this.qrcode) {
					this.qrcode.makeCode(text)
				} else {
					this.qrcode = new QRCode(this.$refs.qrCodeUrl, {
						text,
						width: 200,
						height: 200,
						colorDark: '#000000',
						colorLight: '#ffffff',
						correctLevel: QRCode.CorrectLevel.H
					})
				}
				this.statusText = 1;
				this.checkPayStatus();
			},
			// 获取支付二维码
			async getPayQrCode() {
				this.statusText = 3;
				let res = await createOrderApi({
					type: this.type,
					goods_id: this.goods_id,
				})
				this.creatQrCode(res.msg.qr_code)
				this.order_id = res.order_id;
			},
			async getGoodsForTypeApi() {
				let res = await GoodsForTypeApi({
					type: this.goods_type
				});
				let isPopularFlag = true,
					goods_id = 0,
					currentIdx = 0,
					goodName = '';
				goodName = goodsType.find(item => item.type == res.msg[0].type).name;
				let arr = res.msg.map((item, idx) => {
					item.goodName = goodName;
					item.idx = idx;
					if (parseFloat(item.price) != 0 && isPopularFlag) {
						isPopularFlag = false;
						goods_id = item.id;
						currentIdx = idx;
						item.isPopular = true;
					} else {
						item.isPopular = false;
					}
					return item
				})
				this.goods_idx = currentIdx;
				this.goods_id = goods_id;
				this.xiangmuList = arr;
				this.getPayQrCode();
			},
			async changeGood(item) {
				if (item.price == '0.00') {
					// 请求试用接口 但需要判断是否有试用机会
					let res = await probationApi({
						type: this.goods_type
					});
					if (res.code == 200) {
						this.$notify.success('试用成功');
						this.dialogVisible = false;
					}
				} else {
					let oldObj = this.xiangmuList[this.goods_idx];
					oldObj.isPopular = false;
					this.$set(this.xiangmuList, this.goods_idx, oldObj);
					item.isPopular = true;
					this.goods_idx = item.idx;
					this.goods_id = item.id;
					this.getPayQrCode();
				}
			},
			changePayType(e) {
				this.getPayQrCode();
			},
			openDialog() {
				this.dialogVisible = true;
				this.getGoodsForTypeApi();
			},
			closeHandle() {
				clearInterval(this.checkTimer)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		@include fj();

		.statusClass {
			margin: 20px 0;
			// @include mt(20px);
		}

		.qrcode {
			// @include mt(20px);
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
					content: "当前选择";
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

				&:hover {
					background: rgb(0, 225, 169);
				}
			}


		}

	}
</style>