export const sequelize = {
    options: {
        database: 'web-s',
        username: 'wwglcc',
        password: 'Ww123456',
        host: 'rm-bp1221d19je7k9n5dso.mysql.rds.aliyuncs.com',
        port: 3306,
        encrypt: false,
        dialect: 'mysql',
        define: { charset: 'utf8' },
        logging: console.log,
        synchronize: true,
    },
};
