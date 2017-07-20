

var oDog=document.getElementById('dog');
var oDog_div1=oDog.getElementsByTagName('div')[0]
var oDog_img=oDog_div1.getElementsByTagName('img')[0];
var oDog_span=oDog_div1.getElementsByTagName('span')[0];
var oDog_p=oDog_div1.getElementsByTagName('p')[0];
var oDog_prev=oDog_div1.getElementsByTagName('div')[0];
var oDog_next=oDog_div1.getElementsByTagName('div')[1];

var arrUrl=['img/dog/dog1.jpg','img/dog/dog2.jpg','img/dog/dog3.jpg','img/dog/dog4.jpg',]
var arrSpan=['虽然粉身碎骨，但是义不容辞','工作30年了还坚守岗位','因为爱你，所以奋不顾身……','它们不仅仅是宠物而已...']
var arrP=['在巴黎警方对恐怖分子藏身处的突击行动中，一条叫作Diesel的7岁炸弹嗅探犬因公殉职。在它顺着气味搜索时，女恐怖分子冲出来用AK-47开枪，Diesel冲上去，咬住女恐怖分子，她引爆身上的炸弹，自杀身亡，Diesel也被炸成碎片。一名警犬训练员说：“这有点像失去我们一位同事。”',
'澳大利亚一名牧场主人Brian 在儿子4岁时买了Maggie来当守卫犬，Maggie已经高龄30岁了，以看守牧场为毕生目标，直到现在还坚持帮主人工作。15年前，Brian打算搬离牧场，把家和工作场所分开。当时他想要带着Maggie一起走，想不到的是它掉头返回牧场方向，看来它是坚持想留在那里。',
'英格兰一个小镇上，视障患者Mrs.Cowley正牵着导盲犬Jet，推着儿子的婴儿车，穿过房子旁边的停车场时，一辆汽车被其他车辆撞到，失控地冲向婴儿车，Jet迅速挣脱牵绳把装有小主人的婴儿车推到边上。附近兽医诊所的工作人员目睹了全过程，赶紧上前帮忙，所幸大小俩主人和狗狗都无大碍。',
'生与死的距离，对于一条狗来说，它无法参透，它只相信，他的主人会回来。 它的生命如一注流水，一点一点在车站的青石台上年复一年地流逝。作为一只狗，它有它的原则，不离不弃，不论生老病死。它卧在那里，十年，透彻成一种风景。死生契阔，与子成说。']	
 var num=0;

 var aDog_ul=oDog.getElementsByTagName('ul');

for(var i=0;i<aDog_ul.length;i++){
	var aDog_li=aDog_ul[i].getElementsByTagName('li');
	//var aDog_li_div=aDog_li[i].getElementsByTagName('div');
	for(var j=0;j<aDog_li.length;j++){
		aDog_li[j].style.left=aDog_li[j].offsetLeft+'px'
		aDog_li[j].style.top=aDog_li[j].offsetTop+'px'
	}
	for(var j=0;j<aDog_li.length;j++){
		aDog_li[j].style.position='absolute';
	}
	for(var j=0;j<aDog_li.length;j++){
		aDog_li[j].onmouseover=function(){
			startMove(this,{width:220,height:220,marginLeft:-5,marginTop:-40})
			this.style.color='green'
		}
		aDog_li[j].onmouseout=function(){
			startMove(this,{width:170,height:170,marginLeft:20,marginTop:0})
			this.style.color='black'
		}
		aDog_li[j].onclick=function(){
			document.location='1'
		}
	}
}

//var oDog_div2=oDog.getElementsByTagName('div')[1];
var oDog_img2=document.getElementById('dogimg')
var onOff=true;
//alert(1)
oDog_img2.onclick=function(){

	if(onOff){
	oDog.style.overflow='visible';
	oDog.style.height='1440px';
	oDog_img2.src='img/news/jiazaiwan.jpg';
	onOff=false;
	}else{
		oDog.style.overflow='hidden';
	oDog.style.height='800px';
	oDog_img2.src='img/news/jiazai.jpg';
	onOff=true;
	}
	
}




 function fnTab(){
oDog_img.src=arrUrl[num];
oDog_span.innerHTML=arrSpan[num];
oDog_p.innerHTML=arrP[num];
}
fnTab();
oDog_div1.onmouseover=function(){
	startMove(oDog_prev,{opacity:80})
	startMove(oDog_next,{opacity:80})
}
oDog_div1.onmouseout=function(){
	startMove(oDog_prev,{opacity:0})
	startMove(oDog_next,{opacity:0})
}


oDog_prev.onclick=function(){
		
		num++;
		if(num==arrUrl.length){num=0;}
		fnTab();
		
		};
oDog_next.onclick=function(){
	//alert(1)
		num--;
		if(num==-1){num=arrUrl.length-1;}
		fnTab();
		
		
			}






