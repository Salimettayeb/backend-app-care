const express = require('express')
const actions = require('../methods/actions')
const doctoraction = require('../methods/doctoraction')
const secretaireaction = require('../methods/secretaireaction')
const actionfiche = require('../methods/actionfiche')
const actionconsultation =require('../methods/actionconsultation')
const actionappoinment =require('../methods/actionappoinment')
const actionmedfolder =require('../methods/actionmedfolder')
const actioncontact = require ('../methods/actioncontact')
const actionrendezvous = require ('../methods/actionrendezvous')
const actiondailyrecip = require ('../methods/actiondailyrecip')
const actioncabinetrecip = require ('../methods/actioncabinetrecip')


const router = express.Router()

const jwt = require('jsonwebtoken');
const config = require('../config/dbconfig')



const doctorAuth = (req,res,next)=>{
    const token = req.headers["authorization"].split(' ')[1];
    jwt.verify(token, config.secret, (err, doctor) => {
        if (err) {
            return res.status(403);
        }
        req.payload = doctor;
        next();
    });  
    };
    const userAuth = (req,res,next)=>{
        const token = req.headers["authorization"].split(' ')[1];
        jwt.verify(token, config.secret, (err, user) => {
            if (err) {
                return res.status(403);
            }
            req.payload = user;
            next();
        });  
        };

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})
router.get('/doctor', (req, res) => {
    res.send('doctor')
})
router.get('/secretaire', (req, res) => {
    res.send('Secretaire')
}) 
router.get('/fichepatient', (req, res) => {
    res.send('fichepatient')
})
router.get('/consultations', (req, res) => {
    res.send('consultations')
})
router.get('/appoinments', (req, res) => {
    res.send('appoinments')
})
router.get('/medicalfolders', (req, res) => {
    res.send('medicalfolders')
})
router.get('/contact', (req, res) => {
    res.send('contact')
})
router.get('/rendezvous', (req, res) => {
    res.send('rendezvous')
})
router.get('/dailyrecip', (req, res) => {
    res.send('dailyrecip')
})
//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc Get info on a user
//@route GET /getinfo
router.get('/getinfo', actions.getinfo)


//Doctor

//@desc Adding new doctor
//@route POST /adddoctor
router.post('/doctor/adddoctor', doctoraction.addNewDoctor)

//@desc Authenticate a doctor
//@route POST /authenticate
router.post('/doctor/authenticatedoctor', doctoraction.authenticateDoctor)

//@desc Get info on a doctor
//@route GET /getinfo
router.get('/doctor/getinfodoctor', doctoraction.getinfoDoctor)


//Secretaire

//@desc Adding new secretaire
//@route POST /adddoctor
router.post('/secretaire/addsecretaire', secretaireaction.addNewSecretaire)

//@desc Authenticate a secretaire
//@route POST /authenticate
router.post('/secretaire/authenticatesecretaire', secretaireaction.authenticateSecretaire)

//@desc Get info on a secretaire
//@route GET /getinfo
router.get('/secretaire/getinfosecretaire', secretaireaction.getinfoSecretaire)


//Add new fiche patient 
router.post('/fichepatient/addnewfiche', actionfiche.addNewFiche)

//get info patient
router.get('/fichepatient/getinfofiche', doctorAuth, actionfiche.getinfoFiche)





//Add new consultation 
router.post('/consultation/addnewconsultation', actionconsultation.addNewConsultation)


//get info consultation
router.get('/consultation/getinfoconsultation', doctorAuth, actionconsultation.getinfoConsultation)

//add new appoinment 
router.post('/appoinment/addnewappoinment', actionappoinment.addNewAppoinment)

//get info appoinments 

router.get('/appoinment/getinfo', doctorAuth, actionappoinment.getinfoAppoinment)


//add new contact 
router.post('/contact/addnewcontact', actioncontact.addNewContact)


//get info contact
router.get('/contact/getinfocontact', doctorAuth, actioncontact.getinfoContact)



//add new medical folder
router.post('/medicalfolder/addnewmedfolder', actionmedfolder.addNewMedFolder)

//get info medical folder
router.get('/medicalfolder/getinfomedicalfolder', doctorAuth, actionmedfolder.getinfoMedFolder)

 //Add new consultation 
router.post('/rendezvous/addnewrendezvous', actionrendezvous.addNewRendezvous)

//Add new consultation 
router.get('/rendezvous/getinforendezvous', userAuth, actionrendezvous.getinfoRendezvous)

router.get('/rendezvous/getinforendezvousdoctor', doctorAuth, actionrendezvous.getinfoRendezvousdoctor)
router.put('/rendezvous/updatestatus', doctorAuth, actionrendezvous.updateRdvStatus)
router.post('/rendezvous/getinforendezvousdoctorbystatus', doctorAuth, actionrendezvous.getRdvByStatus)



 //Add new dailyrecip 
 router.post('/dailyrecip/adddailyrecip', actiondailyrecip.addNewDailyrecip)


 //get dailyrecip 
 router.get('/dailyrecip/getinfodailyrecipdoctor', doctorAuth, actiondailyrecip.getinfoDailyrecip)



 //Add new dailyrecip 
 router.post('/cabinetexp/addcabinetexp', actioncabinetrecip.addNewCabinetrecip)


 //get dailyrecip 
 router.get('/cabinetexp/getinfocabinetexpdoctor', doctorAuth, actioncabinetrecip.getinfoCabinetrecip)


module.exports = router
