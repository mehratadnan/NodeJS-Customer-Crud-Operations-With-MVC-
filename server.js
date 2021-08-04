// require needed modules
const express = require("express");
const routeCustomer = require('./routes/customerRoutes');
const app = express();
const bodyParser = require('./node_modules/body-parser');
app.use(bodyParser());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// listem to port 8080
const listener = app.listen(process.env.PORT || 8080, () => {
    console.log('App is listening on port ' + listener.address().port);
    // when request has customer prefix do routing to routeCustomer
    app.use('/customer', routeCustomer);
})

