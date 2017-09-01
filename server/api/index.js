var router = require('express').Router();

router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;
