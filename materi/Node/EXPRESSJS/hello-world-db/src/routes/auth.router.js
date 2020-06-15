import {Router} from "express";
import AuthService from "../services/auth.service";
import {log} from '../logger';

const AuthRouter = Router()
    .post('/', async (req, res) => {
        let user = {...req.body};
        const userInfo = await new AuthService().doAuth(user);
        if (userInfo.length > 0) {
            req.session.name = JSON.stringify(userInfo);
            log.info({transType: 'USERAUTH-SUCCESS'}, userInfo);
            res.json({message: 'Successfully Authenticated'});
        } else {
            log.error({transType: 'USERAUTH-FAILED'}, user);
            res.sendStatus(401);
        }

    });

export default AuthRouter;