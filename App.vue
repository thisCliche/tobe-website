<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageNotFound() {
			uni.reLaunch({
				url:'/pages/error/index'
			})
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	*{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	body{
		min-width: 1366px;
	}
	 // ::v-deep .btn-next,
  //   ::v-deep .btn-prev {
  //       border: 0px;
  //       height: 28px;
  //   }
</style>
