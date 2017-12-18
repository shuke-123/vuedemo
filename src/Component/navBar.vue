<template >
    <div :class="[width,border]">
        <p :class="{red:active}">{{aa}}</p>
           <h1 v-show="hide" :class="{red:active}">{{fromfater}}</h1>
            <button v-on:click="dothis" >获取父组件赋的值!</button>
        <button v-on:click="openMouse" >open mouse!</button>
        <p v-html="test"></p>   <!--v-html 所有的字符作为一个html代码写入-->
        <p v-text="test"></p>  <!--v-test 所有的字符全部作为一个字符串-->
    </div>

</template>
<script type="text/ecmascript-6">
    export default{
        data (){
            return{
//                red:'red',
                aa:'我是header',
                active:true,
                hide:false,
                border:'border',
                width:'width',
                val:'',
                msg:'',
                ok:true,
                test:'<span>aa</span>',
            }
        },
        props:['fromfater'],
        methods:{
            dothis: function () {
                const a=!this.hide;
              if(a){
                    this.hide=true
              }else{
                  this.hide=false
              }
            },
            openMouse:function () {
                this.$emit('child-telll-me',this.aa);
            },
            change:function () {
                this.changeView='navBarTwo'
            }
        }

    }
</script>
<style>
.red{color:red;}
.width{width:100%;min-height:80px;overflow:hidden;margin:0 auto;text-align: center;}
.border{border:1px solid blue;}
</style>