<template>
  <div class="detail">
    <NavBar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="details">
      <div class="title">{{detail.title}}</div>
      <div class="desc">{{detail.summary}}</div>
      <div class="content">{{detail.content}}</div>
      <div class="create-time">{{detail.createTime}}</div>
    </div>
  </div>
</template>
<script>
import { NavBar, Toast } from "vant";
export default {
  name: "Detail",
  components: {
    NavBar
  },
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    let id = this.$route.params.id;
    fetch(`/article/detail/${id}`).then(res => res.json()).then(res => {
      this.detail = res.data
    })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("right");
    }
  }
};
</script>
<style lang="less" scoped>
.detail {
  text-align: left;
  .details {
    padding: 20px;
    .title {
      font-size: 25px;
      padding-bottom: 20px;
    }
    .desc {
      padding: 20px 10px;
      background-color: #dcdcdc;
      border-radius: 3px;
    }
    .content {
      text-indent: 2em;
      line-height: 200%;
      padding-bottom: 20px;
    }
    .create-time {
      color: #9c9c9c;
      text-align: right;
    }
  }
}
</style>
