let router = express.Router();
let ctrl = require('./controller');

router.get('/', ctrl.getAllFamily);

module.exports = router;
