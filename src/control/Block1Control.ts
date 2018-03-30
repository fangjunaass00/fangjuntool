// TypeScript file
class Control extends egret.DisplayObject {
    private pageParameter = new Block1Data();
    constructor() {
        super();
        this.init();
    }

    private init() {
    }

    public getItemData(){
        return this.pageParameter.getItemData();
    }
}