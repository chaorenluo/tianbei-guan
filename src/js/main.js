(function(){
 
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
    })
    jQuery(document).ready(function ($) {
        $('.scroll_top').click(function () {
            $('html,body').animate({
                scrollTop: '0px'
            }, 800);
        });
        $('.scroll_a').click(function () {
            $('html,body').animate({
                scrollTop: $('.a').offset().top-110
            }, 800);
        });
        $('.scroll_b').click(function () {
            $('html,body').animate({
                scrollTop: $('.b').offset().top-110
            }, 800);
        });
        $('.scroll_c').click(function () {
            $('html,body').animate({
                scrollTop: $('.c').offset().top-135
            }, 800);
        });
        $('.scroll_d').click(function () {
            $('html,body').animate({
                scrollTop: $('.d').offset().top-135
            }, 800);
        });
        $('.scroll_f').click(function () {
            $('html,body').animate({
                scrollTop: $('.f').offset().top-120
            }, 800);
        });
        $('.scroll_bottom').click(function () {
            $('html,body').animate({
                scrollTop: $('.bottom').offset().top-10
            }, 800);
        });
    });
    $("img").lazyload();
    $("img").lazyload({
        effect: "fadeIn"
    });

    $("#zhe_1").mouseover(function(){
        $("#yan_1").css('display','block')
      });
      $("#zhe_1").mouseout(function(){
        $("#yan_1").css('display','none')
      });
      $("#zhe_2").mouseover(function(){
        $("#yan_2").css('display','block')
      });
      $("#zhe_2").mouseout(function(){
        $("#yan_2").css('display','none')
      });

      $("#zhe_3").mouseover(function(){
        $("#yan_3").css('display','block')
      });
      $("#zhe_3").mouseout(function(){
        $("#yan_3").css('display','none')
      });

      $("#zhe_4").mouseover(function(){
        $("#yan_4").css('display','block')
      });
      $("#zhe_4").mouseout(function(){
        $("#yan_4").css('display','none')
      });

      $("#zhe_5").mouseover(function(){
        $("#yan_5").css('display','block')
      });
      $("#zhe_5").mouseout(function(){
        $("#yan_5").css('display','none')
      });

      $("#zhe_6").mouseover(function(){
        $("#yan_6").css('display','block')
      });
      $("#zhe_6").mouseout(function(){
        $("#yan_6").css('display','none')
      });
      
      $("#zhe_7").mouseover(function(){
        $("#yan_7").css('display','block')
      });
      $("#zhe_7").mouseout(function(){
        $("#yan_7").css('display','none')
      });


      $("#zhe_8").mouseover(function(){
        $("#yan_8").css('display','block')
      });
      $("#zhe_8").mouseout(function(){
        $("#yan_8").css('display','none')
      });


      $("#bb1").click(function () {
        btnyan2(1);
        $("#show-wen").css("display","none");
        $("#max_da").css("display","block");
    });
    $("#bb2").click(function () {
        btnyan2(2);
        $("#show-wen").css("display","none");
        $("#max_da").css("display","block");
    });
    $("#bb3").click(function () {
        btnyan2(3);
        $("#show-wen").css("display","none");
        $("#max_da").css("display","block");
    });
    $("#bb4").click(function () {
        btnyan2(4);
        $("#show-wen").css("display","none");
        $("#max_da").css("display","block");
    });
    $("#bb5").click(function () {
        btnyan2(5);
        $("#show-wen").css("display","none");
        $("#max_da").css("display","block");
    });
    $("#bb6").click(function () {
        btnyan2(6);
        $("#max_da").css("display","block");
        $("#show-wen").css("display","none");
    });
    $("#bb7").click(function () {
        btnyan2(7);
        formdom=true;
        $("#max_da").css("display","none");
        $("#show-wen").css("display","block")
    });
    $("#bb8").click(function () {
        btnyan2(8);
    });
