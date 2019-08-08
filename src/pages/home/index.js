import React, {Component}  from "react";
import { Container,Left,Right,BackTop } from "./style";
import Topic from './components/topic';
import {connect} from 'react-redux';
import ArticleList from "./components/articleList";
import RightHeader from './components/rightHeader';
import Recommand from './components/recommand';
import {ActionCreators}  from './store'
class Home extends Component {
    render(){
        return (
            <Container>
                <Left>
                    <img className = 'banner-img' alt = ''
                    src='http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic />
                    <ArticleList />
                </Left>
                <Right>
                    <RightHeader />
                    <Recommand /> 
                </Right>
               {this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}></BackTop> : null}
            </Container>
        )
    }
    handleScrollTop = ()=>{
        window.scrollTo(0, 0);

    }
    componentDidMount(){
        this.props.getHomeData()
        this.bindEvents();

    }
    bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow);

    }
}
const mapStateToProps= (state)=>{
return {
    showScroll: state.getIn(['home', 'showScroll'])

}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getHomeData(){
            dispatch(ActionCreators.getHomeData())
        },
        changeScrollTopShow() {
            // console.log(document.documentElement.scrollTop)
            if (document.documentElement.scrollTop > 100) {
                dispatch(ActionCreators.toggleTopShow(true))
            }else {
                dispatch(ActionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);