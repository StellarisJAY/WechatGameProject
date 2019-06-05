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
        menuButton: {
            type: cc.Button,
            default: null,
        },
        poemNode: {
            type: cc.Node,
            default: null,
        },

        poemSprites: {
            type: [cc.Sprite],
            default: [],
        },

        refreshLine: {
            type: cc.Integer,
            default: 0,
        },
        lineTimer: {
            type: cc.Integer,
            default: 0,
        },
        line: {
            default: null,
            type: cc.Node,
        },
    },

    setGlobals: function(){         // 重新开始游戏时，重置参数
        cc.sys.localStorage.setItem("game_end", 0);
        cc.sys.localStorage.setItem("game_pause", 0);

        cc.sys.localStorage.setItem("player_speed", 200);
        cc.sys.localStorage.setTiem("enemy_speed", 150);
    },

    onLoad: function(){
        var self = this;

        this.refreshLine = 5;
        self.pauseButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            console.log(" 游戏暂停 ");
            self.poemNode.getComponent(cc.Sprite).spriteFrame = self.poemSprites[Math.round(Math.random() * 5)].spriteFrame; 
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
        });
        self.menuButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            cc.director.loadScene("startMenu");
        });
    },

    update: function(dt){
        if(this.lineTimer == this.refreshLine * 60 ){
            this.line.getComponent(cc.Label).string = "这池水多么清澈，鱼儿生活得多么快乐";
        }
        if(this.lineTimer == this.refreshLine * 60 * 2){
            this.line.getComponent(cc.Label).string = "直到有一天……";
        }
        if(this.lineTimer == this.refreshLine * 60 * 3){
            this.line.getComponent(cc.Label).string = "来自外面的垃圾，侵蚀着湖水的清净";
        }
        if(this.lineTimer == this.refreshLine * 60 * 4){
            this.line.getComponent(cc.Label).string = "鱼儿不得不与它们抗争，";
        }
        if(this.lineTimer == this.refreshLine * 60 * 5){
            this.line.getComponent(cc.Label).string = "这就是那小池的往事，";
        }
        if(this.lineTimer == this.refreshLine * 60 * 6){
            this.line.getComponent(cc.Label).string = "至于那鱼儿怎样了？我们无从得知……";
        }
        if(this.lineTimer == this.refreshLine * 60 * 7){
            this.line.active = false;
        }
        this.lineTimer += 1;
    },
})