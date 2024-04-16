<template>
	<view class="evaluate">
		<view class="main">
			<view class="assessWrap">
				<view class="assessHeader">
					<view class="headerTitle">MBIT性格测试</view>
					<view class="headerDes">最近30天热度：303133</view>
				</view>
				<view class="assessContent">
					<view class="progress">
						<el-progress :percentage="process" :stroke-width="18" status="exception" :text-inside="true"></el-progress>
					</view>
					<view class="optionWrap">
						<view class="" v-for="(item,idx) in questionList" :key="item.id">
							<view v-if="idx==currentIndex">
								<view class="question">{{item.title}}</view>
								<view class="showtransition" v-for="child in item.optionList" :key="child.id">
									<view :class="item.Selected == child.select?'checked':''" class="option" @click="select(child.select)"
										v-waves>
										{{child.option}}
									</view>
								</view>
							</view>
						</view>
						<view class="btnWrap">
							<el-button type="primary" plain round @click="pre" key="100" v-if="isPre">上一题</el-button>
							<el-button type="success" plain round @click="next" key="200" v-if="isNext">下一题</el-button>
							<el-button type="success" plain round @click="submit" key="300" v-if="isOver"
								:disabled="submited">提交</el-button>
						</view>
					</view>
				</view>
			</view>
			<view class="assessFoot">
				<view class="btn">
					<el-button round type="info" @click="openDialog">开始评测</el-button>
				</view>
				<view class="footer-head">测试说明</view>
				<view class="profile">
					<view v-html="introduction"></view>
				</view>
			</view>
			<view class="mainBg">
				<img :src="homebgpc" alt="" />
			</view>
		</view>
		<pay-dialog ref="payDialogRef" goods_type="4"></pay-dialog>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import PayDialog from '@components/PayDialog.vue'
	import homebgpc from '@image/home-bg-pc.png';
	import questionArr from './mock.js'
	import {
		TestDescConfigApi,
		AllQuestionApi,
		submitQuestionApi
	} from '@api/evaluatingApi.js'
	import {
		userIsHadBuyApi
	} from '@api/commonApi.js'
	export default {
		name: 'evaluate',
		components: {
			PayDialog
		},
		data() {
			return {
				lockStatus:true,
				introduction: '',
				isOver: false,
				process: 0,
				homebgpc,
				total: 0,
				questionList: [],
				currentIndex: 0,
				selectedIndex: 0,
				maxIdx: 0,
				isSelected: false,
				submited: false,
			}
		},
		computed: {
			isNext() {
				let flag = false;
				if (this.currentIndex < this.selectedIndex) {
					flag = true;
				} else {
					flag = false;
				}
				return flag
			},
			isPre() {
				let flag = false;
				if (this.currentIndex == 0) {
					flag = false;
				} else {
					flag = true;
				}
				return flag
			}
		},
		created() {
			// 默认未锁定状态，判断当前账号是否有评测机会
			this.getData();
		},
		methods: {
			async submit() {
				if (this.submited) return;
				let score = 0,
					rule = {
						A: 5,
						B: 4,
						C: 3,
						D: 2
					},
					setail = {};
				this.questionList.map((item, idx) => {
					let key = idx + 1;
					setail[key] = item.Selected;
					score += rule[item.Selected]
				})
				let res = await submitQuestionApi({
					setail,
					score
				})
				if (res.code == 200) {
					this.submited = true;
					this.$notify.success({
						title: '提交成功',
						message: '请移步个人中心查看'
					})
				}
			},
			async getData() {
				let result = await Promise.all([TestDescConfigApi(), AllQuestionApi()]);
				let introduction = result[0].data;
				this.introduction = introduction;
				let arr = result[1].msg.map((item, idx) => {
					item.Selected = "";
					let optionList = [];
					Object.keys(item.json_text).map((child, index) => {
						optionList.push({
							select: child,
							option: item.json_text[child],
							id: index
						})
					})
					item.optionList = optionList;
					item.idx = idx;
					return item
				})
				this.total = arr.length;
				this.maxIdx = arr.length - 1;
				this.questionList = arr;
			},
			async openDialog() {
				try{
					let res = await userIsHadBuyApi({
						order_type: 4
					});
					this.$notify.success({title:'提示',message:'请开始答题'});
					this.lockStatus = false;
				}catch(e){
					this.$refs.payDialogRef.openDialog();
				}
			},
			calculationProcess() {
				if (this.isSelected) {
					this.process = 100;
				} else {
					let process = parseFloat(((this.selectedIndex / this.total) * 100).toFixed(2));
					this.process = process;
				}
			},
			pre() {
				let idx = this.currentIndex;
				this.isOver = false;
				this.currentIndex = idx - 1;
			},
			next() {
				let idx = this.currentIndex;
				if (idx >= this.maxIdx) {
					this.isOver = true;
				} else {
					let nextIdx = idx + 1;
					this.currentIndex = nextIdx;
					if (nextIdx == this.maxIdx && this.isSelected) {
						this.isOver = true;
					}
					if (this.selectedIndex < nextIdx) {
						this.selectedIndex = nextIdx;
					}
				}
			},
			select(select) {
				if(this.lockStatus) return this.$notify.info({title:'提示',message:'请先点击开始评测'});
				let idx = this.currentIndex;
				this.questionList[idx].Selected = select;
				if (idx == this.maxIdx) {
					this.isSelected = true;
				}
				this.$forceUpdate();
				this.next();
				this.calculationProcess()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		background: linear-gradient(0deg, #fff, #89616f);
		position: relative;

		.assessFoot {
			@include cl;
			bottom: 0;
			z-index: 1;
			@include fj();
			align-items: center;
			flex-direction: column;
			@include mb(20px);

			.btn {
				@include mb(20px);

				.el-button {
					width: 200px;
				}
			}

			.flex {
				@include fj(space-around);
				@include sc(12px, #878a9f);
				line-height: 26px;
				width: 660px;

				.icon-dian {
					position: relative;

					&::before {
						content: '·';
						font-size: 24px;
						position: absolute;
						left: -10px;
					}
				}
			}

			.profile {
				text-align: left;
			}

			.footer-footer {
				@include sc(14px, #878a9f);
				padding: 12px 24px;
				// text-align: center
			}

			.footer-head {
				border-radius: 30px;
				background-color: #ced3e7;
				@include sc(12px, #fff);
				padding: 2px 12px;
				@include mb(10px);

			}
		}

		.assessWrap {
			// z-index: 1;
			// @include cl;
			@include ct1200;
			padding: 80px 0 380px;
			width: 704px;

			.assessContent {
				@include mt(30px);
				border-radius: 30px;
				background: #fff;
				min-height: 350px;
				overflow: hidden;
				@include defaultShadow;

				.progress {
					padding: 20px 40px;
					background: $themeColor;
				}

				.optionWrap {
					padding: 24px 16px;

					.question {
						font-size: 24px;
					}

					.btnWrap {
						@include fj(space-around);
						@include mt(40px);

						.el-button {
							width: 200px;
						}
					}

					.showtransition {
						@include fj();
						flex-direction: column;

						.option {
							padding: 12px 20px;
							margin: 20px 0 10px;
							background-color: #f1f0f5;
							border-radius: 8px;
							cursor: pointer;
							@include sc(18px, #41464b);
						}

						.checked {
							color: #fff;
							box-shadow: 1px 1px 6px #758792;
							background-color: $themeFontColor;
						}
					}
				}
			}

			.steps {
				margin: 40px 0;
			}

			.assessHeader {
				color: #fff;
				text-align: center;

				.headerDes {
					font-size: 16px;
					@include mt(30px);
				}

				.headerTitle {
					font-size: 32px;
					font-weight: 700;

				}
			}
		}

		.mainBg {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 0;
		}
	}
</style>