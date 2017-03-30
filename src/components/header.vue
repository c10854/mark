<template>
    <div id="tp-weather-widget"></div>
</template>

<script>
    var Vue = require('vue');
//    $.ajax(
//        {
//            type:'get',
//            url : 'https://api.seniverse.com/v3/location/search.json?key=9vul5pza0enwqf98&q=北京朝阳',
//            dataType : 'jsonp',
//            jsonp:"jsoncallback",
//            success  : function(data) {
//                console.log(data);
//            },
//            error : function() {
//                alert('fail');
//            }
//        }
//    );
    module.exports = {
        data: function () {
            return {
                weather: {
                    "flavor": "slim",
                    "location": "WTW6SK5N30JR",
                    "geolocation": "disabled",
                    "language": "zh-chs",
                    "unit": "c",
                    "theme": "chameleon",
                    "container": "tp-weather-widget",
                    "bubble": "enabled",
                    "alarmType": "circle",
                    "uid": "U75481F63E",
                    "hash": "963e61a688aaad1520f6c7830cde3b35"
                }
            }
        },
        mounted: function () {
            (function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"));
            tpwidget("init", this.weather);
            tpwidget("show");
//            var _this = this;
            // GET /someUrl
//            Vue.http.jsonp({
//                url: 'https://api.seniverse.com/v3/location/search.json?key=9vul5pza0enwqf98&q=北京朝阳',
//                method: 'get'
//            }).then(function (data) {
//                console.log(data);
//            });
        }
    }
</script>

<style>

</style>