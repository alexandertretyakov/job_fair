window.addEventListener('load', function() {
    var indexOf = function(a, b) {
        var i = 0;
        while ( i < a.length ) {
            if ( a[i] === b ) {
                return i;
            }
            i = i + 1;
        }
        return -1;
    };

//-----------------------------------------------------------------------------selectNextSlide
    var selectNextSlide = function(increment) {
        var $array = document.querySelectorAll('.line');
        var $currentSlide = document.querySelector('.line-active');
        var currentIndex = indexOf($array, $currentSlide);
        var nextIndex = currentIndex + increment;

        if (nextIndex > $array.length - 1) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = $array.length - 1;
        }

        $currentSlide.classList.remove('line-active');
        $array[nextIndex].classList.add('line-active');
    };

    document.querySelector('.arrow-right').addEventListener('click', function() {
        selectNextSlide(1);
    });

    document.querySelector('.arrow-left').addEventListener('click', function() {
        selectNextSlide(-1);
    });

//-----------------------------------------------------------------------------arrowNextTextSlide
    var arrowNextTextSlide = function(increment) {
        var $array = document.querySelectorAll('.text');
        var $currentSlide = document.querySelector('.text-active');
        var currentIndex = indexOf($array, $currentSlide);
        var nextIndex = currentIndex + increment;

        if (nextIndex > $array.length - 1) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = $array.length - 1;
        }

        $currentSlide.classList.remove('text-active');
        $array[nextIndex].classList.add('text-active');
    };

    var arrowNextSlide = function(increment) {
        var $array = document.querySelectorAll('.button');
        var $currentSlide = document.querySelector('.button-active');
        var currentIndex = indexOf($array, $currentSlide);
        var nextIndex = currentIndex + increment;

        if (nextIndex > $array.length - 1) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = $array.length - 1;
        }

        $currentSlide.classList.remove('button-active');
        $array[nextIndex].classList.add('button-active');
    };

    document.querySelector('.arrow-forward').addEventListener('click', function() {
        arrowNextSlide(1);
        arrowNextTextSlide(1);
    });

    document.querySelector('.arrow-back').addEventListener('click', function() {
        arrowNextSlide(-1);
        arrowNextTextSlide(-1);
    });

//----------------------------------------------------------------------------click on numeral
    var clickOnNumeral = function(increment) {
        var $array = document.querySelectorAll('.button');
        var $currentSlide = document.querySelector('.button-active');

        $currentSlide.classList.remove('button-active');
        $array[nextIndex].classList.add('button-active');
    };
//-----------------------------------------------------------------------------arrow-down
    document.querySelector('.arrow-down').addEventListener('click', function() {
        document.querySelector('.banner').classList.toggle('banner-active');
        document.querySelector('.tab').classList.toggle('tab-active');
    });
});