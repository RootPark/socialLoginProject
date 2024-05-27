import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { ping } from './controller/system.js';
import { deleteUserById, getAllUsers, getUserById, postUser } from './lib/userInfo.js';
import { setupSwagger } from './swagger.js';

const serverPort =  3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const router = express.Router();

router.route('/ping').get(ping);
router.route('/all-users').get(getAllUsers);
router.route('/user').get(getUserById);
router.route('/user').post(postUser);
router.route('/user').delete(deleteUserById);


app.use('/socialLoginProject/api/v1',router);
setupSwagger(app, serverPort);
app.listen(serverPort);
// http://localhost:3000/socialLoginProject/api/v1/api-docs
