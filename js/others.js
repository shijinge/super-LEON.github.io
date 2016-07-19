
//初次加载自适应屏幕，重要！！！
var oWarp = document.querySelector('.warp');
oWarp.style.height = document.documentElement.clientHeight + 'px';

document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';
//加isReady只允许第一次调用有效；
var isReady = true;
function movePic() {
	if (isReady) {
		isReady = false;
		var M = 11;
		var oDiv = document.getElementById('div1');
		var aDiv = oDiv.getElementsByClassName('hid');
		var oCard4 = document.querySelector('.card4');
		var aHead = document.querySelectorAll('.ahead li');

		var x = -10;
		var y = 0;

		var speedX = 0;
		var speedY = 0;

		for (var i = 1; i <= M; i++) {
			var oNewDiv = document.createElement('div');

			oNewDiv.className = 'hid';

			(function (oNewDiv, i) {
				setTimeout(function () {
					oNewDiv.style.WebkitTransform = 'rotateY(' + (360 * (i - 1) / M) + 'deg) translateZ(400px)';
					oNewDiv.style.MozTransform = 'rotateY(' + (360 * (i - 1) / M) + 'deg) translateZ(400px)';
					oNewDiv.style.msTransform = 'rotateY(' + (360 * (i - 1) / M) + 'deg) translateZ(400px)';
					oNewDiv.style.OTransform = 'rotateY(' + (360 * (i - 1) / M) + 'deg) translateZ(400px)';
					oNewDiv.style.transform = 'rotateY(' + (360 * (i - 1) / M) + 'deg) translateZ(400px)';

					setTimeout(function () {
						if (i == M)fixAll();

						setTimeout(function () {

							oNewDiv.style.WebkitTransition = 'none';
							oNewDiv.style.MozTransition = 'none';
							oNewDiv.style.msTransition = 'none';
							oNewDiv.style.OTransition = 'none';
							oNewDiv.style.transition = 'none';

						}, 1000);
					}, 3000);
				}, (M + 3 - i) * 200);
			})(oNewDiv, i);


			oNewDiv.degY = 360 * (i - 1) / M;

			oNewDiv.innerHTML = '<div class="img"><div class="text">你好</div><span class="over"><span class="shadow"></span></span></div>';
			oNewDiv = oNewDiv.getElementsByClassName('img')[0];


			oNewDiv.style.background = 'url(images/img2/' + i + '.jpg)';

			oNewDiv.getElementsByClassName('shadow')[0].style.background = '-webkit-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/' + i + '.jpg)';
			oNewDiv.getElementsByClassName('shadow')[0].style.background = '-moz-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/' + i + '.jpg)';
			oNewDiv.getElementsByClassName('shadow')[0].style.background = '-ms-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/' + i + '.jpg)';
			oNewDiv.getElementsByClassName('shadow')[0].style.background = '-o-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/' + i + '.jpg)';
			oNewDiv.getElementsByClassName('shadow')[0].style.backgroundSize = '100% 100%';
			oNewDiv.style.backgroundSize = '100% 100%';

			oDiv.appendChild(oNewDiv.parentNode);

		}

		var aImg = document.querySelectorAll('.img');
		var aText = document.querySelectorAll('.img .text');
		for(var i = 0; i < aImg.length; i++) {
			var url = null;
			switch (i) {
				case 0:
					aText[i].innerHTML = '淡入淡出菜单';
					break;
				case 1:
					aText[i].innerHTML = '简易瀑布流';
					break;
				case 2:
					aText[i].innerHTML = '图片放大镜';
					break;
				case 3:
					aText[i].innerHTML = 'iphone屏幕翻页';
					break;
				case 4:
					aText[i].innerHTML = '苹果桌面';
					break;
				case 5:
					aText[i].innerHTML = '分步运动';
					break;
				case 6:
					aText[i].innerHTML = '无缝轮播图';
					break;
				case 7:
					aText[i].innerHTML = '阴影拖拽';
					break;
				case 8:
					aText[i].innerHTML = 'chrome应用商店';
					break;
				case 9:
					aText[i].innerHTML = '3D图片翻转';
					break;
				case 10:
					aText[i].innerHTML = '弹性运动';
					break;
			}
		}

		setTimeout(function(){
			for (var i = 0; i < aImg.length; i++) {
				aImg[i].onmouseover = function () {
					clearInterval(timer2);
					this.style.WebkitTransform = 'scale(1.3,1.3)';
					this.style.MozTransform = 'scale(1.3,1.3)';
					this.style.msTransform = 'scale(1.3,1.3)';
					this.style.OTransform = 'scale(1.3,1.3)';
					this.style.transform = 'scale(1.3,1.3)';
				};
				aImg[i].onmouseout = function () {
					clearInterval(timer2);
					timer2 = setInterval(function(){
						y += 0.1;
						fixAll();
					},15);
					this.style.WebkitTransform = 'scale(1,1)';
					this.style.MozTransform = 'scale(1,1)';
					this.style.msTransform = 'scale(1,1)';
					this.style.OTransform = 'scale(1,1)';
					this.style.transform = 'scale(1,1)';
				};
			}
		},4000)



		oCard4.onmousedown = function (ev) {

			clearInterval(timer2);

			//为aImg在onmousedown的时候添加点击链接；
			//如果是move的情况，在move里给禁掉aImg的onclick事件；
			for(var i = 0; i < aImg.length; i++) {
				var url = null;
				switch (i) {
					case 0:
						url = 'pages/javascript/fadeinout.html';
						break;
					case 1:
						url = 'pages/javascript/simplefalls.html';
						break;
					case 2:
						url = 'pages/javascript/zoom/index.html';
						break;
					case 3:
						url = 'pages/javascript/iphoneppv/index.html';
						break;
					case 4:
						url = 'pages/javascript/appledock/index.html';
						break;
					case 5:
						url = 'pages/javascript/stepmove.html';
						break;
					case 6:
						url = 'pages/javascript/picturesc/index.html';
						break;
					case 7:
						url = 'pages/javascript/shadowdrag.html';
						break;
					case 8:
						url = 'pages/javascript/chromeapp/index.html';
						break;
					case 9:
						url = 'pages/javascript/3dpto/index.html';
						break;
					case 10:
						url = 'pages/javascript/elastmove.html';
						break;

				}
				(function(url){
					aImg[i].onclick = function () {
						window.open(url)
					}
				})(url)

			}

			var oEvent = ev || event;
			var mouseStartX = oEvent.clientX;
			var mouseStartY = oEvent.clientY;
			
			var startX = x;
			var startY = y;

			var lastX = mouseStartX;
			var lastY = mouseStartY;

			speedX = speedY = 0;

			document.onmousemove = function (ev) {
				var oEvent = ev || event;

				y = startY + (oEvent.clientX - mouseStartX) / 10;
				x = startX - (oEvent.clientY - mouseStartY) / 10;

				speedX = (oEvent.clientX - lastX) / 5;
				speedY = (oEvent.clientY - lastY) / 5;




				fixAll();

				lastX = oEvent.clientX;
				lastY = oEvent.clientY;

				//在move的情况下禁止触发aImg的onclick事件；
				for(var i = 0; i < aImg.length; i++) {
					aImg[i].onclick = null;
				}
			};

			document.onmouseup = function () {
				document.onmousemove = null;
				document.onmouseup = null;
				
				startMove();
			};
			stopMove();

			return false;
		};

		var timer = null;
		var timer2 =null;

		setTimeout(function(){
			clearInterval(timer2);
			timer2 = setInterval(function(){
				y += 0.1;
				fixAll();
			},15);
		},4000)




		function startMove() {
			clearInterval(timer);
			timer = setInterval(function () {
				x -= speedY;
				y += speedX;

				speedY *= 0.93;
				speedX *= 0.93;

				if (Math.abs(speedX) < 0.1 && Math.abs(speedY) < 0.1)
					stopMove();

				fixAll();
			}, 30);
		}


		function stopMove() {
			clearInterval(timer);
		}
		

		function fixAll() {
			oDiv.style.WebkitTransform = 'perspective(1000px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
			oDiv.style.MozTransform = 'perspective(1000px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
			oDiv.style.msTransform = 'perspective(1000px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
			oDiv.style.OTransform = 'perspective(1000px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
			oDiv.style.transform = 'perspective(1000px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';

			for (var i = 0; i < aDiv.length; i++) {
				var deg = aDiv[i].degY + y;
				var a = (deg % 360 + 360) % 360;

				a = Math.abs(180 - a);

				var d = 0.1 + (a / 180) * 0.9;

				if (d < 0.2)d = 0.2;

				aDiv[i].style.opacity = d;

				//aDiv[i].innerHTML=parseInt(a);
			}
		}


	} else {
		return;
	}

}
	//首屏canvas画心
