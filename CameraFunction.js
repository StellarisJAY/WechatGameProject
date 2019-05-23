cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node,
        },
        camera: {
            default: null,
            type: cc.Node,
        },
        canvas: {
            default: null,
            type: cc.Node,
        },

    },

    cameraFollow: function(){
        if(this.player.x >= 900){
            this.camera.x = 900;
        }
        else if(this.player.x <= 0){
            this.camera.x = 0;
        }
        else{
            this.camera.x = this.player.x;
        }

        if(this.player.y >= 1600){
            this.camera.y = 1600;
        }
        else if(this.player.y <= 0){
            this.camera.y = 0;
        }
        else{
            this.camera.y = this.player.y;
        }
        this.canvas.x = this.camera.x;    // ui 界面跟随摄像机
        this.canvas.y = this.camera.y;
    },

    update: function(dt){
        this.cameraFollow();
    },
})