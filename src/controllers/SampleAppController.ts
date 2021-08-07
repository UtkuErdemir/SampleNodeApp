import {Request,Response} from 'express';
import SampleAppService from '../services/SampleAppServices';
import User from '../models/User'
export default function SampleAppController(app:any, service:SampleAppService){
    app.get('/login', function(req:Request, res:Response){
        const {username, password} = req.query;
        const _username = username?.toString() ?? "";
        const _password = password?.toString() ?? "";
        const user = new User(_username,_password);
        res.send({
            ...service.login(user)
        });
    });
    app.post('/register', function(req:Request, res:Response){
        const {username, password} = req.query;
        const _username = username?.toString() ?? "";
        const _password = password?.toString() ?? "";
        const user = new User(_username,_password);
        res.send({
            ...service.register(user)
        });
    });
    app.delete('/delete/:username', function(req:Request, res:Response){
        const {username} = req.params;
        res.send({
            ...service.delete(username)
        });
    });

    app.get('/list', function(req:Request, res:Response){
        res.send({
            ...service.list()
        });
    });
}