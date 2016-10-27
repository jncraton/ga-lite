(function(localStorage, navigator, document, encodeURIComponent, Math_random) {
  var url = 
    '//google-analytics.com/collect?' +
    '&tid={your_UA}' +
    '&v=1&t=pageview' +
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
})(localStorage, navigator, document, encodeURIComponent, Math.random);
