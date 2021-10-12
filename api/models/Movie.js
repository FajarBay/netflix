const { Mongoose } = require("mongoose");

const MovieSchema = new Mongoose.Schema({
    title: {type:String, require:true, unique: true},
    desc: {type: String},
    img: {type:String},
    imgTitle: {type:String},
    imgSm : {type: String},
    trailer : {type: String},
    video : {type: String},
    year : {type: String},
    limit : {type: Number},
    genre : {type: String},
    isSeries : {type: Boolean, default: false},
    },
    {timestamps: true}
);

module.exports = Mongoose.model('Movie', MovieSchema)