cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node,
            speed: {
                default: 0,
                type: cc.Integer,
            },
        },

        touchArea: {
            default: null,
            type: cc.Node,
        },
    },


    onLoad: function(){
        var self = this;
        
        self.touchArea.on(cc.Node.EventType.TOUCH_START, function(event){
            var pos = event.getLocation();
            var targetPos = cc.v2();
            var angle;
            var game_pause = cc.sys.localStorage.getItem("game_pause");
            var game_end = cc.sys.localStorage.getItem("game_end");
            
            targetPos.x = pos.x + self.touchArea.x - 450 - self.player.x;   //  坐标系转换
            targetPos.y = pos.y + self.touchArea.y - 800 - self.player.y;
            console.log(" 玩家触摸点: " + pos);
            console.log(" 目标坐标  : " + targetPos);

            if(game_pause == 0 && game_end == 0){
                angle = Math.atan(targetPos.y / targetPos.x) * 180 / Math.PI;
                if(targetPos.x > 0){
                    self.player.rotation = Math.round(360 - angle);
                }
                else{
                    self.player.rotation = Math.round(360 - angle) + 180;
                }
            }
        }, self);
    },
    update: function(dt){
        var angle = -this.player.rotation;
        var offset = cc.v2(Math.cos(Math.PI / 180 * angle), Math.sin(Math.PI / 180 * angle));
        var speed = cc.sys.localStorage.getItem("player_speed");

        if(this.player.rotation < 0){
            this.player.rotation += 360;
        }
        if(this.player.rotation >= 360){
            this.player.rotation -= 360;
        }
        this.player.x += offset.x * speed * dt;
        this.player.y += offset.y * speed * dt;

        if(this.player.x >= 1300){
            this.player.rotation = 180;
        }
        if(this.player.x <= -450){
            this.player.rotation = 0;
        }
        if(this.player.y >= 2100){
            this.player.rotation = 90;
        }
        if(this.player.y <= -750){
            this.player.rotation = 270;
        }
    },


})