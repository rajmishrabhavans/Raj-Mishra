const mongoose = require('mongoose');

//creating scema and validation for adding data to DB
const companySchema= new mongoose.Schema({
    companyId:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    }
});


// companySchema.methods.saveMessage = async function(msg){
//     try {
//         this.messages= this.messages.concat(msg);
//         const res= await this.save();
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// }

const Company = mongoose.model("CompanyInfo",companySchema,'companyInfo');

module.exports = Company