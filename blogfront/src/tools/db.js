import DBF from './dbFactory'

export default DBF.context;

let prefix = 'http://127.0.0.1:8000'

DBF.create('api', {
    pic: {
        url       : prefix+'/api/get_pic_urls',
        method    :'GET',
    },
});
