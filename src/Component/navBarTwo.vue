<template>
    <div :class="[width,border2]">
        <p :class="{red:active}">{{two}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        prop: [],
        data(){
            return {
                two:'two',
                active:true,
                width:'width',
                border2:'border2'
            }

        }
    }
</script>
<style>
    .red{color:red;}
    .width{width:500px;overflow: hidden;}
    .border2{border:1px solid black;}
</style>