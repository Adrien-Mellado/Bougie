const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String , required : true , unique : true },
    password : { type : String ,required :true },
});

module.exports = mongoose.model ('User', userSchema) ;


 // Securiser le mot de pass de l'utilisateur // 
 userSchema.pre("save" , async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash (this.password, salt);
    next();
 });