import HoldModel from "../models/hold.js";

class HoldController {
    static createDoc = async (req, res) => {
      try {
        const {reason,duration,date,time} = req.body
        const doc =new HoldModel({
            reason:reason,
            duration:duration,
            date:date,
            time:time
        })
        const result = await doc.save()
        res.status(201).send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default HoldController;