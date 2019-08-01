// import * as ActionTypes from './actionTypes'
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList:[
     {
         id:1,
         title:'社会热点',
         image:'http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
     },
     {
        id:2,
        title:'手绘',
        image:'http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
     },
     {
        id:3,
        title:'教育',
        image:'http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
     },
     {
        id:4,
        title:'教育',
        image:'http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
     },
     {
        id:5,
        title:'教育',
        image:'http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
     },
     {
        id:6,
        title:'教育',
        image:'http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
     },
     {
        id:7,
        title:'教育',
        image:'http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
     },
    ],
   articlList:[
      {
         id:1,
         title:'陈果的魅力',
         desc:'xy： 又看到陈果的消息，热衷！ 听她讲课的人都说： “有内涵的没她漂亮， 漂亮的又没她有内涵。” 爱情的意义到底是什么？ 遇见TA之前， 自己...',
         imgUrl:'https://upload-images.jianshu.io/upload_images/14386767-96621e758954db84.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

      },
      {
         id:2,
         title:'陈果的魅力',
         desc:'xy： 又看到陈果的消息，热衷！ 听她讲课的人都说： “有内涵的没她漂亮， 漂亮的又没她有内涵。” 爱情的意义到底是什么？ 遇见TA之前， 自己...',
         imgUrl:'https://upload-images.jianshu.io/upload_images/14386767-96621e758954db84.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

      },
      {
         id:3,
         title:'陈果的魅力',
         desc:'xy： 又看到陈果的消息，热衷！ 听她讲课的人都说： “有内涵的没她漂亮， 漂亮的又没她有内涵。” 爱情的意义到底是什么？ 遇见TA之前， 自己...',
         imgUrl:'https://upload-images.jianshu.io/upload_images/14386767-96621e758954db84.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

      },
      {
         id:4,
         title:'陈果的魅力',
         desc:'xy： 又看到陈果的消息，热衷！ 听她讲课的人都说： “有内涵的没她漂亮， 漂亮的又没她有内涵。” 爱情的意义到底是什么？ 遇见TA之前， 自己...',
         imgUrl:'https://upload-images.jianshu.io/upload_images/14386767-96621e758954db84.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

      },

   
   ],
   recList:[
      {
         id:1,
         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
      },
      {
         id:2,
         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
      },
      {
         id:3,
         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'    
      },
      {
         id:4,
         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'    
      },
   
   ],
   });
export default (state = defaultState , action)=>{
        switch (1) {
        default:
            return state
            break;

    }
    
}