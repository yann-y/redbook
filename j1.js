/**
 * Created by ÐÀÐÀµÄÑÛÀá on 2019/12/8.
 */

$(document).ready(function(){
    $(".tu1").mouseover(function(){
        $(this).find(".tu1_1").css("display","block");
        $(this).find(".hong-cover").css("display","block");
        $(this).sibling().find(".hong-cover").css("display", "none");
    });
    $(".tu1").mouseout(function(){
        $(this).find(".tu1_1").css("display", "none");
        $(this).find(".hong-cover").css("display", "none");
    });
    $(".tu2").mouseover(function(){
        $(this).find(".tu2_2").css("display","block");
        $(this).find(".hong-cover").css("display","block");
        $(this).sibling().find(".hong-cover").css("display","none");
    });
    $(".tu2").mouseout(function(){
        $(this).find(".tu2_2").css('display',"none");
        $(this).find(".hong-cover").css("display","none");
    });
    $(".tu3").mouseover(function(){
        $(this).find(".tu3_3").css("display","block");
        $(this).find(".hong-cover").css("display","block");
        $(this).sibling().find(".hong-cover").css("display","none");
    });
    $(".tu3").mouseout(function(){
        $(this).find(".tu3_3").css('display',"none");
        $(this).find(".hong-cover").css("display","none");
    });
    $(".tu4").mouseover(function(){
        $(this).find(".tu4_4").css("display","block");
        $(this).find(".hong-cover").css("display","block");
        $(this).sibling().find(".hong-cover").css("display","none");
    });
    $(".tu4").mouseout(function(){
        $(this).find(".tu4_4").css("display","none");
        $(this).find(".hong-cover").css("display","none");
    });

    $("#d1").hover(function(){
        $("#d1").css("background-color","#e6e6e6");
        $("#d1").css("color","red");
    },function(){
        if( $("#d1").attr("class") != "trp"){
            $("#d1").css("background-color","white");
            $("#d1").css("color","black");
        }
    });
    $("#d2").hover(function(){
            $("#d2").css("background-color","#e6e6e6");
            $("#d2").css("color","red");
    },function(){
        if( $("#d2").attr("class") != "trp") {
            $("#d2").css("background-color", "white");
            $("#d2").css("color", "black");
        }
    });

    $("#d3").hover(function(){
        $("#d3").css("background-color","#e6e6e6");
        $("#d3").css("color","red");
    },function(){
        if( $("#d3").attr("class") != "trp") {
            $("#d3").css("background-color", "white");
            $("#d3").css("color", "black");
        }
    });

    $("#d1").on("click",function(){
        $("#d2").css("background-color","white");
        $("#d2").css("color","black");
        $("#d3").css("background-color","white");
        $("#d3").css("color","black");
        $(".trp").removeClass("trp").addClass("trq");
        $("#d1").removeClass("trq").addClass('trp');
        $(".q1 img").attr("src","14.png");

    });
    $("#d2").on("click",function(){
        $("#d1").css("background-color","white");
        $("#d1").css("color","black");
        $("#d3").css("background-color","white");
        $("#d3").css("color","black");
        $(".trp").removeClass("trp").addClass("trq");
        $("#d2").removeClass("trq").addClass('trp');
        $(".q1 img").attr("src","15.png");

    });
    $("#d3").on("click",function(){
        $("#d2").css("background-color","white");
        $("#d2").css("color","black");
        $("#d1").css("background-color","white");
        $("#d1").css("color","black");
        $(".trp").removeClass("trp").addClass("trq");
        $("#d3").removeClass("trq").addClass('trp');
        $(".q1 img").attr("src","16.png");
    });

    $("#r1").on("click",function(){
        /*if( $("#d1").attr("class") != "trp")*/
        $("#r2").css("background-color","white");
        $("#r2").css("color","black");
        $("#r3").css("background-color","white");
        $("#r3").css("color","black");
        $("#r4").css("background-color","white");
        $("#r4").css("color","black");
        $("#r1").css("background-color","#e6e6e6");
        $("#r1").css("color","red");
        $(".w1").show();
        $(".w2").hide();
        (".w3").hide();
        $(".w4").hide();
    });
    $("#r2").on("click",function(){
        $("#r1").css("background-color","white");
        $("#r1").css("color","black");
        $("#r3").css("background-color","white");
        $("#r3").css("color","black");
        $("#r4").css("background-color","white");
        $("#r4").css("color","black");
        $("#r2").css("background-color","#e6e6e6");
        $("#r2").css("color","red");
        $(".w1").hide();
        $(".w2").show();
        $(".w3").hide();
        $(".w4").hide();
    });
    $("#r3").on("click",function(){
        $("#r1").css("background-color","white");
        $("#r1").css("color","black");
        $("#r2").css("background-color","white");
        $("#r2").css("color","black");
        $("#r4").css("background-color","white");
        $("#r4").css("color","black");
        $("#r3").css("background-color","#e6e6e6");
        $("#r3").css("color","red");
        $(".w1").hide();
        $(".w2").hide();
       $ (".w3").show();
        $(".w4").hide();
    });
    $("#r4").on("click",function(){
        $("#r1").css("background-color","white");
        $("#r1").css("color","black");
        $("#r3").css("background-color","white");
        $("#r3").css("color","black");
        $("#r2").css("background-color","white");
        $("#r2").css("color","black");
        $("#r4").css("background-color","#e6e6e6");
        $("#r4").css("color","red");
        $(".w1").hide();
        $(".w2").hide();
        $(".w3").hide();
        $(".w4").show();
    });
});
