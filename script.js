$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
    $(".navbar,.explore").addClass("at_top");
  else
    $(".navbar,.explore").removeClass("at_top");
});


$('.navbar').on('click','a',function(event){
  event.preventDefault();
  var target= $(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
  
});


function detect_bear(baer_id,x){
  var bearplace=$(baer_id).offset().left+$(baer_id).width()/2;
  if (Math.abs(x-bearplace)<80)
    $(baer_id).css("bottom","40px")
  else
    $(baer_id).css("bottom","0px")
}



//滑鼠移動時觸發的事件
$(window).mousemove(function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  
  
  var x=pagex-$("#section_about").offset().left;
  var y=pagey-$("#section_about").offset().top;

  
//計算現在的y位置超過區域則隱藏
  if (y<0 ||　y>$("section#section_about").outerHeight())
    $("#fish").css("opacity",0);
  else
    $("#fish").css("opacity",1);
//更動指標位置
  $("#fish").css("top",y+"px");
  $("#fish").css("left",x+"px");
  
 
  
  var bearplace=$("#bear").offset().left+$("#bear").width()/2;
  var beartop=$("#bear").offset().top;
  // 熊看左右看
  if (pagex<bearplace-50)$("#bear").attr("src","https://i.imgur.com/rFHylPS.png")
  else if(pagex>bearplace+50)$("#bear").attr("src","https://i.imgur.com/g5N2btK.png")
  else $("#bear").attr("src","https://i.imgur.com/HFQlnId.png")//上看
  
  //左上看
  if (pagex<bearplace-50 && pagey<beartop)$("#bear").attr("src","https://i.imgur.com/sCnRruD.png")
  //右上看
  if (pagex>bearplace+50 && pagey<beartop)$("#bear").attr("src","https://i.imgur.com/J1mhTjj.png")
  
  detect_bear("#bear_blue",pagex);
  detect_bear("#bear_white",pagex);
  detect_bear("#bear_gray",pagex);
  
  
  $(".mountain").css("transform","translateX("+(pagex/-20+50)+"px)")
  $(".cloud").css("transform","translateX("+(pagex/-20+50)+"px)")
  // $(".sea").css("transform","translateX("+(pagey/-20+50)+"px)")
  $(".front").css("transform","translateX("+(pagex/-50)+"px)")

  
  
  
  $(".r1text").css("transform","translateX("+(pagey/-10)+"px)")
  $(".r2text").css("transform","translateX("+(pagey/-11)+"px)")
  $(".r3text").css("transform","translateX("+(pagey/-12)+"px)")
  
  
  $(".tri1").css("transform","translateX("+(pagex/-5)+"px)")
  $(".tri2").css("transform","translateX("+(pagex/-8)+"px)")
  $(".tri3").css("transform","translateX("+(pagex/-12)+"px)")
  $(".tri4").css("transform","translateX("+(pagex/-10)+"px)")
 
  
  
});