 <template>
 	<div class="tt">
		<ul class="default" v-for="limit in limits">
			<li>
				<router-link class="dd" :to="{name:'default',params:{id:limit.id}}">{{limit.name}}</router-link>
				<p>{{limit.description}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  data () {
    return {
     	limits : {},
     	
    }
  },
  methods : {
   
  },
  created(){
		this.$http.get('api',{
			params : {
				host : 'http://news-at.zhihu.com/api/4/themes',
				method : 'get'
			}
		}).then(function(msg){
	     	 console.log(msg);
	    	this.limits = msg.data.others
	    
	    }.bind(this)).catch(function(err){
	      console.log(err);
	    })
	}
}
</script>
<style>
	.tt{
		width:100%;
		height:56.25rem;
		background:url(../assets/3.jpg);
		background-size:100% 56.25rem;
	}
	.default{
		width:100%;
		float:right;
	}
	.default li{
		height:3.75rem;
	}
	.default li:first-child{
		margin-top:0.625rem;
	}
	.default li .dd{
		display:inline-block;
		color:#E0F0FC;
		height:1.875rem;
	}
</style>