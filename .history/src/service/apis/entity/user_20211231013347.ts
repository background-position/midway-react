import { EntityModel } from '@midwayjs/orm';
import { Column } from 'typeorm';
@EntityModel('user')
export class User {
    id: number;
    email: string;
    description: string;
    nickName: string;
    password: number;
    isPublished: boolean;
}
