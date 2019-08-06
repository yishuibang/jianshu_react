import React, {Component}  from "react";
import {RightHeaderItem,RightHeaderContainer} from '../style'
import {connect} from 'react-redux';

class RightHeader extends Component {
    render(){
        const {recList} = this.props
        return (
            <RightHeaderContainer>
                {
                   recList && recList.map((item)=>(
                    <RightHeaderItem key={item}>
                    <img className = 'pic' src={item.get('imgUrl')} alt = ''/>
                    </RightHeaderItem>
                   ))
            }
            </RightHeaderContainer>
        )
    }
}


const mapStateToProps= (state)=>{
    return {
        recList:state.getIn(['home','recList']),
    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
    
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(RightHeader);