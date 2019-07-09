import React, { Component } from 'react';
import {HeaderWrapper,NavLogl,NaviMiddle,NavRight,NavItem,NavSearch,NavRightItem,NavSearchWrapper} from './style'
export default class Header extends Component {
    render (){
        return (
            <HeaderWrapper>
                <NavLogl  />
                <NaviMiddle >
                    <NavItem className='left home'> 首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className= 'right'>
                        <i className="iconfont langua">&#xe636;</i>
                    </NavItem>
                    <NavItem className = 'right'>登录</NavItem>
                    <NavSearchWrapper>
                     <NavSearch/>
                     <i className="iconfont search">&#xe60c;</i>
                    </NavSearchWrapper>
                   
                </NaviMiddle>
                <NavRight>
                    <NavRightItem className = 'whrite'>
                        <i className="iconfont penicon">&#xe6a4;</i>
                            写文章
                    </NavRightItem>
                    <NavRightItem className = 'reg'>注册</NavRightItem>
                </NavRight>
            </HeaderWrapper>
        )
    }
}