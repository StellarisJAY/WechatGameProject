cc.Class({
    extends: cc.Component,

    properties: {
        restartButton: {
            default: null,
            type: cc.Button,
        },
        menuButton: {
            default: null,
            type: cc.Button,
        },
        shareButton: {
            default: null,
            type: cc.Button,
        },
    },

    onLoad: function(){
        var self = this;

        self.restartButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            cc.director.loadScene("main");
        });
        self.menuButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            cc.director.loadScene("startMenu");
        });
    },
})