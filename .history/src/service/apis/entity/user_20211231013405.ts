import { EntityModel } from '@midwayjs/orm';
import { Column } from 'typeorm';
@EntityModel('user')
export class User {
    @Column()
    id: number;
    @Column()
    email: string;
    @Column()
    description: string;
    @Column()
    nickName: string;
    @Column()
    password: number;
    @Column()
    isPublished: boolean;
}
