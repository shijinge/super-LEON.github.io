
window.onload = function () {
    var oWarp = document.querySelector('.warp');
    var oImg = document.querySelector('.box .card1 a');
    var aText = document.querySelectorAll('.card1 p');
    var oInf = document.querySelector('.information');
    var aHead = document.querySelectorAll('.ahead li');
    var aContent = document.querySelectorAll('.box >div');
    var aCardtext = document.querySelectorAll('.ahead li a');
    var aSkTxt = document.querySelectorAll('.sk-box span');
    for(var i = 0; i < aSkTxt.length; i++) {
        aSkTxt[i].style.lineHeight = aSkTxt[0].parentNode.parentNode.offsetHeight;
    }
    var iNow= 0;
    var bOk = true;
    //console.log(aContent);



//初次加载自适应屏幕
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



};
