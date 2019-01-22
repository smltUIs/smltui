function Slider(boxDomObj,width,height,imgs,isBoxShadow,timeSpace){
	if(arguments.length>0){
		this.boxDomObj = boxDomObj;
		this.width = width;
		this.height = height;
		this.imgs = imgs;
		this.isBoxShadow = isBoxShadow;
		this.timeSpace = timeSpace;
		this.myTimer = null;
		this.createUI();
	}
}
var css = document.getElementsByTagName("style")[0];
Slider.prototype.createUI = function(){
	this.boxDomObj.style.width = this.width+"px";
	this.boxDomObj.style.height = this.height+"px";
	this.boxDomObj.style.margin = "70px auto 0";
	if(this.isBoxShadow){
		this.boxDomObj.style.boxShadow = "1px 7px 25px #f60";
	}else{
		this.boxDomObj.style.boxShadow = "0";
	};
	//创建ul用来放置图片
	var oUl = document.createElement("ul");
	oUl.style.height = "100%";
	this.boxDomObj.appendChild(oUl);
	var num = 100;
	var uHTML = "",
		pHTML = "",
		tHTML = "",
		yuanLiHTML = "",
		yuanDivHTML = "",
		Div1HTML = "",
		Div2HTML = "",
		Div3HTML = "",
		Div4HTML = "",
		oLisHTML = "",
		xuanOlLIi = "";
	var allWidth = this.width / num;
	for(var i=0;i<num;i++){
		 //循环创建li和每一小份div(循环完每一张图片有100份小div)，四个div对应四张图片
		 uHTML += '<li><div></div><div></div><div></div><div></div></li>';
		 //设置li的子元素div的样式，根据i的值，产生不同的背景图位置，最终达到100小份拼成一整张图片
		 pHTML += '.SolidBox ul li:nth-child(' + (i + 1) + ') div{background-position-x:' + (-i * allWidth) + 'px;}';
		 //设置li的样式，根据i的值，每一份产生不同的动画时间，以达到波浪的效果
		 tHTML += '.SolidBox ul li:nth-child(' + (i + 1) + '){transition: 0.8s ' + (0.3 * i / num) + 's}';
	}
	yuanLiHTML = ".SolidBox ul li{position:relative;float:left;box-sizing:border-box;transform-style:preserve-3d;transform:translateZ(-250px);}";
	yuanDivHTML = ".SolidBox ul li div{position:absolute;width:100%;height:100%;}";
	Div1HTML = ".SolidBox ul li div:nth-child(1){top:-500px;background:url(" + this.imgs[1] + ");transform-origin:bottom;transform:translateZ(250px) rotateX(90deg);}";
	Div2HTML = ".SolidBox ul li div:nth-child(2){top:500px;background:url(" + this.imgs[0] + ");transform-origin:top;transform:translateZ(250px) rotateX(-90deg);}";
	Div3HTML = ".SolidBox ul li div:nth-child(3){background:url(" + this.imgs[2] + ");transform:translateZ(250px);}";
	Div4HTML = ".SolidBox ul li div:nth-child(4){background:url(" + this.imgs[3] + ");transform:translateZ(-250px) rotateX(180deg);}";
	 //把创建的li和div添加到oUl中
	oUl.innerHTML = uHTML;
	var ols = document.createElement("ol");
	ols.style.cssText = "position:absolute;left:50%;width:300px;height:50px;margin-top:20px;transform:translateX(-50%);display:flex;justify-content:space-around;";
	for(var i=0;i<4;i++){
		var oLis = document.createElement("li");
		oLis.innerHTML = i+1;
		ols.appendChild(oLis);
	}
	oLisHTML = ".SolidBox ol li{width:50px;height:50px;background:black;box-shadow:0 2px 5px white;border-radius:50%;color:white;text-align:center;font-size:20px;line-height:50px;cursor:pointer;}";
	xuanOlLIi = ".SolidBox ol li.on{background:red;}";
	this.boxDomObj.appendChild(ols);
	 //把动态写好的样式追加到style样式中
	css.innerHTML += xuanOlLIi + oLisHTML + yuanLiHTML + yuanDivHTML + Div1HTML + Div2HTML + Div3HTML + Div4HTML + pHTML + tHTML + ".SolidBox ul li, .SolidBox ul li div{width:" + allWidth + "px;height:100%}";
	this.bindEvent();
	this.play();
}

Slider.prototype.bindEvent = function(){
	var DouDou = document.querySelectorAll("ol li");
	for (var i = 0; i < DouDou.length; i++) {
		DouDou[i].index = i;
		DouDou[i].onclick = function(){
			n = this.index;
			for(var i=0;i<DouDou.length;i++){
				DouDou[i].className = "";
			}
			this.className = "on";
			css.innerHTML += ".SolidBox ul li{transform: translateZ(-250px) rotateX(" + (n * 90) + "deg);}"
		}
	};
	this.boxDomObj.onmouseenter = function(){
		clearInterval(this.myTimer);
	};
	this.boxDomObj.onmouseleave = function(){
		// this.play();
	};
}

Slider.prototype.play = function () {
	clearInterval(this.myTimer);
	var n = 0;
	this.myTimer = setInterval(function () {
		n++;
		n = n % 4;
		var DouDou = document.querySelectorAll("ol li");
		for (var i = 0; i < DouDou.length; i++) {
			DouDou[i].className = "";
		}
		DouDou[n].className = "on";
		css.innerHTML += ".SolidBox ul li{transform: translateZ(-250px) rotateX(" + (n * 90) + "deg);}";
	}, this.timeSpace);
}