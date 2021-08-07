import User from '../models/User'
export default class Store{
    private static _instance:any;
    private datas: User[];
    private constructor(){
        this.datas = [];
    }
    
    static get instance(): Store{
        this._instance = this._instance ? this._instance : new Store();
        return this._instance;
    }

    getUserWithUserNameAndPassword(user:User){
        return this.datas.find(({username,password})=>user.username===username && user.password == password)
    }

    saveData(user:User){
        this.datas.push(user);
        return this.isInserted(user);
    }

    deleteWithUserName(username:string){
        return this.datas.splice(this.datas.findIndex((user)=>user.username == username),1);
    }

    list(){
        return [
            ...this.datas
        ]
    }

    isInserted(user:User){
        return this.datas.some(({username})=>username==user.username)
    }
}