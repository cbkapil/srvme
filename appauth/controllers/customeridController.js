import CustomerModel from "../models/customer.js";

class CustomerIdController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await CustomerModel.findById(req.params.id)
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default CustomerIdController;