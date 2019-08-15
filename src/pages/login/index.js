import React, {Component}  from "react";
import {LoginWrapper,LoginContainer,Header,UserName,Button} from './style'
import {connect} from 'react-redux'
// import { ActionCreators } from "./store";
class Login extends Component {
    render(){        
        const {Login} = this.props
        return (
           <LoginWrapper>
           <LoginContainer >
               <Header>登录</Header>
               <UserName placeholder = '手机号或者用户名'  type = 'text' innerRef={(input) => {console.log(input);
               }}></UserName>
               <UserName placeholder = '密码' type = 'password'></UserName>
               <Button>登录</Button>
           </LoginContainer>
           </LoginWrapper>
        )
    }
    componentDidMount(){
       
    }
}

const mapStateToProps= (state)=>{
    return {
    
    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
           
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Login);