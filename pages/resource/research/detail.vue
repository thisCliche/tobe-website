<template>
  <view class="IndexPage">
    <view class="banner">
      <img :src="descript.imageUrl" alt="" srcset="" />
      <view class="star" @click="getShouChang">
        <view class="el-icon-star-off" v-if="!isShow"> </view>
        <view class="el-icon-star-on" v-else style="color: #e67d7d"> </view>
      </view>
    </view>
    <view class="container1">
      <view class="title"> {{ descript.name }} </view>
      <view class="content">
        <!-- <rich-text :nodes="content"></rich-text> -->
        <view class="xiangmu">
          <view class="title"> 项目介绍 </view>
          <view class="text">
            <rich-text :nodes="content"></rich-text>
          </view>
        </view>
      </view>
    </view>
    <view class="foot">
      <view class="foot-img">
        <img src="" alt="" srcset="" />
      </view>
      <view class="foot-text"> 入学申请咨询 </view>
    </view>

    <el-dialog
      title="添加到收藏夹"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <view class="containerDialog">
        <view class="title">
          创建文件名称
          <i class="el-icon-star-on" style="color: rgb(255, 0, 0)"></i>
        </view>
        <view class="inputContent">
          <el-input placeholder="eg.斯坦福人工智能科研" v-model="creatName">
          </el-input>
        </view>

        <view class="shoucang"> 快去“个人中心-我的收藏”查看吧！ </view>
      </view>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <my-foot></my-foot>
  </view>
</template>

<script>
import { resourceDetail } from "@api/resource.js";
export default {
  name: "PagesIndex",
  data() {
    return {
      isShow: false,
      centerDialogVisible: false,
      descript: {},
      creatName: "",

      content: "",
    };
  },
  onLoad(options) {
    this.getData(options.id);
  },
  methods: {
    async getData(id) {
      let resDataList = await Promise.all([
        resourceDetail({
          id: id,
        }),
      ]);
      let resorce = [];

      resDataList.map((res, idx) => {
        console.log(res, idx);
        if (idx == 0) {
          this.descript = res.data;
          this.content = this.descript.detail;
        }
      });
    },
    getShouChang() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/minix.scss";

.IndexPage {
  width: 100%;

  .banner {
    @include fj(center);
    width: 100%;
    height: 700px;
    background: rgb(196, 196, 196);
    position: relative;

    // .logo {
    // 	width: 200px;
    // 	height: 200px;
    // 	position: absolute;
    // 	border-radius: 20px;
    // 	background: rgb(230, 125, 125);
    // 	left: 348px;
    // 	top: 580px;
    // 	z-index: 100;
    // }
    .star {
      position: absolute;
      right: 585px;
      top: 735px;
      z-index: 100;
      width: 50px;
      height: 50px;
      font-size: 36px;
    }

    .star2 {
      position: absolute;
      right: 585px;
      top: 735px;
      z-index: 100;
      width: 50px;
      height: 50px;
      font-size: 36px;
      color: #e67d7d;
    }
  }

  .container1 {
    @include ct1200;
    padding: 80px;

    display: flex;
    flex-direction: column;

    .title {
      color: rgb(0, 0, 0);
      font-size: 36px;
      font-weight: 700;
      line-height: 60px;
      margin-top: 20px;
    }

    .content {
      display: flex;
      flex-direction: column;

      .xiangmu {
        margin: 20px 0;

        .title {
          color: rgb(0, 0, 0);
          font-size: 36px;
          font-weight: 700;
          width: 100%;
        }

        .text {
          color: rgb(0, 0, 0);
          width: 100%;
          font-size: 26px;
          font-weight: 700;
          line-height: 32px;
          letter-spacing: 0px;
          word-break: break-word;
        }
      }
    }
  }

  .foot {
    @include ct1200;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 40px;

    .foot-img {
      width: 200px;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .foot-text {
      @include mt(20px);

      color: rgb(0, 0, 0);
      font-size: 26px;
      font-weight: 700;
      line-height: 30px;
    }
  }
}

.containerDialog {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 22px;
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #000;
    font-weight: 500;
  }

  .inputContent {
    display: flex;
    align-items: center;
    margin-top: 40px;
  }
  .shoucang {
    margin-top: 20px;
  }
}
</style>