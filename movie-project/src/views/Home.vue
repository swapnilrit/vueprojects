<template>
  <div class="home">
  <detailsModal v-if="detailsModalVisibility"
   :cardDetails="cardDetails"
    @toggleDetailsModal="toggleDetailsModal"/>  
  <component :is="activeComponent" 
             :generes="generes"
             :latestMovies="latestMovies" 
             :trendingMovies="trendingMovies"
             :mostWatchedMovies="mostWatchedMovies"
             @toggleDetailsModal="toggleDetailsModal" 
             />
  </div>
</template>

<script>
 import movieList from "../components/movieList";
 import detailsModal from "../components/detailsModal";

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
       activeComponent:'movieList',
       detailsModalVisibility:false,
       cardDetails:{}
     }
   },
   components:{movieList,detailsModal},
   methods:{
      toggleDetailsModal(cardData){
        if(cardData){
         this.cardDetails=cardData;
        }
        this.detailsModalVisibility= !this.detailsModalVisibility;
      }
   }
}
</script>
