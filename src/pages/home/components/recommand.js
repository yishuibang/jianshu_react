import React, {Component}  from "react";
import {RecommandContainer,RecommandHeader,RecommandItem} from '../style'
import {connect} from 'react-redux';

class Recommand extends Component {
    render(){
        const {recommandList} = this.props
        return (
            <RecommandContainer>
                <RecommandHeader>
                    <span >推荐作者</span>
                    <a className='switch'>换一批</a>
                </RecommandHeader>

                <ul>
               {recommandList.map((item, index)=>(
                <RecommandItem key = {index}>
                    <img className='pic' src={item.get('imgUrl')} alt = ''/>
                    <div className='middle'>
                        <a className = 'name'>{item.get('name')}</a>
                        <p className = 'desc'>{item.get('desc')}</p>
                    </div>
                    <a className = 'focus'>+ 关注</a>
                </RecommandItem>
               ))}
                </ul>
              
            </RecommandContainer>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        recommandList:state.getIn(['home','recommandList']),

    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
    
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Recommand);