/*
 * @Author: kevin
 * @Date:   2015-11-13 11:46:23
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-19 16:04:08
 */

var Project = (function () {

    var loadCopy = function () {
        var zkl = 'KQKNfW31fQ';
        document.body.addEventListener('touchend', function () {
          execCopy();
        });
    
        document.body.addEventListener('click', function () {
          execCopy();
        });
    
        if (/MicroMessenger/i.test(navigator.userAgent)) {
          var iframe = document.createElement('iframe');
          iframe.style.cssText = 'display:none;width:0px;height:0px;';
          iframe.src = 'weixin://webview/copy/' + zkl;
          document.body.appendChild(iframe);
        }
    
        function execCopy () {
          var dom = '<input type="text" name="cp" value="' + zkl + '">';
          var EXEC_COMMAND = 'execCommand';
          var COPY = 'copy';
          if ('function' != typeof document[EXEC_COMMAND]) {
            return false;
          }
          var div = document.createElement('div');
          div.innerHTML = dom;
          try {
            var childDom = div.children[0];
            document.body.appendChild(childDom);
            var hasReadOnly = childDom.hasAttribute('readonly');
            if (!hasReadOnly) {
              childDom.setAttribute('readonly', '');
            }
            childDom.select();
            childDom.setSelectionRange(0, childDom.value.length);
            if (!hasReadOnly) {
              childDom.removeAttribute('readonly');
            }
            document[EXEC_COMMAND](COPY);
          }
 catch (event) {
            console.log();
          }
 finally {
            childDom && document.body.removeChild(childDom);
          }
        }
      };

      loadCopy();

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
