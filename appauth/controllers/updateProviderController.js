import ProviderModel from "../models/provider.js";

class UpdateProviderController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await ProviderModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default UpdateProviderController;