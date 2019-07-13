import React , {Component}from 'react';
import { CSSTransition } from 'react-transition-group';

import {HeaderWrapper,
    NavLogl,
    NaviMiddle,
    NavRight,
    NavItem,
    NavSearch,
    NavRightItem,
    NavSearchWrapper,
    HotSearch,
    HotSearchHeader,
    SearchSwitch,
    HotSearchListItem,

} from './style'
import {connect} from 'react-redux';
import {ActionCreators} from './store';
import {fromJS} from 'immutable';
class Header extends Component {
     renderHotSearchList() {
        //  console.log(this.props.hotSearchList)
        return this.props.focused ? 
          (
                <HotSearch>
                             {/*头部 热门搜索 换一换 */}
                                <HotSearchHeader>
                                    热门搜索
                                    <SearchSwitch>
                                        换一换
                                    </SearchSwitch>
                                    {/* 热门搜索列表 */}
                                </HotSearchHeader> 
                                <div>
                                    {
                                        this.props.hotSearchList && this.props.hotSearchList.map((item)=>{
                                       return <HotSearchListItem key = {item}>{item}</HotSearchListItem>
                                        })   
                                    }
                                 </div>
             </HotSearch>
         )
         :
          null
     }
    render(){
        return(<HeaderWrapper>
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
                    in = {this.props.focused}
                    timeout = {200}
                    classNames = 'slide'
                    >
                            <NavSearch
                        className = {this.props.focused ? 'focused' : ''}
                        onFocus = {this.props.onsearchFocus}
                        onBlur = {this.props.onsearchBlur}
                        />
                    </CSSTransition>
                <i className={this.props.focused ? "iconfont search focused" : "iconfont search"}>&#xe60c;</i>
                  {this.renderHotSearchList()}
              
                </NavSearchWrapper>
            
            </NaviMiddle>
            <NavRight>
                <NavRightItem className = 'whrite'>
                    <i className="iconfont penicon">&#xe6a4;</i>
                        写文章
                </NavRightItem>
                <NavRightItem className = 'reg'>注册</NavRightItem>
            </NavRight>
        </HeaderWrapper>)
    }
}




const mapStateToProps= (state)=>{
  return {
    // focused:state.get('header').get('focused'),
    focused:state.getIn(['header','focused']),
    hotSearchList:state.getIn(['header','hotSearchList']),
  }
}
const mapDispatchToProps = (dispatch)=>{
return {
    onsearchFocus(){
        // 获取热门搜索的数据
        dispatch(ActionCreators.getHotSearchList())
        dispatch(ActionCreators.searchFocused());
    },
    onsearchBlur(){
        dispatch(ActionCreators.searchBlur());
    },
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);