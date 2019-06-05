cc.Class({
    extends: cc.Component,

    properties: {
        pauseMenu: {
            type: cc.Node,
            default: null,
        },
    },

    onLoad: function(){
        var manager = cc.director.getCollisionManager();

        manager.enabled = true;
        //manager.enabledDrawBoundingBox = true;
        //manager.enabledDebugDraw = true;
        cc.director.preloadScene("main");
        cc.director.preloadScene("gameOver");
    },

    update: function(dt){
        var game_pause = cc.sys.localStorage.getItem("game_pause");
        var game_end = cc.sys.localStorage.getItem("game_end");

        
        if(game_end == 1){
            cc.director.loadScene("gameOver");
        }
        if(game_pause == 1){
            this.pauseMenu.active = true;
            cc.sys.localStorage.setItem("player_speed", 0);
            cc.sys.localStorage.setItem("enemy_speed", 0);    
        }
        else{
           this.pauseMenu.active = false;
           cc.sys.localStorage.setItem("player_speed", 200);
           cc.sys.localStorage.setItem("enemy_speed", 150);  
        }
    },
})