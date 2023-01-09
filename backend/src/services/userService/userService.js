const API = require('../../utils/api/API');

const getAllUser = async () => {
  try {
    const response = await API.getAllUser();
  
    // Função criada para filtrar dados dos usuários para retornar somente id, name, username e email ordenado pelo nome do usuário
    const filterData = response.slice(0, 5).sort((a, b) => {
      if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }).map(({id, name, username, email}) => ({id, name, username, email}));

    return {
      data: filterData,
      status: 200,
    };
  
  } catch (error) {
    return {
      data: undefined,
      status: 404,
    };
  }
}

const userService = {getAllUser}

module.exports = userService;