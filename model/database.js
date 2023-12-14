const mongoose = require("mongoose")
const config = require("../config/confidentials")
const mongoURL = config.uri
const connectmongo = () => {

    try {
      mongoose.connect(mongoURL);
      console.log("Connected succes");
    } catch (error) {
      console.log("Not Connected ")
    }
    
  };
  module.exports = connectmongo;