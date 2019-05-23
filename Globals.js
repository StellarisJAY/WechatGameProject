cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad: function(){
        cc.sys.localStorage.setItem("game_end", 0);
        cc.sys.localStorage.setItem("game_pause", 0);

        cc.sys.localStorage.setItem("player_speed", 200);
        
    },
})