cc.Class({
    extends: cc.Component,

    properties: {
        startButton: {
            type: cc.Button,
            default: null,
        },
        rankButton: {
            type: cc.Button,
            default: null,
        },
        rankList: {
            type: cc.Node,
            default: null,
        },
        exitRank: {
            type: cc.Button,
            default: null,
        },
        label1: {
            type: cc.Node,
            default: null,
        },
        label2: {
            type: cc.Node,
            default: null,
        },
        buttonBoy: {
            type: cc.Button,
            default: null,
        },
        developerButton: {
            type: cc.Button,
            default: null,
        },
        exitDeveloper: {
            type: cc.Button,
            default: null,
        },
        developerMenu: {
            type: cc.Node,
            default: null,
        },
    },
    onLoad: function(){
        var self = this;

        cc.director.preloadScene("main");
        cc.director.preloadScene("gameOver");
        self.rankList.active = false;
        self.label2.active = false;
        self.developerMenu.active = false;
        self.startButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            cc.director.loadScene("main");
        });
        self.rankButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            self.rankList.active = true;
        });
        self.exitRank.node.on(cc.Node.EventType.TOUCH_START, function(event){
            self.rankList.active = false;
        });
        self.buttonBoy.node.on(cc.Node.EventType.TOUCH_START, function(event){
            self.label1.active = false;
            self.label2.active = true;
        });
        self.buttonBoy.node.on(cc.Node.EventType.TOUCH_END, function(event){
            self.label1.active = true;
            self.label2.active = false;
        });
        self.exitDeveloper.node.on(cc.Node.EventType.TOUCH_START, function(event){
            self.developerMenu.active = false;
        });
        self.developerButton.node.on(cc.Node.EventType.TOUCH_START, function(event){
            self.developerMenu.active = true;
        });
        
    },
})