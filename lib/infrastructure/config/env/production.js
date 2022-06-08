module.exports = {
    PORT: process.env.NODE_PORT || 3000,
    DB: {
      TYPE: 'mysql',
      USERNAME: 'bsale_test',
      PSW_KEY: 'bsale_test',
      HOST: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      NAME: 'bsale_test',
      PORT: 3306,
      SYNC: false,
      LOG: true,
    },
  }