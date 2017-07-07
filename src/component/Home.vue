<template>
	<div>
		<div class="loading" v-if="imgs&&contents==''">
			<img  src="../assets/1.gif" alt="">
		</div>
		
		<div v-else class="block">
		    <el-carousel height="23.4375rem">
		      <el-carousel-item  v-for="item in imgs" :key="item">

		        <router-link  :to="{name:'store',params:{id:item.id}}" >
					<img class="bg"  :src="item.image" alt="">
					<span class="title">{{item.title}}</span>
		        </router-link>
		      </el-carousel-item>
	   		 </el-carousel>
	   		 <div class="content">
	   		 	<ul v-for="txt in contents">
	   		 		<li>
	   		 			<router-link class="tit"  :to="{name:'store',params:{id:txt.id}}">{{txt.title}}</router-link>
	   		 			<img :src="txt.images" alt="">
	   		 		</li>
	   		 	</ul>
	   		 </div>
	   		 <router-view></router-view>
 	 	</div>
	</div>
</template>
<script>
	export default { 
		data(){
			return {
				imgs : [],
				contents : []
			}
		},
		methods : {

		},
		created(){
			this.$http.get('/api',{
				params : {
					host : 'https://news-at.zhihu.com/api/4/news/latest',
					qs : {

					},
					method : 'get'

				}
			}).then(function(msg){
	          console.log(msg);
	           this.imgs = msg.data.top_stories
	           this.contents = msg.data.stories
	           // console.log(this.contents)
	        }.bind(this)).catch(function(err){
	          console.log(err);
	        })
		}
	}
</script>
<style>
.loding{
	width:100%;
	height:41.625rem;
	position:absolute;
	top:6.25rem;
}
.loading img{
	width:100%;
	height:100%;
}
.el-carousel{
	width:100%;
	height:23.4375rem;
}
.bg{
	width:100%;
	height:100%;
	background-size:100% 100%;
}
.title{
	display:inline-block;
	position:absolute;
	font-family:微软雅黑;
	color:#fff;
	font-weight:700;
	font-size:1.125rem;
	width:100%;
	background:rgba(0,0,0,0.2);
	bottom:0.625rem;


}
.content ul{

}
.content ul li{
	width:96%;
	height:6.25rem;
	/*background:red;*/
	margin-left:2%;
	margin-top:0.625rem;

	background:#EFF2F7;
}
.content ul li .tit{
	display:inline-block;
	width:70%;
	height:3.75rem;
	font-weight:400;
	color: #000;
	line-height:1.75rem;
	margin-top:1.25rem;
	
	float:left;
}
.content ul li img{
	width:5.0rem;
	height:5.0rem;
	margin-top:0.625rem;
	margin-left:;
}
</style>