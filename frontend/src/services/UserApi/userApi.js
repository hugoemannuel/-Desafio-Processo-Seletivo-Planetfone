import { API } from "../API";

// Função responsável por fazer o get dos dados tratados pelo back end
const getAll = async () => {
  try {
    const { data } = await API.get("/users");
    return data
  } catch (error) {
    return error
  }
};

export const userService = {
  getAll,
}