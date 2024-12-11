import user from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



const createUser = async (req, res) => {
    const userData = new user(req.body);
    console.log(`userData in node ${userData}`);
    try {
        const { email } = userData;


        const userExist = await user.findOne({ email });

        if (userExist) {
            console.log("user exist...")
            return res.Status(400).json({ error: "user already exixt with this email..." });
        }

    //    { // hashing the password for security perpose
    //     // const salt = await bcrypt.genSalt(10);
    //     // console.log(`salt ${salt}`);
    //     // userData.password = await bcrypt.hash(userData.password,salt);
    //     // console.log(`hashed password ${password.userData}`);}

        const savedUser = await userData.save();
        console.log("user saved successfully...")
         console.log(savedUser.id);
       
       
        const token = jwt.sign({ userId: savedUser._id, email: savedUser.email }, 'gopalRaut', { expiresIn: '2h' });
        console.log(`token ${token}`);
        res.status(200).json({savedUser : savedUser._id, token : token , id : savedUser.id})
    
    
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error... " })
    }


}


const getAllUser = async (req, res) => {
    try {
        const users = await user.find();
        console.log(`userData ${users}`)
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ "msg": "something went wrong..." });
    }

}

const deleteUser = async (req, res) => {

    //const userData = await user.findByIdAndDelete(req.params.id);
    try {
        const id = req.params.id;
        console.log(`Received ID: ${id}`);

        const findUser = await user.findOne({ _id: id })
        if (!findUser) {
            return res.status(404).json({ message: " User Not Found. " })
        }
        await user.findByIdAndDelete(id);
        res.status(201).json({ message: " User deleted Successfully." })

    } catch (error) {
        console.log("error occurs...")
        console.log(error);
    }

}

const updateUser = async (req, res) => {

    try {
        // const userData = new user(req.body);
        const { _id, ...userData } = req.body;

        console.log(userData)
        const id = req.params.id;
        const { email } = userData;
        console.log(`Received ID: ${id}`);
        console.log(`Received DATA: ${email}`);
        const updatedUser = await user.findByIdAndUpdate(id, userData, { new: true });
        console.log(updatedUser)
        res.sendStatus(200).json(updatedUser)

    } catch (error) {
        console.log(error)
    }

}

































export { createUser, deleteUser, getAllUser, updateUser }
//module.exports = { createUser };