//顶部悬浮
window.onload = function(){
	var cover = document.getElementById('cover');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed';
			cover.style.zIndex = 10000;
		}
		else{
			cover.style.position = 'static'
		}
	}
}

var img = document.getElementById('img');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var Bimg = document.getElementById("Bimg");
var mid2 = document.getElementById("mid2");
var mid21 = document.getElementById("mid21");
var mid22 = document.getElementById("mid22");
img1.setAttribute('onmouseover',"test1()");
img2.setAttribute('onmouseover',"test2()");
function test1(){
	img.setAttribute('src','./img/pp0.jpeg');
	img1.setAttribute('class','biankuang');
	img2.setAttribute('class','biankuang0');
	Bimg.setAttribute('src','./img/pp0.jpeg');
}
function test2(){
	img.setAttribute('src','./img/pp1.jpeg');
	img2.setAttribute('class','biankuang');
	img1.setAttribute('class','biankuang0');
	Bimg.setAttribute('src','./img/pp1.jpeg');
}

mid21.onmouseover = function () {
	slider.style.display = 'block';
	mid22.style.display = 'block';
}
mid21.onmouseout = function () {
	slider.style.display = 'none';
	mid22.style.display = 'none';
}
mid21.onmousemove = function (ev) {
	var ev = ev || window.event;
	var oL = ev.clientX - mid2.offsetLeft - slider.offsetWidth / 2;
	var oT = ev.clientY - mid2.offsetTop + document.documentElement.scrollTop - slider.offsetHeight / 2;
	var oMaxw = mid21.offsetWidth - slider.offsetWidth;
	var oMaxh = mid21.offsetHeight - slider.offsetHeight;
	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
	slider.style.left = oL + 'px';
	slider.style.top = oT + 'px';
	var scale = mid22.offsetWidth / slider.offsetWidth;//放大倍数
	Bimg.style.left = -scale * oL + 'px';
	Bimg.style.top = -scale * oT + 'px';
}


var mid342 = document.getElementById('mid342');
var mid343 = document.getElementById('mid343');
var mid372 = document.getElementById('mid372');
mid342.setAttribute('onclick',"test3()");
mid343.setAttribute('onclick',"test4()");
function test3(){
	mid342.setAttribute('class','biankuang1');
	mid343.setAttribute('class','mid343');
	mid372.innerText = '"150ml"';
}
function test4(){
	mid343.setAttribute('class','biankuang1');
	mid342.setAttribute('class','mid343');
	mid372.innerText = '"200ml"';
}

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var word1 = document.getElementById('word1');
btn1.setAttribute('onclick',"btn11()");
btn2.setAttribute('onclick',"btn22()");
function btn11(){
	word1.value--;
	if(word1.value<1){
		btn1.setAttribute('class','shouxing1');
		word1.value = 1;
	}
	else
		btn1.setAttribute('class','shouxing2');
}
function btn22(){
	word1.value++;
	if(word1.value>5){
		btn2.setAttribute('class','shouxing1');
		word1.value = 5;
	}
	else
		btn2.setAttribute('class','shouxing2');
}

var mid382 = document.getElementById('mid382');
var add0 = document.getElementById('add0');
var add020 = document.getElementById('add020');
var add0221 = document.getElementById('add0221');
mid382.setAttribute('onclick',"add1()");
add020.setAttribute('onclick',"add2()");
add0221.setAttribute('onclick',"add2()");
function add1(){
	add0.setAttribute('class','up1');
}
function add2(){
	add0.setAttribute('class','up2');
}