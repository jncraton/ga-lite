# ga-micro
> Small, cacheable (or inlined), subset of Google Analytics JS client

This project is a non-official client for [Google Analytics API][ga-api].

## Developing

```shell
make
```

Once the compilation has ended, a minfied file will be created.

## Features

- Sends `pageview` event on load

## Configuration

Add your UA to the source before building


### Motivation

This is much simpler and faster than Google's default analytics. It is also much less powerful.

## Licensing

The code in this project is licensed under MIT license.

[ga-api]:https://developers.google.com/analytics/devguides/collection/protocol/v1/reference
[issues]:https://github.com/jehna/ga-lite/issues
[blog-post]:http://thejunkland.com/blog/fixing-last-point-on-google-pagespeed-insights.html
[aip-flag]:https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aip
[anonymize-ip-address]:https://support.google.com/analytics/answer/2763052
[ua-code-howto]:https://support.google.com/analytics/answer/1032385
