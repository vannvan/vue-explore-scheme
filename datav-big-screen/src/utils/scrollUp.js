/*
		     * 列表定时滚动效果(javascript)
		     * @listId :滚动列表ID
		     * @listTagName :滚动元素
		     * @scrollNum :设置滚动元素数量
		     * @speed : 滚动速度
		     */
function fnScrollList(){
	 this.init.apply(this,arguments);
}
fnScrollList.prototype = {
	init:function(listId,TagName,scrollNum,speed){
		var _this = this;
		this.oList = this.$$(listId);
		this.scrollTimer = null;
		this.speed = speed || 1000;
		this.scrollNum = scrollNum || 1;
		this.TagName =TagName;
		this.distance = this.oList.getElementsByTagName(TagName)[0].offsetHeight * this.scrollNum;//列表移动距离
		this.oList.style.marginTop = 0 + "px";

		this.oList.onmouseover = function(){
			_this.pause();
		}
		this.oList.onmouseout = function(){
			_this.scrollTimer= setTimeout(function(){
				_this.play();
			},_this.speed);
		}
		this.play();
	},
	play:function(){
		var _this = this;
		var options = {'marginTop':'-'+_this.distance};
		_this.anim(_this.oList,options,function(){ //回调函数，移动列表元素
			for(var i = 0,j = 0;i<_this.scrollNum;i++){
				var node = _this.oList.getElementsByTagName(_this.TagName)[j];
				if(_this.TagName == "tr"){
					_this.oList.getElementsByTagName('tbody')[0].appendChild(node);
				}else{
					_this.oList.appendChild(node);
				}
			}
			_this.oList.style.marginTop = "0px";
		});

	_this.scrollTimer= setTimeout(function(){
				_this.play(_this.distance);
			},_this.speed);
	},
	pause:function(){
		clearTimeout(this.scrollTimer);
	},
	//动画函数
	anim:function(oElement,oAttr,fnCallback){
		var _this = this;
		clearInterval(oElement.timer);
		oElement.timer = setInterval(function(){
			var bStop = true;
			for(var property in oAttr){
				var iCur = parseFloat(_this.css(oElement, property)); //获取当前位置属性值
			var iSpeed = (oAttr[property] - iCur) / 5; //移动进度
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if (iCur != oAttr[property]) { //如果当前数值不等于目标数值，则数值递增
				bStop = false;
				_this.css(oElement, property, iCur + iSpeed);
			}
			}
			if(bStop){
				clearInterval(oElement.timer);
			fnCallback && fnCallback.apply(_this, arguments);
			}
		},50);
	},
	//处理样式函数
	css:function(oElement, attr, value){
		if (arguments.length == 2) {
		return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr];
	} else if (arguments.length == 3) {
		switch (attr) {
			case "top":
			case "left":
			case "marginTop":
				oElement.style[attr] = value + "px";
				break;
			default:
				oElement.style[attr] = value;
				break;
		}
	}
	},
	$$:function(o){
		if(o){
			return document.getElementById(o);
		}
	}
};

export default fnScrollList
