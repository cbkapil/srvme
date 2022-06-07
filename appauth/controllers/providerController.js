import ProviderModel from "../models/provider.js";

class ProviderController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await ProviderModel.find()
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default ProviderController;