let router = express.Router();
let ctrl = require('./controller');

router.get('/:id', ctrl.getCollectionCenterByID);
// router.get('/allpaddyType', ctrl.getAllPaddyType);
// router.post('/', ctrl.addCollection);
// router.delete('/:id', ctrl.deleteCollectionById);
// router.post('/addPaddyType', ctrl.addPaddyType);


module.exports = router;
