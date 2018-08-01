# Simple Caching
A simple in memory cache in javascript without any external dependencies

## Installation
```
$ npm install simplecaching
```
or if you are using yarn
```
$ yarn add simplecaching
```

## Usage
```
var cache = require('simplecaching');
cache.set("name", "Peter", 5 * 60); // store it for 5 minutes
var name = cache.get("name");
console.log("name is ",name);
```

## Prerequisites

- NodeJS 6 or higher
