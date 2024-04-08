<template>
  <view class="IndexPage">
    <view class="banner">
      <VideoProfile :introduction="introduction" />
    </view>
    <view class="container1">
      <view class="title"> 最受欢迎 </view>
      <view class="container1wap">
        <HomeCase></HomeCase>
      </view>
    </view>
    <view class="container1">
      <view class="title"> 最近上新 </view>
      <view class="container1wap">
        <HomeCase></HomeCase>
      </view>
    </view>

    <view class="container2">
      <view class="wap1">
        <el-select v-model="value1" placeholder="线上/线下" class="nselect">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-select v-model="value2" placeholder="暑假/寒假">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-select v-model="value1" placeholder="线上/线下" class="nselect">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-select v-model="value2" placeholder="暑假/寒假">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <view class="footer">
          <view class="foot-img">
            <img src="" alt="" srcset="" />
          </view>
          <view class="foot-text"> 入学申请咨询 </view>
        </view>
      </view>
      <view class="wap2">
        <view class="wapItem" v-for="(item, index) in 12" :key="index">
          <view class="item-img">
            <img src="" alt="" srcset="" />
          </view>
          <view class="item-logo">
            <img src="" alt="" srcset="" />
          </view>
          <view class="title"> 人工智能 </view>
          <view class="subtitle"> 线上 </view>
          <view class="item-wap">
            简介简介简介简介简介简介简介简介简介简介简介简介简介简介
          </view>
        </view>
      </view>
    </view>

    <my-foot></my-foot>
  </view>
</template>

<script>
import { KeepAlive } from "vue";
import { tagIcon } from "../export.js";

