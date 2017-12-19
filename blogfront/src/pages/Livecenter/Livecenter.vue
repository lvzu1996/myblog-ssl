<template>
  <div id="livecenter">
      <div id="hidebg"></div>
      <!-- <div id="login">
          <div></div>
          <el-input v-model="loginData.username" placeholder="请输入账号" class="login-input"></el-input>
          <el-input v-model="loginData.password" placeholder="请输入密码" class="login-input"></el-input>
          <el-button type="primary">主要按钮</el-button>
      </div> -->
      <el-switch
        v-model="modes"
        @change="_switchChange"
        active-text="平台列表"
        inactive-text="个人订阅"
        width="80"
        inactive-color="#FA8E93"
        style="margin-top:50px;margin-left:-100px;">
        </el-switch>

           <transition name="fade">
            <div id="list-container"  v-show="modes">
                <div class="single-item" 
                    v-for="(item,index) in avatarUrls" 
                    :key="index">
                    <img :src="item" class="single-icons" @click="_jumpTo(urls[index])">
                </div>
            </div> 
        </transition>

        <div v-show="!modes" id="subscribe-list">
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
import DB from '../../tools/db.js'

export default {
    data(){
        return {
            modes: true,
            avatarUrls:[
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/douyu.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/panda.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/huya.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/longzhu.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/quanmin.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/zhanqi.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/twitch.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/acfun.png',
                'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/bilibili.png'],
            urls:[
                'https://www.douyu.com/directory/all',
                'https://www.panda.tv/all',
                'http://www.huya.com/l',
                'http://longzhu.com/channels/all',
                'https://www.quanmin.tv/game/all',
                'http://www.zhanqi.tv/lives',
                'https://www.twitch.tv/',
                'http://www.acfun.cn/',
                'https://www.bilibili.com/'
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
            roomnumber:'',
        }
    },

    beforeMount:function(){
        //  $('#livecenter').css('height',$(window).height())
         if(this.$route.query.list ==1 ){
             this.modes = false
         }
         if(this.$route.query.lctk_key){
             var _lctk_key = this.$route.query.lctk_key
             db.getSubscribeList({
                 lctk_key:_lctk_key
             }).then(
                 re => {/*渲染list*/},
                 () => {}
             )
         }
         
    },

    mounted:function(){
        $('#livecenter').css('min-height',window.screen.availHeight)
        $('#list-container').css('min-height',window.screen.availHeight*0.8)
        $('#subscribe-list').css('min-height',window.screen.availHeight*0.8)
    },
    
    methods:{
        _switchChange(){
            const _this = this
            // 检测cookie登录状态，若有发送请求，获取list
            if(this.modes == false){
                DB.api.livecenterLogin({
                    username:'',
                    password:'',
                    type:'1'
                })
                .then(re => {
                    if(re.status == 'success'){

                    }
                })
            }else{

            }
        },
        _subscribe(){
            
        },
        _jumpTo(url){
            window.location.href=url
        },
    },
}
</script>

<style lang="scss" scoped>
  @import "./Livecenter.scss"

</style>
