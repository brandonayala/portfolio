$(document).ready(function() {
    $("#cakesPage").show();
    $("#piesPage").hide();
    $("#cookiesPage").hide();

    $("#btnCake").click(function(){
        $("#piesPage").hide();
        $("#cookiesPage").hide();
        $("#cakesPage").show();
    });
    $("#btnPie").click(function(){
        $("#cakesPage").hide();
        $("#cookiesPage").hide();
        $("#piesPage").show();
    });
    $("#btnCookie").click(function(){
        $("#cakesPage").hide();
        $("#piesPage").hide();
        $("#cookiesPage").show();
    });
    $("#CTA").click(function(){
        window.location = "menu.html";
    });
    $("#logo").click(function(){
        window.location = "index.html";
    });
});