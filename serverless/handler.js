"use strict";

const { putUsersInDB } = require("./controller/putUsersInDB");
const { userDetail } = require("./controller/userDetail");

module.exports.userDetail = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return userDetail(event, context, callback);
};

module.exports.putUsersInDB = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return putUsersInDB(event, context, callback);
};
