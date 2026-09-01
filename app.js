const express = require("express");
const routes = require("./src/routes/route");

const app = express();
app.use(express.json());

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"])

const router = require('./src/routes/route');
app.use('/api', router);


module.exports = app;