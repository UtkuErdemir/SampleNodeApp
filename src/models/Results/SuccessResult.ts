import Result from "./BaseResult";

export default class SuccessResult extends Result{
    constructor(public message:string, public data?:any){
        super(false, message);
    }
}