const config = {
    PORT: 4000,
    DB_URI: `mongodb://admin:x4s7q3LOFCQL1BEw@cluster0-shard-00-00.sglwt.mongodb.net:27017,cluster0-shard-00-01.sglwt.mongodb.net:27017,cluster0-shard-00-02.sglwt.mongodb.net:27017/MoviesDB?ssl=true&replicaSet=atlas-schyxj-shard-0&authSource=admin&retryWrites=true&w=majority`,
    SALT_ROUNDS: 10,
    SECRET: 'MNOGOQKASOL',
    COOKIE_NAME: 'TOKEN'
};

module.exports = config;