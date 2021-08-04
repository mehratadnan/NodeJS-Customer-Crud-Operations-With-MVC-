const express = require('express'); 
const router  = express.Router(); 
const customerController = require('../controllers/customerController'); 

// do routing as below to customerController
router.post('/addNewCustomer', customerController.addNewCustomer);
router.post('/updateCustomer/:id', customerController.updateCustomer);
router.get('/getAllCustomer', customerController.getAllCustomer);
router.get('/deleteAllCustomer', customerController.deleteAllCustomer);
router.get('/re/deleteAllCustomer', customerController.reDeleteAllCustomer);
router.get('/getCustomer/:id', customerController.getCustomer);
router.get('/deleteCustomer/:id', customerController.deleteCustomer);
router.get('/re/deleteCustomer/:id', customerController.reDeleteCustomer);
module.exports = router;