//登录开发文档
$("#add").click(function () {
    $("#formsx").css("display", "none");
    $("#form-wendang").css("display", "block");
    $("#form-tx").css("display", "none");
    $("#form-dian").css("display", "block");
    $("#tx1").css("display","block");
    $("#tx1show").css("color","#337ab7");
});
   //显示下拉tx
   $("#tx1show").click(function(){
    $("#tx1").css("display","block");
    $("#tx1show").css("color","#337ab7");
    $("#tx2").css("display","none");
    $("#tx3").css("display","none");
    $("#tx4").css("display","none");
    $("#tx0").css("display", "none");
    $("#tx2show").css("background","#fff");
    $("#tx3show").css("background","#fff");
    $("#tx4show").css("background","#fff");

    $("#tx2show").css("color","#000");
    $("#tx3show").css("color","#000");
    $("#tx4show").css("color","#000");
});
$("#tx2show").click(function(){
    $("#tx2show").css("color","#337ab7");
    $("#tx2").css("display","block");
    $("#tx1").css("display","none");
    $("#tx3").css("display","none");
    $("#tx4").css("display","none");
    $("#tx0").css("display", "none");

    $("#tx1show").css("background","#fff");
    $("#tx3show").css("background","#fff");
    $("#tx4show").css("background","#fff");

    $("#tx1show").css("color","#000");
    $("#tx3show").css("color","#000");
    $("#tx4show").css("color","#000");
});
$("#tx3show").click(function(){
    $("#tx3show").css("color","#337ab7");
    $("#tx3").css("display","block");
    $("#tx1").css("display","none");
    $("#tx2").css("display","none");
    $("#tx4").css("display","none");
    $("#tx0").css("display", "none");

    $("#tx1show").css("background","#fff");
    $("#tx2show").css("background","#fff");
    $("#tx4show").css("background","#fff");

    $("#tx1show").css("color","#000");
    $("#tx2show").css("color","#000");
    $("#tx4show").css("color","#000");
})
$("#tx4show").click(function(){
    $("#tx4show").css("color","#337ab7");
    $("#tx4").css("display","block");
    $("#tx3").css("display","none");
    $("#tx1").css("display","none");
    $("#tx2").css("display","none");
    $("#tx0").css("display", "none");

    
    $("#tx1show").css("background","#fff");
    $("#tx2show").css("background","#fff");
    $("#tx3show").css("background","#fff");

    $("#tx1show").css("color","#000");
    $("#tx2show").css("color","#000");
    $("#tx3show").css("color","#000");
})
    function btnyan2(num) {
        for (var i = 1; i < 9; i++) {
            var tx = "bb" + i;
            var tx1="bbb"+i;
            if (num == i) {
                console.log("触发");
                $("#" + tx1).css("color", "rgba(26, 143, 239, 1) ");
               $("#"+tx1).addClass("active_tou");
            } else {
                $("#" + tx1).removeClass("active_tou");
                console.log("触发");
                $("#" + tx1).css("color", "#333 ");
            }
        }
    };


    $("#zhuan1").mouseover(function(){
        $("#zhuan_img1").css('display','block');
        $("#zhuan_img").css('display','none');
        $("#zhuan_color").css("color",'rgba(26, 143, 239, 1)')
      });
      $("#zhuan1").mouseout(function(){
        $("#zhuan_img1").css('display','none');
        $("#zhuan_img").css('display','block');
        $("#zhuan_color").css("color",'#333')
      });

      $("#zhuan2").mouseover(function(){
        $("#zhuan_img_1s").css('display','block');
        $("#zhuan_img_1").css('display','none');
        $("#zhuan_color1").css("color",'rgba(26, 143, 239, 1)')
      });
      $("#zhuan2").mouseout(function(){
        $("#zhuan_img_1s").css('display','none');
        $("#zhuan_img_1").css('display','block');
        $("#zhuan_color1").css("color",'#333')
      });

      $("#zhuan3").mouseover(function(){
        $("#zhuan_img_2s").css('display','block');
        $("#zhuan_img_2").css('display','none');
        $("#zhuan_color2").css("color",'rgba(26, 143, 239, 1)')
      });
      $("#zhuan3").mouseout(function(){
        $("#zhuan_img_2s").css('display','none');
        $("#zhuan_img_2").css('display','block');
        $("#zhuan_color2").css("color",'#333')
      });

      $("#zhuan4").mouseover(function(){
        $("#zhuan_img_3s").css('display','block');
        $("#zhuan_img_3").css('display','none');
        $("#zhuan_color3").css("color",'rgba(26, 143, 239, 1)')
      });
      $("#zhuan4").mouseout(function(){
        $("#zhuan_img_3s").css('display','none');
        $("#zhuan_img_3").css('display','block');
        $("#zhuan_color3").css("color",'#333')
      });



      $("#lianxi_1").mouseover(function(){
        $("#lianxi_1_img").css('display','block');
        $("#lianxi_1s_img").css('display','none');
      });
      $("#lianxi_1").mouseout(function(){
        $("#lianxi_1_img").css('display','none');
        $("#lianxi_1s_img").css('display','block');
        $("#lianxi_tx").css("color",'#333')
      });

      $("#lianxi_2").mouseover(function(){
        $("#lianxi_2_img").css('display','block');
        $("#lianxi_2s_img").css('display','none');
      });
      $("#lianxi_2").mouseout(function(){
        $("#lianxi_2_img").css('display','none');
        $("#lianxi_2s_img").css('display','block');
        $("#lianxi_tx1").css("color",'#333')
      });

      $("#lianxi_3").mouseover(function(){
        $("#lianxi_3_img").css('display','block');
        $("#lianxi_3s_img").css('display','none');
      });
      $("#lianxi_3").mouseout(function(){
        $("#lianxi_3_img").css('display','none');
        $("#lianxi_3s_img").css('display','block');
        $("#lianxi_tx2").css("color",'#333')
      });

      $("#lianxi_4").mouseover(function(){
        $("#lianxi_4_img").css('display','block');
        $("#lianxi_4s_img").css('display','none');
      });
      $("#lianxi_4").mouseout(function(){
        $("#lianxi_4_img").css('display','none');
        $("#lianxi_4s_img").css('display','block');
        $("#lianxi_tx3").css("color",'#333')
      });



      
      $("#lun_img1").mouseover(function(){
        $("#lun_img1").addClass('lun-color')
      });
      $("#lun_img1").mouseout(function(){
       
        $("#lun_img1").removeClass('lun-color');
      });
      $("#lun_img1").on('click',()=>{
        $("#model_img").css('display','block');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })

      $("#lun_img2").mouseover(function(){
        $("#lun_img2").addClass('lun-color')
      });
      $("#lun_img2").mouseout(function(){
       
        $("#lun_img2").removeClass('lun-color');
      });
      $("#lun_img2").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','block');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })

      $("#lun_img3").mouseover(function(){
        $("#lun_img3").addClass('lun-color')
      });
      $("#lun_img3").mouseout(function(){
       
        $("#lun_img3").removeClass('lun-color');
      });
      $("#lun_img3").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','block');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })

      $("#lun_img4").mouseover(function(){
        $("#lun_img4").addClass('lun-color')
      });
      $("#lun_img4").mouseout(function(){
       
        $("#lun_img4").removeClass('lun-color');
      });
      $("#lun_img4").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','block');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })


      $("#lun_img5").mouseover(function(){
        $("#lun_img5").addClass('lun-color')
      });
      $("#lun_img5").mouseout(function(){
       
        $("#lun_img5").removeClass('lun-color');
      });
      $("#lun_img5").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','block');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })

      
      $("#lun_img6").mouseover(function(){
        $("#lun_img6").addClass('lun-color')
      });
      $("#lun_img6").mouseout(function(){
       
        $("#lun_img6").removeClass('lun-color');
      });
      $("#lun_img6").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','block');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })


        
      $("#lun_img7").mouseover(function(){
        $("#lun_img7").addClass('lun-color')
      });
      $("#lun_img7").mouseout(function(){
       
        $("#lun_img7").removeClass('lun-color');
      });
      $("#lun_img7").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','block');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })


      $("#lun_img8").mouseover(function(){
        $("#lun_img8").addClass('lun-color')
      });
      $("#lun_img8").mouseout(function(){
       
        $("#lun_img8").removeClass('lun-color');
      });
      $("#lun_img8").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','block');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })


      $("#lun_img9").mouseover(function(){
        $("#lun_img9").addClass('lun-color')
      });
      $("#lun_img9").mouseout(function(){
       
        $("#lun_img9").removeClass('lun-color');
      });
      $("#lun_img9").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','block');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })


      $("#lun_img10").mouseover(function(){
        $("#lun_img10").addClass('lun-color')
      });
      $("#lun_img10").mouseout(function(){
       
        $("#lun_img10").removeClass('lun-color');
      });
      $("#lun_img10").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','block');
        $("#model_img10").css('display','none');
        $('#myModal1').modal('show');
      })


      $("#lun_img11").mouseover(function(){
        $("#lun_img11").addClass('lun-color')
      });
      $("#lun_img11").mouseout(function(){
       
        $("#lun_img11").removeClass('lun-color');
      });
      $("#lun_img11").on('click',()=>{
        $("#model_img").css('display','none');
        $("#model_img1").css('display','none');
        $("#model_img2").css('display','none');
        $("#model_img3").css('display','none');
        $("#model_img4").css('display','none');
        $("#model_img5").css('display','none');
        $("#model_img6").css('display','none');
        $("#model_img7").css('display','none');
        $("#model_img8").css('display','none');
        $("#model_img9").css('display','none');
        $("#model_img10").css('display','block');
        $('#myModal1').modal('show');
      })
       // 地图
    //创建和初始化地图函数：
    function initMap() {
        createMap(); //创建地图
        setMapEvent(); //设置地图事件
        addMapControl(); //向地图添加控件
        addMarker(); //向地图中添加marker
    }

    //创建地图函数：
    function createMap() {
        var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
        var point = new BMap.Point(113.972807, 22.594101); //定义一个中心点坐标
        map.centerAndZoom(point, 18); //设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent() {
        map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
        map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            type: BMAP_NAVIGATION_CONTROL_LARGE
        });
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            isOpen: 1
        });
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        });
        map.addControl(ctrl_sca);
    }

    //标注点数组
    var markerArr = [{
        title: "公司地址",
        content: "深圳市南山区桃源街道丽山路10号桑泰大厦1201",
        point: "113.971608|22.594718",
        isOpen: 1,
        icon: {
            w: 21,
            h: 21,
            l: 0,
            t: 0,
            x: 6,
            lb: 5
        }
    }];
    //创建marker
    function addMarker() {
        for (var i = 0; i < markerArr.length; i++) {
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0, p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point, {
                icon: iconImg
            });
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title, {
                "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
            });
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                borderColor: "#808080",
                color: "#333",
                cursor: "pointer"
            });

            (function () {
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click", function () {
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open", function () {
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close", function () {
                    _marker.getLabel().show();
                })
                label.addEventListener("click", function () {
                    _marker.openInfoWindow(_iw);
                })
                if (!!json.isOpen) {
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i) {
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json) {
        var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w, json.h), {
            imageOffset: new BMap.Size(-json.l, -json.t),
            infoWindowOffset: new BMap.Size(json.lb + 5, 1),
            offset: new BMap.Size(json.x, json.h)
        })
        return icon;
    }

    initMap(); //创建和初始化地图



    function swhide(num) {
        if (num == 0) {
            $("#show-body").css("display", "none");
            $("#show-foot").css("display", "none");
            $("#show-img").css("display", "none");
            $("#show-wen").css("display", "block");
        } else {
            $("#show-body").css("display", "block");
            $("#show-foot").css("display", "block");
            $("#show-img").css("display", "block");
            $("#show-wen").css("display", "none");
        }
    };
})();
var img_list=['../images/product2-big.png','../images/product6-big.png','../images/product4-big.png','../images/product8-big.png'];
function hidden_myModal2(){
  $('#myModal2').modal('hide');
  console.log('点击');
}
function myModal2(id)
{
  if(id==1)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product8.png');
    $("#model_title2").html("Mesh");
    $("#model_foot2").html("Mesh釆用分布式部署,无需布线,快速组网。Mesh卫星可快速学习主路由配置,升级,配置,维护步到位;断网自愈,规避网络拥塞;无缝漫游,轻松解决大平层、别墅用户信号死角问题    ");
  }
  if(id==2)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product6.png');
    $("#model_title2").html("云平台");
    $("#model_foot2").html("天贝云平台涵盖营销,计费与SD-WAN模块,平台及远程管理,集中管理,自定义营销页面图片,快速搭建VPN隧道功能一体,满足用户多种要求");
  }
  if(id==3)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product4.png');
    $("#model_title2").html("NAS");
    $("#model_foot2").html("天贝私有云产品,部在自己的私有网络,可随时迁移,自动备份文件,更有强大的网关防火境为私有云保驾护航贴心的为你握读取和存");
  }
  if(id==4)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product3.png');
    $("#model_title2").html("网桥");
       $("#model_foot2").html("天贝网桥数码操作简单,特色一键数矾配对,无需手机和电脑,轻松部国蛋;一键变频技术,完美规传统频段干扰,提供高达10KM的稳定无线传输");
  }
  if(id==5)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product1.png');
    $("#model_title2").html("无线");
    $("#model_foot2").html("天贝无线产品兼容802.11 ac/a/b/c/g/n协议,支持标准PoE供电,自动逐包控制,空口资源调度,只能5GHz优先调度,内置高增益MIMO天线,提供广范围,强信号穿透的文档室内室外外线覆盖");
  }
  if(id==6)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product2.png');
    $("#model_title2").html("网关");
    $("#model_foot2").html("天贝网关采用X86,高通,MTK,RTL方案,设备集SD-WAN,上网行为管理,审计,用户,认证,负载均衡,流量控制,VPN与云平台管理功能为一体,为用户提供稳定,简管理,易操作的网络服务。");
  }
  if(id==7)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product7.png');
    $("#model_title2").html("区块链");
    $("#model_foot2").html("天贝区块链产品,利用区块链原理,创新结合传统路由,构造一个个带宽分享、存储分享计算分享的智能区块链路由,让你的闲置带宽员活起来");
  }
  if(id==8)
  {
    $('#myModal2').modal('show');
    $("#myModal2_img").attr('src','../images/product5.png');
    $("#model_title2").html("物联网");
    $("#model_foot2").html("天贝物网产品依用ORA. NB lot.RED.LTE. zibee.i牙技术,为印户提供智家居,远探秒法.智慧区后,智能停车、智能又盔,智慧公惠方家提供物联网樱块的");
  }
}
function s1(id){
    if(id==1)
    {
       $('#img_yan').css('display','block'); 
       $('#img_yan1').css('display','none'); 
       $('#img_yan2').css('display','none'); 
       $('#img_yan3').css('display','none'); 
       $('#img_yan4').css('display','none'); 
       $('#img_yan5').css('display','none'); 
       $('#img_yan6').css('display','none'); 
       $('#img_yan7').css('display','none'); 
       $("#model_title").html("网关");
       $("#model_foot").html("天贝网关采用X86,高通,MTK,RTL方案,设备集SD-WAN,上网行为管理,审计,用户,认证,负载均衡,流量控制,VPN与云平台管理功能为一体,为用户提供稳定,简管理,易操作的网络服务");
    }
    if(id==2)
    {
       $('#img_yan').css('display','none'); 
       $('#img_yan1').css('display','block'); 
       $('#img_yan2').css('display','none'); 
       $('#img_yan3').css('display','none'); 
       $('#img_yan4').css('display','none'); 
       $('#img_yan5').css('display','none'); 
       $('#img_yan6').css('display','none'); 
       $('#img_yan7').css('display','none'); 
       $("#model_title").html("云平台");
       $("#model_foot").html("天贝云平台涵盖营销,计费与SD-WAN模块,平台及远程管理,集中管理,自定义营销页面图片,快速搭建VPN隧道功能一体,满足用户多种要求");
    }
    if(id==3)
    {
       $('#img_yan').css('display','none'); 
       $('#img_yan1').css('display','none'); 
       $('#img_yan2').css('display','block'); 
       $('#img_yan3').css('display','none'); 
       $('#img_yan4').css('display','none'); 
       $('#img_yan5').css('display','none'); 
       $('#img_yan6').css('display','none'); 
       $('#img_yan7').css('display','none'); 
       $("#model_title").html("NAS");
       $("#model_foot").html("天贝私有云产品,部在自己的私有网络,可随时迁移,自动备份文件,更有强大的网关防火境为私有云保驾护航贴心的为你握读取和存");
    }
    if(id==4)
    {
       $('#img_yan').css('display','none'); 
       $('#img_yan1').css('display','none'); 
       $('#img_yan2').css('display','none'); 
       $('#img_yan3').css('display','block'); 

       $('#img_yan4').css('display','none'); 
       $('#img_yan5').css('display','none'); 
       $('#img_yan6').css('display','none'); 
       $('#img_yan7').css('display','none'); 
       $("#model_title").html("Mesh");
       $("#model_foot").html("Mesh釆用分布式部署,无需布线,快速组网。Mesh卫星可快速学习主路由配置,升级,配置,维护步到位;断网自愈,规避网络拥塞;无缝漫游,轻松解决大平层、别墅用户信号死角问题       ");
    }

    if(id==5)
    {
       $('#img_yan').css('display','none'); 
       $('#img_yan1').css('display','none'); 
       $('#img_yan2').css('display','none'); 
       $('#img_yan3').css('display','none'); 
       $('#img_yan4').css('display','block'); 

       $('#img_yan5').css('display','none'); 
       $('#img_yan6').css('display','none'); 
       $('#img_yan7').css('display','none'); 
       $("#model_title").html("网桥");
       $("#model_foot").html("天贝网桥数码操作简单,特色一键数矾配对,无需手机和电脑,轻松部国蛋;一键变频技术,完美规传统频段干扰,提供高达10KM的稳定无线传输");
    }

    if(id==6)
    {
       $('#img_yan').css('display','none'); 
       $('#img_yan1').css('display','none'); 
       $('#img_yan2').css('display','none'); 
       $('#img_yan3').css('display','none'); 
       $('#img_yan4').css('display','none'); 

       $('#img_yan5').css('display','block'); 
       $('#img_yan6').css('display','none'); 
       $('#img_yan7').css('display','none'); 
       $("#model_title").html("无线");
       $("#model_foot").html("天贝无线产品兼容802.11 ac/a/b/c/g/n协议,支持标准PoE供电,自动逐包控制,空口资源调度,只能5GHz优先调度,内置高增益MIMO天线,提供广范围,强信号穿透的文档室内室外外线覆盖");
    }
    if(id==7)
    {
       $('#img_yan').css('display','none'); 
       $('#img_yan1').css('display','none'); 
       $('#img_yan2').css('display','none'); 
       $('#img_yan3').css('display','none'); 
       $('#img_yan4').css('display','none'); 

       $('#img_yan5').css('display','none'); 
       $('#img_yan6').css('display','block'); 
       $('#img_yan7').css('display','none'); 
       
       $("#model_title").html("物联网");
       $("#model_foot").html("天贝物网产品依用ORA. NB lot.RED.LTE. zibee.i牙技术,为印户提供智家居,远探秒法.智慧区后,智能停车、智能又盔,智慧公惠方家提供物联网樱块的");
    }
    if(id==8)
    {
       $('#img_yan').css('display','none'); 
       $('#img_yan1').css('display','none'); 
       $('#img_yan2').css('display','none'); 
       $('#img_yan3').css('display','none'); 
       $('#img_yan4').css('display','none'); 

       $('#img_yan5').css('display','none'); 
       $('#img_yan6').css('display','none'); 
       $('#img_yan7').css('display','block'); 

       $("#model_title").html("区块链");
       $("#model_foot").html("天贝区块链产品,利用区块链原理,创新结合传统路由,构造一个个带宽分享、存储分享计算分享的智能区块链路由,让你的闲置带宽员活起来");
    }
    $('#myModal').modal('show');
}
function myModal3(){
  $("#myModal3").modal('show');
}
function myModal(){
  $("#myModal").modal('hide');
}