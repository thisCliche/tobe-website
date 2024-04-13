<template>
	<view class="containerMe">
		<view class="wap">
			<view class="wap1">
				<view class="avatar">
					<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
				</view>
				<view class="des">
					<view class="name inline">
						名称

					</view>
					<view class="inline">
						ID：xxxxxx

					</view>
					<view class="inline qianming ">
						个人签名：xxxxxxccccccccccccccccccccc

					</view>
					<view class="setting setting1" @click="openSetting">
						个人设置
					</view>
					<view class="setting setting2">
						联系TOBE小助手
					</view>


				</view>

				<view class="record">
					<view class="recordName">
						最近购买

					</view>
					<el-scrollbar class="record-list" wrap-style="overflow-x:hidden;">

						<view class="list-item" v-for="(item,index) in 10 " :key="index">
							<view class="item-left">
								<img src="https://tupian.qqw21.com/article/UploadPic/2018-6/20186211924257197.jpg"
									alt="" srcset="" />

							</view>

							<view class="item-right">
								<view class="text">
									智能文书-文书测评
								</view>

								<view class="text">
									剩余：10次
								</view>


							</view>



						</view>






					</el-scrollbar>

				</view>


			</view>
			<view class="wap2">
				<view class="header">
					<view class="header-img">
						<img :src="email" alt="" srcset="" />

					</view>
					<view class="header-name">
						我的信箱

					</view>


				</view>
				<view class="message">
					<text>2445 messages </text>
					<text style="margin: 0 20px;">2 Unread</text>
					<img :src="notice" alt="" class="notice" />
				</view>
				<view class="content">
					<el-scrollbar class="content-list" wrap-style="overflow-x:hidden;">
						<view class="content-item" v-for="(item,index) in 18 " :key="index">
							<view class="item-left">
								<view class="tui">
									问
								</view>
							</view>
							<view class="item-right">
								<view class="title">
									推荐信已生成
								</view>
								<view class="subtitle">
									【tobe】推荐信系统已完成您的订单-清华李教授


								</view>
								<view class="contentText">
									To who it may concern,
									1111111111111111111111111111111111111 1111111111111111111111111111111111111

								</view>

							</view>

						</view>

					</el-scrollbar>



				</view>






			</view>
			<view class="wap3">
				<view class="header">
					<view class="header-img">
						<img :src="heart" alt="" srcset="" />

					</view>
					<view class="header-name">
						我的收藏

					</view>



				</view>
				<view class="foloderWap">
					<view class="foloderItme" v-for="(item,index) in  folderList" :key="index">
						<view class="foloderImg">
							<img :src="folder" alt="" srcset="" />

						</view>
						<view class="folderName">
							{{item}}

						</view>

					</view>

				</view>

			</view>

		</view>

		<el-dialog title="修改个人信息" :visible.sync="dialogFormVisible" width='500px' class="myForm">
			<el-form :model="form" label-width="80px" label-position="top" size="small">
				<el-row type="flex" class="row-bg" justify="end">
					<el-col :span="4">
						<el-form-item label="">

							<el-avatar v-model="form.acavr" :src="form.acavr"></el-avatar>

						</el-form-item>

					</el-col>
				</el-row>

				<el-row :gutter="20" class="row-bg">
					<el-col :span="10">
						<el-form-item label="昵称">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>

					</el-col>
					<el-col :span="10">
						<el-form-item label="姓名">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>

					</el-col>
				</el-row>
				<el-row class="row-bg">
					<el-col>
						<el-form-item label="个性签名">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>

					</el-col>
				</el-row>
				<el-row class="row-bg">
					<el-col>
						<el-form-item label="密码">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>

					</el-col>
				</el-row>
				<el-row class="row-bg">
					<el-col>
						<el-form-item label="再次确认密码">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>

					</el-col>
				</el-row>
				<el-row class="row-bg">
					<el-col>
						<el-form-item label="个性签名">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>

					</el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="space-between" :gutter="20" align='center'>
					<el-col>
						<el-form-item label="更改请发送验证码">
							<el-input v-model="form.name" autocomplete="off">
								<div slot="append" style="cursor: pointer;" @click="startCountdown"
									:disabled="countdown > 0">{{ countdown > 0 ? `${countdown}秒后重新获取` : '发送' }}</div>
							</el-input>
						</el-form-item>

					</el-col>

				</el-row>


			</el-form>
			<div slot="footer" style="margin-top: 40px; display:flex;justify-content: center; gap: 40px;">

				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				<el-button @click="dialogFormVisible = false">取 消</el-button>
			</div>
		</el-dialog>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import email from '@image/email.png';
	import heart from '@image/heart.png';
	import notice from '@image/my/notice.png';
	import folder from '@image/my/folder.png';
	export default {
		data() {
			return {
				email,
				notice,
				heart,
				folder,
				folderList: ['aaa', 'bbbb', 'cccc', 'dddddd'],
				dialogFormVisible: false,
				form: {
					acavr: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
					name: '',
					nickName: '',
					des: '',
					password: '',
				},
				countdown: 0, // 倒计时秒数
				timer: null, // 计时器
			}
		},
		methods: {

			openSetting() {

				this.dialogFormVisible = true
			},
			startCountdown() {
				if (this.countdown > 0) {
					return;
				}
				this.countdown = 60; // 倒计时60秒
				this.timer = setInterval(() => {
					if (this.countdown > 0) {
						this.countdown -= 1;
					} else {
						clearInterval(this.timer);
					}
				}, 1000);

				// 这里执行获取验证码的逻辑...
			},


		}
	}
