import React, { Component } from 'react';
import {HeaderWrapper,NavLogl,NaviMiddle,NavRight,NavItem,NavSearch,NavRightItem} from './style'
export default class Header extends Component {
    render (){
        return (
            <HeaderWrapper>
                <NavLogl  />
                <NaviMiddle >
                    <NavItem className='left home'> 首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className= 'right'>Aa</NavItem>
                    <NavItem className = 'right'>登录</NavItem>
                    <NavSearch></NavSearch>
                </NaviMiddle>
                <NavRight>
                    <NavRightItem className = 'whrite'>写文章</NavRightItem>
                    <NavRightItem className = 'reg'>注册</NavRightItem>
                </NavRight>
            </HeaderWrapper>
        )
    }
}