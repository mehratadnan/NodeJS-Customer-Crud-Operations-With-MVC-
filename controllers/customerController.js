var Customer = require('../model/customer');
var db = require('../DAO/dbConnection');


//add New Customer
const addNewCustomer = (req, res, next) => {
    new Customer(req.body).save();
    res.json({data:  "customer  added"});
}

//update Customer by id 
const updateCustomer = (req, res, next) => {
    req.body.costumer_id = req.params.id; 
    new Customer(req.body).update();
    res.json({data:  "customer updated"});
};

//delete All Customer
const deleteAllCustomer = (req, res, next) => {
    new Customer(req.body).deleteAll(res);
};

//reDelete All Customer
const reDeleteAllCustomer = (req, res, next) => {
    new Customer(req.body).reDeleteAll(res);
};

//delete Customer by id 
const deleteCustomer = (req, res, next) => {
    new Customer({costumer_id:req.params.id}).deleteOne(res);
};

//reDelete Customer by id 
const reDeleteCustomer = (req, res, next) => {
    new Customer({costumer_id:req.params.id}).reDeleteOne(res);
};

//get Customer by id
const getCustomer = (req, res, next) => {
    new Customer({costumer_id:req.params.id}).getCustomer(res);
};

//get All Customer
const getAllCustomer = (req, res, next) => {
    new Customer({costumer_id:req.params.id}).getAllCustomer(res);
};


//export controller functions
module.exports = {
    getAllCustomer, 
    updateCustomer,
    addNewCustomer,
    deleteAllCustomer,
    getCustomer,
    deleteCustomer,
    reDeleteCustomer,
    reDeleteAllCustomer,
};