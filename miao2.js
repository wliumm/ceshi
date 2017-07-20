


	
var oPicture=document.getElementById('picture');
var oPrev=getByClass(oPicture,'prev')[0];
var oNext=getByClass(oPicture,'next')[0];
var oBig=getByClass(oPicture,'big')[0];
var oSmall=getByClass(oPicture,'small')[0];
var aSmallLi=oSmall.getElementsByTagName('li');
var aBigLi=oBig.getElementsByTagName('li');
var iNow=0;
var iMinZindex=2;
var timer1=null;
oNext.onmouseover=oPrev.onmouseover=oPicture.onmouseover=function(){
	//clearInterval(timer);
		startMove(oPrev,{opacity:100})
		startMove(oNext,{opacity:100})
		startMove(oSmall,{opacity:100})
	
	}
oPicture.onmouseout=function(){
		//timer=setInterval(fnc,5000);
		startMove(oPrev,{opacity:0})
		startMove(oNext,{opacity:0})
		startMove(oSmall,{opacity:0})
	
	}

function tab(){
	for(var i=0;i<aSmallLi.length;i++){
		startMove(aSmallLi[i],{opacity:50})
		//startMove(oSmallLi,'opacity',100)
	}
	startMove(aSmallLi[iNow],'opacity',100);
	aBigLi[iNow].style.zIndex=iMinZindex++;
	aBigLi[iNow].style.width=0;

	startMove(aBigLi[iNow],{width:oBig.offsetWidth})

}

for(var i=0;i<aSmallLi.length;i++){
aSmallLi[i].index=i;
aSmallLi[i].onmouseover=function(){
	
		startMove(this,{opacity:100})
	}
	
aSmallLi[i].onmouseout=function(){
		if(this.index!=iNow){	///////
		startMove(this,{opacity:50})}
	}
aSmallLi[i].onclick=function(){
	if(this.index==iNow)return;	///////
		iNow=this.index;	//////
		
		tab();
}
aBigLi[i].onclick=function(){
	
	window.location.href='111'
}
}
oPrev.onclick=function(){
		iNow--;
		if (iNow==-1) {
			iNow=aSmallLi.length-1;
		}
		tab();
	}

	oNext.onclick=function(){
		iNow++;
		if (iNow==aSmallLi.length) {
			iNow=0;
		}
		tab();
	}

	clearInterval(timer1);
		timer1=setInterval(function (){
			iNow++;
		if (iNow==aSmallLi.length) {
			iNow=0;
		}
		tab();},4000)

		oSmall.onmouseover=oBig.onmouseover=function(){
			//alert(1)
			clearInterval(timer1);
		}
		oSmall.onmouseout=oBig.onmouseout=function(){
			clearInterval(timer);
		timer1=setInterval(function(){
			iNow++;
		if (iNow==aSmallLi.length) {
			iNow=0;
		}
		tab();},4000)
		}


