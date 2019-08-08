// import * as ActionTypes from './actionTypes'
import {fromJS} from 'immutable';
import * as ActionTypes from './actionTypes'
const defaultState = fromJS({
   page:1,
   showScroll:false,
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
   articlList:[],
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
   recommandList:[
      {
         id:1,
         imgUrl:'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
         name:'差点故事',
         desc:'写了564.8k字 · 13.7k喜欢',
      },
      {
         id:2,
         imgUrl:'https://upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
         name:'行距版君',
         desc:'写了522.9k字 · 54.4k喜欢',
      },
      {
         id:3,
         imgUrl:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
         name:'无限猴子',
         desc:'写了390.7k字 · 2k喜欢',
      }

   ]   
});
export default (state = defaultState , action)=>{
   
        switch (action.type) {
           case ActionTypes.GET_HOME_DATA: 
               return state.merge({
                  // articlList: fromJS(action.articlList),
                  topicList: fromJS(action.topicList),
                  recList: fromJS(action.recList)
              });  
            case ActionTypes.GET_HOME_MORE:
               return state.merge({
               articlList:state.get('articlList').concat(fromJS(action.data)),
               page:action.page + 1
               });
               case ActionTypes.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
        default:
            return state

    }
    
}