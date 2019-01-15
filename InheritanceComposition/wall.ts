import PoroThermBrick from './porotermBrick';

export class Wall {
    build(): void {
        let runtime: number = 0
        for(var i:number = 1; i< this.wallHeight; i++){
            for (var j:number = 0; j<this.wallWidth; j++){
                runtime++
                const inst ='Instance ' + runtime;
                var brick : PoroThermBrick = new PoroThermBrick();
            }
        }
    }
    public wallWidth: number = 0;
    public wallHeight: number = 0;
    constructor(w: number, h: number) {
        this.wallWidth = w;
        this.wallHeight = h;
        this.build();
    }
}
export default Wall;