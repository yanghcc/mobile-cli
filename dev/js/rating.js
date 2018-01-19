/*
 * @Author: kevin
 * @Date:   2015-11-13 11:46:23
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-19 14:25:10
 */

var Project = (function () {

    var message = function (type, msg) {
        var div = '<div class="msg-wrapper resetAnimation  fadeInDown" data-role="' + type + '">' +
        '<i id="close-btn" class="close-btn"></i>' +
        '<p class="msg-title">' + msg + '</p>' +
        '</div>';
        var timer = 300;
        var duration = 3000;
        var animate = function () {
          $('.msg-wrapper').addClass('fadeOutUp');
          setTimeout(function () {
            $('.msg-wrapper').remove();
          }, timer);
        };
        var timeout = setTimeout(function () {
          animate();
        }, duration);
        $('body').append(div).on('click', '#close-btn', function () {
          clearTimeout(timeout);
          animate();
        });
      };

  return {
    message: message
  };


})();

/**
*
* 　　　┏┓　　　┏┓
* 　　┏┛┻━━━┛┻┓
* 　　┃　　　　　　　┃
* 　　┃　　　━　　　┃
* 　　┃　┳┛　┗┳　┃
* 　　┃　　　　　　　┃
* 　　┃　　　┻　　　┃
* 　　┃　　　　　　　┃
* 　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
* 　　　　┃　　　┃    神兽保佑,代码无bug
* 　　　　┃　　　┃
* 　　　　┃　　　┗━━━┓
* 　　　　┃　　　　　 ┣┓
* 　　　　┃　　　　 ┏┛
* 　　　　┗┓┓┏━┳┓┏┛
* 　　　　　┃┫┫　┃┫┫
* 　　　　　┗┻┛　┗┻┛
*
*/
