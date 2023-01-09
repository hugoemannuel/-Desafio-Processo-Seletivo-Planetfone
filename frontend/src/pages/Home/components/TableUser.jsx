import React, {useMemo} from "react";
import './styles/styles.css'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead ,
  TableRow,
  Paper,
  Typography
} from '@mui/material';

const TableUser = ({data}) => {

// função com o hook useMemo para gerar as linhas da tabela quando o data existir
  const rows = useMemo(() => {
    if (data) {
      return data.map(({email, id, name, username}) => ({
          email,
          id,
          name,
          username,
        }))
    }
    return []

  }, [data])

  console.log('***rows', rows.length)


// componente de tabela criado com a lib Material UI
  return (
    <TableContainer className="Table-container" component={Paper}>
      <Table className="Table" sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.length > 0 ? rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          )):
          <TableRow>
            <Typography>Não foi possível Obter os dados dos Usuários</Typography>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableUser;