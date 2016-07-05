/**
 * Created by Administrator on 2016/7/4.
 */

window.onload = function () {
    var oWarp = document.querySelector('.warp');
    var oImg = document.querySelector('.box .card1 a');
    var aText = document.querySelectorAll('.card1 p');
    var oInf = document.querySelector('.information');



    oWarp.style.height = document.documentElement.clientHeight + 'px';


    document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';

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
    //oText1.style.WebkitTransition= '1s all ease';
    //aText[0].style.WebkitTransform = 'translateX(0)';
    //aText[1].style.WebkitTransform = 'translateX(0)';



    window.onresize = function () {
        document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';
        oWarp.style.height = document.documentElement.clientHeight + 'px';
    };

};
