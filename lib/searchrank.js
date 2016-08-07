'use strict';
var GoogleSearch = require('google-search');
var SearchRank = {};
SearchRank.key = "";
SearchRank.cx  = "";

var search = function(searcher, keyword, page, url, maxPage, cb) {
  var regexp = new RegExp(url, "g");

  searcher.build({
    q: keyword,
    start: page,
    lr: "lang_ja",
    num: 10
  }, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      if (response.error) {
        cb(null, response.error);
      } else {
        for(var index = 0; index < response.items.length; index++) {
          if (regexp.exec(response.items[index].formattedUrl)) {
            var rankNum = ((page - 1) * 10) + index + 1;
            cb(rankNum, response.items[index]);
            return;
          }

          if ((response.items.length - 1 == index) && (maxPage != page)) {
            search(searcher, keyword, page + 1, url, maxPage, cb);
          }
        }
      }
    }
  });
}

SearchRank.find = function(keyword, url, maxPage, cb) {
  var googleSearch = new GoogleSearch({
    key: this.key,
    cx: this.cx
  });

  search(googleSearch, keyword, 1, url, maxPage, function(rank, result){
    cb(rank, result);
  });
};

module.exports = SearchRank;

