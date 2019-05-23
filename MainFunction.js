cc.Class({
    extends: cc.Component,

    properties: {
        pauseMenu: {
            type: cc.Node,
            default: null,
        },

        endMenu: {
            type: cc.Node,
            default: null,
        },
    },

    

    update: function(dt){
        var game_pause = cc.sys.localStorage.getItem("game_pause");
        var game_end = cc.sys.localStorage.getItem("game_end");

        
        if(game_pause == 1){
            this.pauseMenu.active = true;
            cc.sys.localStorage.setItem("player_speed", 0);    
        }
        else{
           this.pauseMenu.active = false;
           cc.sys.localStorage.setItem("player_speed", 200);  
        }
        
    },
})