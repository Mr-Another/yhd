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
        $('.add')[i].innerHTML=$('.pro_num')[i].value*$('.unit_price')[i].innerHTML;
        $('.subtract')[i].onclick=function(){
            if($('.pro_num')[i].value<2){
                if(confirm('确定移除此物品？')){
                    sport(lis[i],{left:1140});
                    setTimeout(function(){
                        lis[i].remove();
                        fn1();
                        accounting();
                        count();
                        cancel();
                    },850);
                }else{
                    $('.pro_num')[i].value=1;
                }
            }else{
                $('.pro_num')[i].value--;
            }
            $('.add')[i].innerHTML=$('.pro_num')[i].value*$('.unit_price')[i].innerHTML;
            count();
            cancel();
        }
        $('.plus')[i].onclick=function(){
            $('.pro_num')[i].value++;
            $('.add')[i].innerHTML=$('.pro_num')[i].value*$('.unit_price')[i].innerHTML;
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
    $('#total_price').innerHTML=sum;
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
    $('#addUp').innerHTML=sum;
    $('#selected').innerHTML=num;
}

function cancel(){
    let arr=[];
    let btn=$('.delet');
    let lis=$('#list_ul').children;   
    for(let i=0;i<btn.length;i++){
        btn[i].onclick=function(){
            sport(lis[i],{left:1140});
            setTimeout(function(){
                lis[i].remove();
                fn1();
                accounting();
                count();
                cancel();
            },850);
        }
        if($('.check')[i].checked==true){
            arr.push(lis[i]);
        }
    }
    $('#batch').onclick=function(){
        for(let j in arr){
            sport(arr[j],{opacity:0});
            setTimeout(() => {
            arr[j].remove();
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
    console.log(objs);
}

window.onload=function(){
    fn1();
    accounting();
    count();
    cancel();
    like();
    showUser();
    ajax(
        'get',
        'php/getShoppingCart.php',
        'vipName=肖雨',
        true,
        showData
    );
}