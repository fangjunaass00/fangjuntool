// TypeScript file
class EventJump extends egret.Event {
    public static Jump: string = "Jump";
    public number:string;
    public constructor(type: string, bubbles: boolean = true, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }
}

class EventOpen extends egret.Event{
    public static Page: string = "Page";
    public id:string;
    public name:string;
    public constructor(type: string, bubbles: boolean = true, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }
}

class EventClose extends egret.Event{
    public static Close: string = "Close";
    public from:string;
    public name:string;
    public constructor(type: string, bubbles: boolean = true, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }
}

class BackToIndex extends egret.Event{
    public static Back: string = "Back";
    public from:string;
    public name:string;
    public constructor(type: string, bubbles: boolean = true, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }
}




