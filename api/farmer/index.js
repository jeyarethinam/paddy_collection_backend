let router = express.Router();
let ctrl = require('./controller');

router.get('/', ctrl.getAllFarmer);
router.post('/', ctrl.registerFarmer);
router.delete('/:id', ctrl.deleteFarmerById);

module.exports = router;
