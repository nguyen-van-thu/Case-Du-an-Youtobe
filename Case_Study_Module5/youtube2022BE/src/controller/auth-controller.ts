import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { User } from "../model/user";
import { SECRET_KEY } from "../middleware/auth";


class AuthController {
    register = async (req, res) => {
        let user = req.body;
        let checkUsername = await User.findOne({
            familyName: user.familyName
        });
        if (checkUsername) {
            res.status(403).error({
                error: 'Tài khoản đã tồn tại!'
            });
            
        }else {
                user.password = await bcrypt.hash(user.password, 9);
                user = await User.create(user);
                res.status(201).json(user);
            }
    };

    async login(req, res) {
        let userForm = req.body;        
        let user = await User.findOne({
            familyName: userForm.familyName
        });
        if(!user) {
            res.status(401).json({
                message: 'tài khoản không tồn tại!'
            })
        }else {
            let comparePassword = await bcrypt.compare(userForm.password, user.password);
            if (!comparePassword) {
                res.status(401).json({
                    message: 'Password is wrong'
                })
            } else {
                let payload = {
                    familyName: user.familyName,
                    idUser: user._id
                }
                let token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: 36000
                });
                res.status(200).json({
                    token: token,
                    idUser: user._id
                });
            }
        }
    }

}
export default new AuthController();