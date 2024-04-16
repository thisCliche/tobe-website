<template>
  <view class="IndexPage">
    <view class="banner">
      <img :src="descript.image" alt="" srcset="" />
      <view class="star" @click="getShouChang">
        <view class="el-icon-star-off" v-if="!isShow"> </view>
        <view class="el-icon-star-on" v-else style="color: #e67d7d"> </view>
      </view>
      <view class="logo">
        <img :src="descript.logo" alt="" srcset="" />
      </view>
    </view>
    <view class="container1">
      <view class="title"> 项目介绍 </view>
      <view class="common-line"> 学费：{{ descript.tuition_fee }}$ </view>
      <view class="common-line"> 国家：{{ descript.address }} </view>
      <view class="common-line">
        年级：{{ descript.grade_min }}--{{ descript.grade_max }}
      </view>
      <view class="common-line"> 日期：{{ descript.data }} </view>
      <view class="content">
        <!-- <rich-text :nodes="content"></rich-text> -->
        <view class="xiangmu">
          <view class="title"> 项目内容 </view>
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

    <my-foot></my-foot>
  </view>
</template>

<script>
import VideoProfile from "@/assets/components/VideoProfile.vue";
import HomeCase from "../HomeCase.vue";
import { schoolDetail, setResourceCollect } from "@api/resource.js";
export default {
  name: "PagesIndex",
  components: {
    VideoProfile,
    HomeCase,
  },
  data() {
    return {
      isShow: false,
      descript: {},
      content: "",
    };
  },
  onLoad(options) {
    this.getData(options.id);
  },
  methods: {
    async getData(id) {
      let resDataList = await Promise.all([
        schoolDetail({
          id: id,
        }),
      ]);
      resDataList.map((res, idx) => {
        console.log(res, idx);
        if (idx == 0) {
          this.descript = res.data;
          if(this.descript.is_colect){
            this.isShow = true
          }
          this.content = this.descript.detail;
        }
      });
    },

    async getShouChang() {
      await setResourceCollect({
        id: this.descript.id,
        type: "夏校",
      });
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

    .logo {
      width: 200px;
      height: 200px;
      position: absolute;
      border-radius: 20px;
      left: 348px;
      top: 580px;
      z-index: 100;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .star {
      position: absolute;
      left: 585px;
      top: 735px;
      z-index: 100;
      width: 50px;
      height: 50px;
      font-size: 36px;
    }

    .star2 {
      position: absolute;
      left: 585px;
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
</style>
