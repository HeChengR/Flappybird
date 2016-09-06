 define(function(require,exports,module){
     var createBirds = require('./drawBirds'),CreateSky = require('./drawSky'),imageLoad = require('./loadImage'),
     CreateLand = require('./drawLand'),CreatePipe = require('./drawPipe');
//路径数组,数组的每一项是路径对象。
    var imgUrls = [
        {name: "birds", path: "images/birds.png"}, {name: "land", path: "images/land.png"}, {
            name: "pipe1",
            path: "images/pipe1.png"
        },
        {name: "pipe2", path: "images/pipe2.png"}, {name: "sky", path: "images/sky.png"}
    ];

    imageLoad(imgUrls, function (imgObj) {
        var gameOver = false;

        //各种显示对象的创建
        //创建小鸟对象
        var sky = new CreateSky(ctx, imgObj.sky,0,-0.2),
                sky1 = new CreateSky(ctx, imgObj.sky,800,-0.2),
                //创建地面对象
                land = new CreateLand(ctx, imgObj.land,0,-0.2),
                land1 = new CreateLand(ctx, imgObj.land,336,-0.2),
                land2 = new CreateLand(ctx, imgObj.land,672,-0.2),
                land3 = new CreateLand(ctx, imgObj.land,1008,-0.2);
         sky.setCount(2);
        land.setCount(4);

        var pipe = new CreatePipe(ctx,imgObj.pipe2,imgObj.pipe1,200+200,-0.2);
        var pipe1 = new CreatePipe(ctx,imgObj.pipe2,imgObj.pipe1,400+200,-0.2);
        var pipe2 = new CreatePipe(ctx,imgObj.pipe2,imgObj.pipe1,600+200,-0.2);
        var pipe3 = new CreatePipe(ctx,imgObj.pipe2,imgObj.pipe1,800+200,-0.2);
        pipe.setCount(200,4);
        var birds = new createBirds(ctx, imgObj.birds, 100, 200, 0.05, 0.0003);

        document.body.addEventListener("keydown", function (e) {
           if(e.keyCode == 38){
               birds.speed = -0.12;
           }
        });


        //主循环
        //延迟执行，延迟时间由浏览器来决定，浏览器会让这个事件符合动画的标准。
        var startTime = Date.now();
        var dtTime = function () {
            var now = Date.now();
            var dt = now - startTime;
            startTime = now;

            ctx.clearRect(0, 0, 800, 600);

            //绘制天空
            sky.updateSky(dt);
            sky1.updateSky(dt);

            birds.updateBirds(dt);

            land.updateLand(dt);
            land1.updateLand(dt);
            land2.updateLand(dt);
            land3.updateLand(dt);

            sky.drawSky();
            sky1.drawSky();



            pipe.updatePipe(dt);
            pipe.drawPipe();

            pipe1.updatePipe(dt);
            pipe1.drawPipe();

            pipe2.updatePipe(dt);
            pipe2.drawPipe();

            pipe3.updatePipe(dt);
            pipe3.drawPipe();

            land.drawLand();
            land1.drawLand();
            land2.drawLand();
            land3.drawLand();

            birds.drawBirds();

            ctx.font = "20px 微软雅黑";
            ctx.fillStyle = "red";
            ctx.fillText("时间",10,20);



            if(birds.y < 0 || birds.y > 488){
                 gameOver = true;
            }

            gameOver = gameOver || pipe.hitTest(birds.x,birds.y);
            gameOver = gameOver || pipe1.hitTest(birds.x,birds.y);
            gameOver = gameOver || pipe2.hitTest(birds.x,birds.y);
            gameOver = gameOver || pipe3.hitTest(birds.x,birds.y);

            if(!gameOver){
                requestAnimationFrame(dtTime);
            }

        }
        requestAnimationFrame(dtTime);

    });

 })
 