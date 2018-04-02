// TypeScript file
class Block1Detail {
    private itemData = [
        {
            id: 1, message: [
                { type: "pic", url: "rex_png", width: "", height: "557" },
                { type: "txt", word: "所以说这是个什么情况？" }
            ]
        },{
            id: 2, message: [
                { type: "pic", url: "rex_png", width: "", height: "557" },
                { type: "pic", url: "rex_png", width: "", height: "557" },
                { type: "txt", word: "所以说这是个什么情况？" },
                { type: "pic", url: "rex_png", width: "", height: "557" },
            ]
        },{
            id: 3, message: [
                { type: "pic", url: "rex_png", width: "", height: "557" },
                { type: "txt", word: "所以说这是个什么情况？" }
            ]
        },

    ]

    public getMessage(number){
        let postdata;
        this.itemData.map(function(item){
            if(item.id==number){
                console.log(item)
                postdata= item;
            }
        })

        return postdata;
    }



}