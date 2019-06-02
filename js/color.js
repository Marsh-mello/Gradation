$(function () {
    var gradientOn=$('.gradient');
    var viewLayer=$('#view_layer');
    gradientOn.click(function () {
        var viewColor=$(this).css('background');
        viewLayer.css('background',viewColor);
        $('body').css('overflow','hidden');
        viewLayer.fadeToggle(500);
    })
    viewLayer.click(function () {
        $('body').css('overflow','auto');
        viewLayer.fadeToggle(500);
    })
})
