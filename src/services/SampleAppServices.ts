import FailedResult from "../models/Results/FailedResult";
import SuccessResult from "../models/Results/SuccessResult";
import Store from "../in-memory-store/InMemoryStore";
import User from "../models/User";

export default class SampleAppService{
    constructor(private store:Store){
    }

    login(user:User){
        const validation = this.validateUser(user);
        if(!validation) return new FailedResult("Giriş Başarısızdır.");
        else if(this.store.getUserWithUserNameAndPassword(user)) return new SuccessResult("Giriş Başarılıdır.")
        else return new FailedResult("Giriş Başarısızdır.");
    }

    register(user:User){
        const validation = this.validateUser(user);
        if(!validation) return new FailedResult("Doğrulama hatası.");
        else if(!this.store.isInserted(user) && this.store.saveData(user)) 
        return new SuccessResult("Kayıt Başarılı.");
        return  new FailedResult("Kayıtlı kullanıcı.");
    }
    
    delete(username:string){
        if(!username) return new FailedResult("Doğrulama hatası.");
        else this.store.deleteWithUserName(username) 
        return new SuccessResult("İşlem Başarılı.");
    }

    list(){
        return new SuccessResult("İşlem Başarılı.",this.store.list());
    }

    private validateUser(user:User){
        const {username,password} = user;
        if(!username || !password) return false;
        else return true;
    }
}