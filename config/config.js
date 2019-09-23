var config = {
    development: require('./environments/development')
};
module.exports = config[process.env.NODE_ENV || 'development'];