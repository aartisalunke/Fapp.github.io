import {db} from "./Firebase_confi";
import {addDoc, collection } from "firebase/firestore";

const loginref = collection(db, "mylogin");
 class Loginservice{

 
  addlogin = (logs) =>{
    return addDoc(loginref, logs);
  } 
 }


 export default new Loginservice();