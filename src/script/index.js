/*logo*/
var footIcon=document.querySelectorAll('.footer_bottom .iconfont')
var app=document.querySelector('.app')
var iCon=document.querySelectorAll('.iconfont')
var show=document.querySelector("#show")
var list=document.querySelectorAll('.logo-wrap .list li');
var icon_show=document.querySelector('.icon_show')
for(var i=0;i<4;i++){
    list[i].onmouseenter=function(){
        show.style.cssText=`z-index:998` 
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
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })        
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