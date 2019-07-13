import styled from 'styled-components'
import navLogo from '../images/nav-logo.png'

export const HeaderWrapper = styled.div`
    height:58px;
    position: relative;
    border-bottom:1px solid #e7e7e7;
    margin:0px 15px;
`
export const NavLogl = styled.div`
    position: absolute;
	top: 0;
	left: 0;
    display: block;
	width: 100px;
	height: 56px;
	background: url(${navLogo});
    background-size: contain;
`
export const NaviMiddle = styled.div`
    width:870px;
    height:100%;
    margin:0 auto;
    padding-right:60px;
    box-sizing:border-box;

    //  background-color:rgb(255,0,255);
`

export const NavItem = styled.div`
    line-height:56px;
    margin:0 20px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
        // margin-right:30px;
    }
    &.home{
        color:#ea6f5a;
    }
    .langua{
        font-size:20px;
    }
`
export const NavSearchWrapper = styled.div`
    position: relative;
    float:left;
    
    // display:inline-block;
    // background-color:rgba(236,97,73,.7);
    .search{
        position: absolute;
        right: 5px;
        width:30px;
        // height:30px;
        line-height:30px;
        border-radius:15px;
        text-align: center;
        top: 13px;

        &.focused{
            background-color:#777;
            color:#fff;
        }
     
    }

`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
   width:160px;
   height:38px;
   margin:9px 0px;
   border-radius:19px;
   border:none;
   outline:none;
   background-color:#eee;
   padding: 0 35px 0 15px;
   box-sizing:border-box;
   font-size:14px;
   color:#555;

   &::placeholder {
       color:#999;

   }
   &.focused{
       width:260px;
   }
   &.slide-enter {
    transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }

`
export const HotSearch = styled.div`
    position: absolute;
    width:240px;
    // height:100px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding:20px 20px 10px 20px;
    color:#777;
    font-size:14px;
  
`
export const HotSearchHeader = styled.div`
    font-size:14px;
    margin:0 0 10px 0; //上右下左

`
export const SearchSwitch = styled.a`
   float:right;
   font-size:13px;
`
export const HotSearchListItem = styled.a`
  display:inline-block;
  padding:2px 5px 2px 5px;
  margin:5px 10px  0 0;
  border:0.5px solid #eee;
  font-size:13px;


`
export const NavRight = styled.div`
    position:absolute;
    right: 0;
    top:0;
    height:56px;
`
export const NavRightItem = styled.div`
    float:right;
    margin-top : 9px;
    margin-right:20px;
    padding:0 15px;
    height : 38px;
    line-height:38px;
    border-radius: 19px;
    border: 1px solid rgba(236,97,73,.7);
    font-size:15px;
    &.reg{
        color:rgba(236,97,73,.7);
    }
    &.whrite {
        background-color:rgba(236,97,73,.7);
        color:#fff;
    }
    .penicon{
        font-size:18px;
        width:30px;
        line-height:30px;
        text-algin:center;
        margin-right:5px;
        font-weight:bold;
       
       
    }
   
`