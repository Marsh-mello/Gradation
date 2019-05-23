$(function () {
    var gradientOn=$('.gradient');
    var viewLayer=$('#view_layer');
    gradientOn.click(function () {
        var viewColor=$(this).css('background');
        var styColor=this.style.background;
        if(viewColor>0){
        	viewLayer.css('background',viewColor);
        }else{
        	viewLayer.css('background',styColor);
        }
        $('body').css('overflow','hidden');
        viewLayer.fadeToggle(500);
    })
    viewLayer.click(function () {
        $('body').css('overflow','auto');
        viewLayer.fadeToggle(500);
    })
})
