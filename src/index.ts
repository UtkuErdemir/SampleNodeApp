import { Request, Response } from "express";
import * as dotenv from 'dotenv';
const cors = require('cors');
const helmet = require("helmet");
const compression = require('compression');
const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
import createRoutes from "./utils/routesCreate";


dotenv.config();
declare global {
  namespace Express {
    interface Request {
      userData: string;
    }
  }
}

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT,process.env.IP, function() {
    console.log(`Server is running on port http://${process.env.IP}:` + process.env.PORT);
});
app.get('/', async(req:Request, res:Response) => {
  res.status(404).send("<h2 align=center style='margin-top:10%'>404</h2><h4 align=center>Sayfa Bulunamadı.</h4>")
});

createRoutes(app);