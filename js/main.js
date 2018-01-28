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

window.addEventListener('load', function() {

    // News
    var selectNextNews = function(increment) {
        var $array = document.querySelectorAll('.news .item');
        var $currentSlide = document.querySelector('.news .item.active');
        var currentIndex = indexOf($array, $currentSlide);
        var nextIndex = currentIndex + increment;

        if (nextIndex > $array.length - 1) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = $array.length - 1;
        }

        $currentSlide.classList.remove('active');
        $array[nextIndex].classList.add('active');
    };

    document.querySelector('.news .next').addEventListener('click', function() {
        selectNextNews(1);
    });

    document.querySelector('.news .previous').addEventListener('click', function() {
        selectNextNews(-1);
    });

    // Banner
    var removeActiveClass = function() {
        var $buttons = document.querySelectorAll('.banner-buttons button');
        var $banners = document.querySelectorAll('.banner-content');

        var i = 0;
        while (i < $buttons.length) {
            $buttons[i].classList.remove('active');
            $banners[i].classList.remove('active');
            i++;
        }
    };

    var selectNextBanner = function(increment) {
        var $buttons = document.querySelectorAll('.banner-buttons button');
        var $banners = document.querySelectorAll('.banner-content');
        var $currentBanner = document.querySelector('.banner-content.active');
        var currentIndex = indexOf($banners, $currentBanner);
        var nextIndex = currentIndex + increment;

        if (nextIndex > $banners.length - 1) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = $banners.length - 1;
        }

        removeActiveClass();

        $banners[nextIndex].classList.add('active');
        $buttons[nextIndex].classList.add('active');
    };

    // Banner Next Button
    document.querySelector('.banner .next').addEventListener('click', function() {
        selectNextBanner(1);
    });

    // Banner Previous Button
    document.querySelector('.banner .previous').addEventListener('click', function() {
        selectNextBanner(-1);
    });

    // Banner toggle
    document.querySelector('.banner-toggle').addEventListener('click', function() {
        document.querySelector('.banner-toggle').classList.toggle('active');
        document.querySelector('.banner').classList.toggle('active');
    });

    // Banner buttons
    document.querySelector('.banner-buttons').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            removeActiveClass();
            event.target.classList.add('active');
            document.querySelectorAll('.banner-content')[+event.target.innerText-1].classList.add('active');
        }
    });
});