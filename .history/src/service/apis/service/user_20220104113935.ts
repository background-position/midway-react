import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
@Provide()
export class UserService {
    @InjectEntityModel(User)
    UserModel: Repository<User>;
    //save
    async save() {
        let user = new User();
        user.email = 'ceshi';
        user.isAdmin = true;
        user.description = 'hahahh';
        user.nick_name = 'nick_name';
        user.password = '123';
        const userResult = await this.photoModel.save(photo);
    }
}
