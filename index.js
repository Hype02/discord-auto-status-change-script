"use strict";
exports.__esModule = true;
require('dotenv').config();
var authorization = process.env.AUTHORIZATION;
var axios_1 = require("axios");
var text = "💗kocham💗";
var currentText = "";
var counter = 0;
var mode = 0;
var times = 0;
var interval = 1000;
var randomWords = [
    "Furious#4740",
    "prebo#0974",
    "!Zyzu#0994",
    "damonn#9613",
    "Dziubak#8358",
    "Sons#0047"
];
setInterval(function () {
    if (mode == 0) {
        if (counter == 0) {
            currentText = " ";
        }
        if (counter == text.length) {
            mode = 1;
            counter = 0;
        }
        else {
            currentText += text[counter];
            counter++;
        }
    }
    if (mode == 1) {
        interval = 500;
        if (times == 8) {
            mode = 0;
            currentText = " ";
            times = 0;
        }
        else {
            currentText = randomWords[times];
            times = times + 1;
        }
    }
    updateStatus(currentText);
}, interval);
var updateStatus = function (paramText) {
    axios_1["default"].patch("https://discord.com/api/v9/users/@me/settings", {
        custom_status: {
            expires_at: "2021-05-30T22:00:00.000Z",
            text: paramText
        }
    }, { headers: {
            "Authorization": authorization
        } }).then(function (res) {
        console.log(res.data);
    })["catch"](function (err) {
        return console.log(err);
    });
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getCook(cookiename) {
    // Get name followed by anything except a semicolon
    var cookiestring = RegExp(cookiename + "=[^;]+").exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
}
