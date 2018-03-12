


<template>


<el-row v-loading="loading">
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

 <div class="block pagComp" v-loading="loading">
      <div>
        <span class="demonstration">共：{{total}}条记录，当前第{{nowPage}}页，共{{totalPage}}页</span>
      </div>
      <el-button-group>
        <el-button @click.native = "go(nowPage -1)" type="primary" icon="el-icon-arrow-left" size="small">上一页</el-button>
        <el-button @click.native = "go(nowPage +1)" type="primary" size="small">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
  </div>
</el-row>


</template>

<script>

export default {
  name:'Hot',
  mounted(){
    this.getData();
  },
  computed:{
    nowPath:function(){
      return this.$route.fullPath
    },
    totalPage(){
      //console.log(this.total/this.count)
      this.pageTotal = Math.ceil(this.total/this.count)
      return Math.ceil(this.total/this.count);
    }
  },
  //监听路由变化
  watch:{
    '$route': 'getData'
  },
  data() {
    return {
      loading:true,
      itemList:['aaa','bbb','ccc'],
      imageDetail:[{name:'zkhzz',age:'21'},],
      filmItems:{},
      fileDetail:{},
      //返回条目信息个数
      //路由页码
      total:0,
      count:9,
      currentPage:0,
      // 当前页面
      pageNum:1,
      //fileItem:{}
      //页面总数
      pageTotal:0,
      //当前位于那一页
      nowPage:0,
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
      //console.log(this.$route.params.pageNum)
      //console.log(this.$route.params.pageNum);
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters',{
        params:{
           start:(_this.$route.params.pageNum -1) * 9,
           count:9
        }


      }).then(function(res){
        //电影类型
        _this.fileDetail = res.data;
        //电影相条目
        _this.filmItems = res.data.subjects;
        _this.total = _this.fileDetail.total;
        _this.nowPage = _this.$route.params.pageNum;
        //console.log(res.data);
        //console.log(_this.filmItems[0].images.medium);
        //修改loading属性
        this.loading = false;
        // console.log(_this.$route);
        //console.log(typeof _this.total);
      });
      this.loading = true;

    },
    //页面跳转
    go(page){
      console.log(typeof page);
      var _this = this;
      console.log(_this.$route);
      if(page >=1 && page <= this.pageTotal){
        _this.$router.push({name:'Hot',params:{pageNum:page}});
        //alert(1);
        //_this.$route
        // _this.$route.push({name:'Hot',params:{pageNum:page}});
      }
    }
  }
}


</script>

<style scoped>
/*
分页样式
 */
.pagComp{
  text-align: center;
  display: inline-block;
  margin: 50px 0;
  width: 100%;
}
.el-button-group{
  margin-top:20px;
}
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