</script>

<style lang="scss" scoped>
	.containerMe {

		.wap {
			@include modelPdOther;
			@include ct1400;
			@include fj();

			.wap1 {
				@include wh(100%, 100%);
				@include fj(flex-start);
				flex-direction: column;
				width: 400px;
				margin-bottom: 40px;

				.avatar {
					width: 80px;
					height: 80px;

					::v-deep .el-avatar {

						width: 80px;
						height: 80px;
					}

				}

				.des {
					margin-top: 40px;
					display: flex;
					flex-direction: column;

					.inline {
						width: 100%;
						height: 26px;
						line-height: 26px;

						&.name {
							color: rgb(0, 0, 0);
							font-size: 22px;
							line-height: 26px;

						}

						.qianming {
							word-wrap: break-word;
						}
					}

					.setting {
						margin-top: 20px;
						border-radius: 10px;
						padding: 10px 5px;
						color: #fff;
						background: rgb(90, 2, 94);
						cursor: pointer;
						text-align: center;

						&.setting1 {
							width: 20%;
						}

						&.setting2 {
							width: 35%;
						}

					}


				}

				.record {
					display: flex;
					flex-direction: column;
					margin-top: 20px;

					.recordName {
						font-size: 26px;
						color: #000;
						font-weight: 700;
						padding: 20px 0;
					}

					.record-list {

						box-sizing: border-box;
						border-radius: 5px;
						height: 580px;

						.list-item {
							display: flex;
							height: 98px;
							margin: 16px 0;
							border: 1px solid rgb(202, 202, 202);
							border-radius: 6px;
							box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
							padding: 0 16px;
							align-items: center;

							.item-left {
								width: 60px;
								height: 60px;
								border-radius: 5px;
								display: flex;
								justify-content: center;
								align-items: center;

								img {
									width: 100%;
									height: 100%;
									object-fit: cover;
								}
							}

							.item-right {
								@include fj(space-around);
								height: 100%;
								flex-direction: column;
								padding: 16px;
								flex: 1;



							}


						}



					}


				}





			}

			.wap2 {
				@include wh(100%, 100%);
				@include fj(flex-start);
				flex-direction: column;
				flex: 1;
				margin: 0 20px 4px 20px;
				padding-right: 60px;



				.header {
					@include fj(flex-start);
					align-items: center;
					width: 100%;
					height: 76px;

					.header-img {
						width: 40px;
						height: 56px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover
						}
					}

					.header-name {
						margin-left: 40px;
						font-size: 32px;
						font-weight: 700;
						color: #000;
					}



				}

				.message {
					display: inline-flex;
					justify-content: flex-end;
					align-items: center;
					padding-right: 60px;
				}

				.content {
					width: 100%;

					margin-top: 20px;

					background: rgb(255, 255, 255);

					.content-list {
						height: 900px;

						.content-item {
							@include fj(flex-start);
							width: 100%;
							height: 100px;
							padding: 12px 20px;
							box-sizing: border-box;
							border-bottom: 0.2px solid rgba(0, 0, 0, 0.15);
							;

							.item-left {
								width: 30px;
								height: 100%;
								display: flex;
								justify-content: center;
								align-items: center;

								.tui {
									width: 30px;
									height: 30px;
									border-radius: 50%;
									color: #fff;
									background: rgb(215, 57, 51);
									display: flex;
									justify-content: center;
									align-items: center;
								}



							}

							.item-right {
								display: flex;
								flex-direction: column;
								margin-left: 20px;

								.title {
									color: rgb(0, 0, 0);
									font-size: 20px;
									font-weight: 600;
									line-height: 26px;
									letter-spacing: 0%;
									text-align: left;

								}

								.subtitle {
									color: rgb(0, 0, 0);
									font-size: 16px;
									line-height: 16px;

								}

								.contentText {
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									// 控制行数
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
									width: 400px;
									font-size: 14px;


								}






							}



						}

					}


				}


			}


			.wap3 {
				@include wh(100%, 100%);
				@include fj(flex-start);
				flex-direction: column;
				width: 320px;
				margin: 40px 20px 4px 20px;

				.header {
					@include fj(flex-start);
					align-items: center;
					width: 100%;
					height: 76px;

					.header-img {
						width: 70px;
						height: 63px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover
						}
					}

					.header-name {
						margin-left: 40px;
						font-size: 32px;
						font-weight: 700;
						color: #000;
					}



				}

				.foloderWap {
					width: 100%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					margin-top: 20px;

					.foloderItme {
						width: 120px;
						height: 120px;
						margin: 25px 40px 10px 0;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}

					}

					.folderName {
						font-size: 24px;
						color: #000;
						font-weight: 700;
						display: flex;
						justify-content: center;
						align-items: center;

					}




				}

			}

		}






	}

	::v-deep .myForm {
		.el-dialog {
			padding: 0 10px;
		}

		.el-form {
			.el-form-item--small .el-form-item__label {
				line-height: 2px;
			}


		}

		.el-form-item--small .el-form-item__label {
			margin-bottom: 10px;
		}


	}

	::v-deep.row-bg {
		height: 30px;

	}
</style>