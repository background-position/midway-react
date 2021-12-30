import { hooks, createConfiguration } from '@midwayjs/hooks';
import bodyParser from 'koa-bodyparser';
import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { join } from 'path';
import * as sequlize from '@midwayjs/sequelize';
import * as orm from '@midwayjs/orm';
@Configuration({
    imports: [
        hooks({
            middleware: [bodyParser()],
        }),
        ,
        sequlize,
        orm,
    ],
    importConfigs: [join(__dirname, '../config.default.ts')],
})
export class ContainerLifeCycle implements ILifeCycle {
    @App()
    app;
    async onReady() {
        console.log('ready');
    }
}
