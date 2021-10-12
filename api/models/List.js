const { Mongoose } = require("mongoose");

const ListSchema = new Mongoose.Schema({
    title: {type:String, require:true, unique: true},
    type: {type: String},
    genre : {type: String},
    content : {type: Array},
    },
    {timestamps: true}
);

module.exports = Mongoose.model('List', ListSchema)