import express from 'express';
import makeExpressCb from '../../infrastructure/api/express-callback';
import controller from '../controllers/categories';

const router = express.Router();

// Define routes initialized with '/categories'
router.route('/')
  .get(makeExpressCb(controller.getCategoriesWithProducts))

module.exports = router;

