class Block1ListItemUI extends eui.Component implements  eui.UIComponent {
	public lbName:eui.Label;

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
		this.lbName.text=this.parameter.name;
		
	}

	private openDetail(){
		var event = new EventOpen(EventOpen.Page);
		event.id=this.parameter.id;
		event.name=this.parameter.name;
		this.dispatchEvent(event);
		
	}
	
}