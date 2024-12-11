import data from "../models/dataModel.js";
import user from "../models/userModel.js";



const addData = async (req, res) => {
    const userData = new data(req.body);
    console.log(`userData in node ${userData}`);
 
const { User } = userData;
console.log(`ID for add data ${User}`);
const isprasent = await user.findOne(User);
if(isprasent){
console.log(`ID is prasent : ${User}`)
}
        const savedUser = await userData.save();
        console.log("data saved successfully...")

}


const getAllData = async (req, res) => {
    try {
        const users = await data.find();
        console.log(`allData ${data}`)
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ "msg": "something went wrong..." });
    }

}



export { addData , getAllData}