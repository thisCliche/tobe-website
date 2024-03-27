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
				<view v-if="isLogin" class="loginIn common">
					<view class="formWrap">
						<view class="row1">登录</view>
						<view class="row2">免费登录到您的TOBE留学账号</view>
						<el-form :model="loginForm" :rules="rulesLogin" ref="loginFormRef">
							<el-form-item label="手机号" prop="name">
								<el-input v-model="loginForm.name"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="password">
								<el-input type="password" v-model="loginForm.password"></el-input>
							</el-form-item>
							<el-form-item>
								<view class="loginBtn" @click="submitForm('loginFormRef')">登录</view>
							</el-form-item>
							<view class="tip">
								<span>还没有账户？</span><span @click="toggle" class="linkColor">点击注册</span>
							</view>
						</el-form>
					</view>
				</view>
				<view v-else class="signup common">
					<view class="formWrap">
						<view class="row1">创建您的免费账户</view>
						<view class="row2">创建您的TOBE留学账号</view>
						<el-form :model="registerForm" :rules="rulesRegister" ref="registerFormRef">
							<el-form-item label="昵称" prop="name">
								<el-input v-model="registerForm.name"></el-input>
							</el-form-item>
							<el-form-item label="姓名" prop="name">
								<el-input v-model="registerForm.name"></el-input>
							</el-form-item>
							<el-form-item label="手机号码" prop="name">
								<el-input v-model="registerForm.name"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="name">
								<el-input type="password" v-model="registerForm.name"></el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="name">
								<el-input v-model="registerForm.name"></el-input>
								<el-button @click="getCode" v-if="codeDis">发送</el-button>
								<el-button v-else disabled>重新发送{{ codeInfo }}s</el-button>
							</el-form-item>
							<el-form-item label="邀请码" prop="name">
								<el-input v-model="registerForm.name"></el-input>
							</el-form-item>
							<el-form-item>
								<view class="loginBtn" @click="submitForm('registerFormRef')">登录</view>
							</el-form-item>
							<view class="tip">
								<span>已有账户？</span><span @click="toggle" class="linkColor">点击登录</span>
							</view>
						</el-form>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import loginBg from '@image/loginBg.png'
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

			return {
				codeDis:true,
				phoneregisRight:false,
				codeInfo:60,
				isLogin:false,
				loginBg,
				loginForm: {
					name: '',
					password: '',
				},
				registerForm:{},
				rulesRegister:{},
				rulesLogin: {
					name: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}, ],
					password: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}, ]
				},
			}
		},
		methods: {
			 async getCode() {
			      if (!this.phoneregisRight1 || this.addForm.name == "") {
			        return;
			      }
			      const TimeCount = 59;
			      if (!this.timer1) {
			        this.codeDis1 = false;
			        this.codeInfo1 = TimeCount;
			        this.timer1 = setInterval((_) => {
			          if (this.codeInfo1 > 0 && this.codeInfo1 <= TimeCount) {
			            this.codeInfo1--;
			          } else {
			            this.codeDis1 = true;
			            clearInterval(this.timer1);
			            this.timer1 = null;
			          }
			        }, 1000);
			        await this.$axios.post(this.$httpUrl.smsCode, {
			          phone: this.addForm.name,
			          smsType: 1,
			        });
			        this.$message.success("短信发送成功");
			      }
			    },

			toggle(){
				this.isLogin = !this.isLogin;
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {

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
.login{
	.loginWrap{
		@include fj();
		height: calc(100vh - 92px);
		min-width: 1400px;
		
		.loginR{
			width: 50%;
			height: 100%;
			position: relative;
			.common{
				.formWrap{
					.tip{
						.linkColor{
							color: $linkColor;
							cursor: pointer;
						}
					}
					.loginBtn{
						width: 100%;
						height: 40px;
						color: #fff;
						background: #000;
						border-radius: 6px;
						text-align: center;
						@include mt(20px);
						cursor: pointer;
					}
					width: 400px;
					@include center;
					.row1{
						font-size: 30px;
						font-weight: 700;
						@include mb(14px);
					}
					.row2{
						font-size: 24px;
						@include mb(20px);
					}
				}
				
			}
			
		}
		.loginL{
			width: 50%;
			height: 100%;
			position: relative;
			overflow: hidden;
			
			.slogan{
				@include center;
				font-size: 34px;
				font-weight: 700;
				line-height: 50px;
				color: #fff;
			}
			.loginBg{
				position: absolute;
				left: 0;
				top: 0;
				z-index: -1;
			}
		}
	}
}
</style>