class BusinessFunctionUI extends eui.Component implements eui.UIComponent {
	public gpBusiness: eui.Group;
	public gpNote: eui.Group;

	public constructor() {
		super();
		this.skinName = "BusinessFunctionUISkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	// 构造单例模式
	private static _instance: BusinessFunctionUI;
	public static getInstance() {
		if (this._instance == null) {
			this._instance = new BusinessFunctionUI();
		}
		return this._instance;
	}

	private init() {
		this.gpBusiness.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goBusiness, this);
		this.gpNote.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNote, this);
	}

	private goBusiness() {

	}

	private goNote() {

	}

}