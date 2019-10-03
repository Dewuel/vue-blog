<template>
  <div>
    <van-nav-bar
      title="发布"
      right-text="反馈"
      @click-right="onClickRight"
    />
    <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" style="margin-top: 5vw" />
    <van-cell-group>
      <van-field label="文章标题" placeholder="文章标题" v-model="title" />
      <van-field label="文章简介" placeholder="文章简介" v-model="desc" />
      <van-field label="文章内容" placeholder="文章内容" type="textarea" :autosize="{maxHeight: 250}" v-model="content" />
    </van-cell-group>
    <van-button type="primary" @click="addArticle" class="sub_btn">发布</van-button>
  </div>
</template>
<script>
import { Uploader, CellGroup, Field, Button, Toast, NavBar } from "vant";
export default {
  name: "add",
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      fileList: [],
      title: '',
      desc: '',
      content: '',
      img: ''
    };
  },
  methods: {
    afterRead(info) {
      window.console.log(info);
      this.img = info.content;
    },
    onClickRight(){
      window.console.log('right')
      Toast('right')
    },
    addArticle(){
      if(this.title===''||this.desc === ''||this.content === ''||this.img === ''){
        Toast('请输入完整字段');
        return;
      }
      const data = {
        title: this.title,
        summary: this.desc,
        content: this.content,
        img: this.img
      }
      fetch('/article/create', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(res => {
        if(res.status === 200){
          Toast('发布成功')
          this.$router.push('/');
        }
      })
      window.console.log(data)
    }
  }
};
</script>
<style lang="less" scoped>
  .sub_btn{
    width: 90vw;
    margin-bottom: 20px;
  }
</style>