function addEvent(){
    $('.hide')[0].onmouseenter=function(){
        $('.hide_ul')[0].style.display='block';
    }
    $('.hide')[0].onmouseleave=function(){
        $('.hide_ul')[0].style.display='none';
    }
    for(let i=0;i<$('input').length;i++){
        $('input')[i].onfocus=function(){
            $('label')[i].style.left=-80+'px';
            $('label')[i].style.textAlign='right';
        }
    }
    
    //用户名  4~16   字母  数字  汉子
    $("#username").onkeyup=function(){
        let pattern=/[\！\!\@\b\r\#\$\%\^\&\*\(\)\=\+\<\>\?]/g
        var txt=$('#username').value;
        if(pattern.test(txt)){
            $('#nametxt').innerHTML='用户名不规范';
            $('#nametxt').style.color='red';
        }else{
            $('#nametxt').innerHTML='√';
            $('#nametxt').style.color='green';
        }
    }
    // 手机
    $('#userphone').onkeyup=function(){
        let pattern=/^[1][0-9]{10}$/g
        var txt=$('#userphone').value;
        if(pattern.test(txt)){
            $('#phonetxt').innerHTML='√';
            $('#phonetxt').style.color='green';
        }else{
            $('#phonetxt').innerHTML='手机号错误';
            $('#phonetxt').style.color='red';
        }
    }
    // 密码  强度三级
    $('#userpass').onkeyup=function(){
        var pattern=/[0-9]/g;
        var s=/[a-z]/gi;
        var f=/\!|\@|\#|\$|\%|\^|\&|\*|\,|\.|\?/g;
        var txt=$('#userpass').value;
        if(txt.length<6){
            $('#passtxt').innerHTML='密码至少6位以上';
            $('#passtxt').style.color='red';
            }else if(pattern.test(txt)&&f.test(txt)&&s.test(txt)){
                $('#passtxt').innerHTML='√';
                $('#passtxt').style.color='green';
            }else{
                $('#passtxt').innerHTML='含有字母、数字、特殊符号';
                $('#passtxt').style.color='red';
            }
    }
    // 验证密码
    $('#okpass').onblur=function(){
        var txt=$('#userpass').value;
        var txtt=$('#okpass').value;
        if(txtt==txt){
            $('#passtxtt').innerHTML='√';
            $('#passtxtt').style.color='green';
        }else{
            $('#passtxtt').innerHTML='密码不一致';
            $('#passtxtt').style.color='red';
        }
    }
}

function ajax(){
    $('#username').onblur=function(){
        let xhr=new XMLHttpRequest();
        xhr.open('get','php/userSelect.php?username='+this.value,true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                let str=xhr.responseText;
                if(str=='0'){
                    // alert('用户名已注册')
                    $('#nametxt').innerHTML='用户名已注册！';
                    $('#nametxt').style.color='red';
                }
            }
        }
        xhr.send();
    }

    $('#form_btn').onclick=function(){
        //创建对象
        let xhr=new XMLHttpRequest();
        //设置请求参数
        xhr.open('post','php/register.php',true);
        //设置回调函数
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                let str=xhr.responseText;
                if(str=='1'){
                    // alert('注册成功');
                    location.href='index.html';
                }else{
                    alert('注册失败');
                }
            }
        }
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //发送请求
        let str="username="+$('#username').value+"&userpass="+$('#userpass').value+"&userphone="+$('#userphone').value;
        xhr.send(str);
    }
}

window.onload=function(){
    addEvent();
    ajax();
}