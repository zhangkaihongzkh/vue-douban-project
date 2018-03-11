


<template>


<el-row>
  <h1>{{fileDetail.title}}</h1>
  <el-col :gutter="60" v-for="item in filmItems"  grid-content bg-purple :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="item.images.medium" height="500" class="image">
      <div style="padding: 20px;">
        <span>{{item.title}}</span>
        <div class="text item"><time class="time">原名：</time>{{item.original_title}}</div>
        <div class="text item"><time class="time">导演：</time><span v-for="director in item.casts">{{director.name}}、</span></div>
        <div class="text item"><time class="time">年代：</time>{{item.year}}</div>
        <div class="text item"><time class="time">类型：</time>{{item.genres.join('、')}}</div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>

export default {
  mounted(){
    this.getData();
  },
  computed:{
    nowPath:function(){
      return this.$route.fullPath
    }
  },
  data() {
    return {
      itemList:['aaa','bbb','ccc'],
      imageDetail:[{name:'zkhzz',age:'21'},],
      filmItems:{},
      fileDetail:{},
      //fileItem:{}
    };
  },
  methods:{

    getData:function(){
      var _this = this;
      //axios方法不支持跨域 或者说要配置代理很麻烦
      // this.$http.get('https://api.douban.com/v2/movie/subject/1764796').then(function(res){
      //   console.log(res);
      //   _this.filmItems = res;
      //   });
      this.$http.jsonp('https://api.douban.com/v2/movie/top250',{

      }).then(function(res){
        //电影类型
        _this.fileDetail = res.data;
        //电影相条目
        _this.filmItems = res.data.subjects;
        //console.log(res.data);
        //console.log(_this.filmItems[0].images.medium);
        console.log(_this.$route);
      })

    }
  }
}


</script>

<style scoped>
.el-card{
  overflow: hidden;
}
  .el-col {
    border-radius: 4px;
    max-height: 650px;
    overflow: hidden;
    height: 650px;
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


