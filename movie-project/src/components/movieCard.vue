<template>
  <div class="movieCard" v-if="movieGenres.length">
     <el-card>
      <img :src="imgUrl" class="image" @click="toggleDetailsModal">
      <div class="cardDeatils">
        <div class="movieName">{{cardDetails.title}} </div>
        <div class="movieGenres"> {{movieGenres.join(",")}}</div>
        <div class="movieRating">
        <el-rate v-model="cardDetails.vote_average/2"></el-rate>   
        </div>
      </div>
      
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'movieCard',
  props:["cardDetails","generes"],
  computed:{
    imgUrl(){
          return `https://image.tmdb.org/t/p/w500${this.cardDetails.backdrop_path}`
      },
    movieGenres(){
      let geners=[];
         this.cardDetails.genre_ids.forEach((id)=>{
             geners.push(this.generes.find((gener)=>gener.id==id).name);
         });
         return geners;
    }  
  },
  methods:{
    toggleDetailsModal(){
    let cardData={
       cardDeatils:this.cardDetails,
       geners:this.movieGenres.join(",")
    };
     this.$emit("toggleDetailsModal");

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.image{
    width: 320px;
    height: 170px;
}
.cardDeatils>div{
  line-height: 30px;
  text-align: left;
}
.cardDeatils{
  .movieName{
    font-weight: 200;
    font-size: 19px;
  }
}

</style>
