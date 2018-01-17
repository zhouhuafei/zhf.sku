"use strict";

function sku(arr) {
    var length = arr.length;
    var num = 0;
    var result = [];
    if (length !== 0) {
        arr[0].forEach(function (v) {
            result.push([v]);
        });
        fn(arr);
    }

    function fn(arr) {
        num++;
        if (num < length) {
            var r = [];
            result.forEach(function (v1) {
                arr[num].forEach(function (v2) {
                    r.push(v1.concat(v2));
                });
            });
            result = r;
            fn(arr);
        }
    }

    return result;
}

module.exports = sku;