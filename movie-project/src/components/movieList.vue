<template>
  <div class="movieList">
    <movie-sub-list  v-for="list in movieLists"
                     :key="list.title"
                     :title="list.title" 
                     :generes="generes" 
                     :movieListDetails="list.movieListDetails"
                     @toggleDetailsModal="toggleDetailsModal"/>
  </div>
</template>

<script>
import movieSubList from "./movieSubList.vue";
export default {
  name: 'movieList',
  props:["generes","latestMovies","trendingMovies","mostWatchedMovies"],
  computed:{
   movieLists(){
     return [{
                title:"Latest",
                movieListDetails:this.latestMovies
            },{
                title:"Trending",
                movieListDetails:this.trendingMovies
            },
            {
                title:"Most Watched",
                movieListDetails:this.mostWatchedMovies
            }]
   }
  },
  components:{movieSubList},
  methods:{
    toggleDetailsModal(){
    this.$emit("toggleDetailsModal");
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
