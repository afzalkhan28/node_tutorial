const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:['hot','cold','sour'],
        required:true,
    }

})

const menuItem = mongoose.model('menuItem',menuItemSchema);
module.exports=menuItem;