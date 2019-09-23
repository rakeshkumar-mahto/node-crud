var Mongoose = require('mongoose'),
    ObjectId = Mongoose.Types.ObjectId;
const Promise = require(`bluebird`);
// Customer schema
var CustomerSchema = Mongoose.Schema({
    name: {
        type: String
    },
    company: {
        type: String
    },
    street1: {
        type: String
    },
    street2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    postalCode: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
}, {timestamps: true});

var Customer = Mongoose.model('Customer', CustomerSchema);

/**
 * Method to get all Customer.
 * @param callback
 */
Customer.getAllCustomer = (callback) => {
    Customer.find({}, callback);
};

Customer.createCustomer = (newCustomer, callback) => {
    Customer.save(newCustomer, callback);
};

// Create Customer
Customer.createCustomers = (newCustomer, callback) => {
    Customer.insertMany(newCustomer, callback);
};

/**
 * Method to get customer by id.
 * @param userId
 * @param callback
 */
Customer.getCustomerById = (custId, callback) => {
    Customer.findById(custId).exec(callback);
};

// Search Customer or get all customer
Customer.getAllCustomerList = (fetchInfo, callback) => {

    let {pageNumber, limit, key, order, pattern} = fetchInfo;
    let condition = {};
    if (pattern) {
        Object.assign(condition, {
            'name': new RegExp(pattern, `i`)
        })
    }
    const query = [
        {
            $match: condition
        },
    ];
    Promise.props({
        customers: Customer.aggregate(query)
            .skip((pageNumber - 1) * limit)
            .limit(limit),
        total: Customer.aggregate(query.concat({$count: `total`}))
    }).then(results => {
        callback(null, results);
    }).
    catch(err => {
        callback(err, null);
    });
};

/**
 * Method to remove customer by id.
 * @param userId
 * @param callback
 */
Customer.removeCustomerById = (custId, callback) => {
    Customer.remove({'_id':custId}).exec(callback);
};

module.exports = Customer;