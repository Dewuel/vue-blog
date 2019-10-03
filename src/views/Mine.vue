<template>
  <div>
    <NavBar title="我的" right-text="设置" @click-right="onClickRight" />
  </div>
</template>
<script>
import { NavBar, Toast } from "vant";
export default {
  name: "mine",
  components: {
    NavBar
  },
  data() {
    return {};
  },
  methods: {
    onClickRight() {
      window.console.log("right");
      Toast("right");
    }
  }
};
</script>