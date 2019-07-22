import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    width:960px;
    margin:0 auto;
  
`
export const Left = styled.div`
    float:left;
    width:625px;
    margin-top:15px;
    .banner-img{
        width:625px;
        height:270px;
    }

`
export const TopicWrapper = styled.div`
  margin-top:15px;
  margin-right:18px;


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
export const Right = styled.div`
    float:right;
    width:240px;
   

`
