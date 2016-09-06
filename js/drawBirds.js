define(function(require,exports,module){
      //创建小鸟对象
function createBirds(ctx,imgObj,x, y,speed,a) {
    this.ctx = ctx;
    this.imgObj = imgObj;
    this.x = x;
    this.y = y;
    this.index = 0;
    this.speed = speed;
    this.waitTime = 0;
    this.a = a;
}
createBirds.prototype.drawBirds = function () {
    ctx.save();
    var rotateAngle = this.speed / 0.3 * ( Math.PI / 6);

    ctx.translate(this.x, this.y);
    ctx.rotate(rotateAngle);

    this.ctx.drawImage(this.imgObj, 52 * this.index, 0, 52, 45, -52/2, -45/2, 52, 45);
    ctx.restore();
}
//TODO 控制小鸟的下落
createBirds.prototype.updateBirds = function (dt) {
    this.waitTime += dt;
    if(this.waitTime >= 100){
        this.index ++;
        if(this.index > 2){
            this.index = 0;
        }
        this.waitTime -= 100;
    }
    this.speed = this.speed + this.a * dt;
    this.y = this.y + this.speed * dt;
}

module.exports = createBirds;
})
