import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryColumn } from 'typeorm';
@EntityModel('user')
export class User {
    @PrimaryColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    description: string;
    @Column()
    nick_name: string;
    @Column()
    password: number;
    @Column()
    isPublished: boolean;
}