(function(){
	var arr = [];//保存所有的XY坐标，只为验证。实际程序中可删除。
	var r = 2;
	var radian;//弧度
	var i;
	var radianDecrement;//弧度增量
	var time = 16;//每个点之间的时间间隔
	var intervalId;
	var num = 360;//分割为 360 个点
	var startRadian = Math.PI;
	var ctx;

	ctx = document.getElementById("myCanvas").getContext("2d");
	drawHeart();

	function drawHeart() {

		ctx.strokeStyle = "yellow";
		ctx.lineWidth = 1;//设置线的宽度
		radian = startRadian;//弧度设为初始弧度
		radianDecrement = Math.PI / num * 3;
		ctx.moveTo(getX(radian), getY(radian));//移动到初始点
		i = 0;
		intervalId = setInterval(printHeart, time);
	}
//x = 16 sin^3 t, y = (13 cos t - 5 cos 2t - 2 cos 3t - cos 4t)
	function printHeart() {

		radian += radianDecrement;
		ctx.lineTo(getX(radian), getY(radian));//在旧点和新点之间连线
		//arr.push("X:" + getX(radian) + "<br/>Y:" + getY(radian) + "<br/>");
		i++;
		//ctx.fillStyle = 'red';
		ctx.stroke();//画线
		//ctx.fill();
		if (i >= num) {
			clearInterval(intervalId);
			//document.getElementById("bs").innerHTML = arr.join("");//打印所有的XY坐标点。
		}
	}
	function getX(t) {//由弧度得到 X 坐标
		return 100 + r * (16 * Math.pow(Math.sin(t), 3));
	}

	function getY(t) {//由弧度得到 Y 坐标
		return 50 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	}
})();

