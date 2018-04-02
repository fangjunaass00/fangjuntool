class Block1Page1TechnologyUI extends eui.Component implements eui.UIComponent {
public lbBack:eui.Label;
public gpMain:eui.Group;

	private control;
	public constructor() {
		super();
		this.skinName = "Block1Page1TechnologyUISkin"
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	// 构造单例模式
	private static _instance: Block1Page1TechnologyUI;
	public static getInstance() {
		if (this._instance == null) {
			this._instance = new Block1Page1TechnologyUI();
		}
		return this._instance;
	}

	// 单例
	private _Block1Page1ShowDetailUI: Block1Page1ShowDetailUI;
	public get Block1Page1ShowDetailUI(): Block1Page1ShowDetailUI {
		if (this._Block1Page1ShowDetailUI == null) {
			this._Block1Page1ShowDetailUI = Block1Page1ShowDetailUI.getInstance();
		}
		return this._Block1Page1ShowDetailUI;
	}

	private init() {
		this.control = new Control();
		let listData = this.control.getItemData();
		this.addEventListener(EventOpen.Page, this.openNewPage, this);
		this.addEventListener(EventClose.Close, this.closePage, this);
		this.lbBack.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backMain,this);
		this.initList(listData);
	}

	private initList(data) {
		console.log(data)
		var that = this;
		var height=125;
		data.map(function (item) {
			let newListItem = new Block1ListItemUI(item);
			newListItem.x = 0;
			newListItem.y = data.indexOf(item) * 100+height;
			that.gpMain.addChild(newListItem);
		})
	}

	private openNewPage(e) {
		var messageData=this.control.getMessage(e.id);
		this.addChild(this.Block1Page1ShowDetailUI);
		this.Block1Page1ShowDetailUI.initData(e.name,messageData);


	}

	private closePage(e){
		if(e.from=="block1page1detail"){
			this.removeChild(this.Block1Page1ShowDetailUI);
		}
	}

	private backMain(){
		console.log("back")
		var event = new BackToIndex(BackToIndex.Back);
		event.from="page1";
		this.dispatchEvent(event);
	}

}