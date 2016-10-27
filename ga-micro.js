(function(window, localStorage, navigator, document, encodeURIComponent, Math_random) {
    var pageLoadedTimestamp;
        
    var callHome = function() {
        if (pageLoadedTimestamp) {
          var params =  't=timing&utc=JS Dependencies&utv=unload&utt='+ (new Date().getTime() - pageLoadedTimestamp)
        } else {
          var params = 'pageview'
          pageLoadedTimestamp = new Date().getTime();
        }
        
        var url = 
          '//google-analytics.com/collect?' +
          '&tid={your_UA}' +
          '&v=1&' +
          '&t=' + params + 
          '&cid=' + (localStorage.uid = localStorage.uid || Math_random() + '.' + Math_random()) +
          '&dl=' + encodeURIComponent(location) +
          '&dt=' + encodeURIComponent(document.title) +
          '&dr=' + encodeURIComponent(document.referrer) +
          '&z=' + Math_random()

        if (navigator && navigator.sendBeacon) {
            navigator.sendBeacon(url);
        } else {
            var i = new Image();
            i.src = url;
        }
    };

    /**
     * Note:
     * unload event does not fire on:
     * - Android chrome on tab closing
     */
    window.addEventListener(
        'unload',
        callHome
    );

    callHome();
})(window, localStorage, navigator, document, encodeURIComponent, Math.random);
