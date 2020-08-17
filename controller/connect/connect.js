const dao = require('../../dao/connect/connect');
const userModal = require('../../models/user.model')

module.exports.connect = async (req, res)=> {   
    try {

        const getData =  await userModal.find()
        res.json(getData);
        console.log("......comming",req.body);
      
         }
    catch (error) {
        res.send("Error.."+error)
        }
}