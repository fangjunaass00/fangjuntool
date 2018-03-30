class Block1ListItemUI extends eui.Component implements  eui.UIComponent {
	private parameter;
	public constructor(obj) {
		super();
		this.skinName="Block1ListItemUISkin";
		this.parameter=obj;
		this.init();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		
	}

	private init(){
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openDetail,this);
		
	}

	private openDetail(){
		var event = new EventOpen(EventOpen.Page);
		event.id=this.parameter.id;
		this.dispatchEvent(event);
		
	}
	
}