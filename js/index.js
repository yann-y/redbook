/**
 * Created by Eden on 2019/12/1.
 */

$(document).ready(function(){
//ios
    $(".ios").hover(function(){
        $(".ios img").show();
        $(".ios").css("height","130px");
    },function(){
        $(".ios img").hide();
        $(".ios").css("height","30px");
    });
    $(".android").hover(function(){
        $(".android img").show();
        $(".android").css("height","130px");
    },function(){
        $(".android img").hide();
        $(".android").css("height","30px");
    });

    $(".language").hover(function(){
        $(".drop-up-wrapper").show();
    },function(){
        $(".drop-up-wrapper").hide();
    })




});