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

	public init() {
		this.imgTec.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToTec, this);
		this.imgWork.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToWork, this);
		this.imgAttention.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToAtt, this);
		this.imgOwner.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goToOwn, this);

		this.block1=new Block1Page1TechnologyUI();

	}

	private goToTec() {
		this.addChild(this.block1);
	}
	private goToWork() {
		let event = new EventJump(EventJump.Jump);
		event.number = "page2";
		this.dispatchEvent(event);
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

}