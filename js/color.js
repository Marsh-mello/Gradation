$(function () {
    $.ajax({
        url:"color.json",
        success:function (res) {
            $.each(res.data,function (i,data) {
                var Color=data.color;
                var colorList=$("#gradient");
                var colorNum1=data.color.indexOf('#');
                var colorNum2=data.color.lastIndexOf('#')
                var content1=data.color.substring(colorNum1,colorNum1+7);
                var content2=data.color.substring(colorNum2,colorNum2+7);
                colorList.append(
                    "<li style='--gradient-start:"
                    +content1
                    +";--gradient-start-text:\""
                    +content1
                    +"\";--gradient-end:"
                    +content2
                    +";--gradient-end-text:\""+content2+"\";'><div class='gradient' style='background: linear-gradient("
                    +Color
                    +")'></div><div class='start-color' ></div><div class='end-color'></div></li>"
                )
            })
        }
    });
    var gradientOn=$('.gradient');
    var viewLayer=$('#view_layer');
    gradientOn.click(function () {
        var viewColor=$(this).css('background');
        console.log(viewColor)
        $('body').css('overflow','hidden');
        // viewLayer.css('display','block');
        viewLayer.fadeToggle(500);
        viewLayer.css('background',viewColor)
    })
    viewLayer.click(function () {
        $('body').css('overflow','auto');
        // viewLayer.css('display','none');
        viewLayer.fadeToggle(500);
    })
})
