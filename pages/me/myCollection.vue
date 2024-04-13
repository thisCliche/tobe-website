<template>
	<view class="containerMe">
		<view class="wap">

			<view class="wapHeader">
				<view class="header-title">
					我的收藏-Activites
				</view>
				<view class="header-shuaixun">
					<el-dropdown>
						<span class="el-dropdown-link">
							排序<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item icon="el-icon-plus">时间顺序</el-dropdown-item>
							<el-dropdown-item icon="el-icon-circle-plus">时间倒序</el-dropdown-item>

						</el-dropdown-menu>
					</el-dropdown>
					<el-dropdown>
						<span class="el-dropdown-link">
							下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
							<el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
							<el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
							<el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
							<el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>



				</view>

			</view>


			<view class="wapbody">

				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="date" label="日期" width="180">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="180">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
				</el-table>
				<view class="pagination">

					<el-pagination layout="prev, pager, next" :total="50">
					</el-pagination>



				</view>

			</view>
		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import folder from '@image/my/folder.png';
	export default {
		data() {
			return {
				folder,
				folderList: ['aaa', 'bbbb', 'cccc', 'dddddd'],
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]

			}
		},
		methods: {


		}
	}
</script>

<style lang="scss" scoped>
	.containerMe {

		.wap {
			@include modelPdOther;
			@include ct1200;

			.wapHeader {
				@include fj();
				width: 100%;

				.header-title {
					color: rgb(0, 0, 0);
					font-size: 30px;
					font-weight: 700;
					line-height: 35px;


				}

				.header-shuaixun {
					@include fj();
					padding-right: 50px;
					gap: 20px;


				}


			}

			.wapbody {
				margin-top: 60px;
				display: flex;
				align-items: center;
				flex-direction: column;

				.pagination {
					margin-top: 40px;
				}
			}




		}






	}
	::v-deep .el-pagination{
		display: flex;
		.btn-prev,.btn-next{
			border: none;
			color: rgb(71, 161, 238);
		}
		.el-pager{
			.number{
				font-size: 16px;
				&.active{
					color: rgb(71, 161, 238);
				}
			}
			
		}
	}
	
	
</style>