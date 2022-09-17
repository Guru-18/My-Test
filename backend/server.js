const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

require("./database");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routing
const productRoute = require("./routes/productRoute");

app.use("/api", productRoute);

app.listen(5000, () => {
    console.log("server started on port 5000");
});