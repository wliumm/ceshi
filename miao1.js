




var oGrad=document.getElementById('grad');				//grad
var oGrad_span2=oGrad.getElementsByTagName('span')[1];
var oPopup=document.getElementById('popup');
var oPopup_img=oPopup.getElementsByTagName('img')[0];
var oLv=document.getElementById('lv');
var oGrad_span3=oGrad.getElementsByTagName('span')[2];

var oPicture=document.getElementById('picture');
var oBig=getByClass(oPicture,'big')[0];
var aBigLi=oBig.getElementsByTagName('li');





oGrad_span2.onclick=function(){
		oLv.style.display='block';
		oPopup.style.display='block';
		//aBigLi[0].style.zIndex=0;
}
oPopup_img.onclick=function(){
		oLv.style.display='none';
		oPopup.style.display='none';
}


	
var oList=document.getElementById('list');				//list
var oDepot=document.getElementById('depot');
var aDepot_li=oDepot.getElementsByTagName('li');
var oSpread=document.getElementById('spread');
var aSpread_li=oSpread.getElementsByTagName('li');
 var arr=['red','yellow','blue','black','pink','red','green','white']
 var timer=null;
 var num=0;
 var oList_text=document.getElementById('list_text');
var gDiv1=document.getElementById('gdiv1');
var gDiv2=document.getElementById('gdiv2');
var gDiv3=document.getElementById('gdiv3');
var gDiv4=document.getElementById('gdiv4');
 
var iMaxTop = gDiv1.offsetHeight - gDiv2.offsetHeight;
gDiv2.onmousedown=function(ev){
	var ev=ev||event;
	var disY=ev.clientY-this.offsetTop;
	


	document.onmousemove=function(ev){
		var ev=ev||event;
		var T=ev.clientY-disY;

		if(T<0){
			T=0;
		}else if(T>iMaxTop){
			T=iMaxTop;
		}

		gDiv2.style.top=T+'px'
		//oDiv3.style.height=(500/470)*T+'px'
		
		gDiv4.style.top=(-gDiv4.offsetHeight+-800)*T/1030+'px';
	}

	document.onmouseup=function(){
		document.onmousemove=document.onmouseup=null;
		//alert(oDiv4.style.top)
	}


	return false;
	}









 oSpread.onclick=oDepot.onclick=oGrad_span3.onclick=function(ev){					//冒泡
 	var ev=ev||event;
 	ev.cancelBubble=true;
 	oDepot.style.display='block';
 	oSpread.style.display='block'
 }
 document.onclick=function(){
	oDepot.style.display='none';
 	oSpread.style.display='none'
};
 
for(var i=0;i<aDepot_li.length;i++){

	function fna(){
		aDepot_li[num].style.color='';
		aSpread_li[num].style.display='none';
		aSpread_li[num].style.background='';
	}
	function fnb(){
		aSpread_li[num].style.display='block';
		aDepot_li[num].style.color='red';
		aSpread_li[num].style.background=arr[num];
	}
	aDepot_li[i].index=i;
	aDepot_li[i].onmouseover=function(){
		for(var i=0;i<aDepot_li.length;i++){
			 fna()
				}
		clearInterval(timer)
		num=this.index;
			fnb()
		}
	
	aDepot_li[i].onmouseout=function(){

		timer=setInterval(function(){
				 fna()
		},1000);
		}
	for(var j=0;j<aSpread_li.length;j++){
		aSpread_li[j].onmouseover=function(){
				clearInterval(timer)
			fnb()
		}

		aSpread_li[j].onmouseout=function(){
				timer=setInterval(function(){
				fna()
		},1000)
			}
		}
		
	
	
	
	
}


