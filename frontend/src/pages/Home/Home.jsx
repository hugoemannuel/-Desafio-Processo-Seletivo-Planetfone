import React, {useEffect, useState, useCallback} from "react";
import { userService } from '../../services/UserApi/userApi'
import TableUser from "./components/TableUser";

const Home = () => {
  const [data, setData] = useState([]);

// função responsável pela busca dos dados do back end
  const getAll = useCallback(async() => {
    try {
      const response = await userService.getAll();
      setData(response)
    } catch (error) {
      return error
    }
  }, [])

// hook responsável por fazer o get dos dados do usuário quando a pagina for carregada
  useEffect(() => {
    getAll();
  }, [getAll])


  return (
    <TableUser data={data}/>
  )
}

export default Home;