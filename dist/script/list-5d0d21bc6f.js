"use strict";for(var footIcon=document.querySelectorAll(".footer_bottom .iconfont"),app=document.querySelector(".app"),iCon=document.querySelectorAll(".iconfont"),show=document.querySelector("#show"),list=document.querySelectorAll(".logo-wrap .list li"),icon_show=document.querySelector(".icon_show"),i=0;i<4;i++)list[i].onmouseenter=function(){show.style.cssText="z-index:998;display:block"},show.onmouseleave=function(){show.style.cssText="z-index:0;display:none"};list[9].onmouseenter=function(){app.style.cssText="display:block"},list[9].onmouseout=function(){app.style.cssText="display:none"},iCon[0].onmouseenter=function(){icon_show.style.display="block"},icon_show.onmouseleave=function(){this.style.display="none"},footIcon[0].onmouseenter=function(){this.children[0].style.cssText="display:block"},footIcon[0].onmouseleave=function(){this.children[0].style.cssText="display:none"},footIcon[1].onmouseenter=function(){this.children[0].style.cssText="display:block"},footIcon[1].onmouseleave=function(){this.children[0].style.cssText="display:none"};var typeId=window.location.href.split("=")[1];$.get({url:"../php/getGoodsList.php",data:{typeId:typeId},dataType:"json",success:function(o){var t="";o.forEach(function(o,e,n){t+='\n            <div class="box">\n             <a href="./xiangqing.html?goodsId='.concat(o.goodsId,'">\n                <div class="img_box">\n                    <img src="').concat(o.goodsImg,'" alt="">\n                </div>\n                <h2>').concat(o.goodsName,"</h2>\n                <h3>").concat(o.goodsDesc,"</h3>\n                <h4>￥").concat(o.goodsPrice,"</h4>\n            </a>\n        </div>\n\n            "),$(".case_center").html(t)})}}),$(function(){getCookie("user")&&($(".icon_show .login").text(getCookie("user")).css({"font-size":"20px",color:"skyblue"}),$(".icon_show .reg").text("个人中心"))}),$(".icon_show .zhuxiao").click(function(){removeCookie("user")});