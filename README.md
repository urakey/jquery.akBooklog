# jquery.akBooklog.js

> お勉強プラグインシリーズ。Booklog の API からデータを取得するプラグイン。


## Demo

[CodePen](http://codepen.io/akey/pen/gEqcL)


## Usage

    // Format:
    $(selector).akBooklog({
      booklog_id: YOUR_BOOKLOG_ID,
      booklog_category: 0,
      booklog_status: 0,
      booklog_rank: 0,
      booklog_count: 100,
      amazon_id: YOUR_AMAZON_AFFILIATE_ID,
      tag: 'div',
      className: ''
    });

    // Examples:
    $('#modBooks').akBooklog({
      booklog_id: YOUR_BOOKLOG_ID
    });

    // Examples:
    $('#modNovels').akBooklog({
      booklog_id: YOUR_BOOKLOG_ID,
      booklog_category: 0,
      booklog_status: 3,
      booklog_rank: 5,
      booklog_count: 5,
      amazon_id: YOUR_AMAZON_AFFILIATE_ID,
      tag: 'li',
      className: 'booklogItem'
    });


## Options

<table>
  <thead>
    <tr>
       <th>Property</th>
       <th>Type</th>
       <th>Default</th>
       <th>Description</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <th>booklog_id</th>
      <td>String</td>
      <td>booklog2</td>
      <td>ブクログのユーザー ID<br>※デフォルトはブクログ公式アカウント</td>
    </tr>
    <tr>
      <th>booklog_category</th>
      <td>Number</td>
      <td>0</td>
      <td>取得するカテゴリーID</td>
    </tr>
    <tr>
      <th>booklog_status</th>
      <td>Number</td>
      <td>0</td>
      <td>
        <p>読書状況</p>
        <ul>
          <li>0 - すべて</li>
          <li>1 - 読みたい</li>
          <li>2 - いま読んでる</li>
          <li>3 - 読み終わった</li>
          <li>4 - 積読</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>booklog_rank</th>
      <td>Number</td>
      <td>0</td>
      <td>
        <p>★評価。本棚登録の時につけた星の数を指定。</p>
        <ul>
          <li>0 - すべて</li>
          <li>1 - ★</li>
          <li>2 - ★★</li>
          <li>3 - ★★★</li>
          <li>4 - ★★★★</li>
          <li>5 - ★★★★★</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>booklog_count</th>
      <td>Number</td>
      <td>100</td>
      <td>booklog アイテムの数</td>
    </tr>
    <tr>
      <th>amazon_id</th>
      <td>String</td>
      <td>-</td>
      <td>Amazon アソシエイト ID</td>
    </tr>
    <tr>
      <th>tag</th>
      <td>String</td>
      <td>div</td>
      <td>booklog アイテムをラップするタグ</td>
    </tr>
    <tr>
      <th>className</th>
      <td>String</td>
      <td>-</td>
      <td>booklog アイテムをラップするタグにつけるクラス</td>
    </tr>
  </tbody>
</table>


## ToDo

* DOM のとこなおすかも


## Changelog

* 2014.11.12 デフォルトのタグを `<div>` に変更
