(function(localStorage, document, encodeURIComponent, Math_random) {
  var image = document.createElement("img")
  var url = 
    '//google-analytics.com/collect?' +
    '&tid={your_UA}' +
    '&v=1&t=pageview' +
    '&cid=' + (localStorage.uid = localStorage.uid || Math_random()) +
    '&dl=' + encodeURIComponent(location) +
    '&dt=' + encodeURIComponent(document.title) +
    '&dr=' + encodeURIComponent(document.referrer) +
    '&z=' + Math_random()

  image.src = url;
  document.body.appendChild(image)
})(localStorage, document, encodeURIComponent, Math.random);
