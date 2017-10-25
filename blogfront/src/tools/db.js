import DBF from './dbFactory'

export default DBF.context;

let prefix = 'https://world-elite.site'

DBF.create('api', {
    getPicUrls: {
        url       : prefix+'/api/get_pic_urls',
        method    :'GET',
    },
});
