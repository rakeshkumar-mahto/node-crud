var Express = require('express'),
    Router = Express.Router(),
    customerController = require('../controllers/customer.controller');

Router.route('/addCustomer').all().post(customerController.createCustomer);
Router.route('/updateCustomer/:id').all().put(customerController.updateCustomer);
Router.route('/removeCustomer/:id').all().delete(customerController.removeCustomer);
Router.route('/getCustomers').all().get(customerController.getCustomerList);


module.exports = Router;