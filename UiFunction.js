cc.Class({
    extends: cc.Component,

    properties: {
        pauseButton: {
            type: cc.Button,
            default: null,
        },

        resumeButton: {
            type: cc.Button,
            default: null,
        },

        restartButton: {
            type: cc.Button,
            default: null,
        },
    },

    setGlobals: function(){         // 重新开始游戏时，重置参数
        cc.sys.localStorage.setItem("game_end", 0);
        cc.sys.localStorage.setItem("game_pause", 0);

        cc.sys.localStorage.setItem("player_speed", 200);
    },

    onLoad: function(){
        var self = this;

        self.pauseButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            console.log(" 游戏暂停 ");
            cc.sys.localStorage.setItem("game_pause", 1);
        });
        self.resumeButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            console.log(" 游戏继续 ");
            cc.sys.localStorage.setItem("game_pause", 0);
        });
        self.restartButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            console.log(" 游戏重新开始 ");
            cc.director.loadScene("main");
            self.setGlobals();
        })
    },

    update: function(dt){

    },
})