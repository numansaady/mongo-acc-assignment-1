const express = require('express');
const userController = require('../../controllers/userController');
const viewCount = require('../../middleware/viewCount');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Product found');
// });

// router.post('/', (req, res) => {
//   res.send('Product added');
// });

router.route('/random').get(userController.getARandomUser);
router.route('/all').get(userController.getAllUser)
router.route('/save').post(userController.saveAnUser);  
router.route('/update/:id').patch(userController.updateSingleUser);
router.route('/delete/:id').delete(userController.deleteAUser);

module.exports = router;