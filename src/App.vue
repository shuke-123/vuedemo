
<template>
  <div id="app" :class="{margin:active}">

    <transition  v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
         <p class='position' v-show="fade">i am show</p>
    </transition>
    <button v-on:click="fade = !fade">渐显</button>
    <div :is="changecom" fromfater="我是一条来自父组件的消息3" v-on:child-telll-me="listen"></div><!--组件的切换-->
    <!--<nav-Bar fromfater="我是一条来自父组件的消息3" v-on:child-telll-me="listen"></nav-Bar>-->
    <!--<navBarTwo ></navBarTwo>-->
    <!--监听子组件说话的时候 ，子组件说话的时候父组件做出听的动作-->
    <p>子组件告诉父组件：{{childmsg}}</p>
    <h1 v-textAlign="'center'" >姓名列表</h1>
    <p  v-textAlign="'center'">{{tips}}</p>
    <input type="text" placeholder='enter name' v-model='name.text' @keyup.enter="add" v-focus/>
    <button v-on:click='add' >添加</button>
    <div class="clear"></div>
    <button @click="change">切换组件</button>
    <table>
      <thead>
      <tr>
        <th>姓名</th>
        <th>序列</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="val,key in name">
        <td>{{val.text}}</td>
        <td>{{key + 1}}</td>
        <td>
          <button v-on:click='remove(key)'>删除</button>
        </td>
      </tr>
      </tbody>
    </table>

    <p v-if="show" v-bind:class="[text_center]">完成添加</p>
    <router-view></router-view>
    <router-link :to="{path:'../apple'}">gotoapple</router-link>
    <router-link :to="{path:'../banana'}">gotobanana</router-link>
  </div>
</template>


<script>
  import stroe from './stroe'
  import navBar from './Component/navBar.vue'
  import navBarTwo from "./Component/navBarTwo.vue"
export default {
    components:{navBar,navBarTwo},
  name: 'app',
    directives:{
//        自定义标签
        textAlign:function (el,binding) {
            el.style.textAlign=binding.value;
        },
        focus: {
           inserted (el,binding){
               el.focus();
           }
        }
    },
  data () {
    return {
     // msg: 'Welcome to Your Vue.js App'
        text_center:'text-center',
        tips: "wlecome",
        name:stroe.fetch(),
        show:false,
        active:true,
        childmsg:'',
        test:['name','aa','cc'],
        changecom:'navBar',
        fade:false

    }
  },

    methods: {

        add: function () {
            const newname = this.name.text;
            if (!newname) {
                alert("请输入name");
                return false;
            }
            this.name.push({text: newname}),
                this.name.text = '',
                this.show = true;
           // console.log("pop:"+this.test.pop());//取数组的最后一个
            //console.log("shift:"+this.test.shift());//取出第一个，并从数组中删除
           // console.log("unshift:"+this.test.unshift("first"));//往数组的开头添加一个或者多个元素，并返回新的长度
//            console.log(this.test);
           // console.log("splice:"+this.test.splice());//向/从数组中添加/删除项目，然后返回被删除的项目
           // console.log("sort:"+this.test.sort());//方法用于对数组的元素进行排序
//            console.log(this.test);
         // console.log("reverse:"+this.test.reverse());//方法用于颠倒数组中元素的顺序。
        },
        remove: function (key) {
            this.name.splice(key, 1);
        },
        listen: function (aa) {
            this.childmsg = aa
        },
        change:function () {
          const a=this.changecom;
            if(a=='navBar'){
                this.changecom='navBarTwo';
            }else{
                this.changecom='navBar';
            }

        },
        beforeEnter:function (el) {
            $(el).css({left:'500px',opacity:0});
        },
        enter:function (el,done) {
            $(el).animate({
                left:0,
                opacity:1,
            },{duration:1500,complete:done})
        },
        leave:function (el,done) {
            $(el).animate({
                left:'500px',
                opacity:0
            },{
                duration:1500,complete:done
            })
        }

    },

    watch:{
      "name" :  {
          handler:function (name) {
              stroe.save(name);
          },
          deep:true //若不加该参数，只更改index,不会认为name有更改。
      }

    }
}
</script>

<style>
  body {
    background-color:   #f1f1f1;
    font-family:        ‘Lato’, Arial, sans-serif;
    margin:             2vw;

  }
  ul li{list-style:none;}
  table{border:1px solid #ccc;width:98%;margin:20px auto;}
  tr{border:1px solid #ccc;}
  th,td{text-align:center;}
  .red{color:red;font-size:18px;}
  .text-center{text-align: center;}
  #app{width:500px;min-height:400px;border:1px solid red;}
  input{padding:10px;margin:15px 0 0 160px;text-align: center;}
  .clear{clear:both;}
  .border{border:1px solid red;}
  .margin{margin:0 auto;}
  .position{position: absolute;top:30px;left:100px;}
</style>
