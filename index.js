/**
 * Created by Administrator on 2016/9/2.
 */
function NavBar(cfg){
    this.data = cfg.data;
    var nav = $("<nav id='nav'></nav>");
    this.nav = nav;
    if(cfg.linkHeight){
        this.linkHeight = cfg.linkHeight;
    }else{
        this.linkHeight = 140;
    }
    if(cfg.barHeight){
        nav.height(cfg.barHeight);
        this.height = cfg.barHeight;
    }else{
        nav.height(50);
        this.height = 50;
    }
    cfg.css && nav.css(cfg.css);
    nav.css({"z-index":1});
    this.init();
    return nav;
}
//�����������е�Ԫ��
NavBar.prototype.init = function(){
    //����б�
    var outerUl = $('<ul class="outerUl" id="outerUl"></ul>');
    outerUl.css({
        "position":'relative',
        "height":'100%',
        "width":'100%',
        "textAlign":'center',
        "z-index":2
    });
    //��������������б��е�ѡ��
    for( item in this.data){
        var li = $("<li class='outerUlOption'></li>");
        outerUl.append(li);
        li
            .text(item)
            .css({
                "height":"100%",
                "lineHeight":this.height + 'px',
                "display":"inline-block",
                "color":"#fff",
                "margin-left":"10px",
                "margin-right":"10px",
                "font-size":"14px"
            });
        //Ϊ���liע���¼�
        this.addHoverEvent(li);
        //�����ڲ��б�
        var interUl = $("<ul class='interUl'></ul>");
        interUl
            .css({
            "position":"absolute",
            "top":this.height,
            "left":0,
            "overflow":'hidden',
            "width":"100%",
            "background-color":"#ffffff"
        })
            .height(0);
        li.append(interUl);
        var linkLength =  this.data[item].length;
        //Ϊ�ڲ��б����Ԫ��
        for( var i = 0 ; i < this.data[item].length ; i++ ){
            var text = this.data[item][i];
            var interLi = $("<li class='interLi'></li>")
                            .css({
                                    "margin-left":"10px",
                                    "margin-right":"10px",
                                    "margin-top":'20px',
                                    "display":"inline-block"
                });
            var link = $("<a class='link'></a>")
                        .css({
                                "display":"inline-block",
                                "width":"120px"
                        });
            var iconImg = $("<div class='iconImg'></div>")
                            .css({
                                "width":"100%",
                                "height":"120px",
                                "background-color":"#333333"
                            });
            link.append(iconImg);
            var info = $("<div class='info'></div>");
            info
                .text(text)
                .css({
                    "color":"#000000",
                    "line-height":"30px"
                });
            link.append(info);
            interLi.append(link);
            interUl.append(interLi);
        }
    }

    this.nav.append(outerUl);
};
NavBar.prototype.addHoverEvent = function(li){
    var _this = this;
   li.hover(function(){
       //�ı�߶�
       $(this).find('.interUl').stop(true,false).animate({'height':_this.linkHeight + 'px'},400);
   },function(){
       $(this).find('.interUl').stop(true,false).animate({'height':0},400);
   });
};