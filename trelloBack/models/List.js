const mongoose = require("mongoose");

listSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    position:Number,
    cards:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card"
    }]
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = mongoose.model("List", listSchema);