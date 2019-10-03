//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://em:x10d21@cluster0-8dszl.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '51aa4318116c46f4b79d7c93585dd2f3' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};