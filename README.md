# google-search-rank
Get to Google search ranks.

## Install

```
$ npm install google-search-rank
```

## Usage

```javascript
var searchrank = require('google-search-rank');

searchrank.key = '(Custom search API Key)';
searchrank.cx  = '(Custom search engine ID)';

searchrank.find("nodejs", "hideack.hatenablog.com", 3, function(rank, result){
  console.log("RANK => " + rank);
});

```

## Contributing

1. Fork it ( https://github.com/hideack/google-search-rank/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
