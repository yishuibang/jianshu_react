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
});
export default (state = defaultState , action)=>{
        switch (1) {
        default:
            return state
            break;

    }
    
}