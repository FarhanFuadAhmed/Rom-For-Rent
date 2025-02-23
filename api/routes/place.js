const express = require('express');
const router = express.Router();

const {
  addPlace,
  getPlaces,
  getPlacesWithFilter,
  updatePlace,
  singlePlace,
  userPlaces
} = require('../controllers/placeController');

router.route('/').get(getPlaces);
router.route('/search').get(getPlacesWithFilter);
router.route('/add-places').post(addPlace);
router.route('/update-place').put(updatePlace);
router.route('/user-places').get(userPlaces);
router.route('/:id').get(singlePlace);

module.exports = router;
