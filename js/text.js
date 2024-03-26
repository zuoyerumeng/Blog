  var a_idx = 0;
  jQuery(document).ready(function($) {
    $("body").click(function(e) {
      var a = new Array
      ("茵蒂克丝", "由崎司", "立华奏", "友利奈绪", "奈亚子", "黑卡蒂", "橘万里花", "桐崎千棘", "鸢一折纸", "时崎狂三", "四糸乃", "五河琴里", "星宫六喰", "镜野七罪", "诱宵美九", "夜刀神十香", "逢坂大河", "四宫辉夜", "千反田爱瑠", "桐须真冬", "古桥文乃", "小美浪爱澄", "02", "春日野穹", "秋山澪", "夏川真凉", "冬海爱衣", "伊井野弥子", "高木", "式守", "英梨梨", "加藤惠", "樱岛麻衣", "牧之原翔子", "雪之下雪乃", "小鸟游六花", "蕾姆", "御坂美琴", "我妻由乃", "库露露席法", "切姬夜架");
      var $i = $("<span/>").text(a[Math.floor(Math.random() * a.length)]);
      a_idx = (a_idx + 1) % a.length;
      var x = e.pageX,
        y = e.pageY;
      $i.css({
        "z-index": 5,
        "top": y - 20,
        "left": x,
        "position": "absolute",
        "font-weight": "bold",
        "color": '#'+ Math.random ().toString (16).substr (-6)
      });
      $("body").append($i);
      $i.animate({
          "top": y - 180,
          "opacity": 0
        },
        3000,
        function() {
          $i.remove();
        });
    });
    setTimeout('delay()', 2000);
  });

  function delay() {
    $(".buryit").removeAttr("onclick");
  }
