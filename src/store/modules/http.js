import axios from 'axios'
import router from '@/router'

axios.defaults.timeout= 60000;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// VUE_APP_API_URL=/api/

const $http=axios;

const state = {
}
const getters = {
    ageInfo(state) {
      return '我的年齡'+state.age
    }
  }
  const mutations= {
    doregister(state,payLoad){
      state.douserlist = {...state.douserlist,payLoad}
       console.log(state.douserlist)
    }
  }
  const beforeApiCall=(method,api)=>{
    consoleLog("is caling...",method,api);
  }
  const getHttpConfig=({rootState})=>{
    return {
      headers: {
        // id_token:rootState.user.uid,   
      authorization :`Bearer ${rootState.Member.user.token}`,
      accept: 'application/json'
      }
    };
  }
  const errorHandle=(commit,error)=>{
    consoleLog("api error",error);
    error.status = parseInt(error.status);
    if(error.status == 401){
      if(error.data.code == 7){
        consoleLog("verify needed");
      }else{
        //other auth problem
        router.push({name:'logout'});
      }
    } 
    else if(error.status==403){
      commit('dialogBox',{dialog:true,option:{title:"權限不足",message:"你沒有權限瀏覽此內容喔!"}},{root:true});
    } 
    else if(error.status==406||(error.status==400&&error.data.code == 2)){
      commit('dialogBox',{dialog:true,option:{title:"參數錯誤",message:"Oops!你的資料可能有錯誤!請檢查後再試一次"}},{root:true});
    }
    else if(error.status==429){ 
      commit('dialogBox',{dialog:true,option:{title:"限制請求",message:"超過API請求限制次數,請稍後再試"}},{root:true});
      router.push({name:'logout'});
    }else{ 
      commit('dialogBox',{dialog:true,option:{title:`伺服器錯誤 ${error.status}`,message:"Oops!伺服器發生錯誤!請聯繫我們或稍後再試"}},{root:true});
    }
    return error.data;
  }

  const consoleLog=(text,json,data)=>{      //顯示...
    if(process.env.NODE_ENV=='development'||window.location.href.indexOf('test')>=0){
       console.log(text,json,data);
     }
  }

  const actions = {
    post ({ dispatch,commit, state,rootState },{api,json}) {
        return new Promise((resolve, reject) => {
          beforeApiCall('post',api);
          console.log(111,getHttpConfig({rootState}))
          $http.post(api,json,getHttpConfig({rootState}))
          .then( ({data}) =>{
            // console.log('331',data)
            resolve(data);
          })
          .catch( (error)=> {
            resolve(errorHandle(commit,error.response));
          });
        });
      },
    put ({ dispatch,commit, state,rootState },{api,json}) {
        return new Promise((resolve, reject) => {
          beforeApiCall('put',api);
          $http.put(api,json,getHttpConfig({rootState}))
          .then( ({data}) =>{
            resolve(data);
          })
          .catch( (error)=> {
            resolve(errorHandle(commit,error.response));
          });
        });
      },
    get ({ dispatch,commit, state,rootState },{api,json}) {
        return new Promise((resolve, reject) => {
          beforeApiCall('get',api);
          $http.get(api,json,getHttpConfig({rootState}))
          .then( ({data}) =>{
            resolve(data);
          })
          .catch( (error)=> {
            resolve(errorHandle(commit,error.response));
          });
        });
      }
}
export default {
    namespaced: true,              //(名字間隔)
    state,
    getters,
    actions,
    mutations
  }
