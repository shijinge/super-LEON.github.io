
window.onload = function () {
    var oWarp = document.querySelector('.warp');
    var oImg = document.querySelector('.box .card1 a');
    var aText = document.querySelectorAll('.card1 p');
    var oInf = document.querySelector('.information');
    var aHead = document.querySelectorAll('.ahead li');
    var aContent = document.querySelectorAll('.box >div');
    var aCardtext = document.querySelectorAll('.ahead li a');
    var iNow= 0;
    //console.log(aContent);



//初次加载自适应屏幕
    //oWarp.style.height = document.documentElement.clientHeight + 'px';
    //document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';

    window.onresize = changeClient;
//窗口大小改变自适应屏幕
    function changeClient() {
        document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';
        oWarp.style.height = document.documentElement.clientHeight + 'px';
    };

    oImg.style.display = 'block';
    oImg.style.WebkitTransition = '1s all ease';
    setTimeout(function () {
        oImg.style.opacity = 1;
        oImg.style.WebkitTransform = 'scale(1,1)';
    },0);
    
    oImg.onmouseover = function () {
        oInf.style.opacity = 1;
        oImg.style.WebkitTransform = 'scale(1.2,1.2)';
    }

    oImg.onmouseout = function () {
        oInf.style.opacity = 0;
        oImg.style.WebkitTransform = 'scale(1,1)';

    }
    
    aText[0].style.left = '2.45rem';
    aText[1].style.right = '2.55rem';
    aText[3].style.top = '3rem';

    //选项卡
    for(var i = 0; i < aHead.length; i++) {

        (function (index){
            aHead[i].onclick = function () {
                iNow = index;
                tab();
            }

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

    //选项卡
    function tab() {
        for (var i = 0; i <aHead.length; i++) {
            aHead[i].className = '';
            aContent[i].style.display= 'none';
        }
        aHead[iNow].className = 'active';
        aContent[iNow].style.display = 'block';

    }
    //鼠标滚轮事件
    function addMouseWheel(obj,fn){
        if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){//firefox
            obj.addEventListener('DOMMouseScroll',fnWheel,false);
        }else{//others
            //alert(1);
            obj.onmousewheel=fnWheel;
        }
        function fnWheel(ev){
            var oEvt=ev||event;
            var down=false;
            if(oEvt.wheelDelta){//chrome/ie
                if(oEvt.wheelDelta<0) down=true;
                else down=false;
            }else if(oEvt.detail){//firefox
                if(oEvt.detail>0) down=true;
                else down=false;
            }
            fn(down);
            if(oEvt.preventDefault){
                oEvt.preventDefault();
            }
            return false;
        }

    }

    var bOk = true;
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
            setTimeout(function(){
                bOk = true;
            },1000)
        }else{
            return;
        }



    });





};
