<template>
	<view>
		<div class="tagcloud-all" ref="tagcloudall">
		    <span class="item" v-for="item in tagList" :key="item.id" :style="'background:' + item.color + ';'">{{item.name}}</span>
		  </div>
	</view>
</template>

<script>
	export default {
	  name: "tagcloud",
	  data() {
	    return {
	      tagList: [],
	      radius: 200,
	      dtr: Math.PI / 320,
	      d: 300,
	      mcList: [],
	      active: false,
	      lasta: 1,
	      lastb: 1,
	      distr: true,
	      tspeed: 1,
	      size: 300,
	      mouseX: 0,
	      mouseY: 0,
	      howElliptical: 1,
	      oList: null,
	      oA: null,
	      sa: 0,
	      ca: 0,
	      sb: 0,
	      cb: 0,
	      sc: 0,
	      cc: 0
	    }
	  },
	  methods: {
	    // 生成随机数
	    getRandomNum() {
	      return Math.floor(Math.random() * (255 + 1));
	    },
	    // 三角函数角度计算
	    sineCosine(a, b, c) {
	      this.sa = Math.sin(a * this.dtr);
	      this.ca = Math.cos(a * this.dtr);
	      this.sb = Math.sin(b * this.dtr);
	      this.cb = Math.cos(b * this.dtr);
	      this.sc = Math.sin(c * this.dtr);
	      this.cc = Math.cos(c * this.dtr);
	    },
	    // 设置初始定位
	    positionAll() {
	      this.$nextTick(() => {      // 注意: 所有的在onPageReady方法中执行的方法都需要$nextTick确保所有的标签都已经渲染
	        var phi = 0;
	        var theta = 0;
	        var max = this.mcList.length;
	        var aTmp = [];
	        var oFragment = document.createDocumentFragment();
	        // 随机排序
	        for (let i = 0; i < this.tagList.length; i++) {
	          aTmp.push(this.oA[i]);
	        }
	        aTmp.sort(() => {
	          return Math.random() < 0.5 ? 1 : -1;
	        });
	        for (let i = 0; i < aTmp.length; i++) {
	          oFragment.appendChild(aTmp[i]);
	        }
	        this.oList.appendChild(oFragment);
	        for (let i = 1; i < max + 1; i++) {
	          if (this.distr) {
	            phi = Math.acos(-1 + (2 * i - 1) / max);
	            theta = Math.sqrt(max * Math.PI*0.9) * phi;
	          } else {
	            phi = Math.random() * (Math.PI);
	            theta = Math.random() * (2 * Math.PI);
	          }
	          // 坐标变换
	          this.mcList[i - 1].cx = this.radius * Math.cos(theta) * Math.sin(phi)*2;
	          this.mcList[i - 1].cy = this.radius * Math.sin(theta) * Math.sin(phi);
	          this.mcList[i - 1].cz = this.radius * Math.cos(phi);
	          this.oA[i - 1].style.left = this.mcList[i - 1].cx + this.oList.offsetWidth / 2 - this.mcList[i - 1].offsetWidth / 2 + 'px';
	          this.oA[i - 1].style.top = this.mcList[i - 1].cy + this.oList.offsetHeight / 2 - this.mcList[i - 1].offsetHeight / 2 + 'px';
	        }
	      })
	    },
	    // 坐标更新 让标签动起来
	    update() {
	      this.$nextTick(() => {           // 注意: 所有的在onPageReady方法中执行的方法都需要$nextTick确保所有的标签都已经渲染
	        var a;
	        var b;
	        if (this.active) {
	          a = (-Math.min(Math.max(-this.mouseY, -this.size), this.size) / this.radius) * this.tspeed;
	          b = (Math.min(Math.max(-this.mouseX, -this.size), this.size) / this.radius) * this.tspeed;
	        } else {
	          a = this.lasta * 0.98;
	          b = this.lastb * 0.98;
	        }
	        this.lasta = a;
	        this.lastb = b;
	        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
	          return
	        }
	        var c = 0;
	        this.sineCosine(a, b, c);
	        for (var j = 0; j < this.mcList.length; j++) {
	          var rx1 = this.mcList[j].cx;
	          var ry1 = this.mcList[j].cy * this.ca + this.mcList[j].cz * (-this.sa);
	          var rz1 = this.mcList[j].cy * this.sa + this.mcList[j].cz * this.ca;
	          var rx2 = rx1 * this.cb + rz1 * this.sb;
	          var ry2 = ry1;
	          var rz2 = rx1 * (-this.sb) + rz1 * this.cb;
	          var rx3 = rx2 * this.cc + ry2 * (-this.sc);
	          var ry3 = rx2 * this.sc + ry2 * this.cc;
	          var rz3 = rz2;
	          this.mcList[j].cx = rx3;
	          this.mcList[j].cy = ry3;
	          this.mcList[j].cz = rz3;
	          var per = this.d / (this.d + rz3);
	          this.mcList[j].x = (this.howElliptical * rx3 * per) - (this.howElliptical * 2);
	          this.mcList[j].y = ry3 * per;
	          this.mcList[j].scale = per;
	          this.mcList[j].alpha = per;
	          this.mcList[j].alpha = (this.mcList[j].alpha - 0.6) * (10 / 6);
	        }
	        this.doPosition();
	        this.depthSort();
	      })
	    },
	    //
	    doPosition() {
	      this.$nextTick(() => {            // 注意: 所有的在onPageReady方法中执行的方法都需要$nextTick确保所有的标签都已经渲染
	        var l = this.oList.offsetWidth / 2;
	        var t = this.oList.offsetHeight / 2;
	        for (var i = 0; i < this.mcList.length; i++) {
	          this.oA[i].style.left = this.mcList[i].cx + l - this.mcList[i].offsetWidth / 2 + 'px';
	          this.oA[i].style.top = this.mcList[i].cy + t - this.mcList[i].offsetHeight / 2 + 'px';
	          this.oA[i].style.fontSize = Math.ceil(12 * this.mcList[i].scale / 2) + 8 + 'px';
	          // this.oA[i].style.filter = "alpha(opacity=" + 100 * this.mcList[i].alpha + ")";
	          this.oA[i].style.opacity = this.mcList[i].alpha;
	        }
	      })
	    },
	    //
	    depthSort() {
	      this.$nextTick(() => {            // 注意: 所有的在onPageReady方法中执行的方法都需要$nextTick确保所有的标签都已经渲染
	        var aTmp = [];
	        for (let i = 0; i < this.oA.length; i++) {
	          aTmp.push(this.oA[i]);
	        }
	        aTmp.sort(function (vItem1, vItem2) {
	          if (vItem1.cz > vItem2.cz) {
	            return -1;
	          } else if (vItem1.cz < vItem2.cz) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });
	        for (let i = 0; i < aTmp.length; i++) {
	          aTmp[i].style.zIndex = i;
	        }
	      })
	    },
	    // 网络请求 拿到tagList
	    query() {
	      // 假装从接口拿回来的数据
	      let tagListOrg = [
	        { name: 'AP', id:1},
	        { name: 'AL', id:2 },
	        { name: 'DSE', id:3 },
	        { name: 'PET', id:4 },
	        { name: 'SAT', id:5 },
	        { name: 'ACT', id:6 },
	        { name: 'GRE', id:7 },
	        { name: 'Gmart', id:8 },
	        { name: 'IB', id:9 },
	        { name: '其它考试',id:10 },
	        { name: '竞赛', id:11 },
	        { name: 'KET', id:12 },
	        { name: 'PET', id:13 },
	        { name: 'IELTS', id:14 },
	        { name: 'TOEFL', id:15 },
	        { name: 'Duolingo', id:16 },
					{ name: 'AP', id:17},
					{ name: 'AL', id:18 },
					{ name: 'DSE', id:19 },
					{ name: 'PET', id:20 },
					{ name: 'SAT', id:21 },
					{ name: 'ACT', id:22 },
					{ name: 'GRE', id:23 },
					{ name: 'Gmart', id:24 },
					{ name: 'IB', id:25 },
					{ name: '其它考试',id:26 },
					{ name: '竞赛', id:27 },
					{ name: 'KET', id:28 },
					{ name: 'PET', id:29 },
					{ name: 'IELTS', id:30 },
					{ name: 'TOEFL', id:31 },
					{ name: 'Duolingo', id:32 },
	      ];
	      // 给tagList添加随机颜色
	      tagListOrg.forEach(item => {
	        item.color = "rgb(" + this.getRandomNum() + "," + this.getRandomNum() + "," + this.getRandomNum() + ")";
	      })
	      this.tagList = tagListOrg;
	      this.onPageReady();
	    },
	    // 生成标签云
	    onPageReady() {
	      this.$nextTick(() => {
	        this.oList = this.$refs.tagcloudall;
	        this.oA = this.oList.getElementsByTagName('span');
	        var oTag = null;
	        for (var i = 0; i < this.oA.length; i++) {
	          oTag = {};
	          oTag.offsetWidth = this.oA[i].offsetWidth;
	          oTag.offsetHeight = this.oA[i].offsetHeight;
	          this.mcList.push(oTag);
	        }
	        this.sineCosine(0, 0, 0);
	        this.positionAll();
	        this.oList.onmouseover = () => {
	          this.active = true;
	        }
	        this.oList.onmouseout = () => {
	          this.active = false;
	        }
	        this.oList.onmousemove = (event) => {
	          var oEvent = window.event || event;
	          this.mouseX = oEvent.clientX - (this.oList.offsetLeft + this.oList.offsetWidth / 2);
	          this.mouseY = oEvent.clientY - (this.oList.offsetTop + this.oList.offsetHeight / 2);
	          this.mouseX /= 5;
	          this.mouseY /= 5;
	        }
	        setInterval(() => {
	          this.update()
	        }, 10);            // 定时器执行 不能写setInterval(this.update(), 30)
	      })
	    }
	  },
	  created() {
	    this.$nextTick(() => {
	      this.query();
	    })
	  }
	}

</script>

<style lang="scss" scoped>
// 标签云
.tagcloud-all {
  position: relative;
	height:400px;
  .item {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #fff;
    font-weight: bold;
    padding: 16px 24px;
		top: 0;left: 0;filter:none;
		border-radius:8px;
    &:hover {
      // color: #FF0000;
			transform: scale(1.06);
      letter-spacing: 2px;
    }
  }
}

</style>
