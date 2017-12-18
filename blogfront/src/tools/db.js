import DBF from './dbFactory'

export default DBF.context;

var prefix = ''

if(process.env.NODE_ENV === "development"){
    prefix = 'https://world-elite.site'
}


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
    
});
