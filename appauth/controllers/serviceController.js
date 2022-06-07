import ServiceModel from "../models/ServiceSchema.js";

class serviceController {
    static getAllServices = async (req, res) => {
      try {
        const result = await ServiceModel.find()
         res.header("Access-Control-Allow-Origin", "*")
         res.header( "Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
         res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length")
        res.send(result)
        
      
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default serviceController;