import './css/common.css';

import Vue from 'vue';
import vueHeader from './components/header.vue';
import vueMain from './components/main.vue';
import vueFooter from './components/footer.vue';
import vueResource from 'vue-resource';

Vue.use(vueResource);
import $ from 'jquery';

var UID = "U75481F63E"; // 测试用 用户ID，请更换成您自己的用户ID
var KEY = "9vul5pza0enwqf98"; // 测试用key，请更换成您自己的 Key
var API = "https://api.seniverse.com/v3/location/search.json"; // 获取天气实况
var LOCATION = "北京朝阳"; // 除拼音外，还可以使用 v3 id、汉语等形式
// 获取当前时间戳
var ts = Math.floor((new Date()).getTime() / 1000);
// 构造验证参数字符串
var str = "ts="+ts+"&uid=" + UID;
// 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
// 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
import CryptoJS from 'crypto-js';
var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
sig = encodeURIComponent(sig);
str = str + "&sig=" + sig;
// 构造最终请求的 url
var url = API + "?q=" + LOCATION + "&" + str + "&callback=?";
// 直接发送请求进行调用，手动处理回调函数
$.getJSON(url, function(data) {
    console.log(data);
    // var obj = document.getElementById('content');
    // var weather = data.results[0]
    // var text = [];
    // text.push("Location: " + weather.location.path);
    // text.push("Weather: " + weather.now.text);
    // text.push("Temperature: " + weather.now.temperature);
    // obj.innerText = text.join("\n")
});

// $(function(){
//     var url = 'https:api.seniverse.com/v3/location/search.json?';
//     $.getJSON(
//         url,
//         {
//             'key': '9vul5pza0enwqf98',
//             'q': '北京朝阳'
//         },function (data) {
//             console.log(data);
//         });
// });

// $.get("https://api.seniverse.com/v3/location/search.json?key=9vul5pza0enwqf98&q=北京朝阳",function(data){
//     console.log(data);
// });
//    $.ajax(
//        {
//            type:'get',
//            url : 'https://api.seniverse.com/v3/location/search.json?key=9vul5pza0enwqf98&q=北京朝阳',
//            headers: {
//                'Access-Control-Allow-Origin': '*',
//                "Content-Type":"application/json"
//            },
//            dataType : 'jsonp',
//            jsonp:"results",
//            success  : function(data) {
//                console.log(data);
//            },
//            error : function() {
//                alert('fail');
//            }
//        }
//    );

var app = new Vue({
    el: '#app',
    components: {
        'vue-header': vueHeader,
        'vue-main': vueMain,
        'vue-footer': vueFooter
    }
})
