
window.onload = function () {
    var oWarp = document.querySelector('.warp');
    var oImg = document.querySelector('.box .card1 a');
    var aText = document.querySelectorAll('.card1 p');
    var oInf = document.querySelector('.information');
    var aHead = document.querySelectorAll('.ahead li');
    var aContent = document.querySelectorAll('.box >div');
    var aCardtext = document.querySelectorAll('.ahead li a');
    var iNow= 0;
    var bOk = true;
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

   /* move(aContent[0], {top: 0, left: 0}, {duration: 1000,

        complete: function () {bOk = true}

    });*/

    //选项卡
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


        if (iNow != 0) {
            aContent[0].style.top = -aContent[iNow].offsetHeight + 'px';
        }else if (iNow != 1) {
            aContent[1].style.top = aContent[iNow].offsetHeight + 'px';
        }else if (iNow != 2) {
            aContent[2].style.top = -aContent[iNow].offsetHeight + 'px';
        }

        switch (iNow) {
            //注意！此处单位不可更改为‘rem’
            case 0:

                move(aContent[0], {top: 0}, {duration: 1200,
                    easing: Tween.Bounce.easeOut,
                    complete: function () {bOk = true}

                });
                break;
            case 1:
                //alert(aContent[0].offsetHeight)
                //aContent[0].style.top = -aContent[iNow].offsetHeight + 'px';

                move(aContent[1], {top: 0}, {duration: 1200,
                    easing: Tween.Bounce.easeOut,
                    complete: function () {bOk = true}

                });
                //注意！此处单位不可更改为‘rem’
                break;

        }

    }


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
            /*setTimeout(function(){
                bOk = true;
            },1000)*/
        }else{
            return;
        }
        
    });


    

};
