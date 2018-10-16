function addEvent(){
    $('.header')[0].onmouseenter=function(){
        $('.hd_child')[0].style.height='250px';
        $('.hd_defa')[0].style.bottom='-80px';
    }
    $('.header')[0].onmouseleave=function(){
        $('.hd_child')[0].style.height='80px';
        $('.hd_defa')[0].style.bottom=0;
    }
}

function hideSearch(){
    window.onscroll=function(){
        let step=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(step);
        if(step>=500){
            $('.hide_search')[0].style.top=0;
            $('.letfTarget')[0].style.display='block';
        }else{
            $('.hide_search')[0].style.top=-60+'px';
            $('.letfTarget')[0].style.display='none';
        }
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

function close(){
    $('#close_btn').onclick=function(){
        $('.header')[0].style.display='none';
    }
    $('#bd_btn').onclick=function(){
        $('.bd_box')[0].style.display='none';
    }
}

function moveObj(domObj,attr,endValue,timeLong){
	
	let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	let direction = endValue>currValue?1:-1;
	let timeSpace = 16;
	let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		let temp = currValue;
		if(attr!="opacity"){
			temp = temp+"px";
		}
		domObj.style[attr] = temp;		
	},timeSpace);
}

class Slider{
    constructor(boxDomObj,width,height,imgs,btnSize,btnColor,btnHightColor,isStyle,direction,timeSpace){
        this.boxDomobj=boxDomObj;
        this.width=width;
        this.height=height;
        this.imgDoms=[];
        this.liDoms=[];
        this.imgs=imgs;
        this.btnSize=btnSize;
        this.btnColor=btnColor;
        this.btnHightColor=this.btnHightColor;
        this.isStyle=isStyle;
        this.direction=this.direction;
        this.timeSpace=timeSpace;
        this.currOrd=0;
        this.Timer=null;

        this.createUI();
        this.changeImg();
        this.stopChange();
        this.addEvent();
    }

    createUI(){
        //创建所有的图片
        for(let i=0;i<this.imgs.length;i++){
            let imgDom=document.createElement('img');
            imgDom.src=this.imgs[i];
            imgDom.style.cssText='position:absolute;top:0px;';
            imgDom.style.width=this.width+'px';
            imgDom.style.height=this.height+'px';
            if(i==0){
                imgDom.style.left=0;
            }else{
                imgDom.style.left=this.width+'px';
            }
            this.boxDomobj.appendChild(imgDom);
            this.imgDoms.push(imgDom);
        }
        //创建对所有的豆豆
        let ulDom=document.createElement('ul');
        ulDom.style.cssText='position:absolute;left:320px;bottom:10px;list-style:none;z-index:2;';
        this.boxDomobj.appendChild(ulDom);
        //豆豆
        for(let i=0;i<this.imgs.length;i++){
            let liDom=document.createElement('li');
            liDom.style.cssText='float:left;margin-left:20px;';
            liDom.style.width=this.btnSize+'px';
            liDom.style.height=this.btnSize+'px';
            if(i==0){
                liDom.style.backgroundColor=this.btnHightColor;
            }else{
                liDom.style.backgroundColor=this.btnColor
            }
            if(this.isStyle){
                liDom.style.borderRadius='50%';
            }
            ulDom.appendChild(liDom);
            this.liDoms.push(liDom);
        }
    }

    showImg(inOrd,outOrd){
        if(inOrd==outOrd){
            return;
        }
        this.imgDoms[inOrd].style.left=this.width+'px';

        moveObj(this.imgDoms[inOrd],'left',0,300);
        moveObj(this.imgDoms[outOrd],'left',-1*this.width,300);
    }

    showLi(){
        for(let i=0;i<this.liDoms.length;i++){
            this.liDoms[i].style.backgroundColor=this.btnColor;
        }
        this.liDoms[this.currOrd].style.backgroundColor=this.btnHightColor;
    }

    changeImg(){
        this.Timer=setInterval(()=>{
            let outOrd=this.currOrd;
            this.currOrd++;
            if(this.currOrd>this.imgs.length-1){
                this.currOrd=0;
            }
            this.showImg(this.currOrd,outOrd);
            this.showLi();
        },this.timeSpace);
    }

    stopChange(){
        window.clearInterval(this.Timer);
    }

    //跳转到指定
    goImg(transOrd){
        let outOrd=this.currOrd;
        this.currOrd=transOrd;
        this.showImg(this.currOrd,outOrd);
        this.showLi();
    }

    addEvent(){	
        let obj = this;//this是Slider的对象
        this.boxDomobj.onmouseenter = function(){
            obj.stopChange();
        }
        this.boxDomobj.onmouseleave = function(){
            obj.changeImg();
        }
        
        for(let i=0;i<this.liDoms.length;i++){
            this.liDoms[i].onmouseenter = ()=>{
                this.goImg(i);
            }
        }
    }
}

function hotGoods(){
    let lis=$('.slide_ull')[0].children;
    console.log(lis);
    let step=lis[0].offsetWidth*4;
    console.info(step);
    let nowPic=0;
    function now(){
        if(nowPic==0){
            sport($('.slide_ull')[0],{left:0});
        }else if(nowPic==3){
            sport($('.slide_ull')[0],{left:-1*step*3});
        }else{
            sport($('.slide_ull')[0],{left:-1*nowPic*step})
        }
    }
    $('.btn_demo_items1')[0].onclick=function(){
        nowPic++;
        if(nowPic>3){
            nowPic=3;
        }
        now();
    }
    $('.btn_demo_items2')[0].onclick=function(){
        nowPic--;
        if(nowPic<0){
            nowPic=0;
        }
        now();
    }
}

window.onload=function(){
    addEvent();
    close();
    goTop();
    hideSearch();
    hotGoods();
    let slider1 =new Slider($('#slide_box'),1023,400,["img/l1.jpg","img/l2.jpg","img/l3.jpg","img/l4.jpg","img/l5.jpg","img/l6.jpg","img/l7.jpg"],10,'#f5ecd9','#f17258',true,-1,3000);
}