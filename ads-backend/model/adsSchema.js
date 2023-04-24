const mongoose = require('mongoose');

//creating scema and validation for adding data to DB
const adsSchema= new mongoose.Schema({
    companyId:{
        type:Number,
        required:true,
        unique:true
    },
    primaryText:{
        type:String,
        required:true,
    },
    headline:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    CTA:{
        type:String,
    },
    imageUrl:{
        type:String,
    },
});


// adsSchema.methods.saveMessage = async function(msg){
//     try {
//         this.messages= this.messages.concat(msg);
//         const res= await this.save();
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// }

const Ads = mongoose.model("AdsDescription",adsSchema,'adsDescription');

module.exports = Ads