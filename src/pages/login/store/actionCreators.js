import axios from "axios";
import * as ActionTypes from './actionTypes'
const login = (login)=>({
    type:ActionTypes.LOGOT,
    login 
})
const logoutType = (login)=>({
    type:ActionTypes.LOGIN,
    login 
})
export const loginAction = (name,pwd)=>{
    return (dispatch)=>{
        axios.get(`/api/login.json?name=${name}&password=${pwd}`)
        .then((res)=>{
        //  console.log('res:',res)
         dispatch(login(res.data.data))
         })
        .catch((err)=>{
         console.log('err:',err)
        })

    }


};
export const logout = ()=>{
    return (dispatch)=>{
        dispatch(logoutType(false))
    }
}