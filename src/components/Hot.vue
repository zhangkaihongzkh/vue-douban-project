<template>


<el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple">

    <el-row>
      <el-col :span="8" v-for="(o, index) in 10" :key="o" v-on:click.native="upDate">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/logo.png" height="200" width="200" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <p><span>原名</span>xxxx</p>
            <p><span>导演</span>xxxx</p>
            <p><span>类型</span>xxxx</p>
            <p><span>演员</span>xxxx</p>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

     <el-row>
      <el-col :span="8" v-for="(item,index) in detail">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/logo.png" height="200" width="200" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <p><span>原名</span>{{item.name}}</p>
            <p><span>导演</span>xxxx</p>
            <p><span>类型</span>xxxx</p>
            <p><span>演员</span>xxxx</p>
            <div class="bottom clearfix">
              <time class="time"></time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div></el-col>

</el-row>
</template>

<script>
export default{
  mounted(){
    this.upDate();
  }
  data(){
    return{
      detail:{{"name":"zkhzz","age":'1'},{"name":"zkh","age":'12'}}}
    },
  },
  methods:{
    upDate:function(){
      alert(1);
    }
  }


}

</script>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {

  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