//canvas画心结束

(function(){
	function d2a(n){
		return n*Math.PI/180;
	}

	var oC = document.getElementById("c1");
	var gd = oC.getContext("2d");
	var cx = 120;
	var cy = 137;
	var r  = 60;

	var h = 23;
	gd.font = h + "px kaiti";


	setInterval(function(){
		gd.clearRect(0,0,oC.width,oC.height);
		var oDate = new Date();
		var iH = oDate.getHours();

		var iM = oDate.getMinutes();
		var iS = oDate.getSeconds();
		var iMs = oDate.getMilliseconds();

		var iH2 = iH;
		if(iH2 > 12) {
			iH2 = iH2 - 12;
		}


		drawArc(cx,cy,r,0,iH2*30+iM/60*30,"red");//小时
		drawArc(cx,cy,r+20,0,iM*6+iS/60*6,"green");//分钟
		drawArc(cx,cy,r+40,0,iS*6+iMs/1000*6,"yellow");//秒

		//填充文字
		function s2D(n) {
			if (n < 10) {
				return '0' + n;
			}else {
				return n;
			}
		}
		var str = [s2D(iH) ,s2D(iM) ,s2D(iS)].join(":");
		var w = gd.measureText(str).width;
		gd.fillText(str,cx-w/2,cy+h/2);
		gd.fillStyle = '#fff';

	},30);

	function drawArc(cx,cy,r,s,e,color){
		s -= 90;
		e -= 90;
		gd.beginPath();
		gd.lineWidth = "20";
		gd.arc(cx,cy,r,d2a(s),d2a(e),false);
		gd.strokeStyle = color;
		gd.stroke();
	}

})();


