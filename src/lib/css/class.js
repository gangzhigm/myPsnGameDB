import classes from './main.less'
let element = `
<div class="container-fluid">
<div class="row">
    <div class="col-xs-12 col-sm-8">
        <H1 class="${classes.h1}">在线游戏索引库<small><strong>从下载列表里一个一个找,真的很烦</strong></small></H1>
    </div>
    <div class="form-group col-xs-12 col-sm-4">
        <input class="form-control" type="" name="">
    </div>
</div>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id='${classes.content}'>
    <div id="${classes.PS3}"> 
        <h2>PS3</h2>
    </div>
    <div id="${classes.PS4}">
        <h2>PS4</h2>
    </div>
    <div id="${classes.PSV}">
        <h2>PSV</h2>
    </div>
    </div>
</div>
</div>
`
document.write(element);
export default{
    return:function(){
        console.log('asd')
    }
}