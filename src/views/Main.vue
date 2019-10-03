<template>
  <div>
    <NavBar title="首页" right-text="消息" @click-right="onClickRight" />
    <List v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <Cell v-for="item in list" :key="item.id" :title="item.title">
        <div class="list" @click="toDetail(item.id)">
          <div class="left">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="create-time">{{item.createTime}}</div>
          </div>
        </div>
      </Cell>
    </List>
  </div>
</template>
<script>
import { NavBar, Toast, List, Cell } from "vant";
export default {
  name: "Main",
  components: {
    NavBar,
    List,
    Cell
  },
  data() {
    return {
      loading: true,
      finished: false,
      list: []
    };
  },
  mounted () {
    fetch('/article/list').then(res => {
      return res.json()
    }).then(res => {
      if(res.status === 200){
        this.loading = false
        this.finished = true
        this.list = res.data
      }
    })
  },
  methods: {
    onClickRight() {
      Toast("right");
    },
    onLoad(){
      fetch('/article/list')
      setTimeout(() => {
        this.loading = false
        this.finished = true
        this.list = [
          {
            id: 1,
            title: 'qwe',
            desc: 'sadasf',
            img: 'sad',
            content: 'asdarwedqdasda',
            createTime: '2019-10-02'
          }
        ]
      }, 500)
    },
    toDetail(id){
      this.$router.push({
        name: 'detail',
        params: {
          id: id
        }
      })
    }
  }
};
</script>
<style lang="less" scoped>
.list{
  display: flex;
  flex-direction: row;
  .left, img{
    width: 150px;
    height: 100px;
    border-radius: 10px;
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
    .title{
      font-size: 18px;
    }
    .create-time{
      font-size: 12px;
      color: #cccccc;
    }
  }
}
</style>