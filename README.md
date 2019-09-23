This is a nodejs-express-mongodb application.

** Following API are used for API-Project:
 - Add Customer - http://localhost:3001/addCustomer
 - Update Customer - http://localhost:3001/updateCustomer/:id
 - Remove Customer - http://localhost:3001/removeCustomer/:id
 - Get Customers - http://localhost:3001/getCustomers

You have to Perform all the following steps in the given sequence for Installing this project.

**Install Nodejs - Ubuntu Machine**

$ sudo apt-get install nodejs-legacy

**Install Mongodb**

- Ubuntu Machine
$ sudo apt-get install mongodb

Step 1: Add NodeJs PPA. First you need to node.js ppa in our system provide by nodejs official website.

Step 2: Install Node.js and NPM. After adding required PPA file, lets install Nodejs package.

	$ sudo apt-get update
	$ sudo apt-get install nodejs
	$ sudo apt-get install npm

Step 3: Check Node.js and NPM Version

	$ node --version
	$ npm --version

Step 4: Install mongodb

	$ sudo apt-get install -y mongodb-org

Step 5: Install mongoose

	$ npm install mongoose

Step 6: Install node dependencies

    $ npm install

Step 7: To start project use following command.

	$ npm start

Handle Error and Success data

- Response:
{
    "error": {
        "status": true/false
    },
    "data": {
        "data": {
            "message": ""
        }
    }
}
