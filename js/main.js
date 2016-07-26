
window.onload = function () {
    var oWarp = document.querySelector('.warp');
    var oImg = document.querySelector('.box .card1 a');
    var oInf = document.querySelector('.information');
    var aHead = document.querySelectorAll('.ahead li');
    var aContent = document.querySelectorAll('.box >div');
    var aCardtext = document.querySelectorAll('.ahead li a');
    var aSkill = document.querySelectorAll('.card2 .sk-box li');


    var iNow= 0;
    var bOk = true;

//初次加载自适应屏幕
    changeClient();
    window.onresize = changeClient;

//窗口大小改变自适应屏幕
    function changeClient() {
        document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';
        oWarp.style.height = document.documentElement.clientHeight + 'px';
    }

//初次加载在页面未加载出之前导航条会出现，所以css里先display：none，页面加载后再display：block
    aHead[0].parentNode.style.display = 'block';

    if(window.navigator.userAgent.indexOf('MSIE') != -1) {
        alert('本站部分效果不支持ie浏览器，页面可能无法正常显示，请更换其他浏览器');
    }else if (window.navigator.userAgent.indexOf('Trident') != -1) {
        alert('本站部分效果不支持ie浏览器，页面可能无法正常显示，请更换其他浏览器');
    }else if (window.navigator.userAgent.indexOf('Edge') != -1) {
        alert('本站不支持edge浏览器，页面可能无法正常显示，请更换其他浏览器');
    }

//为导航添加点击
    for(var i = 0; i < aHead.length; i++) {
        (function (index){
            aHead[i].onclick = function () {
                if(bOk) {
                    bOk = false;
                    iNow = index;
                    tab();
                }else {
                    return;
                }
            };

//为导航添加滑入滑出效果
            aHead[i].onmouseover = function () {
                this.style.WebkitTransform = 'scale(1.5)';
                this.style.MozTransform = 'scale(1.5)';
                this.style.msTransform = 'scale(1.5)';
                this.style.OTransform = 'scale(1.5))';
                this.style.transform = 'scale(1.5)';

                aCardtext[index].style.display = 'block';
            };
            aHead[i].onmouseout = function () {
                this.style.WebkitTransform = 'scale(1)';
                this.style.MozTransform = 'scale(1)';
                this.style.msTransform = 'scale(1)';
                this.style.OTransform = 'scale(1))';
                this.style.transform = 'scale(1)';
                aCardtext[index].style.display = 'none';
            };
        })(i);
    }

//初始化除首页外其他选项卡的位置或状态
    aContent[1].style.left = aContent[iNow].offsetWidth + 'px';
    aContent[2].style.left = -aContent[iNow].offsetWidth + 'px';
    aContent[3].style.opacity = 0;
    aContent[4].style.WebkitTransform = 'scale(0.1,0.1)';
    aContent[4].style.MozTransform = 'scale(0.1,0.1)';
    aContent[4].style.msTransform = 'scale(0.1,0.1)';
    aContent[4].style.OTransform = 'scale(0.1,0.1))';
    aContent[4].style.transform = 'scale(0.1,0.1)';

//选项卡
    function tab() {
        for (var i = 0; i <aHead.length; i++) {
            aHead[i].className = '';
            aContent[i].style.display= 'none';
        }
        aHead[iNow].className = 'active';
        aContent[iNow].style.display = 'block';

//选项卡切换时初始化除自身外其他所有选项卡的位置或状态
        if (iNow != 0) {
            aContent[0].style.top = -aContent[iNow].offsetHeight + 'px';
        }
        if (iNow != 1) {
            aContent[1].style.left = aContent[iNow].offsetWidth + 'px';
        }
        if (iNow != 2) {
            aContent[2].style.left = -aContent[iNow].offsetWidth + 'px';
        }
        if(iNow != 3) {
            aContent[3].style.opacity = 0;
        }
        if(iNow != 4) {
            aContent[4].style.WebkitTransform = 'scale(0.1,0.1)';
            aContent[4].style.MozTransform = 'scale(0.1,0.1)';
            aContent[4].style.msTransform = 'scale(0.1,0.1)';
            aContent[4].style.OTransform = 'scale(0.1,0.1))';
            aContent[4].style.transform = 'scale(0.1,0.1)';
        }

//为不同的选项卡切换添加不同的效果
//注意！此处单位不可更改为‘rem’
        switch (iNow) {
            case 0:
                move(aContent[iNow], {top: 0}, {duration: 1200,
                    easing: Tween.Bounce.easeOut,
                    complete: function () {
                        bOk = true;
                        aContent[0].parentNode.style.background = '#3c9';
                    }
                });
                break;
            case 1:

                case1();

                move(aContent[iNow], {top: 0, left: 0}, {duration: 500,
                    easing: Tween.Sine.easeIn,
                    complete: function () {
                        bOk = true;
                        aContent[0].parentNode.style.background = '#cc0';
                    }
                });
                break;
            case 2:

                card3();

                move(aContent[iNow], {top: 0, left: 0}, {duration: 500,
                    easing: Tween.Sine.easeIn,
                    complete: function () {
                        bOk = true;
                        aContent[0].parentNode.style.background = '#369';
                    }
                });
                break;
            case 3:

                movePic();

                move(aContent[iNow], {opacity: 1}, {duration: 1500,
                    easing: Tween.Sine.easeIn,
                    complete: function () {
                        bOk = true;
                        aContent[0].parentNode.style.background = '#09c';
                    }
                });
                break;
            case 4:
                card5();

                setTimeout(function () {
                    aContent[4].style.WebkitTransform = 'scale(1,1)';
                    aContent[4].style.MozTransform = 'scale(1,1)';
                    aContent[4].style.msTransform = 'scale(1,1)';
                    aContent[4].style.OTransform = 'scale(1,1))';
                    aContent[4].style.transform = 'scale(1,1)';
                },0);
                setTimeout(function(){
                    bOk = true;
                    aContent[0].parentNode.style.background = '#cc6';
                },1000);
                break;
        }
    }

//添加滚轮事件
    addMouseWheel(document,function(down){
        if(bOk) {
            bOk = false;
            if(down){
                iNow++;
                iNow %= 5;
                tab()

            }else{
                iNow--;
                if(iNow < 0) iNow = 4;
                iNow %= 5;
                tab()
            }
        }else{
            return;
        }
        
    });

//选项卡1
    //添加头像滑入滑出效果
    oImg.onmouseover = function () {
        oInf.style.WebkitTransition = '1s all ease';
        oInf.style.MozTransition = '1s all ease';
        oInf.style.msTransition = '1s all ease';
        oInf.style.OTransition = '1s all ease';
        oInf.style.transition = '1s all ease';
        oInf.style.opacity = 1;

        oImg.style.WebkitTransition = '0.5s all ease';
        oImg.style.MozTransition = '0.5s all ease';
        oImg.style.msTransition = '0.5s all ease';
        oImg.style.OTransition = '0.5s all ease';
        oImg.style.transition = '0.5s all ease';

        oImg.style.WebkitTransform = 'scale(1.2,1.2)';
        oImg.style.MozTransform = 'scale(1.2,1.2)';
        oImg.style.msTransform = 'scale(1.2,1.2)';
        oImg.style.OTransform = 'scale(1.2,1.2))';
        oImg.style.transform = 'scale(1.2,1.2)';
    };

    oImg.onmouseout = function () {
        oInf.style.WebkitTransition = '8s all ease';
        oInf.style.MozTransition = '8s all ease';
        oInf.style.msTransition = '8s all ease';
        oInf.style.OTransition = '8s all ease';
        oInf.style.transition = '8s all ease';
        oInf.style.opacity = 0;


        oImg.style.WebkitTransition = '0.5s all ease';
        oImg.style.MozTransition = '0.5s all ease';
        oImg.style.msTransition = '0.5s all ease';
        oImg.style.OTransition = '0.5s all ease';
        oImg.style.transition = '0.5s all ease';

        oImg.style.WebkitTransform = 'scale(1,1)';
        oImg.style.MozTransform = 'scale(1,1)';
        oImg.style.msTransform = 'scale(1,1)';
        oImg.style.OTransform = 'scale(1,1))';
        oImg.style.transform = 'scale(1,1)';
    };

//选项卡2

    //遮罩运动

    //三角函数计算判断位置
    function a2d(n) {
        return n * 180/Math.PI;
    }
    function hoverDir(obj,ev){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var w = obj.offsetWidth;
        var h = obj.offsetHeight;
        var x = obj.offsetLeft+w/2-ev.clientX;
        var y = obj.offsetTop+h/2-scrollTop-ev.clientY;
        //计算公式
        return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
    }

    function through(obj) {
        var oS = obj.children[1];
        //鼠标移入的时候
        obj.onmouseover = function (ev) {
            var oEvent = ev || event;
            var oForm = oEvent.fromElement || oEvent.relatedTarget;
            //处理onmouseover的bug
            if (this.contains(oForm))return;
            var dir = hoverDir(this, oEvent);
            //判断移入方向，设置初始位置
            switch (dir) {
                case 0:
                    //右
                    oS.style.left = oS.offsetWidth + 'px';
                    //alert(oS.offsetWidth);
                    oS.style.top = 0;
                    break;
                case 1:
                    //下
                    oS.style.left = 0;
                    oS.style.top = oS.offsetHeight + 'px';
                    break;
                case 2:
                    //左
                    oS.style.left = -oS.offsetWidth + 'px';
                    oS.style.top = 0;
                    break;
                case 3:
                    //上
                    oS.style.left = 0;
                    oS.style.top = -oS.offsetHeight + 'px';
                    break;
            }
            //运动目标点（0,0）

            move(oS, {'top': 0, 'left': 0});
        };
        //鼠标移出的时候
        obj.onmouseout = function (ev) {
            var oEvent = ev || event;
            var oTo = oEvent.toElement || oEvent.relatedTarget;
            //处理onmouseout的bug
            if (this.contains(oTo))return;
            var dir = hoverDir(obj, oEvent);
            //判断移出方向，运动至目标点
            switch (dir) {
                case 0:
                   // alert('r');
                    //右
                    move(oS, {left: oS.offsetWidth+10, top: 0});
                    break;
                case 1:
                    //alert('r')
                    //下
                    move(oS, {left: 0, top: oS.offsetHeight});
                    break;
                case 2:
                    //alert('r')
                    //左
                    move(oS, {left: -oS.offsetWidth-10, top: 0});
                    break;
                case 3:
                    //alert('r')
                    //上
                    move(oS, {left: 0, top: -oS.offsetHeight});
                    break;
            }
        };
    }
    //以上调用在函数case1里

    function canvas (oC, cx, cy, r, n,str2,stColor) {
        var gd = oC.getContext("2d");
        var h = r/4;
        gd.font = h + "px Times New Roman";
        gd.fillStyle = "red";
        var d = 0;
        gd.lineWidth = r/6;
        var timer = setInterval(function(){
            d += 6;
            gd.clearRect(0,0,oC.width,oC.height);
            gd.beginPath();
            gd.arc(cx,cy,r,d2A(0),d2A(d),false);
            gd.stroke();
            //gd.strokeStyle = "rgb("+255*(d/360)+",0,0)";
            gd.strokeStyle = stColor;

            //文字
            gd.fillStyle = '#fff';
            var str = parseInt(d/360*100) + "%";

            var w = gd.measureText(str).width;
            gd.fillText(str,cx - w/2,cy - h/2);

            var w2 = gd.measureText(str2).width;
            gd.fillText(str2,cx - w2/2,cy + h);

            if(d >=n){
                clearInterval(timer);
            }
        },15);

        function d2A(n){
            return n*Math.PI/180;
        }
    }

    //需要在选项卡2出现的时候即选项卡的case1里执行的东西
    function case1() {
        //由于在其他选项卡显示时，选项卡2状态为隐藏，无法获取oS的宽度和高度，所以加在选项卡2出现时才能获取
        for (var i = 0; i < aSkill.length; i++) {
            //给技能描述遮罩设定初始位置
            var oS = aSkill[i].children[1];
            oS.style.left = -oS.offsetWidth + 'px';
            oS.style.top = -oS.offsetHeight + 'px';
            //给遮罩加运动
            through(aSkill[i]);
        }

        var aC = document.querySelectorAll('.card2 canvas');

        for(var i = 0; i < aC.length; i++) {

            aC[i].width = aC[i].parentNode.offsetWidth;
            aC[i].height =(aC[i].parentNode.offsetHeight)*0.98;
            var cx = (aC[i].parentNode.offsetWidth)/2;
            var cy = (aC[i].parentNode.offsetHeight)/2;
            var r = (aC[i].parentNode.offsetWidth)/2 *0.8;
            var m = 90;
            var str2 = 'HTML&CSS';
            var stColor = '#f90'
            switch (i) {
                case 0:
                    str2 = 'HTML&CSS';
                    m = 95;
                    stColor = '#f90';
                    break;
                case 1:
                    str2 = 'JavaScript';
                    m = 90;
                    stColor = '#f69';
                    break;
                case 2:
                    str2 = 'HTML5&CSS3';
                    m = 90;
                    stColor = 'green';
                    break;
                case 3:
                    str2 = 'jQuery';
                    m = 80;
                    stColor = 'red';
                    break;
                case 4:
                    str2 = 'Ajax&Jsonp';
                    m = 90;
                    stColor = 'yellow';
                    break;
                case 5:
                    str2 = 'PHP';
                    m = 50;
                    stColor = 'blue';
                    break;
            }

            var n = 360/100*m;

            //选项卡2出现的时候执行canvas
            canvas(aC[i], cx, cy, r, n, str2,stColor);

            //鼠标滑入的时候执行canvas;
            (function(cx,cy,r,n,str2,stColor){
                aC[i].onmouseover = function () {
                    canvas(this, cx, cy, r, n, str2,stColor);
                }
            })(cx,cy,r,n,str2,stColor)
        }
    }

//选项卡3
    function card3() {
        var oPicBox = document.querySelector('.card3 .pic-box');
        var aPic = oPicBox.children;
        var aSp = document.querySelectorAll('.card3 .pic-box span');
        var oPBW = oPicBox.offsetWidth;

        var sW = oPBW * 0.2 / 5;
        var oPW = oPBW * 0.8;
        for (var i = 0; i < aPic.length; i++) {
            aSp[i].style.width = sW + 'px';

            aPic[i].style.left = i * sW + 'px';
            (function(index) {
                aPic[i].onmouseover = function (ev) {

                    var oEvent = ev || event;
                    var oForm = oEvent.fromElement || oEvent.relatedTarget;
                    //处理onmouseover的bug
                    if (this.contains(oForm))return;
                    for (var j= 0; j < aPic.length; j++) {
                        if (j <= index) {
                            move(aPic[j], {left: j * sW}, {duration:1200, easing:Tween.Cubic.easeOut});
                        }else if (j > index) {
                            move(aPic[j], {left:oPW + (j-1) *sW}, {duration:1200, easing:Tween.Cubic.easeOut})
                        }
                    }
                }
            })(i)
        }
    }

//选项卡5
    function card5() {
        var oBox=document.querySelector('.card5 .card5-box');
        var oUl=oBox.children[0];
        var aLi=document.querySelectorAll('.card5 ul li');
        var aImg=oUl.getElementsByTagName('a');
        var aSpan=document.querySelectorAll('.card5 .card5-box span');


        oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
        oUl.onmousedown=function(ev){
            var oEvt=ev||event;
            var disX=oEvt.clientX-oUl.offsetLeft;

            var l = null;

            //为aImg在onmousedown的时候添加点击链接；
            //如果是move的情况，在move里给禁掉aImg的onclick事件；
            for(var i = 0; i < aImg.length; i++) {
                var url = null;
                switch (i) {
                    case 0:
                        url = 'pages/h5/3dlogin/index.html';
                        break;
                    case 1:
                        url = 'pages/h5/audioplayer/index.html';
                        break;
                    case 2:
                        url = 'pages/h5/clock.html';
                        break;
                    case 3:
                        url = 'pages/h5/3dbox.html';
                        break;
                    case 4:
                        url = 'pages/h5/canvasss.html';
                        break;
                    case 5:
                        url = 'pages/h5/boom/index.html';
                        break;
                    case 6:
                        url = 'pages/dataint/baidusearch/index.html';
                        break;
                    case 7:
                        url = 'http://www.liangguangguang.com/pages/dataint/phonesearch/index.html';
                        break;
                    case 8:
                        url = 'http://www.liangguangguang.com/pages/dataint/mywish/index.html';
                        break;
                    case 9:
                        url = 'http://www.liangguangguang.com/pages/dataint/weibo/index.html';
                        break;
                }
                (function(url) {
                    aImg[i].onclick = function () {
                        window.open(url);
                    }
                })(url);
            }

            document.onmousemove=function(ev){

                //在move的情况下禁止触发aImg的onclick事件；
                for (var i = 0; i < aImg.length; i++) {
                    aImg[i].onclick = null;
                }


                var oEvt=ev||event;
                l=oEvt.clientX-disX;
                if(l>oBox.offsetWidth/2- 0.5 * aLi[0].offsetWidth){
                    l=oBox.offsetWidth/2-0.5 * aLi[0].offsetWidth;
                }

                if(l<oBox.offsetWidth/2-oUl.offsetWidth+aLi[0].offsetWidth/2){
                    l=oBox.offsetWidth/2-oUl.offsetWidth+aLi[0].offsetWidth/2;
                }

                oUl.style.left=l+'px';

                setSize();
            }
            document.onmouseup=function(){
                document.onmousemove=document.onmouseup=null;
                //var n = Math.round(l / aLi[0].offsetWidth);

                for(var i = 0; i < aLi.length; i++) {
                    var dis=oBox.offsetWidth/2-(oUl.offsetLeft+aLi[i].offsetLeft+aLi[i].offsetWidth/2);

                    if(aLi[i].offsetWidth/2 > Math.abs(dis)) {
                        l = oBox.offsetWidth/2 - (i+0.5)*aLi[i].offsetWidth;

                        move(oUl,{left:l},{complete:function(){clearInterval(timer);}});
                        var timer = setInterval(setSize,30);
                        
                        console.log(l);
                    }
                }




            }
            return false;
        };

        function setSize(){
            for(var i=0; i<aLi.length; i++){
                //dis-屏幕中心距离每个Li中心的距离；
                var dis=oBox.offsetWidth/2-(oUl.offsetLeft+aLi[i].offsetLeft+aLi[i].offsetWidth/2);
                dis=Math.abs(dis);
                var scale=1-dis/800;
                if(scale<0.5) scale=0.5;
                aImg[i].style.width=520*scale+'px';
                //aImg[i].style.height=358*scale+'px';
                aImg[i].style.height=450*scale+'px';

                //Li[i]在屏幕中心但是aImg[i]此刻已经放大，需要拉回多出的部分的一半；
                aImg[i].style.marginLeft=-(aImg[i].offsetWidth-aLi[i].offsetWidth)/2+'px';
                aImg[i].style.marginTop=-(aImg[i].offsetHeight-aLi[i].offsetHeight)/2+'px';
                aLi[i].style.zIndex=parseInt(scale*10000);
                aLi[i].style.opacity=scale;
                aSpan[i].style.opacity = scale;

            }
        }
        setCenter(2);
        function setCenter(n){
            oUl.style.left=oBox.offsetWidth/2-(n+0.5)*aLi[0].offsetWidth+'px';
        }
        setSize();
        window.onresize=setSize;
    }



};
