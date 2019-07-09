import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import {HeaderWrapper,NavLogl,NaviMiddle,NavRight,NavItem,NavSearch,NavRightItem,NavSearchWrapper} from './style'

export default class Header extends Component {
    
    constructor(props){
      super(props)
      this.state = {
          focused:false,
        }
        this.onsearchFocus = this.onsearchFocus.bind(this)
        this.onsearchBlur = this.onsearchBlur.bind(this)
    }
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
                        <CSSTransition
                         in = {this.state.focused}
                         timeout = {200}
                         classNames = 'slide'
                        >
                                <NavSearch
                            className = {this.state.focused ? 'focused' : ''}
                            onFocus = {this.onsearchFocus}
                            onBlur = {this.onsearchBlur}
                            />
                        </CSSTransition>
                    
                     <i className={this.state.focused ? "iconfont search focused" : "iconfont search"}>&#xe60c;</i>
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
    onsearchFocus(){
        this.setState({focused : true})
    }

    onsearchBlur(){
        this.setState({focused : false})
 
    }
}