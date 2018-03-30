class Block1Page1ShowDetailUI extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName="Block1Page1ShowDetailUISkin";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private init(){
		
	}
	
}