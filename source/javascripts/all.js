$(document).ready(function () {
    var color = 'rgb(0,0,0)';
    var cclass = 'blue';
    $(".case").height($(window).height()/4);
    $(".case").width($(window).width()/14);
    $(".case").css('font-size', $(window).height()/13+'px');
    $(".case").css('line-height', $(window).height()/13+'px');
    //$(".decale").css('margin-right', -$(window).width()/28);
    //$(".decale").width($(".decale").width()-$(window).width()/28);
    $(".case").mouseenter(function() {
        color = $(this).css('background-color');
        cclass = $(this).attr('class');
        cclass = cclass.replace('case ', '');
        $('.'+ cclass).lighten({'percent': 30});
    }).mouseleave(function() {
        $('.'+ cclass).css('background-color', color);
    });
    $('div').click(function() {
        $("#jquery_jplayer_1").jPlayer({
            ready: function () {
              $(this).jPlayer("setMedia", {
                m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
              });
            },
            swfPath: "/js",
            supplied: "m4a, oga"
        });
        //$("#jquery_jplayer_1").jPlayer("clearMedia");
        //$("#jquery_jplayer_1").jPlayer("setMedia", {
          //m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer_480x270_h264aac.m4v",
          //ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer_480x270.ogv",
          //poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
        //});
    });
});
