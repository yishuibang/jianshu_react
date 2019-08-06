import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    width:960px;
    margin:0 auto;
  
`
export const Left = styled.div`
    float:left;
    width:625px;
    margin-top:30px;
    .banner-img {
        width:625px;
        height:270px;
    }

`
export const TopicWrapper = styled.div`
  overflow:hidden;
  margin-top:15px;
  margin-right:18px;
  border-bottom:1px solid #eee;

`
export const TopicItem = styled.div`
    float:left;
    display:block;
    overflow: hidden;
    line-height:30px;
    font-size:15px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-right:18px;
    padding-right:10px;
    margin-bottom:15px;
    .topic-pic{
        display:block;
        float:left;
        width:30px;
        height:30px;
        margin-right:10px;

    }

`
export const ArticleWrapper = styled.div`
margin-top:20px;

`
export const ListItem = styled.div`
padding-top:15px;
padding-bottom:15px;
overflow:hidden;
border-bottom:1px solid #eee;

.pic{
    width: 125px;
    height: 100px;
    border-radius:4px;
    float:right;
    
}
.title{
    font-size:18px;
    font-weight:bold;
    color:#333;
    line-height:30px;
}
.desc{
    margin-top:10px;
    font-size:14px;
    color:#777;
    line-height:27px;
}

`
export const Right = styled.div`
   margin-top:30px;
    float:right;
    width:280px;
   

`
export const RightHeaderContainer = styled.ul`


`
export const RightHeaderItem = styled.li`
  margin-top:10px;
 .pic{
    width:280px;
    height:50px;
 }
`
export const RecommandContainer = styled.div`
     margin-top:20px;
   
`
export const RecommandHeader = styled.div`
     font-size:14px;
     color:#969696;
     overflow:hidden;
     margin-bottom:15px;
     .switch{
         float:right;
     }

`
export const RecommandItem = styled.li`

overflow:hidden;

margin-top:15px;
.pic{
    float:left;
    width:48px;
    height:48px;
    border-radius:24px;
    border:1px solid #ccc;

}
.middle{
  float:left;
  margin-left:10px;
}
.name{
    margin-top:10px;
    font-size:14px;
    color:#333;

}
.desc{
    margin-top:10px;
    font-size:12px;
    color:#969696;
}
.focus{
    float:right;
    color:#42c02e;
    font-size:14px;
    font-weiht:bold;
}
`
export  const LoadMore = styled.a`
display:block;
margin:30px 0;
height:40px;
width:100%;
color: #fff;
text-align: center;
line-height:40px;
border-radius: 20px;
background-color: #a5a5a5;
`