const status = {};
status.Ok = require('./200');
status.Created = require('./201');
status.Unauthorized = require('./401');
status.Conflict = require('./409');
status.ImATeapot = require("./418");
status.InternalServerError = require('./500');
module.exports = status;