(function(){

	var M=11;
	var oDiv=document.getElementById('div1');
	var aDiv=oDiv.getElementsByClassName('hid');
	var oCard4 = document.querySelector('.card4');
	var x=-10;
	var y=0;

	var speedX=0;
	var speedY=0;

	var oWarp = document.querySelector('.warp');

	oWarp.style.height = document.documentElement.clientHeight + 'px';

	document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';

	for(var i=1;i<=M;i++)
	{
		var oNewDiv=document.createElement('div');

		oNewDiv.className='hid';

		(function (oNewDiv,i){
			setTimeout(function (){
				oNewDiv.style.WebkitTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.MozTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.msTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.OTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.transform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';

				setTimeout(function (){
					if(i==M)fixAll();

					setTimeout(function (){

						oNewDiv.style.WebkitTransition='none';
						oNewDiv.style.MozTransition='none';
						oNewDiv.style.msTransition='none';
						oNewDiv.style.OTransition='none';
						oNewDiv.style.transition='none';

					},1000);
				}, 3000);
			}, (M+3-i)*200);
		})(oNewDiv,i);

		oNewDiv.degY=360*(i-1)/M;
		var oContent1 = '<div class="img">';
		var oContent2 = '<span class="over"><span class="shadow"></span></span></div>';
		switch (i) {
			case 1:
				oNewDiv.innerHTML=oContent1 + '<a href="www.baidu.com" class="link">点此预览</a>'+oContent2;
				break;
			case 0:
				oNewDiv.innerHTML='<div class="img">111111<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 2:
				oNewDiv.innerHTML='<div class="img">333333<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 3:
				oNewDiv.innerHTML='<div class="img">4444<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 4:
				oNewDiv.innerHTML='<div class="img">555555<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 5:
				oNewDiv.innerHTML='<div class="img">666666<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 6:
				oNewDiv.innerHTML='<div class="img">77777<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 7:
				oNewDiv.innerHTML='<div class="img">88888<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 8:
				oNewDiv.innerHTML='<div class="img">999999<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 9:
				oNewDiv.innerHTML='<div class="img">1010<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 10:
				oNewDiv.innerHTML='<div class="img">11 11 11<span class="over"><span class="shadow"></span></span></div>';
				break;
			case 11:
				oNewDiv.innerHTML='<div class="img">121212<span class="over"><span class="shadow"></span></span></div>';
				break;
		}
		/*oNewDiv.innerHTML='<div class="img">1111111111<span class="over"><span class="shadow"></span></span></div>';*/




		oNewDiv=oNewDiv.getElementsByClassName('img')[0];



		oNewDiv.style.background='url(images/img2/'+i+'.jpg)';

		oNewDiv.getElementsByClassName('shadow')[0].style.background='-webkit-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.background='-moz-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.background='-ms-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.background='-o-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(images/img2/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.backgroundSize='100% 100%';
		oNewDiv.style.backgroundSize='100% 100%';

		oDiv.appendChild(oNewDiv.parentNode);

	}

	var aImg = document.querySelectorAll('.img');
	for (var i = 0; i < aImg.length; i++) {
		aImg[i].onmouseover = function () {
			this.style.WebkitTransform = 'scale(1.3,1.3)';
			this.style.MozTransform='scale(1.3,1.3)';
			this.style.msTransform='scale(1.3,1.3)';
			this.style.OTransform='scale(1.3,1.3)';
			this.style.transform='scale(1.3,1.3)';
		};
		aImg[i].onmouseout = function () {
			this.style.WebkitTransform = 'scale(1,1)';
			this.style.MozTransform='scale(1,1)';
			this.style.msTransform='scale(1,1)';
			this.style.OTransform='scale(1,1)';
			this.style.transform='scale(1,1)';
		};
		aImg[i].children[0].onclick = function(ev) {
			alert(1);
			var ev = ev ||event;
			ev.cancelBubble = true;
		}



	oCard4.onmousedown=function (ev)
	{

		var oEvent=ev||event;
		var mouseStartX=oEvent.clientX;
		var mouseStartY=oEvent.clientY;

		var startX=x;
		var startY=y;

		var lastX=mouseStartX;
		var lastY=mouseStartY;

		speedX=speedY=0;

		document.onmousemove=function(ev)
		{
			var oEvent=ev||event;

			y=startY+(oEvent.clientX-mouseStartX)/10;
			x=startX-(oEvent.clientY-mouseStartY)/10;

			speedX=(oEvent.clientX-lastX)/5;
			speedY=(oEvent.clientY-lastY)/5;

			fixAll();

			lastX=oEvent.clientX;
			lastY=oEvent.clientY;
		};

		document.onmouseup=function (ev)
		{


			document.onmousemove=null;
			document.onmouseup=null;

			startMove();
		};

		stopMove();

		return false;
	};

	var timer=null;
	function startMove()
	{
		clearInterval(timer);
		timer=setInterval(function (){
			x-=speedY;
			y+=speedX;

			speedY*=0.93;
			speedX*=0.93;

			if(Math.abs(speedX)<0.1 && Math.abs(speedY)<0.1)
				stopMove();

			fixAll();
		}, 30);
	}

	function stopMove()
	{
		clearInterval(timer);
	}




		//aImg[i].style.href = 'www.baidu.com';
		/*if(Math.abs(speedX)<0.2 && Math.abs(speedY)<0.2){
			aImg[i].onclick = function () {
				alert(1);
			}
		}*/

	}

	function fixAll()
	{
		oDiv.style.WebkitTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.MozTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.msTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.OTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.transform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';

		for(var i=0;i<aDiv.length;i++)
		{
			var deg=aDiv[i].degY+y;
			var a=(deg%360+360)%360;

			a=Math.abs(180-a);

			var d=0.1+(a/180)*0.9;

			if(d<0.2)d=0.2;

			aDiv[i].style.opacity=d;

			//aDiv[i].innerHTML=parseInt(a);
		}
	}
})();