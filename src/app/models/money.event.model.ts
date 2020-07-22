export class MoneyEventModel{
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    

    private _amount : number;
    public get amount() : number {
        return this._amount;
    }
    public set amount(v : number) {
        this._amount = v;
    }

    
    private _description : string;
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }

    
    private _isHovered : boolean;
    public get isHovered() : boolean {
        return this._isHovered;
    }
    public set isHovered(v : boolean) {
        this._isHovered = v;
    }
    
    
    constructor(id : number, amount : number, description : string) {
        this._id = id;
        this._amount = amount;
        this._description = description;

        
    }
}