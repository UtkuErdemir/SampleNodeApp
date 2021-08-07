import SampleAppController from "../controllers/SampleAppController";
import Store from "../in-memory-store/InMemoryStore";
import SampleAppService from "../services/SampleAppServices";

export default function createRoutes(app:any){
    SampleAppController(app, new SampleAppService(Store.instance));
}