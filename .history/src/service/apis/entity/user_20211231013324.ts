import { EntityModel } from '@midwayjs/orm';
@EntityModel('user')
export class User {
    id: number;
    email: string;
    description: string;
    nickName: string;
    password: number;
    isPublished: boolean;
}
