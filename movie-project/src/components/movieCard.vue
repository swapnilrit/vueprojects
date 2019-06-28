<template>
  <div class="movieCard" v-if="movieGenres.length">
     <el-card>
      <img :src="imgUrl" class="image" @click="toggleDetailsModal">
      <div class="cardDeatils">
        <div class="movieName">{{cardDetails.title}} </div>
        <div class="movieGenres"> {{movieGenres.join(",")}}</div>
        <div class="movieRating">
        <el-rate v-model="cardDetails.vote_average/2" disabled></el-rate>   
        <div class="showmore">Show More</div>
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
       card:this.cardDetails,
       geners:this.movieGenres.join(",")
    };
     this.$emit("toggleDetailsModal",cardData);

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
.movieRating{
  display: flex;
  align-items: center;
  font-size:15px;
  color:blue;
}
.movieRating div:first-child{
  flex-grow: 3;
}


</style>
