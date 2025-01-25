import { generateToken, verifyToken } from "authenticator";
import {Router} from "express"

const router: Router = Router();

router.post("/signup",(req,res)=>{
    const phoneNumber = req.body.phoneNumber;
   const totp =  generateToken(phoneNumber + "SIGNUP");
   res.json({
      id:"1"    
   })
});
router.post("/signup",(req,res)=>{
    const phoneNumber = req.body.phoneNumber;
    if(!verifyToken(phoneNumber + "SIGNUP", req.body.otp)){
        res.json({
            messgae:"Invalid token"
        })
        return
    }
// set user to verified to DB

});

export default router