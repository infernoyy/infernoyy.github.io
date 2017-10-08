window.onload=function(){
	var oli =document.getElementsByTagName("li");
	var box = document.getElementsByClassName("box")[0];
	for(var i= 0;i<oli.length;i++){
		oli[i].style.backgroundPositionX=-230*i+"px";
	}
	for(var i= 0;i<oli.length;i++){
		oli[i].onmouseover = function(){
			var _left = this.offsetLeft;
			var _top = this.offsetTop;
			box.style.left = _left+"px";
			box.style.top = _top+"px";
			this.style.backgroundPositionY="-150px";   //字向上滚动150px
		}
		oli[i].onmouseout = function(){
			this.style.backgroundPositionY="0px"    //返回原来样子
		}
	}
}
