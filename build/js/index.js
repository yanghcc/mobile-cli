var Project=function(){var t=function(){var t=$(this);if(!t.hasClass("disabled")){t.addClass("disabled");var n={time:3};$.ajax({url:"http://wiki.xyzphp.com/t.php",type:"POST",data:n,beforeSend:function(){lnv.pageloading()}}).done(function(t){t="string"==typeof t?JSON.parse(t):t,200==t.status?0===t.data.length&&lnv.alert({title:"提示",content:"没有数据",alertBtnText:"确定",alertHandler:function(){alert("点击了确定")}}):alert("error")}).fail(function(t,n,a){alert("error")}).always(function(){lnv.destroyloading(),t.removeClass("disabled")})}},n=function(){$("#submit_btn").on("tap",t)},a=function(){n()};return{init:a}}();