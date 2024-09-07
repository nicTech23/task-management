const bcryptjs = require("bcryptjs");
const User = require("../model/user_schema");
const { hashhass_password } = require("../utils/hass_password");
const { generate_token } = require("../utils/generate_token");

exports.register = async (req, res) =>{
    
    const { username, email, password, contact } = await req.body;

    try {
        const find_user = await User.findOne({ email })
        
        if (find_user) throw new Error("User already exists")
        
        const hassed_password = await hashhass_password(password)
        
        if (!hassed_password) throw new Error("Password not hash")
        
        const new_user = await User.create({ username, email, contact, password: hassed_password })
        
        if (!new_user) throw new Error("User registeration fails")
        
        res.status(200).json({message: "Registration successfull"})
        
    } catch (error) {
        return res.status(504).json({error: error.message})
    }

}

exports.login =async (req, res) => {
  const { email, password } = req.body;
    const date = new Date("2024-02-20T10:10:00")
    console.log(date)
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = bcryptjs.compareSync(password, user.password);
      
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = { userId: user._id };

   const token = await generate_token(payload)
   
    res.status(200).json({ token });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};