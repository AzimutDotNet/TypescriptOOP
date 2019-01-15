class Brick{
    public color: string = "red";
    constructor(inst?:string,){
        console.log(`new ${this.color} brick created ${inst}` )
    }
}
export default Brick;