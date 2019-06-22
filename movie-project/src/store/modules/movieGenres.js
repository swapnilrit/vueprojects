import Vue from "vue";

export default {
    state: {
     generes:[]
    },
    getters:{
      getGeneres(state){
        return state.generes;
      }
     },
    actions: {
        getGeneres({dispatch,state,rootState}){
         
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