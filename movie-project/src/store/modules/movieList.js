import Vue from "vue";

export default {
    state: {
      latestMovies:[],
      trendingMovies:[],
      mostWatchedMovies:[]
    },
    getters:{
      getLatestMovies(state){
        return state.latestMovies;
      },
      getTrendingMovies(state){
        return state.trendingMovies;
      },
      getMostWatchedMovies(state){
        return state.mostWatchedMovies;
      }
    },
    mutations: {
  
    },
    actions: {
      getLatestMovies({dispatch,state,rootState}){
         
        dispatch("getAjaxData",{url:` https://api.themoviedb.org/3/movie/now_playing?api_key=${rootState.apiKey}&language=en-US&include_adult=false `})
                .then((response)=>{
                 Vue.set(state,"latestMovies",response.results);
                })
                .then((error)=>{
                    console.log(error);
                }); 
      },
      getTrendingMovies({dispatch,state,rootState}){
        dispatch("getAjaxData",{url:` https://api.themoviedb.org/3/trending/movie/week?api_key=${rootState.apiKey}`})
        .then((response)=>{
            Vue.set(state,"trendingMovies",response.results);
        })
        .then((error)=>{
          console.log(error);
        }); 
      },
      getMostWatchedMovies({dispatch,state,rootState}){
        dispatch("getAjaxData",{url:` https://api.themoviedb.org/3/movie/popular?api_key=${rootState.apiKey}&language=en-US&page=1`})
        .then((response)=>{
          Vue.set(state,"mostWatchedMovies",response.results);
        })
        .then((error)=>{
          console.log(error);
        }); 
      }
    }
  };