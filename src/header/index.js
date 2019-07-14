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
        const {hotSearchList,focused,mouseIn,page,totalPage,
            handleMouseEnter,handleMouseLeave,switchSearchListData} = this.props
            if(hotSearchList.length === 0) return
           let pageList = []
           for (let i = (page - 1) * 10; i < page * 10; i++) {
               if(hotSearchList[i]) {
               pageList.push(
                 <HotSearchListItem key = {hotSearchList[i]}>{hotSearchList[i]}</HotSearchListItem>
               )
               }
               
           }

          return (focused || mouseIn) ?  (
                <HotSearch
                onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
                    >
                             {/*头部 热门搜索 换一换 */}
                                <HotSearchHeader>
                                    热门搜索
                                    <SearchSwitch onClick={()=>switchSearchListData(page,totalPage,this.spinIcon)}>
                                        <i ref={(icon) => {this.spinIcon = icon}} className = 'iconfont switchIcon'>&#xe6c9;</i>
                                        换一换
                                    </SearchSwitch>
                                    {/* 热门搜索列表 */}
                                </HotSearchHeader> 
                                <div>
                                    {
                                    pageList   
                                    }
                                 </div>
             </HotSearch>
         )
         :
          null
     }
    render(){
        const {focused,hotSearchList,onsearchFocus,onsearchBlur} = this.props;
        return(<HeaderWrapper>
            <NavLogl  />
            <NaviMiddle >
                <NavItem className='left home'> 首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className= 'right'>
                    <i className="iconfont langua">&#xe636;</i>
                </NavItem>
                <NavItem className = 'right'>登录</NavItem>
                <NavSearchWrapper >
                    <CSSTransition
                    in = {focused}
                    timeout = {200}
                    classNames = 'slide'
                    >
                            <NavSearch
                        className = {focused ? 'focused' : ''}
                        onFocus = {()=>onsearchFocus(hotSearchList)}
                        onBlur = {onsearchBlur}
                        />
                    </CSSTransition>
                <i className={focused ? "iconfont search focused" : "iconfont search"}>&#xe60c;</i>
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
    mouseIn:state.getIn(['header','mouseIn']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
  }
}
const mapDispatchToProps = (dispatch)=>{
return {
    onsearchFocus(list){
        // 获取热门搜索的数据
       list.size === 0 && dispatch(ActionCreators.getHotSearchList())
        dispatch(ActionCreators.searchFocused());
    },
    onsearchBlur(){
        dispatch(ActionCreators.searchBlur());
    },

    handleMouseEnter() {
        dispatch(ActionCreators.mouseEnter());
    },

    handleMouseLeave(){
        dispatch(ActionCreators.mouseLeave());

    },
    switchSearchListData(page,totalPage,spin){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle, 10);
        }else {
            originAngle = 0;
        }
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

       if (page < totalPage) {
          dispatch(ActionCreators.changePage(page+1))
       }else{
            dispatch(ActionCreators.changePage(1))
        }

    },


}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);