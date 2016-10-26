(function(window, localStorage, navigator, document, encodeURIComponent) {
    var pageLoadedTimestamp = new Date().getTime();

    var eventBuilder = function(event, params) {
        return function() {
            var url = 
              '//google-analytics.com/collect?' +
              '&tid={your_UA}' +
              'cid=' + (localStorage.uid = localStorage.uid || Math.random() + '.' + Math.random()) +
              '&v=1' +
              '&dl=' + encodeURIComponent(location) +
              '&dt=' + encodeURIComponent(document.title) +
              '&dr=' + encodeURIComponent(document.referrer) +
              params +
              '&t=' + encodeURIComponent(event) +
              '&z=' + new Date().getTime()

            if (navigator && navigator.sendBeacon) {
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
