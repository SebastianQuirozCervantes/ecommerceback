import express from 'express';
import makeExpressCb from '../../infrastructure/api/express-callback';
import controller from '../controllers/products';

const router = express.Router();

router.route('/')
  .get(makeExpressCb(controller.getProducts))

module.exports = router;

