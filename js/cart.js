function like(){
    let span=$('.peas')[0].children;
    let lis=$('#uls').children;
    let step=5*lis[0].offsetWidth;
    let nowPic=0;
    function now(){
        if(nowPic==0){
            sport($('#uls'),{left:0});
        }else if(nowPic==(lis.length/5)-1){
            sport($('#uls'),{left:-1040*((lis.length/5)-1)});
        }else{
            sport($('#uls'),{left:-1*nowPic*step});
        }
    }
    $('#a2').onclick=function(){
        nowPic++;
        if(nowPic>span.length-1){
            nowPic=span.length-1;
        }
        span[nowPic].className='cur';
        span[nowPic-1].className='';
        now();
    }
    $('#a1').onclick=function(){
        nowPic--;
        if(nowPic<0){
            nowPic=0;
        }
        span[nowPic].className='cur';
        span[nowPic+1].className='';
        now();
    }
    for(let i=0;i<span.length;i++){
        span[i].onclick=function(){
            $('.cur')[0].className='';
            span[i].className='cur';
            sport($('#uls'),{left:-1*i*step});
        }
    }
}

function fn1(){
    $('#bottom_check').onclick=function(){
            if($('#bottom_check').checked==true){
                for(let i=0;i<$('.onbtn').length;i++){
                    if($('.onbtn')[i].checked==false){
                        $('.onbtn')[i].checked=true;
                    }
                }
            }else{
                for(let i=0;i<$('.onbtn').length;i++){
                    $('.onbtn')[i].checked=false;
            }
        }
        count();
        cancel();
    }
    $('#top_check').onclick=function(){
        if($('#top_check').checked==true){
            for(let i=0;i<$('.onbtn').length;i++){
                if($('.onbtn')[i].checked==false){
                    $('.onbtn')[i].checked=true;
                }
            }
        }else{
            for(let i=0;i<$('.onbtn').length;i++){
                $('.onbtn')[i].checked=false;
            }
        }
    count();
    cancel();
    }
}

function accounting(){//计算金额
    let lis=$('#list_ul').children;   
    let sum=0; 
    for(let i=0;i<lis.length;i++){
        $('.add')[i].innerHTML=($('.pro_num')[i].value*$('.unit_price')[i].innerHTML).toFixed(2);
        $('.subtract')[i].onclick=function(){
            if($('.pro_num')[i].value<2){
                $('.pro_num')[i].value=1;
            }else{
                $('.pro_num')[i].value--;
            }
            $('.add')[i].innerHTML=($('.pro_num')[i].value*$('.unit_price')[i].innerHTML).toFixed(2);
            count();
            cancel();
        }
        $('.plus')[i].onclick=function(){
            $('.pro_num')[i].value++;
            $('.add')[i].innerHTML=($('.pro_num')[i].value*$('.unit_price')[i].innerHTML).toFixed(2);
            count();
        }
        $('.check')[i].oninput=function(){
            count();
            cancel();
        }
        sum+=Number($('.add')[i].innerHTML);
        $('.pro_num')[i].onblur=function(){
            if(this.value<1){
                alert('商品数量不能少于1个！');
                this.value=1;
            }
        }
    }
    $('#total_price').innerHTML=sum.toFixed(2);
    $('#amount').innerHTML=lis.length;
}

function count(){//计数
    let adds=$('.add');
    let sum=0;
    let num=0;
    for(let i=0;i<adds.length;i++){
        if($('.check')[i].checked==true){
            sum+=Number($('.add')[i].innerHTML);
            num++;
        }
    }
    $('#addUp').innerHTML=sum.toFixed(2);
    $('#selected').innerHTML=num;
}

function cancel(){
    let arr=[];
    let btn=$('.delet');
    let lis=$('#list_ul').children;   
    for(let i=0;i<btn.length;i++){
        btn[i].onclick=function(){
            sport(lis[i],{left:1140});
            let Timer=setTimeout(function(){
                lis[i].remove();
                fn1();
                accounting();
                count();
                cancel();
                clearInterval(Timer);
            },850);
            ajax(
                'get',
                'php/deleteGoods.php',
                'vipName='+getCookie('username')+'&goodsId='+this.id,
                true,
                function(str){
                    if(str=='1'){
                        alert('删除成功!');
                    }else if(str=='0'){
                        alert('删除失败!');
                    }
                }
            );
        }
        if($('.check')[i].checked==true){
            arr.push(lis[i]);
        }
    }
    $('#batch').onclick=function(){
        for(let j in arr){
            sport(arr[j],{opacity:0});
            let Timer=setTimeout(() => {
            arr[j].remove();
            clearInterval(Timer);
            fn1();
            accounting();
            count();
            cancel();
            }, 850);
        }
    }
}

function showUser(){
    let username=getCookie('username');
    if(username!=''){
        $('#user_info').children[0].innerHTML=username+' 欢迎您!'+'  <a href="javascript:0" id="logout">退出</a>';
        $('#logout').onclick=function(){
            $('#user_info').children[0].innerHTML='hi,请 <a href="login.html">登录</a> <a href="register.html">注册</a>'
            removeCookie('username');
        }
    }
}

function showData(data){
    let objs=JSON.parse(data);
    let str='';
    let str1='';
    console.log(objs);
    console.log(getCookie('username'));
    for(let i=0;i<objs.length;i++){
        str1='<li name="'+objs[i].goodsId+'"><input class="check onbtn" type="checkbox"><a class="show" href="javascript:0;"><img src="'+objs[i].goodsImg+'" alt=""></a><a class="pro_title" href="javascript:0;">'+objs[i].goodsName+'</a><p class="unit_price">'+(objs[i].goodsPrice*objs[i].beiyong1).toFixed(2)+'</p><div class="mol"><a class="subtract" href="javascript:0">-</a><input class="pro_num" type="text" value="'+objs[i].goodsCount+'"><a class="plus" href="javascript:0">+</a></div><p class="add"></p><a href="javascript:0;" class="delet clear" id="'+objs[i].goodsId+'"><img src="img/deleteIcon.png" alt=""></a></li>';
        str+=str1;
    }
    $('#list_ul').innerHTML=str;
    fn1();
    accounting();
    count();
    cancel();
}

function removeCarGoods(){
    
}

window.onload=function(){
    like();
    showUser();
    ajax(
        'get',
        'php/getShoppingCart.php',
        'vipName='+getCookie('username'),
        true,
        showData
    );
}