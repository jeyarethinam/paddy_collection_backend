let router = express.Router();
let ctrl = require('./controller');

router.get('/all', ctrl.getAllUsers);
router.post('/login', ctrl.login);
router.post('/register', ctrl.register);
router.put('/forgetPassword', ctrl.forgetPassword);
router.put('/changePassword', ctrl.changePassword);
module.exports = router;
