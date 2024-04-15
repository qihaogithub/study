// 为大banner前景图按钮添加点击事件监听器
document.getElementById('uploadForegroundButton').addEventListener('click', function () {
    document.getElementById('fileInputForeground').click();
});

// 为大banner背景图按钮添加点击事件监听器
document.getElementById('uploadBackgroundButton').addEventListener('click', function () {
    document.getElementById('fileInputBackground').click();
});

// 为小banner按钮添加点击事件监听器
document.getElementById('uploadMiniBannerButton').addEventListener('click', function () {
    document.getElementById('fileInputMiniBanner').click();
});

// 监听文件输入元素的change事件
document.getElementById('fileInputForeground').addEventListener('change', function (e) {
    if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        var image = new Image(); // 创建一个新的Image对象
        reader.onload = function (e) {
            image.src = e.target.result; // 设置图片的src属性为读取到的数据URL
            // 当图片加载完成时，检查其尺寸
            image.onload = function () {
                var minWidth = 1248; // 假设最小宽度要求为800像素
                var minHeight = 384; // 假设最小高度要求为600像素

                if (image.width != minWidth || image.height != minHeight) {
                    // 如果图片尺寸不满足要求，显示错误提示
                    alert('图片尺寸有误，要求宽度' + minWidth + '像素，高度' + minHeight + '像素。');
                    document.querySelector('.phone-foreground-image').src = e.target.result;
                    document.querySelector('.pad-foreground-image').src = e.target.result;
                } else {
                    // 如果图片尺寸满足要求，更新页面上的图片元素
                    document.querySelector('.phone-foreground-image').src = e.target.result;
                    document.querySelector('.pad-foreground-image').src = e.target.result;
                }
            };
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('fileInputBackground').addEventListener('change', function (e) {
    if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        var image = new Image(); // 创建一个新的Image对象
        reader.onload = function (e) {
            image.src = e.target.result; // 设置图片的src属性为读取到的数据URL
            // 当图片加载完成时，检查其尺寸
            image.onload = function () {
                var minWidth = 1248; // 假设最小宽度要求为800像素
                var minHeight = 344; // 假设最小高度要求为600像素

                if (image.width != minWidth || image.height != minHeight) {
                    // 如果图片尺寸不满足要求，显示错误提示
                    alert('图片尺寸有误，要求宽度' + minWidth + '像素，高度' + minHeight + '像素。');
                    document.querySelector('.phone-background-image').src = e.target.result;
                    document.querySelector('.pad-background-image').src = e.target.result;
                } else {
                    // 如果图片尺寸满足要求，更新页面上的图片元素
                    document.querySelector('.phone-background-image').src = e.target.result;
                    document.querySelector('.pad-background-image').src = e.target.result;
                }
            };

        };
        reader.readAsDataURL(file);
    }
});

// document.getElementById('fileInputMiniBanner').addEventListener('change', function (e) {
//     if (e.target.files.length > 0) {
//         var file = e.target.files[0];
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             // 选中页面中的所有.miniBannerFirst元素
//             var miniBannerImages = document.querySelectorAll('.miniBannerFirst');
//             // 遍历每个.miniBannerFirst元素并更新其src属性
//             miniBannerImages.forEach(function (img) {
//                 img.src = e.target.result;
//             });
//         };
//         reader.readAsDataURL(file);
//     }
// });

document.getElementById('fileInputMiniBanner').addEventListener('change', function (e) {
    if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        var image = new Image(); // 创建一个新的Image对象
        reader.onload = function (e) {


            image.src = e.target.result; // 设置图片的src属性为读取到的数据URL
            // 当图片加载完成时，检查其尺寸
            image.onload = function () {
                var minWidth = 480; // 假设最小宽度要求为800像素
                var minHeight = 270; // 假设最小高度要求为600像素

                if (image.width != minWidth || image.height != minHeight) {
                    // 如果图片尺寸不满足要求，显示错误提示
                    alert('图片尺寸有误，要求宽度' + minWidth + '像素，高度' + minHeight + '像素。');
                    var banners = document.querySelectorAll('.miniBannerFirst');
                    banners.forEach(function (banner) {
                        banner.src = e.target.result;
                    });

                } else {
                    // 如果图片尺寸满足要求，更新页面上的图片元素
                    var banners = document.querySelectorAll('.miniBannerFirst');
                    banners.forEach(function (banner) {
                        banner.src = e.target.result;
                    });

                }
            };
        };
        reader.readAsDataURL(file);
    }
});
