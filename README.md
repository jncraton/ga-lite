# ga-micro
> Small, cacheable (or inlined), subset of Google Analytics JS client

This project is a non-official client for [Google Analytics API][ga-api].

## Developing

```shell
make
```

Once the compilation has ended, a minfied file will be created.

## Features

At this point the plugin sends the GA `pageview` event to the Google Analytics
server on page unload.

## Configuration

Add your UA to the source before building

### Known bugs

Since the beacon is sent on unload, this will most certainly mess up your GA's
page timing (avg. time on site etc).

Also this library does not (yet) track page load times or support sending custom
events.

### Motivation

This project was born, because it is currently impossible to use Google Analytics'
official JS library to track your site if you want to achieve 100/100 in Google
PageSpeed Insights.

This happens, because Google Analytics' official JS library is has a cache header
of the length of 2 hours. As PageSpeed Insights forces longer cache times, a
custom GA library is practically the only way to achieve 100/100 points.

This project also makes it possible to:
* Your site to load faster (as this is smaller lib than the official)
* Be sure your site won't serve any code you can't check yourself

You can read more from the [blog post][blog-post] that's written about the
library.

## Licensing

The code in this project is licensed under MIT license.

[ga-api]:https://developers.google.com/analytics/devguides/collection/protocol/v1/reference
[issues]:https://github.com/jehna/ga-lite/issues
[blog-post]:http://thejunkland.com/blog/fixing-last-point-on-google-pagespeed-insights.html
[aip-flag]:https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aip
[anonymize-ip-address]:https://support.google.com/analytics/answer/2763052
[ua-code-howto]:https://support.google.com/analytics/answer/1032385
