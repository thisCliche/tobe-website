<template>
	<view class="evaluate">
		<view class="main">

			<view class="assessWrap">
				<view class="assessHeader">
					<view class="headerTitle">MBIT性格测试</view>
					<view class="headerDes">最近30天热度：303133</view>
				</view>
				<view class="steps">
					<el-steps finish-status="success" process-status="process" :active="active" align-center>
						<el-step :title="item.questionTypeName" :description="item.idx+'/'+item.questionTotal"
							v-for="item in stepInfo" :key="item.id"></el-step>
					</el-steps>
				</view>
				<view class="assessContent">
					<view class="progress">
						<el-progress :percentage="process" :stroke-width="18" status="exception" :text-inside="true"></el-progress>
					</view>
					<view class="optionWrap">
						<view class="question">{{currentQuestion.question}}</view>
						<view class="showtransition">
							<view :class="item.selected == item.id?'checked':''" class="option" v-for="item in currentQuestion.optionArr" :key="item.id" @click="select(item)" v-waves>{{item.text}}</view>
						</view>
						<view class="btnWrap">
							<template v-if="isOver">
								<el-button type="success" plain round @click="submit">提交</el-button>
							</template>
							<template v-else>
								<el-button type="primary" plain round @click="pre" v-if="isPre">上一题</el-button>
								<el-button type="success" plain round @click="next" v-if="isNext">下一题</el-button>
							</template>
						</view>
					</view>
				</view>

			</view>
			<view class="assessFoot">
				<view class="btn">
					<el-button round type="info" @click="openDialog">立即测试</el-button>
				</view>
				<!-- <view class="footer-head">完成测试后，您将获得</view>
				<view class="flex">
					<view class="desc-panel">
						<view class="iconfont icon-dian footer-description">获取您的5字母类型测试结果</view>
						<view class="iconfont icon-dian footer-description">知悉您的偏好优势和类型描述</view>
						<view class="iconfont icon-dian footer-description">了解您的沟通风格和学习风格</view>
					</view>
					<view class="desc-panel">
						<view class="iconfont icon-dian footer-description">发现适合您性格类型的职业</view>
						<view class="iconfont icon-dian footer-description">评估您与恋人的长期相处情况</view>
						<view class="iconfont icon-dian footer-description">查看与您分享同一性格的名人</view>
					</view>
				</view> -->
				<view class="footer-head">测试说明</view>
				<view class="profile">
					<view class="footer-footer"> [1]测评基于瑞士心理学家荣格(Carl Jung)的《人格分类》理论，及美国心理学家迈尔斯(Isabel Briggs
						Myers)与其母亲凯瑟琳·库克·布里格斯（Katharine Cook Briggs）的实证研究，是国际十分流行的性格测试模型。</view>
					<view class="footer-footer">[2]测评时间预计10-20分钟，请在心态平和及时间充足的情况下开始答题。</view>
					<view class="footer-footer">[3]选项间无对错好坏之分，请选择与你实际做法相符的，而不是你认为怎样做是对的。</view>
					<view class="footer-footer">
						[4]如果你认真、真实地完成了测试问卷，那么你有可能得到一个和你的性格相匹配的类型。但是因为MBTI的16型人格分类是脸谱化的分类方法，你的性格与测试结果的描述很难做到完全相符。更准确的判定方式是研读更深入的学术著作并进行自我审视。希望你能从本次测试中或多或少地有所收获。
					</view>
				</view>
			
			</view>
			<view class="mainBg">
				<img :src="homebgpc" alt="" />
			</view>
		</view>
		<pay-dialog ref="payDialogRef"></pay-dialog>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import PayDialog from '@components/PayDialog.vue'
	import homebgpc from '@image/home-bg-pc.png';
	import questionArr from './mock.js'
	import {TestDescConfigApi,AllQuestionApi} from '@api/evaluatingApi.js'
	export default {
		name: 'evaluate',
		components:{PayDialog},
		data() {
			return {
				isOver: false,
				process: 0,
				homebgpc,
				active: 0,
				total: 0,
				questionList: [],
				stepInfo: [],
				currentQuestion: {},
				currentIndex: 0,
			}
		},
		computed: {
			isNext() {
				let flag = false;
				if (this.currentIndex <= this.currentQuestion.idx) {
					flag = false;
				} else {
					flag = true;
				}
				return flag
			},
			isPre() {
				let flag = false;
				if (this.currentQuestion.idx == 0) {
					flag = false;
				} else {
					flag = true;
				}
				return flag
			}
		},
		created() {
			let step = questionArr.length,
				stepInfo = [],
				questionList = [],
				idx = 0,
				total = 0;
			for (let i = 0; i < step; i++) {
				let questionTotal = questionArr[i].questionList.length;
				total += questionTotal;
				questionArr[i].questionList.map(item => {
					questionList.push({
						...item,
						step: i,
						idx,
					})
					idx++;
				})
				stepInfo.push({
					questionTotal,
					questionTypeName: questionArr[i].typeName,
					id: i,
					idx: 0,
				})
			}
			this.questionList = questionList;
			this.currentQuestion = questionList[0];
			this.stepInfo = stepInfo;
			this.total = total;
		},
		methods: {
			openDialog(){
				this.$refs.payDialogRef.openDialog();
			},
			calculationProcess() {
				let process = parseFloat(((this.currentIndex / this.total) * 100).toFixed(2));
				this.process = process;
			},
			pre() {
				let {
					idx,
					step
				} = this.currentQuestion;
				let preCurrent = this.questionList[idx - 1];
				if (step != preCurrent.step) {
					this.active -= 1;
				}
				this.currentQuestion = preCurrent;
			},
			next() {
				if (this.isOver) return;
				let {
					idx,
					step
				} = this.currentQuestion;
				// 是否做完
				let totalIdx = this.total - 1;
				if (idx == totalIdx) {
					this.stepInfo[step].idx += 1;
					this.isOver = true;
					this.process = 100;
				} else {
					let nextCurrent = this.questionList[idx + 1];
					if (step != nextCurrent.step) {
						this.active += 1;
					}
					// 更新步骤里的数量
					if (this.currentIndex < nextCurrent.idx) {
						this.currentIndex = nextCurrent.idx;
						this.stepInfo[step].idx += 1;
					}
					this.currentQuestion = nextCurrent;
					this.calculationProcess();
				}
			},
			select(item) {
				let id = item.id;
				let idx = this.currentQuestion.idx;
				this.questionList[idx].optionArr.forEach(unit => {
					unit.selected = 0;
					if (unit.id == id) {
						unit.selected = id;
					}
				})
				this.next();
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
			.btn{
				@include mb(20px);
				.el-button{
					width:200px;
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
			.profile{
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