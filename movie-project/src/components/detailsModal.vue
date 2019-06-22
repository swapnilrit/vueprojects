<template>
  <div class="detailsModal">
     <el-dialog
    :title="cardDetails.card.title"
     :visible.sync="dialogVisible"
    width="50%"
    :before-close="handleClose">
   <div class="movieImgDesc"> 
     <div > 
       <img class="image" :src="imgUrl"/> 
      </div>
      <div class="description"> 
        {{cardDetails.card.overview}}
      </div>
  </div>
  <el-row class="movieInfo">
   <el-col  class="title" :span="5">Genre </el-col>
   <el-col  :span="19"> {{cardDetails.geners}} </el-col>
   <el-col   class="title" :span="5">Cast </el-col>
   <el-col :span="19">{{cast}} </el-col>
   <el-col  class="title" :span="5"> Director</el-col>
   <el-col :span="19">{{director}} </el-col>
   <el-col  class="title" :span="5"> Movie Rating </el-col>
   <el-col :span="19"> 
     <el-rate v-model="cardDetails.card.vote_average/2"></el-rate>   
 </el-col>
  </el-row> 
   <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">Cancel</el-button>
   </span>
</el-dialog> 
  </div>
</template>

<script>

export default {
  name: 'detailsModal',
  created(){
   this.$store.dispatch("getMovieDetails",{id:this.cardDetails.card.id});
  }, 
  computed:{
    movieDeatils(){
      return this.$store.getters.getMovieDetails;
    },
    imgUrl(){
      return `https://image.tmdb.org/t/p/w500${this.cardDetails.card.backdrop_path}`
    },
    director(){
     return this.movieDeatils && Object.keys(this.movieDeatils).length?this.movieDeatils.credits.crew.find((c)=>c.job=="Director").name:"";
    },
    cast(){
      return this.movieDeatils && Object.keys(this.movieDeatils).length? this.movieDeatils.credits.cast.map((c)=>c.name).join(","):"";
    }
  },
  props:["cardDetails"],
  data(){
      return {
          dialogVisible:true
      }
  },
  methods:{
      handleClose(){
         this.$emit("toggleDetailsModal");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.movieImgDesc{
  display: flex;
}

.image{
  width: 300px;
  height: 200px;
}

.description{
  padding-left:20px;
}
.movieInfo{
  line-height: 30px;
  .title{
      font-weight: bold;
  }
}
</style>
