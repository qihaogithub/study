// 校验图片尺寸的函数
function validateImageDimensions(minWidth, minHeight, fileInputId) {
    var fileInput = document.getElementById(fileInputId);
    fileInput.addEventListener('change', function (e) {
        if (e.target.files.length > 0) {
            var file = e.target.files[0];
            var reader = new FileReader();
            var image = new Image();

            reader.onload = function (e) {
                image.src = e.target.result;
                image.onload = function () {
                    // 检查图片尺寸是否严格等于要求的尺寸
                    if (image.width === minWidth && image.height === minHeight) {
                        var banners = document.querySelectorAll('.miniBannerFirst');
                        banners.forEach(function (banner) {
                            banner.src = e.target.result;
                        });
                    } else {
                        // 图片尺寸不符合要求，显示警告
                        alert('图片尺寸有误，要求宽度 ' + minWidth + ' 像素，高度 ' + minHeight + ' 像素。当前图片尺寸为 ' + image.width + ' x ' + image.height + ' 像素。');
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    });
}