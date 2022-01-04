import { useContext } from '@midwayjs/hooks';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user';
function useKoaContext() {
    return useContext<Context>();
}

export default async () => {
    return {
        message: 'Hello World',
        method: useKoaContext().method,
    };
};

export const post = async (name: string) => {
    // return { method: 'POST', name };
    // let res= UserService.save()
    console.log(UserService);

    let user = new UserService();
    user.save()
    return res;
};
