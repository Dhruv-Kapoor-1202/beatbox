import User from "../models/user.js";
import bcrypt from bcryptjs;
import { getToken } from "../utils/helpers.js";

export const registerCtrl = async (req, res) => {
  try {
    const {email, password, firstName, lastName, username} = req.body;
    const user = await User.findOne({email: email});
    if (user) {
      return res.status(403).send({
        message: "Account with this email already exists"
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData = {
      email, 
      password: hashedPassword,
      firstName,
      lastName,
      username
    }

    const newUser = await User.create(newUserData);

    const token = await getToken(email, newUser);

    const userToReturn = {...newUser.toJSON(), token};
    return res.status(200).json(userToReturn)
  } catch (error) {
    res.status(500).send({
      message: "Error while Registering",
      error
    })
  }
}

export const loginCtrl = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});   
    if(!user){
      return res.status(403).json({err: "Invalid Credentials"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(403).json({err: "Invalid Credentials"});
    }

    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(), token};

    return res.status(202).json(userToReturn);
  } catch (error) {
    res.status(500).send({
      message: "Error while Logging In",
      error
    })
  }
}