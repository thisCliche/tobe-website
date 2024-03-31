<template>
	<view class="login">
		<view class="loginWrap">
			<view class="loginL">
				<img class="loginBg" :src="loginBg" alt="" />
				<view class="slogan">
					<view class="">
						TOBE 让留学没有信息差
					</view>
					<view class="">
						真正让留学进入个人GIY时代
					</view>
					<view class="">
						未来已来
					</view>
				</view>
			</view>
			<view class="loginR">
				<view key="1" v-if="displayFlag==1" class="loginIn common">
					<view class="formWrap">
						<view class="row1">登录</view>
						<view class="row2">免费登录到您的TOBE留学账号</view>
						<el-form size="small" :model="loginForm" :rules="rulesLogin" ref="loginFormRef">
							<el-form-item label="手机号" prop="mobile">
								<el-input v-model="loginForm.mobile"></el-input>
							</el-form-item>
							<el-form-item key="22" label="验证码" prop="captcha" v-if="isValidCodeLogin">
								<view class="validCodeWrap">
									<el-input class="validCode" v-model="loginForm.captcha"></el-input>
									<el-button key="1" @click="getCode('loginFormRef')" v-if="codeDisRegister">发送</el-button>
									<el-button key="2" v-else disabled>重新发送{{ codeInfoRegister }}s</el-button>
								</view>
							</el-form-item>
							<el-form-item key="23" label="密码" prop="password" v-else>
								<el-input type="password" v-model="loginForm.password"></el-input>
							</el-form-item>
							<el-form-item>
								<view class="forgetPas">
									<span @click="toggle(2)">忘记密码</span>
									<span @click="toggle(4)" class="linkColor">{{isValidCodeLogin?'密码登录':'验证码登录'}}</span>
								</view>
							</el-form-item>
							<el-form-item>
								<view class="loginBtn" @click="submitForm('loginFormRef')">登录</view>
							</el-form-item>
							<view class="tip">
								<span>还没有账户？</span><span @click="toggle(3)" class="linkColor">点击注册</span>
							</view>
						</el-form>
					</view>
				</view>
				<view key="2" v-else-if="displayFlag==2" class="forgetPass common">
					<view class="formWrap">
						<view class="row1">忘记密码</view>
						<view class="row2">找回您的TOBE留学账号密码</view>
						<el-form size="small" :model="forgetForm" :rules="rulesForget" ref="forgetFormRef">
							<el-form-item label="手机号码" prop="mobile">
								<el-input v-model="forgetForm.mobile"></el-input>
							</el-form-item>
							<el-form-item label="新密码" prop="password">
								<el-input type="password" v-model="forgetForm.password"></el-input>
							</el-form-item>
							<el-form-item label="重复新密码" prop="password_confirmation">
								<el-input v-model="forgetForm.password_confirmation" placeholder="请重复输入" type="password"></el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="captcha">
								<view class="validCodeWrap">
									<el-input class="validCode" v-model="forgetForm.captcha"></el-input>
									<el-button key="1" @click="getCode('forgetFormRef')" v-if="codeDisRegister">发送</el-button>
									<el-button key="2" v-else disabled>重新发送{{ codeInfoRegister }}s</el-button>
								</view>
							</el-form-item>
							<el-form-item>
								<view class="loginBtn" @click="submitForm('forgetFormRef')">提交</view>
							</el-form-item>
						</el-form>
						<view class="tip">
							<span @click="toggle(1)" class="linkColor">点击登录</span>
						</view>
					</view>
				</view>
				<view key="3" v-else-if="displayFlag==3" class="signup common">
					<view class="formWrap">
						<view class="row1">创建账户</view>
						<view class="row2">创建您的TOBE留学账号</view>
						<el-form size="small" :model="registerForm" :rules="rulesRegister" ref="registerFormRef">
							<el-row type="flex" justify="space-between">
								<el-col :span="11">
									<el-form-item label="昵称" prop="nickname">
										<el-input v-model="registerForm.nickname"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="11">
									<el-form-item label="姓名" prop="username">
										<el-input v-model="registerForm.username"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-form-item label="手机号码" prop="mobile">
								<el-input v-model="registerForm.mobile"></el-input>
							</el-form-item>
							<el-form-item label="邮箱" prop="email">
								<el-input v-model="registerForm.email"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="password">
								<el-input type="password" v-model="registerForm.password"></el-input>
							</el-form-item>
							<el-form-item label="重复密码" prop="rePassword">
								<el-input v-model="registerForm.rePassword" placeholder="请重复输入" type="password"></el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="captcha">
								<view class="validCodeWrap">
									<el-input class="validCode" v-model="registerForm.captcha"></el-input>
									<el-button key="1" @click="getCode('registerFormRef')" v-if="codeDisRegister">发送</el-button>
									<el-button key="2" v-else disabled>重新发送{{ codeInfoRegister }}s</el-button>
								</view>
							</el-form-item>
							<el-form-item label="邀请码">
								<el-input v-model="registerForm.invitation_code"></el-input>
							</el-form-item>
							<el-form-item>
								<view class="loginBtn" @click="submitForm('registerFormRef')">注册</view>
							</el-form-item>
							<view class="tip">
								<span>已有账户？</span><span @click="toggle(1)" class="linkColor">点击登录</span>
							</view>
						</el-form>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import eventBus from '@utils/eventBus.js'
	import loginBg from '@image/loginBg.png'
	import {Local} from '@utils/storage.js'
	import {
		smsSendRequset,
		loginRequset,
		registerRequset,
		resetPwdRequset
	} from '@api/loginApi.js'
	export default {
		name: 'login',
		data() {
			let validatePhone = (rule, value, callback) => {
				let patt = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
				if (!patt.test(value)) {
					this.phoneregisRight = false;
					callback(new Error("手机格式不正确!"));
				} else {
					this.phoneregisRight = true;
					callback();
				}
			};
			let validatePass = (rule, value, callback) => {
				if (value !== this.registerForm.password) {
					callback(new Error("两次输入密码不一致"));
				} else {
					callback();
				}
			};
			let validatePassForget = (rule, value, callback) => {
				if (value !== this.forgetForm.password) {
					callback(new Error("两次输入密码不一致"));
				} else {
					callback();
				}
			};

			return {
				isValidCodeLogin: false,
				displayFlag: 1, //1登录 2 忘记密码 3 注册 4 验证码登录
				phoneregisRight: false, // 标记手机号是否正确
				codeInfoRegister: 60,
				timerRegister: null,
				codeDisRegister: true,
				loginBg,
				loginForm: {
					mobile: '',
					password: '',
					captcha: '',
					type: 1,
				},
				forgetForm: {
					mobile: '',
					password: '',
					password_confirmation: '',
					captcha: '',
				},
				registerForm: {
					nickname: '',
					username: '',
					mobile: '',
					email: '',
					password: '',
					rePassword: '',
					captcha: '',
					invitation_code: '',
				},
				rulesForget: {
					mobile: [{
						required: true,
						message: '请输入手机号码',
						trigger: 'blur'
					}, {
						validator: validatePhone,
						trigger: "blur"
					}, ],
					password: [{
							required: true,
							message: "请输入密码",
							trigger: "blur"
						},
						{
							min: 6,
							message: "长度应大于6个字符",
							trigger: "blur"
						},
					],
					password_confirmation: [{
							validator: validatePassForget,
							trigger: "blur"
						},
						{
							required: true,
							message: "请输入密码",
							trigger: "blur"
						},
						{
							min: 6,
							message: "长度应大于6个字符",
							trigger: "blur"
						},
					],
					captcha: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}, ]
				},
				rulesRegister: {
					nickname: [{
						required: true,
						message: '请输入昵称',
						trigger: 'blur'
					}, ],
					username: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}, ],
					email: [{
						required: true,
						message: '请输入邮箱',
						trigger: 'blur'
					}, ],
					mobile: [{
						required: true,
						message: '请输入手机号码',
						trigger: 'blur'
					}, {
						validator: validatePhone,
						trigger: "blur"
					}, ],
					password: [{
							required: true,
							message: "请输入密码",
							trigger: "blur"
						},
						{
							min: 6,
							message: "长度应大于6个字符",
							trigger: "blur"
						},
					],
					rePassword: [{
							validator: validatePass,
							trigger: "blur"
						},
						{
							required: true,
							message: "请输入密码",
							trigger: "blur"
						},
						{
							min: 6,
							message: "长度应大于6个字符",
							trigger: "blur"
						},
					],
					captcha: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}, ]
				},
				rulesLogin: {
					mobile: [{
						required: true,
						message: '请输入手机号码',
						trigger: 'blur'
					}, {
						validator: validatePhone,
						trigger: "blur"
					}, ],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}, ],
					captcha: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}, ],
				},
			}
		},
		methods: {
			async getCode(formName) {
				if (!this.phoneregisRight) return;
				const TimeCount = 59;
				if (!this.timerRegister) {
					this.codeDisRegister = false;
					this.codeInfoRegister = TimeCount;
					let prepa = this.refList(formName);
					this.timerRegister = setInterval(() => {
						if (this.codeInfoRegister > 0 && this.codeInfoRegister <= TimeCount) {
							this.codeInfoRegister--;
						} else {
							this.codeDisRegister = true;
							clearInterval(this.timerRegister);
							this.timerRegister = null;
						}
					}, 1000);
					await smsSendRequset({
						mobile: this[prepa.formName].mobile,
						event: prepa.event,
					});
					this.$notify({
						title: '成功',
						message: '短信发送成功',
						type: 'success'
					});
				}
			},

			toggle(type) {
				let nowType = this.displayFlag;
				if (nowType == 1) {
					this.$refs.loginFormRef.resetFields();
				} else if (nowType == 2) {
					this.$refs.forgetFormRef.resetFields();
				} else if (nowType == 3) {
					this.$refs.registerFormRef.resetFields();
				}
				this.phoneregisRight = false;
				this.$nextTick(() => {
					if (type == 4) {
						if (this.isValidCodeLogin) {
							this.loginForm.type = 1
							this.isValidCodeLogin = false;
						} else {
							this.loginForm.type = 2
							this.isValidCodeLogin = true;
						}
					} else {
						this.displayFlag = type;
					}
				})
			},
			refList(val) {
				let list = [{
						message: '账户注册成功',
						toFlag: '1',
						refName: 'registerFormRef',
						formName: 'registerForm',
						request: registerRequset,
						event: 'register'
					},
					{
						message: '密码重置成功',
						toFlag: '1',
						refName: 'forgetFormRef',
						formName: 'forgetForm',
						request: resetPwdRequset,
						event: 'resetpwd'
					},
					{
						message: '登录成功',
						toFlag: '/',
						refName: 'loginFormRef',
						formName: 'loginForm',
						request: loginRequset,
						event: 'login'
					}
				]
				let res = list.find(item => item.refName == val)
				return res
			},
			submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						let prepa = this.refList(formName);
						let res = await prepa.request(this[prepa.formName]);
						if (res.code == 200) {
							this.$notify.success({
								title: '成功',
								message: prepa.message,
							});
							if (prepa.toFlag == '1') {
								this.displayFlag = 1;
							}else{
								Local.set('accountInfo',res.data)
								eventBus.emit('loginEvent')
								uni.navigateTo({
									url:"/"
								})
							}
						}
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "../../assets/styles/minix.scss";

	.login {
		.loginWrap {
			@include fj();
			height: calc(100vh - 92px);
			min-width: 1400px;
			min-height: 750px;

			.el-form-item {
				@include mb(6px);
			}

			.loginR {
				width: 50%;
				height: 100%;
				position: relative;

				.common {
					.formWrap {
						.forgetPas {
							text-align: right;
							cursor: pointer;

							.linkColor {
								color: $linkColor;
								@include ml(10px);
							}
						}

						.validCodeWrap {
							@include fj();
							width: 100%;

							.validCode {
								width: 80%;
								@include mr(10px);
							}
						}

						.tip {
							@include mt(20px);

							.linkColor {
								color: $linkColor;
								cursor: pointer;
							}
						}

						.loginBtn {
							width: 100%;
							height: 40px;
							color: #fff;
							background: #000;
							border-radius: 6px;
							text-align: center;
							@include mt(20px);
							cursor: pointer;
							line-height: 40px;
						}

						width: 400px;
						@include center;

						.row1 {
							font-size: 30px;
							font-weight: 700;
							@include mb(14px);
						}

						.row2 {
							font-size: 24px;
							@include mb(20px);
						}
					}

				}

			}

			.loginL {
				width: 50%;
				height: 100%;
				position: relative;
				overflow: hidden;

				.slogan {
					@include center;
					font-size: 34px;
					font-weight: 700;
					line-height: 50px;
					color: #fff;
				}

				.loginBg {
					position: absolute;
					left: 0;
					top: 0;
					z-index: -1;
				}
			}
		}
	}
</style>