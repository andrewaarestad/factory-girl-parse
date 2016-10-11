factory-girl-parse
==================

A [Parse-Server](https://github.com/ParsePlatform/parse-server/) adapter for [factory-girl](https://github.com/aexmachina/factory-girl).  Inspired by [factory-girl-mongoose](https://github.com/jesseclark/factory-girl-mongoose)

## Usage

```javascript
var FactoryGirl = require('factory-girl');
var Factory = new FactoryGirl.Factory();
var ParseAdapter = require('factory-girl-parse').ParseAdapter;
Factory.setAdapter(ParseAdapter);
```
