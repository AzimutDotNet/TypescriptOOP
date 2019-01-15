import IWork from "./iWork";

class Supervisor{
    constructor(worker: IWork){
        worker.work();
    }
}
export default Supervisor;