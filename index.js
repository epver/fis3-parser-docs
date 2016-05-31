var fs = require('fs');
var marked = require('marked');
var extend = require('extend');
var cheerio = require('cheerio');
var highlight = require('highlight.js');

// 读取模板
var template = fs.readFileSync("./template.tpl","utf-8");  
// 缓存模板
var $ = cheerio.load(template);
var $template = $;

module.exports = function (content, file, settings) {
  marked.setOptions({
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    }
  });
  content = marked(content);

  $('#mdTitle').html(file.basename);
  $('#mdHead > span').html(file.basename);
  $('#mdBody').html(content);

  console.log(content);

  return $.html();

}