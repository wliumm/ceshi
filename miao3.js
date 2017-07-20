
var oNews=document.getElementById('news');/////////////////////////////////////////////////
var oNews_div=oNews.getElementsByTagName('div')[0];
var oNews_img=oNews_div.getElementsByTagName('img')[0];
var onOff=true;
oNews_img.onclick=function(){

	if(onOff){
	oNews.style.overflow='visible';
	oNews.style.height='1700px';
	oNews_img.src='img/news/jiazaiwan.jpg';
	onOff=false;
	}else{
		oNews.style.overflow='hidden';
	oNews.style.height='640px';
	oNews_img.src='img/news/jiazai.jpg';
	onOff=true;
	}
	
}
