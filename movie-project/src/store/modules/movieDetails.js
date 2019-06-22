import Vue from "vue";

export default {
    state: {
     movieDetails:{}
    },
    getters:{
      getMovieDetails(state){
        return state.movieDetails;
      }
     },
    actions: {
        getMovieDetails({dispatch,state,rootState},{id}){ 
        dispatch("getAjaxData",{url:`https://api.themoviedb.org/3/movie/${id}?api_key=${rootState.apiKey}&language=en-US&append_to_response=credits`})
                .then((response)=>{
                 Vue.set(state,"movieDetails",response);
                })
                .then((error)=>{
                    console.log(error);
                }); 
      }
     
    }
  };