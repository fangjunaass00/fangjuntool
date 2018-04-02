class Block1Page1ShowDetailUI extends eui.Component implements eui.UIComponent {
	public lbBack: eui.Label;
	public lbTitle: eui.Label;
	public gpContent: eui.Group;

	public constructor() {
		super();
		this.skinName = "Block1Page1ShowDetailUISkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	// 构造单例模式
	private static _instance: Block1Page1ShowDetailUI;
	public static getInstance() {
		if (this._instance == null) {
			this._instance = new Block1Page1ShowDetailUI();
		}
		return this._instance;
	}

	private init() {
		this.lbBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closePage, this);
	}


	public initData(name, obj) {
		this.lbTitle.text = name;
		var contentHeight = 0;
		var that=this;
		this.gpContent.removeChildren();
		obj.message.map(function (item) {
			if (item.type == "pic") {
				let messageImg = new egret.Bitmap(RES.getRes(item.url));
				messageImg.x = 0;
				messageImg.y = contentHeight;
				contentHeight += (+10 + (+item.height));
				console.log(contentHeight)
				that.gpContent.addChild(messageImg);
			} else {
				var textField = new egret.TextField();
				that.gpContent.addChild(textField);
				textField.y = contentHeight;
				textField.width = 640;
				textField.height = 30;
				contentHeight += (40);
				textField.text=item.word;
				textField.textColor=0x000000;
				textField.size=20;
				console.log(item.word)
			}
		});

		this.gpContent.height=contentHeight;

	}

	private closePage() {
		let event = new EventClose(EventClose.Close);
		event.from = "block1page1detail";
		this.dispatchEvent(event);
	}

}