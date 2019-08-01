import React, {Component}  from "react";
import {ArticleWrapper,ListItem,ListInfo} from '../style'
import {connect} from 'react-redux';

class ArticleList extends Component {
    render(){
        const {articlList} = this.props

        return (
            <ArticleWrapper>
               { articlList.map((item)=>(
                   <ListItem key={item}>
                   <img className = 'pic' 
                       src={item.get('imgUrl')}/>
   
                       <h3  className = 'title'>{item.get('title')}</h3>
                       <p className = 'desc'>{item.get('desc')}</p>
                   </ListItem>     
               ))}
                
            </ArticleWrapper>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        articlList:state.getIn(['home','articlList']),

    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
    
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);