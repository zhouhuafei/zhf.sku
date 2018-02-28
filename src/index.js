(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('sku', function () {
    function sku(arr) {
        const length = arr.length;
        let num = 0;
        let result = [];
        if (length !== 0) {
            arr[0].forEach(function (v) {
                result.push([v]);
            });
            fn(arr);
        }

        function fn(arr) {
            num++;
            if (num < length) {
                const r = [];
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
