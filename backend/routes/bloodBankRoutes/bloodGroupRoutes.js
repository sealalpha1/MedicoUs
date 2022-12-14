const bloodGroupController = require('../../controllers/bloodBankController/bloodGroupController');
const express = require('express');
const bloodGroupRouter = express.Router();

bloodGroupRouter.post('/bloodGroupAddition', bloodGroupController.addbloodGroup);
bloodGroupRouter.put(('/:id'),bloodGroupController.updatebloodGroupDetails);
bloodGroupRouter.get('/:id', bloodGroupController.getbloodGroupById);
bloodGroupRouter.get('/', bloodGroupController.getbloodGroup);
bloodGroupRouter.post('/getData', bloodGroupController.getDataFilterBybloodBankId);
// bloodGroupRouter.post('/BybloodType', bloodGroupController.getDataFilterBybloodGroup);
bloodGroupRouter.delete('/:id', bloodGroupController.deletebloodGroup);
module.exports = bloodGroupRouter


