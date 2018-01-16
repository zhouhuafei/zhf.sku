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

module.exports = sku;
