<template>
  <div id="Test">
    <div>{{tel|formatPhone}}</div>
    <input v-mybind />
    <input v-lvclick />
    <div id="lvzu">1233</div>
  </div>
</template>
<script>

import DB from '../../tools/db.js' 

export default {
  name: "Test",

  data(){
    return{
      tel:13777821015,
      fullscreenLoading:true
    }
  },

  filters:{
    formatPhone(tel) {
      if (tel) {
        var str =tel+'';
        return str.substring(0,3)+'****'+str.split('').reverse().join('').substring(0,4).split('').reverse().join('');
      }
      return tel;
    }
  },
  beforeMount:function(){
     var test = DB.api.getSubscribeList({

            }).then(() => {},() => {});
            
  },
  directives:{
    mybind:{
        bind:function (el) {
          el.value = "this is mybind-bind"
        }
    },
    lvclick:{
      bind:function(el){
        el.onblur = function(){
          console.log(el.value);
        }
      }
    },
  },
  methods:{
    _test(){
      console.log(1)
    },
  }
}
</script>


<style lang="scss" scoped>
#lvzu{
  color: linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%);
}

</style>