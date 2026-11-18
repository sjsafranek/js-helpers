
var noop = function(){};

function throttle(fn, delay = 300) {
    let timeoutId = null;
    return function (...args) {
        if (timeoutId !== null) return;
        fn.apply(this, args);
        timeoutId = setTimeout(() => {
            timeoutId = null;
        }, delay);
    };
}

function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
