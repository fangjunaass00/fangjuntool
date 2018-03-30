class Block1Page1TechnologyUI extends eui.Component implements  eui.UIComponent {
	public gpMain:eui.Group;
public imgBg:eui.Image;

	private control;
	public constructor() {
		super();
		this.skinName="Block1Page1TechnologyUISkin"
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	private init() {
		this.control = new Control();
		let listData = this.control.getItemData();
		this.addEventListener(EventOpen.Page,this.openNewPage,this);
		this.initList(listData);
	}

	private initList(data) {
		console.log(data)
		var that=this;
		data.map(function (item) {
			let newListItem = new Block1ListItemUI(item);
			newListItem.x = 0;
			newListItem.y = data.indexOf(item) * 100;
			that.gpMain.addChild(newListItem);
		})
	}

	private openNewPage(e){
		console.log(e.id)

	}
	
}