/*logo*/
var footIcon=document.querySelectorAll('.footer_bottom .iconfont')
var app=document.querySelector('.app')
var iCon=document.querySelectorAll('.iconfont')
var show=document.querySelector("#show")
var list=document.querySelectorAll('.logo-wrap .list li');
var icon_show=document.querySelector('.icon_show')
for(var i=0;i<4;i++){
    list[i].onmouseenter=function(){
        show.style.cssText=`z-index:998;display:block` 
    }
    show.onmouseleave=function(){
        show.style.cssText=`z-index:0;display:none`
    }
}
list[9].onmouseenter=function(){
    app.style.cssText=`display:block` 
}
list[9].onmouseout=function(){
    app.style.cssText=`display:none`
}
iCon[0].onmouseenter=function(){
    icon_show.style.display='block'
}
icon_show.onmouseleave=function(){
    this.style.display='none'
}
footIcon[0].onmouseenter=function(){
    this.children[0].style.cssText=`display:block`
}
footIcon[0].onmouseleave=function(){
    this.children[0].style.cssText=`display:none`
}
footIcon[1].onmouseenter=function(){
    this.children[0].style.cssText=`display:block`
}
footIcon[1].onmouseleave=function(){
    this.children[0].style.cssText=`display:none`
}
var typeId=window.location.href.split("=")[1];
 $.get({
     url:'../php/getGoodsList.php',
     data:{
         typeId:typeId,
     },
     dataType:'json',
     success:function(data){
        let str="";
        data.forEach(function(item,index,arr){
            str+=`
            <div class="box">
             <a href="./xiangqing.html?goodsId=${item['goodsId']}">
                <div class="img_box">
                    <img src="${item['goodsImg']}" alt="">
                </div>
                <h2>${item['goodsName']}</h2>
                <h3>${item['goodsDesc']}</h3>
                <h4>￥${item['goodsPrice']}</h4>
            </a>
        </div>

            `
            $('.case_center').html(str)
        })
    //  console.log(data);
//     <div class="box">
//     
// </div>
     }

 })
 $(function(){
    if(getCookie("user")){
        $('.icon_show .login').text(getCookie('user')).css({'font-size':'20px','color':'skyblue'})
        $('.icon_show .reg').text('个人中心')
    }
})
$('.icon_show .zhuxiao').click(function(){
    removeCookie('user')
})