$('.login_img').click(function(){
    $("#login-pc").css({'display':'none'})
    $('#login-phone').css('display','block')
})
$('.login_img01').click(function(){
    $("#login-phone").css({'display':'none'})
    $('#login-pc').css('display','block')
})
$('.zhanghao').click(function(){
    $('.erwei').css('display','none')
    $('.show').css('display','block')
})
$('.erweima').click(function(){
    $('.erwei').css('display','block')
    $('.show').css('display','none')
})
$('.weixin').mouseenter(function(){
    $('.weixin_show').css('display','block')
})
$('.weixin').mouseout(function(){
    $('.weixin_show').css('display','none')
})
$('.denglu').click(function(){
    $.ajax({
        type:'post',
        url:"../php/login.php",
        data:{
            username:$('.show .txt').val(),
            userpass:$(".pass").val()
        },
        success:function(data){
            if(data==-1){
                $('.pass').next().text('用户名未注册!!').css('color','red')
            }else if(data==0){
                alert('用户名或者密码错误')
            }else if(data==1){
                alert('登录成功')
                window.location.href='../html/index.html'
            }
        }
    })
    setCookie({
        key:'user',
        val:$('.show .txt').val(),
        days:7,
    })
    if($('.check input').prop("checked")){
        setCookie({
            key:'username',
            val:$('.show .txt').val(),
            days:7,
    
        })
        setCookie({
            key:'userpass',
            val:$('.pass').val(),
            days:7
        })
    }else{
        removeCookie('username')
        removeCookie("userpass")
    }
})
$('.show .txt').keydown(function(){
    $('.pass').next().text('')
})
$(function(){
    if(getCookie("username")){
        $('.show .txt').val(getCookie("username"))
        $('.pass').val(getCookie("userpass"))
        $('.check input').prop("checked",'true')
    }
})