import UseCase from "../UseCase.vue";
import VideoProfile from "../VideoProfile.vue";
import HomeCase from "../HomeCase.vue";
import {
  videoApi,
  bannerApi,
  configApi,
  userSide,
  textConfig,
  suanFa1,
  teatcha1,
} from "@api/study.js";
export default {
  name: "PagesIndex",
  components: {
    UseCase,
    VideoProfile,
    HomeCase,
  },
  data() {
    return {
      introduction: {},
      value1: "",
      options1: [
        {
          value: "1",
          label: "线上",
        },
        {
          value: "2",
          label: "线下",
        },
      ],

      value2: "",
      options2: [
        {
          value: "1",
          label: "线上",
        },
        {
          value: "2",
          label: "线下",
        },
      ],

      cePinginfo: {}, // 1
      howVideoInfo: [],
      kaiqiVideo: [],
      guiHuavideo: {},
      PlanningConfigInfo: {},
      tPlanningClassConfigInfo: {},
      liuChenegBanner: "",
      daoshiBanImg: "",
      tagIcon,
      suanfaList: [],
      model1ComImg: [],
      banner13: [],
      banner: [
        {
          id: 1,
          bannerUrl:
            "https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg",
        },
        {
          id: 2,
          bannerUrl:
            "https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg",
        },
        {
          id: 3,
          bannerUrl:
            "https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg",
        },
        {
          id: 4,
          bannerUrl:
            "https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg",
        },
        {
          id: 5,
          bannerUrl:
            "https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg",
        },
        {
          id: 6,
          bannerUrl:
            "https://website.tobeapp.cn/uploads/20240331/740fb8593dfc73876747bc5511cb6eca.jpg",
        },
      ],
      container1Wap1: {
        imageUrl: "1111111",
        videoUrl: "222222222",
        discript: "33333333",
      },
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    async getData() {
      let resDataList = await Promise.all([
        videoApi({
          type: 4,
          limit: 1,
        }),
        videoApi({
          type: 5,
          limit: 2,
        }),

        videoApi({
          type: 6,
          limit: 2,
        }),
        videoApi({
          type: 7,
          limit: 4,
        }),
        videoApi({
          type: 8,
          limit: 1,
        }),
        configApi({}),
        textConfig({}),
        userSide({
          type: 1,
          limit: 5,
        }),
        bannerApi({
          type: 15,
          limit: 1,
        }),
        bannerApi({
          type: 14,
          limit: 1,
        }),
        suanFa1({}),
        bannerApi({
          type: 13,
        }),
        teatcha1({
          type: 6,
          limit: 3,
        }),
      ]);
      let topVideo = [],
        cePinginfo = [],
        howVideoInfo = [],
        kaiqiVideo = [],
        guiHuavideo = [],
        PlanningConfigInfo = {},
        tPlanningClassConfigInfo = {},
        suanFaList = [],
        teatcha = [],
        banner13 = [],
        model1ComImg = [],
        usecase = [];
      resDataList.map((res, idx) => {
        console.log(res, idx);
        if (idx == 0) {
          res.data.map((item) => {
            topVideo.push({
              imageUrl: item.image_text,
              videoUrl: item.video_text,
              id: item.id,
            });
          });
        } else if (idx == 1) {
          res.data.map((item) => {
            cePinginfo.push({
              imageUrl: item.image_text,
              id: item.id,
              videoUrl: item.video_text,
              name: item.name,
              text: item.text,
            });
          });
        } else if (idx == 2) {
          res.data.map((item) => {
            howVideoInfo.push({
              id: item.id,
              name: item.name,
              introduction: {
                imageUrl: item.image_text,
                videoUrl: item.video_text,
              },
            });
          });
        } else if (idx == 3) {
          res.data.map((item) => {
            kaiqiVideo.push({
              id: item.id,
              name: item.name,
              introduction: {
                imageUrl: item.image_text,
                videoUrl: item.video_text,
              },
            });
          });
        } else if (idx == 4) {
          res.data.map((item) => {
            guiHuavideo.push({
              id: item.id,
              name: item.name,
              text: item.text,
              introduction: {
                imageUrl: item.image_text,
                videoUrl: item.video_text,
              },
            });
          });
        } else if (idx == 5) {
          PlanningConfigInfo = res.data;
        } else if (idx == 6) {
          tPlanningClassConfigInfo = res.data;
        } else if (idx == 7) {
          res.data.map((item) => {
            usecase.push({
              engineerUrl: item.image_text,
              desc: item.text,
              id: item.id,
              name: item.name,
            });
          });
        } else if (idx == 8) {
          let data = res.data;

          this.liuChenegBanner = data[0].image_text;
        } else if (idx == 9) {
          let data = res.data;

          this.daoshiBanImg = data[0].image_text;
        } else if (idx == 10) {
          res.data.map((item) => {
            suanFaList.push({
              code: item.code,
              title: item.title,
              name: item.name,
            });
          });
        } else if (idx == 11) {
          res.data.map((item) => {
            banner13.push({
              imageUrl: item.image_text,
              desc: item.text,
              id: item.id,
              name: item.name,
            });
          });
        } else if (idx == 12) {
          res.data.map((item) => {
            teatcha.push({
              text: item.text,
              name: item.name,
              subname: item.subname,
            });
          });
        }
      });

      this.introduction = topVideo[0];

      this.cePinginfo = {
        one: {
          textcontent: {
            title: cePinginfo[0].name,
            text: cePinginfo[0].text,
          },
          introduction: {
            imageUrl: cePinginfo[0].imageUrl,
            videoUrl: cePinginfo[0].imageUrl,
            id: cePinginfo[0].id,
          },
        },
      };

      this.howVideoInfo = howVideoInfo;
      this.kaiqiVideo = kaiqiVideo;
      this.guiHuavideo = guiHuavideo[0];
      this.PlanningConfigInfo = PlanningConfigInfo;
      this.tPlanningClassConfigInfo = tPlanningClassConfigInfo;
      this.usecase = usecase;
      // this.homecase = homecase;
      this.suanFaList = suanFaList;
      this.model1ComImg = teatcha;
      this.banner13 = banner13;
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
  }

  .container1 {
    @include ct1200;
    padding: 20px 0;
    flex-direction: column;

    .title {
      color: rgb(0, 0, 0);
      font-size: 48px;
      font-weight: 700;
      line-height: 62px;
    }
  }

  .container2 {
    @include ct1200;
    @include modelPd;
    display: flex;

    .wap1 {
      display: flex;
      width: 200px;
      flex-direction: column;
      gap: 5px 0;

      .footer {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        .foot-img {
          width: 120px;
          height: 120px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .foot-text {
          color: rgb(0, 0, 0);
          margin-top: 10px;

          font-size: 26px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0px;
        }
      }
    }

    .wap2 {
      display: flex;
      flex-wrap: wrap;
      margin-left: 40px;

      .wapItem {
        @include fj(flex-start);
        flex-direction: column;
        position: relative;
        margin: 10px;
        width: 310px;
        height: 430px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;

        .item-img {
          width: 100%;
          height: 150px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .item-logo {
          position: absolute;
          top: 20%;
          left: 5%;
          width: 100px;
          height: 100px;
          border-radius: 20px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .title {
          color: rgb(0, 0, 0);
          margin-top: 20px;
          font-size: 26px;
          font-weight: 700;
          line-height: 30px;
          padding-right: 10px;

          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
        }

        .subtitle {
          color: rgb(0, 0, 0);
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 700;
          line-height: 20px;
          display: flex;
          justify-content: flex-end;
          padding-right: 10px;
          box-sizing: border-box;
        }

        .item-wap {
          width: 100%;
          overflow-wrap: break-word;
          color: rgb(0, 0, 0);
          font-size: 20px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0px;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
