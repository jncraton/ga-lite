(function(window, localStorage, navigator, document, encodeURIComponent) {
    var pageLoadedTimestamp = new Date().getTime();

    var urlBase = (
        '//google-analytics.com/collect?' +
        'cid=' + (localStorage.uid = localStorage.uid || Math.random() + '.' + Math.random()) +
        '&v=1' +
        '&tid={your_UA}' +
        '&dl=' + encodeURIComponent(location) +
        '&dt=' + encodeURIComponent(document.title) +
        '&dr=' + encodeURIComponent(document.referrer)
    );

    var eventBuilder = function(event, params) {
        return function() {
            url = urlBase + params +
                '&t=' + encodeURIComponent(event) +
                '&z=' + new Date().getTime()

            if (navigator.sendBeacon) {
                navigator.sendBeacon(url);
            } else {
                var i = new Image();
                i.src = url;
            }
        };
    };

    // Deplay the page load event by 100ms
    setTimeout(eventBuilder('pageview', ''), 100);

    /**
     * Note:
     * unload event does not fire on:
     * - Android chrome on tab closing
     */
    window.addEventListener(
        'unload',
        eventBuilder(
            'timing',
            '&utc=JS Dependencies&utv=unload&utt='+ (new Date().getTime() - pageLoadedTimestamp)
        )
    );
})(window, localStorage, navigator, document, encodeURIComponent);
