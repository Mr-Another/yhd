function ajaxloging(){
    $('#form_btn').onclick=function(){
        saveCookie('username',$('#username').value,7);
        let xhr=new XMLHttpRequest();
        xhr.open('post','php/verify.php',true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                let str=xhr.responseText;
                console.info(str);
                if(str=='1'){
                    location.href='index.html';
                    return;
                }else{
                    alert('用户名或密码错误!');
                }
            }
        }
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        let str = "username="+$('#username').value +"&userpass="+$('#userpass').value;
        xhr.send(str);
    }  
}

window.onload=function(){
    ajaxloging();
}