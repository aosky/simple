// 检测滚动栏，显示返回顶部的按钮
window.onscroll = function() {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top = document.querySelector(".top");  // 获取第一个绑定 top 的元素
  if( t > 300 ) { 
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
};

// 回到顶部滚动函数
function toScroll() {
  clearInterval(this.timer);
  this.timer = setInterval(function() {
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollBy(0, -100);
    if (Math.ceil(scrolltop) <= 0) {  // 如果回到了顶部，就清除当前计时函数
        clearInterval(this.timer);
    };
  }, 10)  // 每 10 毫秒调用一次，这样绝对顺滑
};