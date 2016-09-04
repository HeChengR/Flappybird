/**
 * Created by Administrator on 2016/8/21.
 */
//创建上边柱子对象
function CreatePipe(ctx, upImg, downImg, x, speed) {
    this.ctx = ctx;
    this.upImg = upImg;
    this.downImg = downImg;
    this.x = x;
    this.speed = speed;
    this.Pipeheight = Math.random() * 200 + 100;  //管子的长度在100和300之间
}

CreatePipe.prototype.drawPipe = function () {
    this.ctx.drawImage(this.upImg, this.x, this.Pipeheight - 420);
    this.ctx.drawImage(this.downImg, this.x, this.Pipeheight + 150);
}
/**
 *
 * @param gap   柱子之间的间隔
 * @param count 柱子的数量
 */
CreatePipe.prototype.setCount = function (gap, count) {
    CreatePipe.gap = gap;
    CreatePipe.count = count;
}

CreatePipe.prototype.updatePipe = function (dt) {
    this.x = this.x + this.speed * dt;
    if (this.x < -52) {
        this.x = this.x + CreatePipe.gap * CreatePipe.count;
        this.Pipeheight = Math.random() * 200 + 100;  //管子的长度在100和300之间
    }
}
/**
 * 判断小鸟是否在柱子上。如果在就死掉
 * @param x
 * @param y
 */
CreatePipe.prototype.hitTest = function (x, y) {
     return (x > this.x && x < this.x + 52) && (!(y > this.Pipeheight && y < this.Pipeheight + 150));
}