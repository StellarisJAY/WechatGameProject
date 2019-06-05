cc.Class({
    extends: cc.Component,

    properties: {
        refreshTime: {
            type: cc.Integer,
            default: 0,
        },
        monsterTimer: {
            type: cc.Integer,
            default: 0,
        },
        monsterSprite: {
            type: cc.SpriteFrame,
            default: null,
        },
        monsterNode: {
            default: null,
            type: cc.Node,
        },
        playerNode: {
            default: null,
            type: cc.Node,
        },
    },

    onLoad: function(){

    },

    update: function(dt){
        var self = this;
        var gamePause = cc.sys.localStorage.getItem("game_pause");
        var pos_x = Math.random() * 1700 - 800;
        var pos_y = Math.random() * 2600 - 1300;

        if(gamePause == 0){
            if(self.monsterTimer == 5 * 60 && (pos_x >= this.playerNode.x + 20 || pos_x <= this.playerNode.x - 20) 
            && (pos_y >= this.playerNode.y + 20 || pos_y <= this.playerNode.y - 20)){
                var node = new cc.Node("monster");
                var sp = node.addComponent(cc.Sprite);
                var collide = node.addComponent(cc.BoxCollider);
                
                sp.spriteFrame = self.monsterSprite;
                node.parent = self.monsterNode;
                node.scaleX = 0.5;
                node.scaleY = 0.5;
                collide.size = cc.size(350, 350);
                node.group = "monster";
                node.setPosition(Math.random() * 1700 - 800, Math.random() * 2600 - 1300);
                
                self.monsterTimer = 0;
            }
            self.monsterTimer += 1;
        }
    },
})