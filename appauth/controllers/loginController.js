import ProviderModel from "../models/provider.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class LoginController {
    static userLogin = async (req, res) => {
      ProviderModel.find({username:req.body.username})
      .exec()
      .then(user=>{
        if(ProviderModel.length<1){
          return res.status(401).json({msg:'user not found'})
        }
        bcrypt.compare(res.body.password,user[0].password,(err,result)=>{
          if(!result)
          {
            return res.status(401).json({
              msg:'password matching fail'
            })
          }
          if(result){
            const token =jwt.sign({
              username:user[0].username
            },
            'this is dummy text',
            {
              expiresIn:"24h"
            }
            );
            res.status(200).json({
              username:user[0].username,
              token:token
            })
          }
          
        })
      }
        )
        .catch(err=>{
          res.status(500).json({
            err:err
          })
        })
      }

}

export default LoginController;