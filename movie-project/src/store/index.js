import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import movieList from './modules/movieList';
import movieGenres from './modules/movieGenres';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   apiKey:'8dd67f39ba8c6c6b8f70d20802600856'
  },
  mutations: {

  },
  modules:{
   movieList,
   movieGenres
  },
  actions: {
    getAjaxData({commit,dispatch,state},{url}){
      return new Promise((resolve,reject)=>{
        axios.get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(e => {
         reject(e);
        })
      })
    }

  }
})
