define(function(require,exports,module){
/**
 * Created by Administrator on 2016/8/21.
 */
/**
 * 1、定义天空对象函数
 * 天空的构造函数需要的参数   上下文   x 在画布上的x坐标
 *                          img  图像    speed速度
 *
 * 2、添加绘制天空的函数
 * 3、更新的函数
 * 4、设置天空的片数
 */

function CreateSky(ctx, img, x, speed) {
    this.ctx = ctx;
    this.img = img;
    this.x = x;
    this.speed = speed;
}

CreateSky.prototype.drawSky = function () {
    this.ctx.drawImage(this.img, this.x, 0);
}

CreateSky.prototype.setCount = function (count) {
    CreateSky.count = count;
}
CreateSky.prototype.updateSky = function (dt) {
    this.x = this.x + this.speed * dt;
    if (this.x < -800) {
        this.x = this.x + 800 * CreateSky.count;
    }
}
module.exports = CreateSky;
})
