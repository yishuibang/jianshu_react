import React, {Component}  from "react";
import {LoginWrapper,LoginContainer,Header,UserName,Button} from './style';
import {connect} from 'react-redux';
import { ActionCreators } from "../login/store";
import { Redirect } from 'react-router-dom';

// import { ActionCreators } from "./store";
class Login extends Component {
    render(){        
        const {login} = this.props
        if(!login){
            return ( 
                <LoginWrapper>
                <LoginContainer >
                    <Header>登录</Header>
                    <UserName placeholder = '手机号或者用户名'  type = 'text' 
                        ref={ref => this.userName = ref}
                    ></UserName>
                    <UserName placeholder = '密码' type = 'password' 
                     ref={ref => this.password = ref}
                     ></UserName>
                    <Button onClick = {()=>this.props.loginAction(this.userName,this.password)}>登录</Button>
                </LoginContainer>
                </LoginWrapper>
             )
        }
        else{
            return <Redirect to='/'/>
        }

       
    }
    componentDidMount(){
       
    }
}

const mapStateToProps= (state)=>{
    return {
    login:state.getIn(['login','login'])
    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
            loginAction(userName,password){
                const name = userName.value
                const pwd = password.value 
                if(!name || !pwd)
                {
                    alert('信息填写不全')
                    return
                }
                dispatch(ActionCreators.loginAction(name, pwd))
                
            }
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Login);