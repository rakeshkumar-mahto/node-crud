var express = require('express'),
    app = express(),
    appConfig = require('../config/config'),
    model = require('../models/index'),
    request = require('request'),
    error = require('../helpers/error-constants');


/**
 * @api {post} /customer/addCustomer to add customer
 *
 * @apiGroup Customer
 * @apiVersion 1.0.0
 *
 */
createCustomer = (req, res) => {
    model.Customer.createCustomer(req.body, (err, customer) => {
        if (err) {
             res.status(400).send({ 'error': true, 'message': error.DATABASE_ERROR });
        } else {
             res.status(200).send({ 'success': true, 'data': customer });
        }
    });
};


/**
 * @api {put} /customer/updateCustomer to update customer
 *
 * @apiGroup Customer
 * @apiVersion 1.0.0
 *
 */
updateCustomer = (req, res) => {
    const {
        params: {id},
        body: {
            name,
            phone,
            email,
            company,
            street1,
            street2,
            city,
            state,
            postalCode,
        }
    } = req;
    model.Customer.getCustomerById(id, (err, customerInfo) => {

        if (err) {
            res.status(400).send({ 'error': true, 'message': error.DATABASE_ERROR });
        } else {
            if (!customerInfo) {
                res.status(101).send({ 'error': true, 'message': error.INVALID_CUSTOMER });
            } else {
                customerInfo.name = name;
                customerInfo.company = company;
                customerInfo.street1 = street1;
                customerInfo.street2 = street2;
                customerInfo.city = city;
                customerInfo.state = state;
                customerInfo.postalCode = postalCode;
                customerInfo.phone = phone;
                customerInfo.phone = phone;
                customerInfo.save(err => {
                    if (err) {
                        res.status(400).send({ 'error': true, 'message': error.DATABASE_ERROR });
                    } else {
                        res.status(200).send({ 'success': true, 'data': customerInfo });
                    }
                });
            }
        }
    });
};


/**
 * @api {Get} /customer/getCustomerList to get all customer
 *
 * @apiGroup Customer
 * @apiVersion 1.0.0
 *
 */

getCustomerList = (req) => {
    return new Promise((resolve, reject) => {
        const {
            body: {
                limit,
                page_no: pageNumber,
                key = 0,
                order = 1,
                pattern
            }
        } = req;

        const fetchInfo = {pageNumber, limit, key, order, pattern};
        model.Customer.getAllCustomerList(fetchInfo, (err, customers) => {
            if (err) {
                reject(err);
            } else {
                resolve(customers);
            }
        });
    })
}


/**
 * @api {put} /customer/removeCustomer to remove customer
 *
 * @apiGroup Customer
 * @apiVersion 1.0.0
 *
 */
removeCustomer = (req, res) => {
    const {
        params: {id},
    } = req;
    model.Customer.removeCustomerById(id, (err, customerInfo) => {
        if (err) {
            res.status(400).send({ 'error': true, 'message': error.DATABASE_ERROR });
        } else {
            res.status(200).send({ 'success': true, 'Customer removed successfully' });
        }
    });
};

