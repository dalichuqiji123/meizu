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
var goodsId=window.location.href.split("=")[1];
$.get({
    url:'../php/getGoodsInfo.php',
    data:{
        goodsId:goodsId
    },
    dataType:'json',
    success:function(data){
        $('.nav-wrap h1').text(data.goodsName)
        $('.nav-wrap ul a').eq(1).text(data.goodsName)
        $('.header h1').text(data.goodsName)
        $(".header p").text(data.goodsDesc)
        $('.price h1').text('￥'+data.goodsPrice)
        $('.section_left .img_box img').attr("src",data.goodsImg)
        let str=`
            <a href="./xiangqing.html?goodsId=0002">${data.beiyong6}</a>
            <a href="./xiangqing.html?goodsId=0003">${data.beiyong7}</a>
            <a href="./xiangqing.html?goodsId=0004">${data.beiyong8}</a>
            <a href="./xiangqing.html?goodsId=0005">${data.beiyong9}</a>
        `
        $('.xinghao_right').html(str)
        let str01=`
        <a href="">${data.beiyong3}</a>
        <a href="">${data.beiyong5}</a>
        <a href="">${data.beiyong4}</a>
        <a href="">${data.beiyong10}</a>
        `
        $('.yanse_right').html(str01)
        let str02=`
        <a href="">${data.beiyong1}</a>
        <a href="">${data.beiyong2}</a>
        `
        $('.neichun_right').html(str02)
        $('.smimg_box img').eq(0).attr('src',data.goodsImg)
        $('.smimg_box img').eq(1).attr('src',data.beiyong11)
        $('.smimg_box img').eq(2).attr('src',data.beiyong12)
        $('.smimg_box img').eq(3).attr('src',data.beiyong13)

    }
})


$(function(){
    $('.smimg_box a img').click(function(){
        let src=$(this).attr("src")
        $('.section_left .img_box img').attr("src",src)
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