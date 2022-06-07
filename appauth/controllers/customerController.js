import CustomerModel from "../models/customer.js";

class CustomerController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await CustomerModel.find()
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default CustomerController;