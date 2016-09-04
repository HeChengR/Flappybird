/**
 * Created by Administrator on 2016/8/21.
 */
//创建地面对象
function CreateLand(ctx, img, x, speed) {
    this.ctx = ctx;
    this.img = img;
    this.x = x;
    this.speed = speed;
}

CreateLand.prototype.drawLand = function () {
    this.ctx.drawImage(this.img, this.x, 488);
}
CreateLand.prototype.setCount = function (count) {
    CreateLand.count = count;
}
CreateLand.prototype.updateLand = function (dt) {
    this.x = this.x + this.speed * dt;
    if (this.x < -336) {
        this.x = this.x + 336 * CreateLand.count;
    }

}