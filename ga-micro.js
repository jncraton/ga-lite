(function(window, localStorage, navigator, document, encodeURIComponent, Math_random) {
    var pageLoadedTimestamp = new Date().getTime();

    var eventBuilder = function(params) {
        return function() {
            var url = 
              '//google-analytics.com/collect?' +
              '&tid={your_UA}' +
              '&v=1' +
              '&cid=' + (localStorage.uid = localStorage.uid || Math_random() + '.' + Math_random()) +
              '&dl=' + encodeURIComponent(location) +
              '&dt=' + encodeURIComponent(document.title) +
              '&dr=' + encodeURIComponent(document.referrer) +
              params +
              '&z=' + Math_random()

            if (navigator && navigator.sendBeacon) {
                navigator.sendBeacon(url);
            } else {
                var i = new Image();
                i.src = url;
            }
        };
    };

    // Deplay the page load event by 100ms
    setTimeout(eventBuilder('&t=pageview'), 100);

    /**
     * Note:
     * unload event does not fire on:
     * - Android chrome on tab closing
     */
    window.addEventListener(
        'unload',
        eventBuilder(
            '&t=timing&utc=JS Dependencies&utv=unload&utt='+ (new Date().getTime() - pageLoadedTimestamp)
        )
    );
})(window, localStorage, navigator, document, encodeURIComponent, Math.random);
