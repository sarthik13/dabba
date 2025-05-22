const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const MasterSchema = new Shema({
    email : {type : String, require : true},
    password : {type : String, require : true}
})

const Master = mongoose.model("Master",MasterSchema);
module.exports = Master;