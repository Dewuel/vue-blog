<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" route active-color="#07c160" inactive-color="#000">
      <van-tabbar-item replace icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item replace icon="add-o" to="/add">新增</van-tabbar-item>
      <van-tabbar-item replace icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: "home",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0
    }
  }
};
</script>
