# Log Javascript Errors
[![Build Status](https://travis-ci.org/njenkins/log-javascript-errors.svg?branch=master)](https://travis-ci.org/njenkins/log-javascript-errors)

Capture javascript errors and log to a chosen endpoint.

## Download
```bash
git clone https://github.com/njenkins/log-javascript-errors.git
```

## Install Dependencies
```bash
cd log-javascript-errors
npm install
```

## Configure a collector endpoint.
* Determine a location to hold your tracking pixel, (such as an AWS S3 Bucket with logging enabled, or any other hosting platform where you have log access)
* Upload the x.gif image from the resources directory to this location
* Update the collectorUrl value within the src/configs.js file to point to your uploaded tracking pixel.

## Build production bundle
```bash
grunt build
```

The build task will generate a tracker.min.js file within the release directory. Call this file on any site you wish to capture client side errors.

```html
<script src="tracker.min.js"></script>
```

## Interpreting errors
When an errror occurs a GET request will be made to your tracking pixel with the below values as query parameters
* Error Message
* Filename where error originated
* Line number where error occurred
* Column number where error occurred

Use your favourite log parsing tool to extract these values.

## Configuration Options
* collectorUrl - URL to make GET request to
* imageFailures - If true, an error will also be logged on any image src failure
