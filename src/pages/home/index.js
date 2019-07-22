import React, {Component}  from "react";
import { Container,Left,Right } from "./style";
class Home extends Component {
    render(){
        return (
            <Container>
                <Left>
                    <img className = 'banner-img' src='//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                </Left>
                <Right>right</Right>
            </Container>
        )
    }
}

export default Home