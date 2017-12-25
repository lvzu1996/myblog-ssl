import DBF from './dbFactory'

export default DBF.context;

var prefix = ''

if(process.env.NODE_ENV === "development"){
    prefix = 'http://127.0.0.1:8000'
}
if(process.env.NODE_ENV === "production"){
    prefix = 'https://world-elite.site'
}
prefix = 'http://127.0.0.1:8000'
// prefix = 'https://world-elite.site'


DBF.create('api', {
    //home 获取 主页背景
    getPicUrls: {
        url       : prefix+'/api/get_pic_urls',
        method    :'GET',
    },
    //home 发送评论
    sendComment: {
        url       : prefix+'/api/comment',
        method    :'GET',
    },
    //register 用户登录
    accountLogin: {
        url       : prefix+'/api/account_login',
        method    :'POST',
    },
    //register 用户注册
    accountRegister: {
        url       : prefix+'/api/account_register',
        method    :'POST',
    },
    //register/detailinfo 用户详细信息
    setDetailInfo: {
        url       : prefix+'/api/set_detailInfo',
        method    :'POST',
    },

    //livecenter 用户详细信息
    livecenterLogin: {
        url       : prefix+'/api/livecenter_login',
        method    :'POST',
    },
    

    //livecenter 用户注册
    livecenterRegister: {
        url       : prefix+'/api/livecenter_register',
        method    :'POST',
    },

    //livecenter 获取订阅list
    getSubscribeList: {
        url       : prefix+'/api/livecenter_getSubscribeList',
        method    :'GET',
    },

    //livecenter 订阅主播
    livecenterSubscribe: {
        url       : prefix+'/api/livecenter_subscribe',
        method    :'GET',
    },
    
});
