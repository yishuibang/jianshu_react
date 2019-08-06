import React, {Component}  from "react";

import {TopicWrapper,TopicItem} from '../style'
import {connect} from 'react-redux';

class Topic extends Component {
    render(){
        return (
            <TopicWrapper>
                {this.props.topicList&&this.props.topicList.map((item)=>{
                    
               return  <TopicItem key = {item}>
                    <img 
                    alt = ''
                    className = 'topic-pic'
                    src={item.get('imgUrl')}/>
                    {item.get('title')}
                  </TopicItem>
                })
                }
                 
            </TopicWrapper>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        topicList:state.getIn(['home','topicList']),
    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
    
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Topic);