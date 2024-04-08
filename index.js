import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { ping } from './controller/system.js';

const serverPort =  3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const router = express.Router();

router.route('/ping').get(ping);

app.use('/socialLoginProject/api/v1',router);
app.listen(serverPort);
// http://localhost:3000/socialLoginProject/api/v1/ping
