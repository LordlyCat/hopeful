var video = document.querySelector(".video");
var image = document.querySelector(".image");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var span = document.querySelectorAll("span");
var buttons = document.querySelector("#button");
var index = 1;

left.addEventListener("click",function(){  //左箭头
	slide(-600);
	if (index==1)
		index = 5;
	else
		index -= 1;
	changeButton();
},false);

right.addEventListener("click",function(){  //右箭头
	slide(600);
	if (index==5)
		index = 1;
	else
		index += 1;
	changeButton();
},false);

function slide(offset){  //图片滑动
	
	var new_left=parseInt(image.style.left)+offset;
	var time=300;
	var interval=30;
	var speed=offset/(time/interval);
			
	function go(){  
		if((speed < 0 && parseInt(image.style.left) > new_left)||(speed> 0 && parseInt(image.style.left)<new_left)){
			image.style.left=parseInt(image.style.left)+speed+"px";
			setTimeout(go,interval);
		}
		else
		{
					
			if(parseInt(image.style.left)>-600){
				image.style.left="-3000px";
					}
			if(parseInt(image.style.left)<-3000){
				image.style.left="-600px";
					}
				}
			}

	go();
}

function changeButton(){  //小圆点切换
	for (var i = 0; i < span.length; i++) {
		if (span[i].className=="on"){
			span[i].className=" ";
			break;
		}
	}
	span[index - 1].setAttribute("class","on");
	
}

for (var i = 0; i < span.length; i++) {
	span[i].addEventListener("click",function(){
		var myindex =parseInt(this.getAttribute("index"));
		var offset=(myindex-index)*(-600);
		slide(offset);
		index=myindex;
		changeButton();
		this.setAttribute("class","on");
	},false)
}


/*EventUtil.addHandler(buttons,"click",function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);

	switch(target.id){
		case "one":
			image.style.left = "-600px";
			break;
		case "two":
			image.style.left = "-1200px";
			break;
		case "three":
			image.style.left = "-1800px";
			break;
		case "four":
			image.style.left = "-2400PX";
			break;
		case "five":
			image.style.left = "-3000px";
			break;
	}
})*/