import { createStore } from "vuex";

import getAnimation from "../mixins/getAnimation";
import getUser from "../mixins/getUser";
import getRepos from "../mixins/getRepos";
import sortingRepos from "../mixins/sortingRepos";

import Iuser from "../types/Iuser";
import Trepos from "../types/Trepos";

const store = createStore({
  state() {
    return {
      VisibilityGetUser: false as boolean,
      User: {} as Iuser,
      Repos: {} as Trepos,
    };
  },

  mutations: {
    mutVisibilityGetUser(state, newVisibilityGetUser:boolean){
      state.VisibilityGetUser = newVisibilityGetUser;
    },
    mutUser(state, newUser:Iuser){
      state.User = newUser;
    },
    mutRepos(state, newRepos:Trepos){
      state.Repos = newRepos;
    },
    mutReposSort(state, typeOfSorting:string){
      state.Repos = sortingRepos(state.Repos, typeOfSorting);
    },
  },

  actions:{
    actVisibilityGetUser({ commit }){
      commit('mutVisibilityGetUser', getAnimation());
    },
    async actUser({ commit }, userName:string){
      const newUser:Iuser = await getUser(userName);
      commit('mutUser', newUser);
    },
    async actRepos({ commit }, userName:string){
      const newRepos:Trepos = await getRepos(userName);
      commit('mutRepos', newRepos);
    },
    actReposSort({ commit }, typeOfSorting:string){
      commit('mutReposSort', typeOfSorting);
    }
  },

  getters:{
    getVisibilityGetUser(state):boolean{
      return state.VisibilityGetUser;
    },
    getUser(state):Iuser{
      return state.User;
    },
    getRepos(state):Trepos{
      return state.Repos;
    },
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});