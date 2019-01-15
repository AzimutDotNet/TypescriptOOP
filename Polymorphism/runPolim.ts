import Student from "./student";
import Muncitor from "./muncitor";
import Supervisor from "./supervisor";

const student : Supervisor =new Supervisor( new Student());
const muncitor: Supervisor = new Supervisor(new Muncitor());