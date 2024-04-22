var neirong = document.querySelector('.phone');
var topElement = document.querySelector('.top img');

// // 监听滚动事件
neirong.addEventListener('scroll', function () {
    // 获取滚动位置
    console.log(neirong.scrollTop);
    var scrollPosition = neirong.scrollTop;

    if (0 < scrollPosition < 40) {
        var ratio = (scrollPosition - 40) / 40;
        var newWidthOrHeight = 100 * ratio;
        topElement.style.width = newWidthOrHeight + '%';
    }
});