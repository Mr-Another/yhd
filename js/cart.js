function like(){
    let span=$('.peas')[0].children;
    let step=5*$('#lis').offsetWidth;
    let nowPic=0;
    function now(){
        if(nowPic==0){
            sport($('#uls'),{left:0});
        }else if(nowPic==3){
            sport($('#uls'),{left:-3120});
        }else{
            sport($('#uls'),{left:-1*nowPic*step});
        }
    }
    $('#a1').onclick=function(){
        nowPic++;
        if(nowPic>span.length-1){
            nowPic=span.length-1;
        }
        span[nowPic].className='cur';
        span[nowPic-1].className='';
        now();
    }
    $('#a2').onclick=function(){
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

function fn1(){//全选或不选
    $('#bottom_check').oninput=function(){
            if($('.checkall')[1].checked==true){
                for(let i=0;i<$('.check').length;i++){
                    if($('.check')[i].checked==false){
                        $('.check')[i].checked=true;
                    }
                }
            }else{
                for(let i=0;i<$('.check').length;i++){
                    $('.check')[i].checked=false;
            }
        }
        count();
    }
}



function accounting(){//计算金额
    let lis=$('#list_ul').children;   
    let sum=0; 
    for(let i=0;i<lis.length;i++){
        $('.add')[i].innerHTML=$('.pro_num')[i].value*$('.unit_price')[i].innerHTML;
        $('.subtract')[i].onclick=function(){
            if($('.pro_num')[i].value==1){
                if(confirm('确定移除此物品？')){
                    lis[i].remove();
                    fn1();
                    accounting();
                    count();
                    cancel();
                    return;
                }else{
                    $('.pro_num')[i].value=1;
                }
            }else{
                $('.pro_num')[i].value--;
            }
            $('.add')[i].innerHTML=$('.pro_num')[i].value*$('.unit_price')[i].innerHTML;
            count();
        }
        $('.plus')[i].onclick=function(){
            $('.pro_num')[i].value++;
            $('.add')[i].innerHTML=$('.pro_num')[i].value*$('.unit_price')[i].innerHTML;
            count();
        }
        $('.check')[i].oninput=function(){
            count();
        }
        sum+=Number($('.add')[i].innerHTML);
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
    let btn=$('.delet');
    let lis=$('#list_ul').children;   
    for(let i=0;i<btn.length;i++){
        btn[i].onclick=function(){
            setTimeout(function(){
                lis[i].remove();
                fn1();
                accounting();
                count();
                cancel();
            },10);
        }
    }
}

window.onload=function(){
    fn1();
    accounting();
    count();
    cancel();
    like();
}