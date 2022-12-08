import Express from 'express';
import SearchController from '../controller/Search.controller.js';

const router = Express.Router({mergeParams: true})

router.get('/search', SearchController.Search)

export default router;