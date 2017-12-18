<template>
  <div id="livecenter">
      <div id="hidebg"></div>
      <div id="login"></div>
      <el-switch
        v-model="modes"
        @change="_switchChange"
        active-text="直播列表"
        inactive-text="个人订阅"
        width="80"
        inactive-color="#FA8E93"
        style="margin-top:50px;margin-left:-100px;">
        </el-switch>

            <div id="list-container"  v-if="modes">
                <a class="single-item" 
                    v-for="(item,index) in avatarUrls" 
                    :key="index"
                    :href="urls[index]">

                    <img :src="item" class="single-icons">
                </a>
            </div> 

        <div v-else id="subscribe-list">
            <div id="tv-s">
                <el-select v-model="selectedtv" placeholder="请选择平台" id="tv-selector">
                    <el-option
                    v-for="item in tvnames"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-input v-model="roomnumber" placeholder="请输入房间后缀"></el-input>
                <el-button type="primary" @click="_subscribe">添加订阅主播</el-button>
            </div>
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
            tvnames: [{
                value: 'douyu',
                label: '斗鱼TV'
                }, {
                value: 'panda',
                label: '熊猫TV'
                }, {
                value: 'huya',
                label: '虎牙直播'
                }, {
                value: 'longzhu',
                label: '龙珠直播'
                }, {
                value: 'quanmin',
                label: '全民直播'
                }, {
                value: 'zhanqi',
                label: '战旗直播'
                }],
            selectedtv: '',
            roomnumber:''
        }
    },

    mounted:function(){
         $('#livecenter').css('height',$(window).height())
    },
    
    methods:{
        _switchChange(){
            // console.log(this.modes)
            if(this.modes == false){
                //检测cookie登录状态，若有发送请求，获取list
                // $('#hidebg').css('display','block')
            }else{
                $('#hidebg').css('display','none')
            }
        },
        _subscribe(){
            
        },
    },
}
</script>

<style lang="scss" scoped>
  @import "./Livecenter.scss"

</style>
