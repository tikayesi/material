import {getRepository} from "typeorm";
import UserSchema from "../entities/user.schema";

export default class UserRepository {
    userRepository() {
        return getRepository(UserSchema);
    }

    async findOne(id) {
        const user = await
            this.userRepository()
                .createQueryBuilder("user")
                .innerJoinAndSelect("user.userInfo", "userInfo")
                .where("user.userId = :id", {id: id})
                .getOne();
        return user;
    }

    async findByUserNameAndPassword(userName, password) {
        return await this.userRepository().find({
            where: {userName: userName, userPassword: password},
            relations: ["userInfo"]
        })
    }

    async findAll(skip = 0, take = 10) {
        const user = await
            this.userRepository()
                .createQueryBuilder("user")
                .innerJoinAndSelect("user.userInfo", "userInfo")
                .skip(skip)
                .take(take)
                .getMany();
        return user;
    }

    async save(data) {
        const user = this.userRepository().create(data);
        return await
            this.userRepository().save(user);
    }
}