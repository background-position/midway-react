import { EntityModel } from '@midwayjs/orm';
export class Photo {
    id: number;
    email: string;
    description: string;
    nickName: string;
    password: number;
    isPublished: boolean;
}
