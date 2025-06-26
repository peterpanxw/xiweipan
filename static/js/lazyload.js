const imgs = document.getElementsByTagName('img');
function lazyLoad(imgs) {
  // 视口的高度；
  const clientH = document.documentElement.clientHeight;
  // 滚动的距离，这里的逻辑判断是为了做兼容性处理；
  const clientT = document.documentElement.scrollTop || document.body.scrollTop;
  for(let i = 0; i < imgs.length; i++) {
    // 逻辑判断，如果视口高度+滚动距离 > 图片到浏览器顶部的距离就去加载；
    // !imgs[i].src 是避免重复请求，可以把该条件取消试试：可以看到不加该条件的话往回滚动就会重复请求；
    if(clientH + clientT > imgs[i].offsetTop && !imgs[i].src) {
      // 使用data-xx的自定义属性可以通过dom元素的dataset.xx取得；
      imgs[i].src = imgs[i].dataset.src;
    }
  }
};
// 一开始能够加载显示在视口中的图片；
lazyLoad(imgs);
// 监听滚动事件，加载后面的图片；
window.onscroll = () => lazyLoad(imgs);
// 设置节流函数
function throttle(fn, delay) {
  let timer = null;
  return () => {
    if(timer) {
      return;
    };
    timer = setTimeout(() => {
      fn(imgs);
      timer = null;
    }, delay)
  }
}
// 监听滚动事件，加载后面的图片；
window.onscroll = throttle(lazyLoad, 500);