import React, {Component}  from "react";
import {ArticleWrapper,ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux';
import { ActionCreators } from "../store";
import { Link } from 'react-router-dom';

class ArticleList extends Component {
    render(){
        const {articlList,homeListLoadMore,page} = this.props
        return (
            <ArticleWrapper>
                
               { articlList&&articlList.map((item, index)=>(
                   <Link  key={item + index} to ={'./detail/' + item.get('id')}>
                      <ListItem>
                   <img className = 'pic'  alt=''
                       src={item.get('imgUrl')}/>
   
                       <h3  className = 'title'>{item.get('title')}</h3>
                       <p className = 'desc'>{item.get('desc')}</p>
                   </ListItem>   
                   </Link>
                  
               ))}
                    <LoadMore onClick = {()=>homeListLoadMore(page)}>阅读更多</LoadMore>
            </ArticleWrapper>
        )
    }
    componentDidMount(){
        // console.log(this.props.page);
        
        this.props.homeListLoadMore(1)
    }
}

const mapStateToProps= (state)=>{
    
    return {
        articlList:state.getIn(['home','articlList']),
        page:state.getIn(['home','page'])

    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
            homeListLoadMore(page){                
                dispatch(ActionCreators.homeLoadMore(page))
            },
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);