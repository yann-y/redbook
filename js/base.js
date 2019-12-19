/**
 * Created by ¡ı∏÷ on 2019/12/7.
 */
var menuContent =document.getElementById("menuContent");
var menu =document.getElementById("menu");
function fun1(){
    menuContent.style.display= "block";
    menu.setAttribute("class","navTitlecss");
}
function fun2(){
    menuContent.style.display= "none";
    menu.setAttribute("class","");
}