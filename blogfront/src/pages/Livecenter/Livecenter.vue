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
        :disabled = "!canSwitch"
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

        <div v-show="!modes" id="subscribes">
            <div id="tv-s">
                <el-select v-model="tvname" placeholder="直播平台" id="tv-selector">
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
            <div id="subscribe-list" v-loading.fullscreen.lock="fullscreenLoading&&!modes" element-loading-text="正在加载订阅列表">
                <div class="single-subscribe" v-for="(item,index) in subscribeListData" :key="index" @click="_jumpTo(item.link)">
                    <img :src="item.room_thumb" alt="">
                    <div class="single-subscribe-infos">
                        <span class="ssi-room">{{item.room_name}}</span>
                        <span class="ssi-owner">{{item.owner_name}}</span>
                        <span class="ssi-cate">{{item.cate_name}}</span>
                        <span class="ssi-online">{{item.online}}</span>
                    <img src="https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/douyusmalllog.png" class="ssi-logo" v-if="item.platform == 'douyu'">
                    <img src="https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/pandasmalllogo.png" class="ssi-logo" v-if="item.platform == 'panda'">
                    </div>
                </div>
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
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/douyu.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/panda.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/huya.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/longzhu.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/quanmin.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/zhanqi.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/twitch.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/acfun.png',
                'https://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/logos/bilibili.png'],
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
            tvname: '',
            roomnumber:'',
            subscribeListData:[{
                room_thumb:'',
                owner_name:'',
                room_name:'',
                online:'',
                cate_name:'',
                link:'',
                platform:'',
            }],
            fullscreenLoading:true,
            canSwitch:true,
        }
    },

    beforeMount:function(){
        const _this = this
        //  $('#livecenter').css('height',$(window).height())
         if(this.$route.query.list ==1 ){
             this.modes = false
             _this.__getSubscribeData()
             localStorage.lastGetDataTime =  (new Date()).valueOf(); 
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

                if(localStorage.lastGetDataTime){
                    if(parseInt(localStorage.lastGetDataTime) + 60*1000 < (new Date()).valueOf()){
                         _this.__getSubscribeData()
                         localStorage.lastGetDataTime =  (new Date()).valueOf(); 
                    }
                }else{
                    localStorage.lastGetDataTime =  (new Date()).valueOf(); 
                    _this.__getSubscribeData()
                }
               
                // DB.api.livecenterLogin({
                //     username:'',
                //     password:'',
                //     type:'1'
                // })
                // .then(re => {
                //    _this.subscribeListData = re
                // },re =>{
                //     if(re.msg == 'need login'){
                //         this.$message({
                //             showClose: true,
                //             message: '使用订阅功能请先登录',
                //             type: 'error',
                //             duration:'1300'
                //         });
                //         setTimeout(()=>{
                //             this.$router.push('/register')
                //         },1500)
                //     }
                //     else if(re.msg == 'expired'){
                //         this.$message({
                //             showClose: true,
                //             message: '登录状态过期请重新登录',
                //             type: 'error',
                //             duration:'1300'
                //         });
                //         setTimeout(()=>{
                //             this.$router.push('/register')
                //         },1500)
                //     }
                // })
            }
        },
        _subscribe(){
            const _this = this
            if(_this.roomnumber == ''){
                this.$message({
                    showClose: true,
                    message: '请输入正确的房间号',
                    type: 'error',
                    duration:'1300'
                });
                return 
            }
            if(_this.tvname == '' || _this.roomnumber == ''){
                _this.$message({
                            showClose: true,
                            message: '选择平台并输入房间号！',
                            type: 'error!',
                            duration:'1300'
                        });
                    return
            }
            DB.api.livecenterSubscribe({
                tvname:_this.tvname,
                roomnumber:_this.roomnumber
            })
            .then(
                re => {
                        _this.roomnumber = ''
                        _this.$router.push({ path:'/livecenter?list=1' })
                        _this.$message({
                            showClose: true,
                            message: '订阅成功~即将重新获取订阅列表',
                            type: 'success',
                            duration:'1500',
                            onClose:_this.__getSubscribeData()
                        });
                        // setTimeout(() => {
                        //     _this.$router.go(0)
                        // },1500)
                        
                    },  
                re => {
                    _this.roomnumber = ''
                    if(re.msg == 'subscribed'){
                        _this.$message({
                            showClose: true,
                            message: '此房间已订阅~',
                            type: 'warning',
                            duration:'1300'
                        });
                    }
                    else{
                        _this.$message({
                            showClose: true,
                            message: '登录状态过期请重新登录',
                            type: 'error',
                            duration:'1300'
                        });
                         setTimeout(()=>{
                            _this.$router.push('/register')
                        },1500)
                    }
                }
                
            )
        },
        _jumpTo(url){
            window.location.href=url
        },
        __getSubscribeData(){
            const _this = this
            _this.canSwitch = false
            _this.fullscreenLoading = true
            DB.api.getSubscribeList({

            }).then(
                re => {
                    _this.subscribeListData = re
                    _this.fullscreenLoading = false
                    _this.canSwitch = true
                },re =>{
                    _this.fullscreenLoading = false
                    _this.canSwitch = true
                    if(re.msg == 'need login'){
                        this.$message({
                            showClose: true,
                            message: '使用订阅功能请先登录',
                            type: 'error',
                            duration:'1300'
                        });
                        setTimeout(()=>{
                            this.$router.push('/register')
                        },1500)
                    }
                    else if(re.msg == 'expired'){
                        this.$message({
                            showClose: true,
                            message: '登录状态过期请重新登录',
                            type: 'error',
                            duration:'1300'
                        });
                        setTimeout(()=>{
                            this.$router.push('/register')
                        },1500)
                    }
                }
            )
        },
    },
}
</script>

<style lang="scss" scoped>
  @import "./Livecenter.scss"

</style>
