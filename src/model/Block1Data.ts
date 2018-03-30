// TypeScript file
class Block1Data{
    private itemData=[
        {id:1,name:"Es6如何遍历数组？",count:0},
        {id:2,name:"如何创建函数？",count:0},
        {id:3,name:"如何创建函数？",count:4},
    ]


    public getItemData(){
        var sortedArr = this.itemData.sort((a, b) => a.count < b.count ? 1 : -1);
        return sortedArr;
     }
    
}