import * as actionTypes from './actionTypes'
import axios from "axios";

export const homeData =(data)=>({
    type:actionTypes.GET_HOME_DATA,
    // articlList:data.articleList,
    topicList: data.topicList,
    recList: data.recommendList,
});
const homeDataMore=(data,page)=>({
type:actionTypes.GET_HOME_MORE,
data:data,
page:page
});
export const getHomeData=()=>{    
  return (dispatch)=>{
    axios.get('/api/home.json')
   .then((res)=>{
    // console.log('res:',res.data.data)
    dispatch(homeData(res.data.data))
    })
   .catch((err)=>{
    console.log('err:',err)
   })
  }
 };
export const homeLoadMore=(page)=>{
    return (dispatch)=>{
        axios.get(`/api/homeList.json?page=${page}`)
        .then((res)=>{
        //  console.log('res:',res)
         dispatch(homeDataMore(res.data.data,page))
         })
        .catch((err)=>{
         console.log('err:',err)
        })
    }
};
export const toggleTopShow = (show) => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
})