import Brick from './brick';
// this is an inheritance example
class PoroThermBrick extends Brick{
    public porozitate: number = 1000;
    constructor(){          
        super(); 
        
        this.color = 'alba';     
    }
}
export default PoroThermBrick;