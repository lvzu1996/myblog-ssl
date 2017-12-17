<template>
  <div id="livecenter">
      <div id="list-container">
          <a class="single-item" 
            v-for="(item,index) in avatarUrls" 
            :key="index"
            :href="urls[index]">

              <img :src="item" class="single-icons">
          </a>
      </div> 
  </div>    
</template>

<script>
export default {
    data(){
        return {
            avatarUrls:[
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/douyu.png?Expires=1513485217&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=OzU3i53h1zMh%2Fpyn028Q9EPoY04%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/panda.png?Expires=1513485240&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=s4LM2yA2oMtxcykwLcLEUpPQbDs%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/huya.png?Expires=1513485265&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=4m1myi7KoJeAT86NTeD%2BEUg0vrU%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/longzhu.png?Expires=1513485279&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=zKg4mlYqbP7SGRAMYHaU7EtyR44%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/quanmin.png?Expires=1513485297&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=SOB1HSkIA04g4QgcW1a6JteXJHo%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/zhanqi.png?Expires=1513485317&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=%2BWev05KVpC2WQGWtxwDBgidJJpc%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/acfun.png?Expires=1513485178&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=zJNgDrkct0%2FknaDiv7%2Fd%2FEjUME8%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/bilibili.png?Expires=1513485328&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=28TMvHheWuHbB%2B8ImNrcSnDZvzY%3D',
            'http://myblog-oss.oss-cn-beijing.aliyuncs.com/livecenter/twitch.png?Expires=1513485343&OSSAccessKeyId=TMP.AQHUTkI4fHn4EZu8i1lI63dafxl7SeXk_CiKDDpLICqUhBOcllLnDEqs1T6-ADAtAhUAm5jfh8_j1jfoU6dpz9h-BwkhcO8CFFzO_D28KTncxThrilCxwBOZElFF&Signature=2xfVO16lM0AsfxqvmpaafcJnWlU%3D'
            ],
            urls:[
                'https://www.douyu.com/directory/all',
                'https://www.panda.tv/all',
                'http://www.huya.com/l',
                'http://longzhu.com/channels/all',
                'https://www.quanmin.tv/game/all',
                'http://www.zhanqi.tv/lives',
                'http://www.acfun.cn/',
                'https://www.bilibili.com/',
                'https://www.twitch.tv/'
            ]
        }
    },

    mounted:function(){
         $('#livecenter').css('height',$(window).height())
    },
    
}
</script>

<style>
  @import "./livecenter.scss"

</style>
