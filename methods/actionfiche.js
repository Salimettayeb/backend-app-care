var Fiche = require('../models/fiche')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewFiche: function (req, res) {
        if ((!req.body.filenbre) || 
            (!req.body.firstname) || (!req.body.lastname) || (!req.body.dateOfBirth) ||
            (!req.body.age) || (!req.body.profession) || (!req.body.valueChoose) ||
             (!req.body.childChosed) || (!req.body.phonenumber) (!req.body.email) ||
         (!req.body.address) || (!req.body.cityChosed)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newFiche = Fiche({
                filenumbre: req.body.filenbre,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                dateOfBirth: req.body.dateOfBirth,
                age: req.body.age,
                profession: req.body.profession,
                valueChoose: req.body.valueChoose,
                childChosed: req.body.childChosed,
                phonenumber: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                cityChosed: req.body.cityChosed,
                
            });
            newFiche.save(function (err, newFiche) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
       
    }}
    module.exports = functions