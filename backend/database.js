const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Cliffex_Test", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(success => {
        console.log("mongodb is connected successfully");
    })
    .catch(error => {
        console.log("mongodb connection failed " + error);
    })

