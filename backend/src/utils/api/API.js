const axios = require('axios').default;

// Função responsável por fazer o get dos dados da api já existente
const getAllUser = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data
  } catch (error) {
    return error
  }
}

const API = {getAllUser}

module.exports = API;