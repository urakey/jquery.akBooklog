/*!
 * jQuery.akBooklog
 * Version: 0.1
 *
 * Copyright(c) 2014 Aki Fukayama <akey@chocolateboard.net>
 * MIT Licensed
 */
(function($)
{
  'use strict';

  $.fn.akBooklog = function(options)
  {
    /**
     * Option - defaults
     */
    options = $.extend({
      booklog_id: 'booklog2',
      booklog_category: 0,
      booklog_status: 0,
      booklog_rank: 0,
      booklog_count: 100,
      amazon_id: '',
      tag: 'div',
      className: ''
    }, options);

    /**
     * Core
     */
    return this.each(function()
    {
      var $target = $(this);
      loadBooks($target, options);
    });

    /**
     * Method - private
     */
    function loadBooks($dom, options) {
      var d = $.Deferred();

      $.ajax({
        type : 'GET',
        url  : 'http://api.booklog.jp/json/' + options.booklog_id,
        dataType: 'jsonp',
        data : {
          category : options.booklog_category,
          status   : options.booklog_status,
          rank     : options.booklog_rank,
          count    : options.booklog_count
        },
      })
      .done(function(data) {
        appendHtml($dom, formatHtml(data, options));
        d.resolve();
      })
      .fail(function(e) {
        console.log(e);
      });
      return d.promise();
    }

    function formatHtml(data, options) {
      var books = data.books;
      var htmlTag = options.tag;
      var title, asin, author, link, image, imageW, imageH, htmlSrc;
      var newCommers = [];

      if(books.length <= 0) return;

      $.each(books, function(index, book){
        title  = book.title;
        author = book.author;
        link   = book.url;
        image  = book.image;
        imageW = book.width;
        imageH = book.height;
        asin   = book.asin;

        if (options.amazon_id && asin) {
          link = 'http://amazon.jp/exec/obidos/ASIN/' + asin + '/' + options.amazon_id + '/';
        }

        // MEMO: DOM は自由に作れたほうがいい！あとで検討する
        if (options.className) htmlSrc  = '<' + htmlTag + ' class="' + options.className + '">';
        else htmlSrc  = '<' + htmlTag + '>';

        if ( image ) htmlSrc += '<p class="image"><a href="' + link + '" target="_blank"><img src="' + image + '" alt="' + title + '" width="' + imageW + '" height="' + imageH + '"></a></p>';
        htmlSrc += '<p class="text"><a href="' + link + '" target="_blank">'+ title +'<br>';
        htmlSrc += author + '</a></p>';
        htmlSrc += '</' + htmlTag + '>';

        newCommers.push(htmlSrc);
      });

      return newCommers;
    }

    function appendHtml($dom, htmlSrcArray) {

      if(htmlSrcArray.length <= 0) return;
      $.each(htmlSrcArray, function(index, htmlSrc){
        $dom.append(htmlSrc);
      });
    }

  };

})(jQuery);