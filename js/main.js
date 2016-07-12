
window.onload = function () {
    var oWarp = document.querySelector('.warp');
    var oImg = document.querySelector('.box .card1 a');
    var aText = document.querySelectorAll('.card1 p');
    var oInf = document.querySelector('.information');
    var aHead = document.querySelectorAll('.ahead li');
    var aContent = document.querySelectorAll('.box >div');
    var aCardtext = document.querySelectorAll('.ahead li a');
    var aSkill = document.querySelectorAll('.card2 .sk-box li');


    var iNow= 0;
    var bOk = true;
    //console.log(aContent);


//初次加载自适应屏幕
    //changeClient();

    window.onresize = changeClient;

//窗口大小改变自适应屏幕
    function changeClient() {
        document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';
        oWarp.style.height = document.documentElement.clientHeight + 'px';
    }

//初次加载在页面未加载出之前导航条会出现，所以css里先display：none，页面加载后再display：block
    aHead[0].parentNode.style.display = 'block';

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
                aCardtext[index].style.display = 'block';
            };
            aHead[i].onmouseout = function () {
                this.style.WebkitTransform = 'scale(1)';
                aCardtext[index].style.display = 'none';
            };
        })(i);
    }

//初始化除首页外其他选项卡的位置或状态
    aContent[1].style.left = aContent[iNow].offsetWidth + 'px';
    aContent[2].style.left = -aContent[iNow].offsetWidth + 'px';
    aContent[3].style.opacity = 0;
    aContent[4].style.WebkitTransform = 'scale(0.1,0.1)';

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
                //给技能描述遮罩设定初始位置
                //由于在其他选项卡显示时，选项卡2状态为隐藏，无法获取oS的宽度和高度，所以加在此处，顺便给所有的遮罩加运动
                for (var i = 0; i < aSkill.length; i++) {
                    var oS = aSkill[i].children[1];
                     oS.style.left = -oS.offsetWidth + 'px';
                     oS.style.top = -oS.offsetHeight + 'px';

                    through(aSkill[i]);
                }

                /*var aC = document.querySelectorAll('.card2 canvas');

                for(var i = 0; i < aC.length; i++) {
                    aC[i].width = aC[i].parentNode.offsetWidth;
                    aC[i].height = aC[i].parentNode.offsetHeight;

                }*/



                move(aContent[iNow], {top: 0, left: 0}, {duration: 500,
                    easing: Tween.Sine.easeIn,
                    complete: function () {
                        bOk = true;
                        aContent[0].parentNode.style.background = '#cc0';
                    }
                });
                break;
            case 2:
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

                setTimeout(function () {
                    aContent[4].style.WebkitTransform = 'scale(1,1)';
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
        oInf.style.opacity = 1;
        oImg.style.WebkitTransition = '0.5s all ease';
        oImg.style.WebkitTransform = 'scale(1.2,1.2)';
    };

    oImg.onmouseout = function () {
        oInf.style.opacity = 0;
        oImg.style.WebkitTransition = '0.5s all ease';
        oImg.style.WebkitTransform = 'scale(1,1)';
    }

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
                    move(oS, {left: oS.offsetWidth, top: 0});
                    break;
                case 1:
                    //alert('r')
                    //下
                    move(oS, {left: 0, top: oS.offsetHeight});
                    break;
                case 2:
                    //alert('r')
                    //左
                    move(oS, {left: -oS.offsetWidth, top: 0});
                    break;
                case 3:
                    //alert('r')
                    //上
                    move(oS, {left: 0, top: -oS.offsetHeight});
                    break;
            }
        };
    }
    //以上调用在选项卡的case1里

/*
    var aC = document.querySelectorAll('.card2 canvas');
    for(var i = 0; i < aC.length; i++) {
        aC[i].width = 0;
        aC[i].height = 0;
        alert(aC[i].width);

    }*/




};
