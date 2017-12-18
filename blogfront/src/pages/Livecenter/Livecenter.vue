<template>
  <div id="livecenter">
      <el-switch
        v-model="modes"
        active-text="直播列表"
        inactive-text="个人订阅">
        </el-switch>

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
import douyu from '../../assets/logos/douyu.png'
import panda from '../../assets/logos/panda.png'
import huya from '../../assets/logos/huya.png'
import longzhu from '../../assets/logos/longzhu.png'
import quanmin from '../../assets/logos/quanmin.png'
import zhanqi from '../../assets/logos/zhanqi.png'
import acfun from '../../assets/logos/acfun.png'
import bilibili from '../../assets/logos/bilibili.png'
import twitch from '../../assets/logos/twitch.png'
export default {
    data(){
        return {
            modes: true,
            avatarUrls:[douyu,panda,huya,longzhu,quanmin,zhanqi,twitch,acfun,bilibili],
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
            ],
        }
    },

    mounted:function(){
         $('#livecenter').css('height',$(window).height())
    },
    
}
</script>

<style lang="scss" scoped>
  @import "./Livecenter.scss"

</style>
