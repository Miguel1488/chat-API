const UserServices = require('../services/user.services');

const obtainUser = async (req, res) => {
    try {
        const user = await UserServices.findUser()
        res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}
const createUser = async (req, res) => {
    try {
        const newUser = req.body;

        const result = await UserServices.create(newUser);

        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error)
    }
};


const historial = async (req, res) => {
    try {
        const { id } = req.params;
        const historialConversations = await UserServices.findConversations(id)
        res.json(historialConversations);
    } catch (error) {
        res.status(400).json(error)
    }
}
// const updateUser = async (req, res) => {
//     try {

//         const { id } = req.params;

//         const { name, lastname } = req.body;

//         await UserServices.update(id, { name, lastname });
//         res.status(204).send();
//     } catch (error) {
//         res.status(400).json(error);
//     }
// };



module.exports = {
    obtainUser,
    createUser,
    historial,
};