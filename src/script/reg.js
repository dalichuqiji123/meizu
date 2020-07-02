$('.weixin').mouseenter(function () {
    $('.weixin_show').css('display', 'block')
})
$('.weixin').mouseout(function () {
    $('.weixin_show').css('display', 'none')
})
$('.input-box .tel').blur(function () {
    if ($('.input-box .tel').val() == '') {
        $('.pass').next().text('')
        return;
    }
    $.ajax({
        type: 'get',
        url: '../php/checkUser.php',
        data: {
            username: $('.input-box .tel').val()
        },
        success: function (data) {
            if (data == 1) {
                $('.pass').next().text('用户名已存在').css('color', 'red')
            } else {
                $('.pass').next().text('恭喜您，可以继续注册').css('color', 'green')
            }
        }
    })
})
$('.btnZc').click(function () {
    if ($('.input-box .tel').val() == '' || $('.pass').val() == '') {
        alert('用户名和密码不能为空')
        return;
    }
    if ($('.check input').prop('checked')) {
        $.ajax({
            type: 'post',
            url: '../php/reg.php',
            data: {
                username: $('.input-box .tel').val(),
                userpass: $('.pass').val()
            },
            dataType: 'json',
            success: function (data) {
                if (data == '1') {
                    alert('注册成功')
                    window.location.href="./login.html"
                } else if (data == '0') {
                    alert('注册失败，用户或密码已存在')
                    return;
                }
            }
        })
    }else{
        $('.pass').next().text('请同意声明！').css('color', 'red')
        $('.check input').click(function(){
            $('.pass').next().text('')
        })
    }
})