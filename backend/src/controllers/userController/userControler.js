const userService = require('../../services/userService/userService');

// função responsável por enviar os dados do usuário
const getAllUser = async (_req, res) => {
  try {
    const { data, status } = await userService.getAllUser();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(404).json({message: error});
  }
};
const userControler = {getAllUser};

module.exports = userControler