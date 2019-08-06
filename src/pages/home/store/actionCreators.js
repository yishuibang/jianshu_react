import * as actionTypes from './actionTypes'
import axios from "axios";

export const homeData =(data)=>({
    type:actionTypes.GET_HOME_DATA,
    articlList:data.articleList,
    topicList: data.topicList,
    recList: data.recommendList,
});

export const getHomeData=()=>{
  return (dispatch)=>{
       axios.get('/api/home.json')
   .then((res)=>{
    console.log('res:',res.data.data)
    dispatch(homeData(res.data.data))
    })
   .catch((err)=>{
    console.log('err:',err)
   })
  }
 }
//  export const getHotSearchList = ()=>{
//     return (dispatch)=>{axios.get('/api/hotSearchList.json')
//      .then((res)=>{
//          dispatch(hotSearchList(res.data))
//      })
//      .catch(()=>{
 
//      })}
//  };