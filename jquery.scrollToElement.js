(function($) {
    $.fn.scrollToElement = function(options) {
        var settings = $.extend({
            elementSelector: '',
            scrollDuration: 600,
            onElementNotFound: function() {
                console.warn('Element not found.');
            }
        }, options);

        var _scroll_container = $(this);
        var __element = $(settings.elementSelector);

        if (__element.length) {
            var __elementTop = __element.offset().top - _scroll_container.offset().top + _scroll_container.scrollTop();

            _scroll_container.stop(true);

            _scroll_container.animate({ scrollTop: __elementTop }, settings.scrollDuration);
        } else {
            settings.onElementNotFound();
        }

        return this;
    };
}(jQuery));
