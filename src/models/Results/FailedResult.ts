import Result from "./BaseResult";

export default class SuccessResult extends Result{
    constructor(public message:string){
        super(true, message);
    }
}