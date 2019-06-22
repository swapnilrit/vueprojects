<template>
  <div class="home">
  <component :is="activeComponent" 
             :generes="generes"
             :latestMovies="latestMovies" 
             :trendingMovies="trendingMovies"
             :mostWatchedMovies="mostWatchedMovies" 
             />
  </div>
</template>

<script>
 import movieList from "../components/movieList";

 export default {
  name: 'home',
  created(){
     this.$store.dispatch("getGeneres");
     this.$store.dispatch("getLatestMovies");
     this.$store.dispatch("getTrendingMovies");
     this.$store.dispatch("getMostWatchedMovies");
   },
   computed:{
     generes(){
       return this.$store.getters.getGeneres;
    },
    latestMovies(){
      return this.$store.getters.getLatestMovies;
    },
    trendingMovies(){
       return this.$store.getters.getTrendingMovies;
    },
    mostWatchedMovies(){
      return this.$store.getters.getMostWatchedMovies;
    }
   },
   data(){
     return{
       activeComponent:'movieList'
     }
   },
   components:{movieList}
}
</script>
