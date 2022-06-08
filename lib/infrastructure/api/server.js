import express from 'express';
import routes from '../../interfaces/routes';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createNamespace } from 'cls-hooked';
const compression = require('compression');

const namespace = createNamespace('session');

const createServer = async () => {
  function handleContext(req, res, next) {
    namespace.bindEmitter(req);
    namespace.run(function () {
      next();
      //Require Cors
      res.setHeader('Access-Control-Allow-Origin',
        '*');
      //End Cors
    });
  }
  const app = express();
  app.use(cors());
  app.use(compression());
  app.use(bodyParser.json({ limit: '50mb', extended: true }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(handleContext);
  const env = process.env.NODE_ENV === 'dev' ? '/api' : '/' + process.env.NODE_ENV;

  app.use(`${env}`,
    routes);
  if (!process.env.PORT) {
    process.env.PORT = 3001;
  }
  return app.listen(process.env.PORT);
};

module.exports = createServer;
