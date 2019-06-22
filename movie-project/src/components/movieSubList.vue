<template>
  <div class="movieSubList">
    <div class="movieTypeTitle"> {{title}} </div>
    <div class="list">
      <movieCard v-for="card in movieListDetails" 
                 :key="card.id" 
                 :cardDetails="card" 
                 :generes="generes"
                 @toggleDetailsModal="toggleDetailsModal" />
    </div>
  </div>
</template>

<script>
import movieCard from "./movieCard.vue";
export default {
  name: 'movieSubList',
  props:["title","movieListDetails","generes"],
  components:{movieCard},
  methods:{
    toggleDetailsModal(cardData){
      this.$emit("toggleDetailsModal",cardData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movieSubList{
  padding-top: 20px;
  .movieTypeTitle{
    text-align: left;
    padding-left: 15px;
    padding-bottom: 15px;
    font-weight: bold;
    font-size: 22px;
  }
  .list{
    display: flex;
  }
  .list>div{
    width: 30%;
    padding: 0px 15px;
  }
}
</style>
