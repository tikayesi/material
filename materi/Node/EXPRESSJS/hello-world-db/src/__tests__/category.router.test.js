import request from 'supertest';
import {server} from "../server";
import {Table} from "typeorm";
import {clearance, init} from './initializeTest';

server.listen(process.env.APP_PORT);
const userCredentials = {
    userName: 'edo',
    userPassword: 'edo'
};
var authenticatedUser = request.agent(server);
beforeAll(async (done) => {
    await init();
    authenticatedUser
        .post('/auth')
        .send(userCredentials)
        .end((err, response) => {
            expect(response.statusCode).toEqual(200);
            done();
        });
});
afterAll(async (done) => {
    await clearance();
    done();
});

describe('Category Router Test', () => {
    it('should call /', (done) => {
        authenticatedUser
            .get('/category')
            .end((err, response) => {
                expect(response.statusCode).toEqual(200);
                expect(response.body).toEqual([
                    {id: 1, categoryId: 'ABC', categoryName: 'A B C'}
                ]);
                done();
            });
    })
});