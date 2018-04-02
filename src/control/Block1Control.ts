// TypeScript file
class Control extends egret.DisplayObject {
    private pageParameter = new Block1Data();
    private messageData = new Block1Detail();
    constructor() {
        super();
        this.init();
    }

    private init() {
    }

    public getItemData(){
        return this.pageParameter.getItemData();
    }

    public getMessage(id){
         return this.messageData.getMessage(id);
    }
}