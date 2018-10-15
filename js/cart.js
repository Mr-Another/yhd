function like(){
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
    $('#a2').onclick=function(){
        nowPic++;
        if(nowPic>3){
            nowPic=0;
        }
        now();
    }
    $('#a1').onclick=function(){
        nowPic--;
        if(nowPic<0){
            nowPic=3;
        }
        now();
    }
}

window.onload=function(){
    like();
}