import express from 'express';
import ProviderController from '../controllers/providerController.js';
import CustomerController from '../controllers/customerController.js';
import CustomerIdController from "../controllers/customeridController.js" 
import HoldController from '../controllers/holdController.js';
import UpdateProviderController from "../controllers/updateProviderController.js"
import ProviderIdController from '../controllers/provideridController.js';
import LoginController from '../controllers/loginController.js';
import serviceController from '../controllers/serviceController.js';
const router = express.Router();

router.get('/provider', ProviderController.getAllDoc)
router.get('/provider/:id', ProviderIdController.getAllDoc)
router.post('/login', LoginController.userLogin)
router.get('/customer', CustomerController.getAllDoc)
router.get('/customer/:id', CustomerIdController.getAllDoc)
router.post('/hold', HoldController.createDoc)
router.put('/provider/:id', UpdateProviderController.getAllDoc)
router.get('/services', serviceController.getAllServices)



export default router