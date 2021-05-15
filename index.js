"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mainHeader = document.querySelector('.mainHeader');
var posts = [];
var fetchingPosts = new Promise(function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        posts = data;
        render(posts);
        console.log(posts);
    });
});
var render = function (arr) { return arr.forEach(function (p) { return mainHeader.insertAdjacentHTML('afterend', markup(p)); }); };
function markup(p) {
    return "\n  <div>\n    <h3>" + p.title + "</h3>\n    <p>" + p.body + "</p>\n  </div>";
}
var clonedArrays = [];
function updateObjectInArray(array, key, newKeyValue) {
    clonedArrays.push(array.map(function (i) { return i.id === key ? __assign(__assign({}, newKeyValue), { id: key }) : i; }));
}
