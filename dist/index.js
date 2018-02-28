'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('sku', function () {
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

    return sku;
});