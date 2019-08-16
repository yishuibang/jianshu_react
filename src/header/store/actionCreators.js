import * as ActionTypes from './actionTypes'
import axios from "axios";
import * as LoginActionCreators from '../../pages/login/store/actionCreators'
export const searchFocused = ()=>({
    type:ActionTypes.SEARCH_FOCUSED
});
export const searchBlur = ()=>({
    type:ActionTypes.SEARCH_BLUR
});
export const mouseEnter =()=>({
    type:ActionTypes.MOUSE_ENTER
});
export const mouseLeave =()=>({
    type:ActionTypes.MOUSE_LEAVE 
});
export const changePage =(page)=>({
    type:ActionTypes.CHANGE_PAGE,
    page
});


// 私有方法不用导出
 const hotSearchList = (data)=>({
    type:ActionTypes.HOTSEARCH_LIST,
    data:data ,
    totalPage: Math.ceil(data.length / 10)
});
export const getHotSearchList = ()=>{
   return (dispatch)=>{axios.get('/api/hotSearchList.json')
    .then((res)=>{
        dispatch(hotSearchList(res.data))
    })
    .catch(()=>{

    })}
};
