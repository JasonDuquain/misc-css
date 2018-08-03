document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ["Amsterdam.", "Full Service.", "Webdevelopment.", "Wij zijn Occhio!"];

    // type one text in the typwriter. keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this fn again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a cb fn
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    
    // start a typewriter animation for a text in the dataText arr
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after cb (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    
    StartTextAnimation(0);
});
