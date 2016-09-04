/**
 * Created by Administrator on 2016/8/21.
 */
/**
 * 图像加载的函数
 * @param imgUrls   路径数组
 * @param callback  图片加载完毕之后的回调函数。
 */
function imageLoad(imgUrls, callback) {
    var imgObj = {}, i = 0, len = imgUrls.length, count = len, imgEl, name;
    //循环遍历数组
    for (; i < len; i++) {
        //创建img对象，添加src属性.
        imgEl = new Image();
        imgEl.src = imgUrls[i].path;
        name = imgUrls[i].name;

        (function (name, img) {
            img.addEventListener("load", function () {
                imgObj[name] = img;
                count--;
                if (count == 0) {
                    callback(imgObj);
                }
            });
        })(name, imgEl);
    }
}