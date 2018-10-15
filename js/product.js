function addEvent(){
    $('.order')[0].onmouseenter=function(){
        $('.hide_class')[0].style.display='block';
    }
    $('.order')[0].onmouseleave=function(){
        $('.hide_class')[0].style.display='none';
    }
}

function goTop(){
    $('#topBtn').onclick=pro;
    function pro(){
        let $num=document.documentElement.scrollTop;
        $num-=$num/100+1;
        document.documentElement.scrollTop=$num;
        timer=setTimeout(pro,3);
        if(document.documentElement.scrollTop==0){
            clearTimeout(timer);
        }
    }
}

function loupe(){
    $('.mag')[0].onmouseenter=function(){
        $('.shot')[0].style.display='block';
        $('.show')[0].style.display='block';
    }
    $('.mag')[0].onmouseleave=function(){
        $('.shot')[0].style.display='none';
        $('.show')[0].style.display='none';
    }

    $('.mag')[0].onmousemove=function(event){
        let ev=event||window.event;
        let left1=ev.pageX-$('.mag')[0].offsetLeft-$('.shot')[0].offsetWidth/2;
        let top1=ev.pageY-$('.mag')[0].offsetTop-$('.shot')[0].offsetHeight/2-88-90;
        console.info(ev.pageY);
        console.info($('.mag')[0].offsetTop);
        console.info($('.shot')[0].offsetHeight);
        console.info(top1);

        if(left1<0){
            left1=0;
        }else if(left1>($('.mag')[0].offsetWidth-$('.shot')[0].offsetWidth)){
            left1=$('.mag')[0].offsetWidth-$('.shot')[0].offsetWidth;
        }

        if(top1<0){
            top1=0;
        }else if(top1>($('.mag')[0].offsetHeight-$('.shot')[0].offsetHeight)){
            top1=$('.mag')[0].offsetHeight-$('.shot')[0].offsetHeight;
        }

        $('.shot')[0].style.left=left1+'px';
        $('.shot')[0].style.top=top1+'px';
        $('.show')[0].style.backgroundPosition = -1*left1 + 'px  ' + -1*top1 + 'px';
    }
}

window.onload=function(){
    addEvent();
    goTop();
    loupe();
}