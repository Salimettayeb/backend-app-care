var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var medfolderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    filenumber: {
        type: String,
        required: true
    },
    personnalantecedents: {
        type: String,
        required: true
    },
    familyantecedent: {
        type: String,
        required: true
    },
    riskfactors:  {
        type: String, 
        required: true
    },
    notes:  {
        type: String, 
        required: true
    },
})



module.exports = mongoose.model('medfolder', medfolderSchema)