import { UserModal } from "./user.model.js";
import jwt from 'jsonwebtoken';
export class UserController{

    signUp(req,res){
        const {name,email,password,type} = req.body;
        const user = UserModal.signUp(name,email,password,type);
        res.status(201).send(user);
    }

    signIn(req,res){
        const {email, password} = req.body;
       
        const user = UserModal.signIn(email,password);
        if(!user){
           return res.status(400).send("incorrect credential")
        }else{
            // create token
            const token = jwt.sign({email:user.email},"secretkey",{expiresIn:'1h'})
            res.status(200).send(token);
        }
    }
}