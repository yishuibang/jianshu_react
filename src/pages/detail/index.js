import React, {Component}  from "react";
import {DetailWrapper,Header,Content} from './style'
import {connect} from 'react-redux'
import { ActionCreators } from "./store";
class Deatil extends Component {
    render(){        
        const {data} = this.props
        return (
           <DetailWrapper>
               <Header>{data.get('title')}</Header>
               <Content dangerouslySetInnerHTML={{__html: data.get('content')}}>

               </Content>
           </DetailWrapper>
        )
    }
    componentDidMount(){
        // 
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapStateToProps= (state)=>{
    return {
        data: state.getIn(['detail', 'data']),

    }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
            getDetail(id){
               dispatch(ActionCreators.getDetail(id))
            }
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Deatil);