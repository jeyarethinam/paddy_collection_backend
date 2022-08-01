let router = express.Router();
let ctrl = require('./controller');

router.get('/', ctrl.dashboard);
module.exports = router;
