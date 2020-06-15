import {Router} from 'express';


const OutletRouter = Router()
    .get('/', function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send([{outletId: '1111', outletName: 'Toko Pascal'}, {outletId: '2222', outletName: 'Toko Izmi'}]);
    })

    .post('/', function (req, res) {
        let outletId = req.body.outletId;
        let outletName = req.body.outletName;
        res.set('Content-Type', 'application/json');
        res.send({status:'ok',outletId: outletId, outletName: outletName});
    })

export default OutletRouter;