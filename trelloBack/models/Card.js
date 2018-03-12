const mongoose = require("mongoose");

cardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    position:Number,
    list:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"List"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = mongoose.model("Card", cardSchema);