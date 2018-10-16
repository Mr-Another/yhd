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

window.onload=function(){
    like();
}