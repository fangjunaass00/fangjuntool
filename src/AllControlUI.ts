class AllControlUI extends eui.Component implements eui.UIComponent {
	public imgTec: eui.Image;
	public imgWork: eui.Image;
	public imgAttention: eui.Image;
	public imgOwner: eui.Image;


	private block1;
	private block2;
	private block3;
	private block4;
	public constructor() {
		super();
		this.skinName = 'AllControlUISkin';
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	// 单例
	private _Block1Page1TechnologyUI: Block1Page1TechnologyUI;
	public get Block1Page1TechnologyUI(): Block1Page1TechnologyUI {
		if (this._Block1Page1TechnologyUI == null) {
			this._Block1Page1TechnologyUI = Block1Page1TechnologyUI.getInstance();
		}
		return this._Block1Page1TechnologyUI;
	}

	private _BusinessFunctionUI: BusinessFunctionUI;
	public get BusinessFunctionUI(): BusinessFunctionUI {
		if (this._BusinessFunctionUI == null) {
			this._BusinessFunctionUI = BusinessFunctionUI.getInstance();
		}
		return this._BusinessFunctionUI;
	}

	public init() {
		this.imgTec.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToTec, this);
		this.imgWork.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToWork, this);
		this.imgAttention.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToAtt, this);
		this.imgOwner.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToOwn, this);

		this.addEventListener(BackToIndex.Back, this.closeAllPage, this);

		

	}

	private goToTec() {
		this.addChild(this.Block1Page1TechnologyUI);
	}
	private goToWork() {
		this.addChild(this.BusinessFunctionUI);
	}
	private goToAtt() {
		let event = new EventJump(EventJump.Jump);
		event.number = "page3";
		this.dispatchEvent(event);
	}
	private goToOwn() {
		let event = new EventJump(EventJump.Jump);
		event.number = "page4";
		this.dispatchEvent(event);
	}

	private closeAllPage(e) {
		console.log("被执行")
		switch (e.from) {
			case "page1":
				this.removeChild(this.Block1Page1TechnologyUI); break;
			case "page2":
				this.removeChild(this.BusinessFunctionUI); break;
			case "page3":
				this.removeChild(this.block3); break;
			case "page4":
				this.removeChild(this.block4); break;
		}

	}

}