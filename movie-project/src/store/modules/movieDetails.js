import Vue from "vue";

export default {
    state: {
     movieDetails:[]
    },
    getters:{
      getMovieDetails(state){
        return state.movieDetails;
      }
     },
    actions: {
        getMovieDetails({dispatch,state,rootState}){
         
        dispatch("getAjaxData",{url:`https://api.themoviedb.org/3/genre/movie/list?api_key=${rootState.apiKey}&language=en-US`})
                .then((response)=>{
                 Vue.set(state,"generes",response.genres);
                })
                .then((error)=>{
                    console.log(error);
                }); 
      }
     
    }
  };