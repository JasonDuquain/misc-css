(function (window) {
    'use strict';

    var app = {},
        proto = document.querySelector('.proto'),
        movers,
        bodySize = document.body.getBoundingClientRect(),
        ballSize = proto.getBoundingClientRect(),
        maxHeight = Math.floor(bodySize.height - ballSize.height),
        maxWidth = 97, // 100vw - width of square (3vw)
        incrementor = 10,
        distance = 3,
        frame,
        minimum = 10,
        subtract = document.querySelector('.subtract'),
        add = document.querySelector('.add');

    app.optimize = false;
    app.count = minimum;
    app.enableApp = true;


    



    document.querySelector('.stop').addEventListener('click', function (e) {

    });

    document.querySelector('.optimize').addEventListener('click', function (e) {

    });

    add.addEventListener('click', function (e) {

    });

    subtract.addEventListener('click', function () {

    });


    /**** DEBOUNCE CODE START ****/
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    var onResize = debounce(function () {
        if (app.enableApp) {
            cancelAnimationFrame(frame);
            app.init();
            frame = requestAnimationFrame(app.update);
        }
    }, 500);

    window.addEventListener('resize', onResize);
    /**** DEBOUNCE CODE END ****/

    /* DONT FORGET TO ADD THE LAST SEVERAL LINE OF CODE BELOW */


})(window);
