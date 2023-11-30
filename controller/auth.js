const bcrypt = require('bcrypt');
const models = require('../utils/allModels');

exports.authController = async (req, res) => {
    try {
        const { emailId, password } = req.body;

        // check if user exists
        const user = await models.Users_Model.findOne({ where: { emailId } });

        // if user exists, check if password is correct
        if (user) {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (isPasswordCorrect) {
                // const token = jwt.sign({ emailId }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                res.status(200).json({ message: 'Login success' });
            } else {
                res.status(401).json({ message: 'Password is incorrect' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.signUpController = async (req, res) => {
    try {
        let { name, emailId, password } = req.body;
        
        // check if user already exists
        const user = await models.Users_Model.findOne({ where: { emailId } });

        // if user already exists, send error response
        if (user) {
            res.status(409).json({ message: 'User already exists' });
        } else {
            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create new user
            const addUser = await models.Users_Model.create({ name, emailId, password: hashedPassword });

            if(!addUser) {
                return res.status(400).json({ message: 'User not created' });
            };

            // send success response
            return res.status(201).json({ message: 'User created successfully' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error, message: 'Internal server error' });
    }
}