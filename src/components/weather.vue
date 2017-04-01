<template>
    <div id="tp-weather-widget"></div>
    <div id="test">
        this is test
    </div>
</template>

<script>
    (function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"));

    var weather = {
        "flavor": "slim",
        "location": "WTW3SJ5ZBJUY",
        "geolocation": "enabled",
        "language": "zh-chs",
        "unit": "c",
        "theme": "chameleon",
        "container": "tp-weather-widget",
        "bubble": "enabled",
        "alarmType": "circle",
        "uid": "U75481F63E",
        "hash": "8f2c3aa58130790667721c1374121300"
    }
    tpwidget("init", weather);
    tpwidget("show");
</script>

<style>
    #tp-weather-widget, #test {
        width: 50%;
        display: inline-block;
    }
</style>