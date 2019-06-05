cc.Class({
    extends: cc.Component,

    properties: {
        junkSprite: {
            type: [cc.SpriteFrame],
            default: [],
        },
        count: {
            type: cc.Integer,
            default: 0,
        },
        junkNode: {
            type: cc.Node,
            default: null,
        },
        junkTimer: {
            type: cc.Integer,
            default: 0,
        },
        refreshTime: {
            type: cc.Integer,
            default: 0,
        },
    },

    onLoad: function(){
        var self = this;
        
        self.junkTimer += 1;
    },

    start: function(){
        var self = this;

        self.refreshTime = Math.round(Math.random() * 4 + 1);
    },

    update: function(dt){
        var self = this;
        var game_pause = cc.sys.localStorage.getItem('game_pause');
        if(game_pause == 0){
            if(self.junkTimer == self.refreshTime * 60){
                self.refreshTime = Math.round(Math.random() * 4 + 1);
                self.count += 1;
                self.junkTimer = 0;
                
                var node = new cc.Node('junk ' + self.count);
                var sp = node.addComponent(cc.Sprite);
                var collide = node.addComponent(cc.BoxCollider);
     
                sp.spriteFrame = self.junkSprite[Math.round(Math.random() * 2)];
                node.parent = self.junkNode;
                node.scaleX = 0.25;
                node.scaleY = 0.25;

                collide.size = cc.size(200, 200);
                node.group = "junk";
                node.setPosition(Math.random() * 1700 - 800, Math.random() * 2600 - 1300);
            }
            self.junkTimer += 1;
            
        }
    },
})