const router = require('express').Router();

const {contactUsController} = require('../controllers/ContactUs')

router.post('/contact',contactUsController);


module.exports = router