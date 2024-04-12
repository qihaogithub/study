// 为大banner前景图按钮添加点击事件监听器
document.getElementById('uploadForegroundButton').addEventListener('click', function() {
    document.getElementById('fileInputForeground').click();
});

// 为大banner背景图按钮添加点击事件监听器
document.getElementById('uploadBackgroundButton').addEventListener('click', function() {
    document.getElementById('fileInputBackground').click();
});

// 为小banner按钮添加点击事件监听器
document.getElementById('uploadMiniBannerButton').addEventListener('click', function() {
    document.getElementById('fileInputMiniBanner').click();
});

// 监听文件输入元素的change事件
document.getElementById('fileInputForeground').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.phone-foreground-image').src = e.target.result;
            document.querySelector('.pad-foreground-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('fileInputBackground').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.phone-background-image').src = e.target.result;
            document.querySelector('.pad-background-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('fileInputMiniBanner').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            // 选中页面中的所有.miniBannerFirst元素
            var miniBannerImages = document.querySelectorAll('.miniBannerFirst');
            // 遍历每个.miniBannerFirst元素并更新其src属性
            miniBannerImages.forEach(function(img) {
                img.src = e.target.result;
            });
        };
        reader.readAsDataURL(file);
    }
});

