cc.Class({
    extends: cc.Component,

    properties: {
        junkCount: {
            type: cc.Integer,
            default: 0,
        },
        score: {
            type: cc.Integer,
            default: 0,
        },
    },

    onLoad: function(){
        cc.sys.localStorage.setItem("game_end", 0);
        cc.sys.localStorage.setItem("game_pause", 0);

        cc.sys.localStorage.setItem("player_speed", 200);
        cc.sys.localStorage.setItem("enemy_speed", 150);
        cc.sys.localStorage.setItem("junk_timer", 0);

        cc.sys.localStorage.setItem("junk_count", this.junkCount);
        cc.sys.localStorage.setItem("score", this.score);
    },
})