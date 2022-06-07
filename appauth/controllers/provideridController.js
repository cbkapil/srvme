import ProviderModel from "../models/provider.js";

class ProviderIdController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await ProviderModel.findById(req.params.id)
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default ProviderIdController;