import ProductSchema from "../entities/product.schema";
import {createConnection, getConnection, getRepository, Table} from "typeorm";
import UserSchema from "../entities/user.schema";
import CategorySchema from "../entities/category.schema";
import UserInfoSchema from "../entities/userInfo.schema";

export const init = async () => {
    const connection = await createConnection({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        synchronize: true,
        entities: [UserSchema, UserInfoSchema, CategorySchema, ProductSchema]
    });
    // await createTable(connection);
    await initData();
};

// const createTable = async (connection) => {
//     const queryRunner = connection.createQueryRunner();
//     await queryRunner.createTable(new Table({
//         name: "master_user",
//         columns: [
//             {
//                 name: "userId",
//                 type: "varchar",
//                 isPrimary: true
//             },
//             {
//                 name: "userName",
//                 type: "varchar",
//             },
//             {
//                 name: "userPassword",
//                 type: "varchar"
//             }
//         ]
//     }), true);
//     await queryRunner.createTable(new Table({
//         name: "master_user_info",
//         columns: [
//             {
//                 name: "id",
//                 type: "int",
//                 isPrimary: true
//             },
//             {
//                 name: "address",
//                 type: "varchar"
//             }
//         ]
//     }), true);
//     await queryRunner.createTable(new Table({
//         name: "master_product",
//         columns: [
//             {
//                 name: "id",
//                 type: "int",
//                 isPrimary: true
//             },
//             {
//                 name: "productId",
//                 type: "varchar"
//             },
//             {
//                 name: "productName",
//                 type: "varchar"
//             },
//             {
//                 name: "price",
//                 type: "int"
//             },
//             {
//                 name: "categoryId",
//                 type: "int"
//             }
//         ]
//     }), true);
//     await queryRunner.createTable(new Table({
//         name: "master_category",
//         columns: [
//             {
//                 name: "id",
//                 type: "int",
//                 isPrimary: true
//             },
//             {
//                 name: "categoryId",
//                 type: "varchar"
//             },
//             {
//                 name: "categoryName",
//                 type: "varchar"
//             }
//         ]
//     }), true);
// };

const initData = async () => {
    await  getRepository(UserSchema).save({
        userName: 'edo',
        userPassword: 'edo',
        userFullName: 'edo'
    });
    await  getRepository(CategorySchema).save({
        id: 1,
        categoryId: 'ABC',
        categoryName: 'A B C'
    });
    await  getRepository(ProductSchema).save({
        id: 1,
        productId: 'XYZ',
        productName: 'X Y Z',
        price: 0,
    });
};

export const clearance = () => {
    let conn = getConnection();
    return conn.close();
};

describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
});