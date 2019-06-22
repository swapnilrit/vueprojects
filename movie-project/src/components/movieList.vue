<template>
  <div class="movieList">
    <movie-sub-list title="Latest" :generes="generes" :movieListDetails="latestMovies"/>
    <movie-sub-list title="Trending" :generes="generes" :movieListDetails="trendingMovies"/>
    <movie-sub-list title="Most Watched" :generes="generes" :movieListDetails="mostWatchedMovies"/>
  </div>
</template>

<script>
import movieSubList from "./movieSubList.vue";
export default {
  name: 'movieList',
  created(){
   console.log(this.generes);
  },
  props:["generes","latestMovies","trendingMovies","mostWatchedMovies"],
  components:{movieSubList},
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
