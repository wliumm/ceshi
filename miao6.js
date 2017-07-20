window.onload=function(){
var oMouse=document.getElementById('mouse');
var oMouse_div1=oMouse.getElementsByTagName('div')[0];
var oMouse_div1_ul1=oMouse_div1.getElementsByTagName('ul')[0];
var aMouse_div1_li=oMouse_div1_ul1.getElementsByTagName('li');
var iNow=0;
var timer=null;
var iMinZindex=2;
oMouse_div1_ul1.innerHTML+=oMouse_div1_ul1.innerHTML;
		aMouse_div1_li[1].style.width='400px';
		aMouse_div1_li[1].style.height='280px';
		aMouse_div1_li[1].style.marginTop='0px';
		aMouse_div1_li[0].style.marginLeft='-135px';

for(var i=0;i<aMouse_div1_li.length;i++){
	aMouse_div1_li[i].index=i;
	
	aMouse_div1_li[i].onclick=function(){

		for(var i=0;i<aMouse_div1_li.length;i++){
			aMouse_div1_li[i].style.width='265px';
			aMouse_div1_li[i].style.height='180px';
			aMouse_div1_li[i].style.marginTop='50px';
		
			}
			

		if(this.index==iNow){
			aMouse_div1_li[iNow].style.width='400px';
			aMouse_div1_li[iNow].style.height='280px';
			aMouse_div1_li[iNow].style.marginTop='0px';
		}	///////
		iNow=this.index;
		
		if(iNow==0){
			startMove(oMouse_div1_ul1,{left:-1060});

			aMouse_div1_li[5].style.width='400px';
			aMouse_div1_li[5].style.height='280px';
			aMouse_div1_li[5].style.marginTop='0px';
		
			}else if(iNow==aMouse_div1_li.length-1){
			startMove(oMouse_div1_ul1,{left:-785})

			aMouse_div1_li[4].style.width='400px';
			aMouse_div1_li[4].style.height='280px';
			aMouse_div1_li[4].style.marginTop='0px';
			
			}else{
			startMove(oMouse_div1_ul1,{left:-(iNow-1)*265})
			aMouse_div1_li[iNow].style.width='400px';
			aMouse_div1_li[iNow].style.height='280px';
			aMouse_div1_li[iNow].style.marginTop='0px';
			}


		
		}
		

	}
	



var oMouse=document.getElementById('mouse')
var oMouse_ul1=document.getElementById('mouse_ul1');
var aMouse_li1=oMouse_ul1.getElementsByTagName('li');
var oMouse_div2=document.getElementById('mouse_div2')
var oMouse_jiazai=oMouse_div2.getElementsByTagName('img')[0];
var onOff=true;
oMouse_jiazai.onclick=function(){
	if(onOff){
	oMouse_jiazai.src='img/mouse/jiazaiwan.jpg'
	startMove(oMouse_ul1,{width:270},function(){
		startMove1(210,0);
		startMove1(160,1);
		startMove1(120,2);
		startMove1(80,3);
		startMove1(40,4);
		startMove1(0,5);
		
		})
	onOff=false;
	}else{
		oMouse_jiazai.src='img/mouse/jiazai.jpg';
		startMove(oMouse_ul1,{width:0})
	onOff=true;
	}	
	
	}



// startMove4(200,3)
// startMove5(200,4)
// startMove6(200,5)
var iSpeed=0;
function startMove1(pp,num){
	
	setInterval(function(){
		iSpeed*=0.7
			iSpeed+=(pp-aMouse_li1[num].offsetTop )/5;
		
		aMouse_li1[num].style.top=aMouse_li1[num].offsetTop+iSpeed+'px'
	},30)

}


var oMouse_ul2=document.getElementById('mouse_ul2');
var aMouse_li2=oMouse_ul2.getElementsByTagName('li');
var timer=null;
 var num1=0;
for(var i=0;i<aMouse_li1.length;i++){

	function fna1(){
		aMouse_li2[num1].style.display='none';
	}
	function fnb1(){
		aMouse_li2[num1].style.display='block';
	}
	aMouse_li1[i].index=i;
	aMouse_li1[i].onmouseover=function(){
		//alert(1)
		for(var i=0;i<aMouse_li1.length;i++){
			 fna1()
				}
		clearInterval(timer)
		num1=this.index;
			fnb1()
		}
	
	aMouse_li1[i].onmouseout=function(){

		timer=setInterval(function(){
				 fna1()
		},1000);
		}
	for(var j=0;j<aMouse_li2.length;j++){
		aMouse_li2[j].onmouseover=function(){
				clearInterval(timer)
			fnb1()
		}

		aMouse_li2[j].onmouseout=function(){
				timer=setInterval(function(){
				fna1()
		},1000)
			}
		}
		
	
	
	
	
}
var oMouse_ul3=document.getElementById('mouse_ul3');
var aMouse_li3=oMouse_ul3.getElementsByTagName('li');

	for(var i=0;i<aMouse_li3.length;i++){
var aMouse_li3_span=aMouse_li3[i].getElementsByTagName('span');
		for(var j=0;j<aMouse_li3_span.length;j++){
			aMouse_li3_span[j].onmouseover=function(){
				startMove(this,{opacity:70})
			}
			aMouse_li3_span[j].onmouseout=function(){
				startMove(this,{opacity:0})
			}
		}
	}
}
