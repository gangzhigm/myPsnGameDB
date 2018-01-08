 //heredoc方法输出注释中的组件代码
 function heredoc(fn){
     return fn.toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
 }
 //输出组件代码
 document.write(heredoc(function(){
 /*
 <style>
 .my {color:red;padding:10px;}
 </style>
 
 <script type="text/x-template" id="c">
 <p class="my" v-on:click="todo+=1">
   {{todo}}
 </p>
 </script>
 
 <script>
 Vue.component('counter',{
   template: "#c",
   data: function () {
     return {
         todo: 1
     }
   }
 })
 </script>
 */}))