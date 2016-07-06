
window.onload = function () {
    var oWarp = document.querySelector('.warp');
    var oImg = document.querySelector('.box .card1 a');
    var aText = document.querySelectorAll('.card1 p');
    var oInf = document.querySelector('.information');


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





};
