$.fn.ImgZoomIn = function () {
    var window_h = $(window).height();
    var scroll_h = $(window).scrollTop();

    bgstr = '<div id="ImgZoomInBG" style="position: absolute;filter:Alpha(Opacity=70); opacity:0.7;z-index: 10000;background-color: #000;display: none;"></div>';
    imgstr = '<img id="ImgZoomInImage" src="' + $(this).attr('src')+'" style="cursor:pointer; display:none; position:absolute; z-index:10000;" />';
    if ($('#ImgZoomInBG').length < 1) {
        $('#main').append(bgstr);
    }
    if ($('#ImgZoomInImage').length < 1) {
        $('#main').append(imgstr);
    }
    else {
        $('#ImgZoomInImage').attr('src', $(this).attr('src'));
    }

    $('#ImgZoomInBG').css('top', scroll_h+'px');
    $('#ImgZoomInBG').css('width', '100%');
    $('#ImgZoomInBG').css('height', window_h+'px');

    $('#ImgZoomInImage').css('width', '100%');
    $('#ImgZoomInImage').css('left', '0px');
    $('#ImgZoomInImage').css('top', '50%');
    $('#ImgZoomInImage').css('margin-top', '-'+$('#ImgZoomInImage').height()/2+'px');

    $('#ImgZoomInBG').show();
    $('#ImgZoomInImage').show();
};