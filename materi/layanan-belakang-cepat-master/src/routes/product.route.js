import {Router} from 'express';


const ProductRouter = Router()
    .get('/', function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send([{
            productId: '6969', productName: 'Pensil', category: {
                categoryId: '1111', categoryName: 'ATK'
            }
        },
            {
                productId: '6970', productName: 'Penghapus', category: {
                    categoryId: '1111', categoryName: 'ATK'
                }
            },
            {
                productId: '1250', productName: 'Kursi', category: {
                    categoryId: '2222', categoryName: 'Furnitur'
                }
            },
            {
                productId: '1251', productName: 'Meja', category: {
                    categoryId: '2222', categoryName: 'Furnitur'
                }
            }]);
    });

export default ProductRouter;